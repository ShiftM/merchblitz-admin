import Vue from "vue";
import CKEditor from "ckeditor4-vue";
import AdminService from "../../services/admin/administrator.service";

const administrator = new AdminService();
import AlertService from "../../services/alert/alert.service";

const alert = new AlertService();
import moment from "moment";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import VueTelInput from 'vue-tel-input'
import {recordService} from "../../services/record/record.service";

Vue.use(CKEditor);
Vue.use(VueTelInput)

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
            title: 'Select date'
            }
        }
        ],
        active_id: "",
        data: {
            name: '',
            email: '',
            first_name: '',
            last_name: '',
            gender: 'male',
            account_type: 'super-user',
            number: '',
            password: '',
        },
        images:[],
        info :{
            adminType: [
                {id: 1, name: 'Super User', slug: 'super-user'},
                {id: 2, name: 'Company User', slug: 'compoany-user'}
            ],  
            genderType: [
                {id: 1, name: 'Male', slug: 'male'},
                {id: 2, name: 'Female', slug: 'female'}
            ], 
        },
        errors: {},
        };
    },
    methods: {
        async getImages(data) {
            this.images  = await recordService.show(data)
        },

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
            const response = await administrator.store(this.data);

            if (response.error == 402) {
                this.$swal("Error!", "Administrator name already taken.", "error");
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
                alert.successWithMessage('Success','Admin user created successfully.');
                this.$router.go(-1);
            }
        }
        alert.withConfirmation(cb,'Are you sure you want to add this administrator?');
        },
        updateEvent() {
        // this.convertTimeToDateTime(this.data.eventDays);
        return administrator.update(this.data, this.$route.params.id).then(success => {
            this.$swal(
                {
                title: "Success!",
                icon: "success",
                text: "Data has been updated!",
                type: "success",
                allowOutsideClick: false
                })
                .then(response => {
                    location.href = '/admin-users';
                });
            },
            fail => {
            this.errors = fail.errors;
            this.$swal("Error!", "Please fill up all required fields.", "error");
            })

        },
    },
    async mounted() {
        // if (this.$route.params.id) {
        // this.getEventInfo();
        // }
        await this.getImages(this.$route.params.id);
        this.data = this.$route.params.data
    }
};