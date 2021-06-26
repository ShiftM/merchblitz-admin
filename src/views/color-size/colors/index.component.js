import {colorOptionService} from "../../../services/color-option/color-option.service";
import {alertService} from "../../../services/alert/alert.service";

export default {
    data: () => {
        return {
            data: [],
            page_count: 100,
            filter: {
                paginate: true,
                per_page: 10,
                page: 1,
                status_option_id: 1
            }
        }
    },
    async mounted() {

        await this.list(this.filter);
        console.log(this.$route)

    },
    methods: {
        async search(data){

            this.filter = Object.assign(this.filter,data);
            await this.list(this.filter);
        },
        async list(data) {
            this.data  = await colorOptionService.list(data);

        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async ()  => {
                await colorOptionService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async restore(id) {

            var cb = async () => {
                var inputs = this.data.data.find(el => el.id == id);
                inputs.status_option_id = 1;
                await colorOptionService.update(id, inputs);
                this.list(this.filter);
            };
    
            alertService.withConfirmation(cb, 'Are you sure you want to restore this record?');
        },
    }

}
