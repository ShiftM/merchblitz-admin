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


        // return administrator.store(this.data).then(
        //     success => {
        //     this.$swal(
        //         {
        //         title: "Success!",
        //         icon: "success",
        //         text: "Successfully Saved!",
        //         type: "success",
        //         allowOutsideClick: false
        //         })
        //         .then(response => {
        //             location.href = '/admin-users';
        //         });

        //     },
        //     fail => {
        //     this.errors = fail.errors;
        //     this.$swal("Error!", "Please fill up all required fields.", "error");
        //     }
        // );
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
        uploadOrganizer(e) {
        var files = e.target.files[0];
        return administrator.uploadOrganizerLogo(files).then(success => {
            this.data.organizer.imageUrl = success.data.data.fullPath;
        });
        },

        uploadImages(e) {
        var selectedFiles = e.target.files;
        for (var a = 0; a < selectedFiles.length; a++) {
            administrator.uploadEventImages(selectedFiles[a]).then(success => {
            this.data.eventImages.push({
                "path": success.data.data.path,
                "fileName": success.data.data.fileName,
                "fullPath": success.data.data.fullPath
            });
            });

        }
        },

        removeOrganizerLogo() {
        this.data.organizer.imageUrl = '';
        const input = this.$refs.orgLogo;
        input.type = 'text';
        input.type = 'file';
        },

        removeImage(index) {
        this.data.eventImages.splice(index, 1);
        const img = this.$refs.eventImage;
        img.type = 'text';
        img.type = 'file';
        },

        getEventInfo() {
        var id = this.$route.params.id;
        return administrator.show(id).then(success => {
            // console.log(success);
            this.data = success;
            this.data.password = '';
            // this.convertIsoToDateTime(this.data);
            // console.log(this.data);
        })
        },
        validateMainForm(){
            this.errors = {}
            var err = 0
            if(!this.data.name){
                this.errors.name = "Field required.";
                err++;
            }
            if(!this.data.email){
                this.errors.email = "Field required.";
                err++;
            } else {
                // var result = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.data.email))) {
                    err++;
                    this.errors.email = "Invalid email.";
                }
            }
            if(!this.data.first_name){
                this.errors.first_name = "Field required.";
                err++;
            }
            if(!this.data.last_name){
                this.errors.last_name = "Field required.";
                err++;
            }
            // if(!this.data.number){
            //     this.errors.number = "Field required.";
            //     err++;
            // }
            if (this.data.password != this.data.password1) {
                this.errors.password = "Passwords dont match.";
                this.errors.password1 = "";
                err++;
            }

            if(!this.data.password){
                this.errors.password = "Field required.";
                err++;
            }
            if(!this.data.password1){
                this.errors.password1 = "Field required.";
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