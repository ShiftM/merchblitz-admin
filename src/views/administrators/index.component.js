import {alertService} from "../../services/alert/alert.service";
import {companyService} from "../../services/company/company.service";
import {administratorService} from "../../services/admin/administrator.service";

import {debounce} from "debounce";
import {featuredItemService} from "../../services/featured-item/featured-item.service";

export default {
    data: () => {
        return {
            data: [],
            filter: {
                paginate: true,
                per_page: 50,
                page: 1,
                status_option_id: 1,
                related_status_option_id: 1,
                with_related_models: true,
                order_by: 'DESC',
                order_by_key: 'id',
                has_featured: false
            },
            suggestions: {},
        }
    },
    async mounted() {

        await this.list(this.filter);
        this.data.data.map((val)=>{ 
            val.created_at = new Date(val.created_at).toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' })
            return val;
        })
        // console.log( administratorService.list(this.filter));

        await this.suggest({});

    },
    methods: {
        async test(value) {
            console.log(value);
        },
        async search(data) {

            this.filter = Object.assign(this.filter, data);
            await this.list(this.filter);
        },
        async list(data) {
            
        
            this.data  = await administratorService.list(data)

            // await administratorService.list(data);
        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async () => {
                await administratorService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async restore(id) {

            var cb = async () => {
                var inputs = this.data.data.find(el => el.id == id);
                inputs.status_option_id = 1;
                await administratorService.update(id, inputs);
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to restore this record?');
        },
        async clear() {
          this.filter.name  = '';
          this.search();
        },
        async set_featured$(data) {

            var cb = async () => {

                const response = await featuredItemService.store(data);
                if (response.code == 422) {

                    alertService.failWithMessage('Error', response.errors[0].detail);
                }
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to set this record as featured?');
        },

        async unset_featured$(id) {

            var cb = async () => {

                await featuredItemService.delete(id);
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to remove this record as featured?');
        },
        suggest: debounce(async function (data) {
            // this.filter.keyword = e.target.value;
            // this.filter.page = 1;
            // this.list(this.filter);
            var filter = {
                paginate: true,
                per_page: 10,
                status_option_id: this.filter.status_option_id,
                related_status_option_id: 1,
                with_related_models: true,
                order_by: 'ASC',
                order_by_key: 'name',
            };

            filter = Object.assign(filter, data);
            this.suggestions = await companyService.list(filter);
            this.filter.name = data.name;

        }, 800),
    }

}
