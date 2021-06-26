import {gemPackageService} from "../../../services/gem-package/gem-package.service";
import {alertService} from "../../../services/alert/alert.service";

export default {
    data: () => {
        return {
            data: {
                status_option_id: 1
            },
            is_new: true,
            errors: []
        }
    },
    async mounted() {


        if (this.$route.params.id) {
            this.show(this.$route.params.id);
            this.is_new = false;
        }

    },
    methods: {

        async store() {
            const cb = async () => {
                const response = await gemPackageService.store(this.data);
                if (response.code == 422) {
                    this.errors = response.errors;
                }else{
                    this.data = {
                        status_option_id: 1
                    };
                    alertService.successWithMessage('Success','Gem Package created successfully.');
                    this.$router.go(-1);
                }
            }
            alertService.withConfirmation(cb,'Are you sure you want to add this record?');

        },
        async update() {
            const cb = async () => {
                const response = await gemPackageService.update(this.$route.params.id, this.data);
                if (response.code == 422) {
                    this.errors = response.errors;
                }else{
                    this.data = {
                        status_option_id: 1
                    };
                    alertService.successWithMessage('Success','Record Successfully Updated.');
                    this.$router.go(-1);
                }
            }
            alertService.withConfirmation(cb,'Are you sure you want to update this record?');
        },
        async show(id) {
            this.data = await gemPackageService.show(id);
        },
        isNumber(e) {
          if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            let amount = this.data.amount;
            amount = amount.substring(0, amount.length - 1)
            this.data.amount = amount;
          }
        }
    }

}
