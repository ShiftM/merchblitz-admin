import {gemPackageService} from "../../../services/gem-package/gem-package.service";
import {alertService} from "../../../services/alert/alert.service";
import {debounce} from "debounce";

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
            },
            suggestions: {},
        }
    },
    async mounted() {

      await this.list(this.filter);
      await this.suggest({});

    },
    methods: {
        async search(data){

            this.filter = Object.assign(this.filter,data);
            await this.list(this.filter);
        },
        async clear() {
          this.filter.name  = '';
          this.search();
        },
        async list(data) {
            this.data  = await gemPackageService.list(data);

        },
        async paginate(page) {
            this.filter.page = page;
            await this.list(this.filter);
        },
        async archive(id) {

            var cb = async ()  => {
                await gemPackageService.delete(id);
                this.list(this.filter);
            }

            alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
        },
        async restore(id) {

            var cb = async () => {
                var inputs = this.data.data.find(el => el.id == id);
                inputs.status_option_id = 1;
                await gemPackageService.update(id, inputs);
                this.list(this.filter);
            };
    
            alertService.withConfirmation(cb, 'Are you sure you want to restore this record?');
        },
        suggest: debounce(async function (data) {
          var filter = {
            paginate: true,
            per_page: 10,
            status_option_id: this.filter.status_option_id,
            related_status_option_id: 1,
            order_by: 'ASC',
            order_by_key: 'name',
          };

          filter = Object.assign(filter, data);
          this.suggestions = await gemPackageService.list(filter);
          this.filter.name = data.name;

        }, 800),
    }

}
