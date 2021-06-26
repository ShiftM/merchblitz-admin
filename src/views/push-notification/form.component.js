import {pushNotificationService} from "../../services/pushNotification/pushNotification.service";
import {alertService} from "../../services/alert/alert.service";

export default {
    data: () => {
        return {
            data: {},
            errors: []
        }
    },
    async mounted() {

    },
    methods: {
        async store() {
            const cb = async () => {
                const response = await pushNotificationService.store(this.data);
                if (response.code == 422) {
                    this.errors = response.errors;
                }else{
                    this.data = {
                        status_option_id: 1
                    };
                    alertService.successWithMessage('Success','Your message has been sent.');
                    this.$router.go(-1);
                }
            }
            alertService.withConfirmation(cb,'Are you sure? This will send your message to all app users. This can not be reverted once sent');

        },
        async show(id) {
            const response = await pushNotificationService.show(id);
            this.data = response;
        }
    }

}
