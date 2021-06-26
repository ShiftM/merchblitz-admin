import Vue from "vue";
import CKEditor from "ckeditor4-vue";
import SubscriptionPlanService from "../../services/subscription-plan/subscription-plan.service";

const subscription_plan = new SubscriptionPlanService();
import AlertService from "../../services/alert/alert.service";

const alert = new AlertService();
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.use(CKEditor);
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

export default {
    data: () => {
        return {
            demo: [
            {
                options: {
                format: 'h:mm a',
                formatted: 'h:mm a',
                onlyTime: true,
                color: 'firebrick',
                minuteInterval: '15',
                label: 'Select time',
                id: 'TimePicker',
                noLabel: true,
                onlyDate: true,
                dateFormat: 'YYYY-MM-DD',
                dateFormatted: 'YYYY-MM-DD',
                title: 'Select date',
                }
            }
            ],
            active_id: "",
            data: {
                plan_name: '',
                period: '6',
                price: '',
                period_type: [
                    {id: 1, name: '6 Months', slug: '6'},
                    {id: 2, name: '1 Year', slug: '12'},
                    {id: 3, name: '2 Years', slug: '24'},
                ],
                item_points_cap: '',
                created_at: moment(new Date()).format("YYYY-MM-DD"),
                updated_at: moment(new Date()).format("YYYY-MM-DD"),
            },
            errors: {
                plan_name: '',
            }
        };
    },
    methods: {
        cancel() {
            this.$router.go(-1);
        },
        saveEvent() {
            //checker if update or store
            if (this.$route.params.id) {
                this.updateEvent();
            } else {
                this.storeEvent();
            }
        },
        storeEvent() {
        if(!this.validateMainForm()){
            return false;
        }
        const cb = async () => {
            const response = await subscription_plan.store(this.data);

            if (response.error == 402) {
                this.$swal("Error!", "Subscription plan already taken.", "error");
                this.errors.plan_name = "Field required.";
                return
            }
            if (response.error == 422) {
                this.errors = response.errors;
                return
            }else{
                this.data = {
                    status_option_id: 1
                };
                alert.successWithMessage('Success','Subscription plan created successfully.');
                this.$router.go(-1);
            }
        }
        alert.withConfirmation(cb,'Are you sure you want to add this subscription plan?');
        },
        updateEvent() {
        // this.convertTimeToDateTime(this.data.eventDays);
        return subscription_plan.update(this.data, this.$route.params.id).then(success => {
            this.$swal(
                {
                title: "Success!",
                icon: "success",
                text: "Data has been updated!",
                type: "success",
                allowOutsideClick: false
                })
                .then(response => {
                    this.$router.go(-1);
                });
            },
            fail => {
            this.errors = fail.errors;
            this.$swal("Error!", "Please fill up all required fields.", "error");
            })
        },
        getEventInfo() {
        var id = this.$route.params.id;
            return subscription_plan.show(id).then(success => {
                this.data = success;
                this.data.period_type = [
                    {id: 1, name: '6 Months', slug: '6'},
                    {id: 2, name: '1 Year', slug: '12'},
                    {id: 3, name: '2 Years', slug: '24'},
                ]
            })
        },
        validateMainForm(){
            this.errors = {}
            var err = 0
            if(!this.data.plan_name){
                this.errors.plan_name = "Field required.";
                err++;
            }
            if(!this.data.price){
                this.errors.price = "Field required.";
                err++;
            }
            if(!this.data.item_points_cap){
                this.errors.item_points_cap = "Field required.";
                err++;
            }
            return err > 0? false : true;
        },
    },

    mounted() {
        if (this.$route.params.id) {
            this.getEventInfo();
        }
    }
};