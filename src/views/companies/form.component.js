import Vue from "vue";
import CKEditor from "ckeditor4-vue";
import CompanyService from "../../services/company/company.service";

const company = new CompanyService();
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
            title: 'Select date'
            }
        }
        ],
        active_id: "",
        data: {
            name: '',
            logo: '',
            address: '',
            city: '',
            country: '',
            plan_package: '1',
            created_at: moment(new Date()).format("YYYY-MM-DD"),
            updated_at: moment(new Date()).format("YYYY-MM-DD"),
            image_url: '',
            link: '',
            email: [
                {
                    date: moment(new Date()).format("YYYY-MM-DD"),
                    title: "",
                }
            ],
        },
        info: {
            plan_package_type: []
        },
        errors: {
            email : []
        },
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
            const response = await company.store(this.data);

            if (response.error == 402) {
                this.$swal("Error!", "Company name already taken.", "error");
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
         alert.withConfirmation(cb,'Are you sure you want to add this company?');
        },
        updateEvent() {

        if(!this.validateMainForm()){
            return false;
        }

        const cb = async () => {
            const response = await company.update(this.data, this.$route.params.id);

            if (response.error == 402) {
                this.$swal("Error!", "Company name already taken.", "error");
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
        alert.withConfirmation(cb,'Are you sure you want to add this company?');
        },
        uploadOrganizer(e) {
        var files = e.target.files[0];
        return company.uploadOrganizerLogo(files).then(success => {
            this.data.organizer.imageUrl = success.data.data.fullPath;
        });
        },

        uploadImages(e) {
        var selectedFiles = e.target.files;
        for (var a = 0; a < selectedFiles.length; a++) {
            company.uploadEventImages(selectedFiles[a]).then(success => {
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
        return company.show(id).then(success => {
            success.email = JSON.parse(success.email);
            this.data = success;
        })
        },
        getSubscriptionPlans() {
            return company.listSubscriptionPlans().then(success => {
                this.info.plan_package_type = success.data;
            })
        },
        addMoreDomain() {
            this.data.email.push({
                date: moment(new Date()).format("YYYY-MM-DD"),
                title: "",
            });
            var key =  this.data.email.length - 1;
          this.moveDAy = '#day'+key;
          // $('#moveToAddDay a').click();
          setTimeout(()=>{
            var elmnt = document.getElementById('day'+key);
            elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
          },300);
        },
        removeDay(index) {
            this.data.email.splice(index, 1);
             //  setTimeout(()=>{
            var key =  this.data.email.length - 1;
            var elmnt = document.getElementById('day'+key);
            elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
            
          // },500);
        },
        validateMainForm(){
            this.errors = {}
            var err = 0
            if(!this.data.name){
                this.errors.name = "Field required.";
                err++;
            }
            if(this.data.email){
                this.errors.email = this.data.email.slice(0);
                for(var i = 0; i < this.data.email.length; i++) {
                    this.errors.email[i] = ''
                    if (this.data.email[i].title === '') {
                        this.errors.email[i] = ({
                            error : "Field required."
                        });
                        err++;
                    } else {
                        var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
                        if (!this.data.email[i].title.match(re)) {
                            this.errors.email[i] = ({
                                error : "Invalid domain name."
                            });
                            err++;
                        }
                    }
                }
            }

            if(!this.data.address){
                this.errors.address = "Field required.";
                err++;
            }

            if(!this.data.city){
                this.errors.city = "Field required.";
                err++;
            }
            if(!this.data.country){
                this.errors.country = "Field required.";
                err++;
            }
            if(!this.data.link){
                this.errors.link = "Field required.";
                err++;
            }
            // if(!this.data.imageUrl){
            //     this.errors.imageUrl = "Field required.";
            //     err++;
            // }
            return err > 0? false : true;
        }
    },
    mounted() {
        this.getSubscriptionPlans();
        if (this.$route.params.id) {
            this.getEventInfo();
        }
    }
};