import {gemSettingService} from "../../../services/gem-setting/gem-setting.service";
import {alertService} from "../../../services/alert/alert.service";

export default {
    data: () => {
        return {
            data: {
                // status_option_id: 1
            },
            errors: []
        }
    },
    async mounted() {


        if (this.$route.params.id) {
            this.show(this.$route.params.id);
        }

    },
    methods: {
        async store() {
            const cb = async () => {
                const response = await gemSettingService.store(this.data);
                if (response.code == 422) {
                    this.errors = response.errors;
                }else{
                    this.data = {
                        status_option_id: 1
                    };
                    alertService.successWithMessage('Success','Record Successfully saved.');
                    this.$router.go(-1);
                }
            }
            alertService.withConfirmation(cb,'Are you sure you want to add this record?');

        },
        async update() {
            const cb = async () => {
                const response = await gemSettingService.update(this.$route.params.id, this.data);
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
            this.data = await gemSettingService.show(id);
            // console.log(this.data);
        }
    }

}
