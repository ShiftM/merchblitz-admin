import {interestOptionService} from "../../services/interest-option/interest-option.service";
import {alertService} from "../../services/alert/alert.service";

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
        this.data  = await interestOptionService.list(data);

      },
      async paginate(page) {
        this.filter.page = page;
        await this.list(this.filter);
      },
      async archive(id) {

        var cb = async ()  => {
          await interestOptionService.delete(id);
          this.list(this.filter);
        }

        alertService.withConfirmation(cb, 'Are you sure you want to delete this record?');
      },
      async restore(id) {

        var cb = async () => {
            var inputs = this.data.data.find(el => el.id == id);
            inputs.status_option_id = 1;
            await interestOptionService.update(id, inputs);
            this.list(this.filter);
        };

        alertService.withConfirmation(cb, 'Are you sure you want to restore this record?');
      },
    }

}
