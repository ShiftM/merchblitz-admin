import {alertService} from "../../services/alert/alert.service";
import {itemService} from "../../services/item/item.service";
import {debounce} from "debounce";
import {featuredItemService} from "../../services/featured-item/featured-item.service";

export default {
    data: () => {
        return {
            data: [],
            filter: {
                paginate: true,
                per_page: 10,
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
            this.data = await itemService.list(data);

        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async () => {
                await itemService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async restore(id) {

            var cb = async () => {
                var inputs = this.data.data.find(el => el.id == id);
                inputs.status_option_id = 1;
                await itemService.update(id, inputs);
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
            this.suggestions = await itemService.list(filter);
            this.filter.name = data.name;

        }, 800),
    }

}
