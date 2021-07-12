import {alertService} from "../../services/alert/alert.service";
import {locationService} from "../../services/location/location.service";

import provinces from "../../../public/img/provinces.json"


export default {
    data: () => {
        return {
            data: [],
            filter: {
                paginate: true,
                per_page: 20,
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
        // FORMAT DATA 

        // console.log(provinces)
        // console.log( administratorService.list(this.filter));
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
            this.data  = provinces 
            console.log(this.data)
        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async () => {
                await locationService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async restore(id) {

            var cb = async () => {
                var inputs = this.data.data.find(el => el.id == id);
                inputs.status_option_id = 1;
                await locationService.update(id, inputs);
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

                const response = await locationService.store(data);
                if (response.code == 422) {

                    alertService.failWithMessage('Error', response.errors[0].detail);
                }
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to set this record as featured?');
        },

        async unset_featured$(id) {

            var cb = async () => {

                await locationService.delete(id);
                this.list(this.filter);
            };

            alertService.withConfirmation(cb, 'Are you sure you want to remove this record as featured?');
        },

    }

}
