import Vue from "vue";
import VueTelInput from "vue-tel-input";
import EventService from "../../services/event/event.service";
import CompanyService from "../../services/company/company.service";

import AlertService from "../../services/alert/alert.service";
const event = new EventService();
const alert = new AlertService();
const company = new CompanyService();

Vue.use(VueTelInput);
export default {
  data: () => {
    return {
      data: [],
      events_company: [],
      ev_company: {},
      selected: 'Select Company',
      e_info: {},
      page_count: 0,
      currentPage: 1
    }
  },
  methods: {
    getEventInfo() {
      var id = this.$route.params.id;
      return event.info(id).then(success => {
        this.e_info = success.data.data;
      })
    },

    getCompanies() {
      return event.listCompanies().then(success => {
        this.data = success.data.data;
      })
    },
    getEventCompanies() {
      var id = this.$route.params.id;
      return event.listEventsCompanies(id, this.currentPage).then(success => {
        this.events_company = success.data.data;
        this.page_count = Math.ceil(this.events_company.total / this.events_company.perPage);
      })
    },
    addCompany() {
      
      this.ev_company.eventId = this.$route.params.id;
      this.ev_company.companyId = this.selected.id;
      return event.assignCompany(this.ev_company).then(success => {
          this.events_company = success.data.data;
          this.page_count = Math.ceil(this.events_company.total / this.events_company.perPage);
          alert.save();
      }, fail => {
          alert.errorWithMessage(fail.error.message);
      })
    },

    removeCompany(id, name) {

      this.$swal({title: 'Are you sure ',
      text: "You want to delete " + name + '?',
      icon: 'warning',
      buttons: [
            'No',
            'Yes'
          ]}).then(response => {
            if(response){
              var b = {
                  "id" : id,
                  "event_id" : this.$route.params.id
                };
                return event.deleteCompany(b).then(success => {
                  this.events_company = success.data.data;
                  this.page_count = Math.ceil(this.events_company.total / this.events_company.perPage);
                  alert.deleted();
                })
            }
            else{
              this.$swal.close();
            }
            
          })
     
    }
  },
  mounted() {
    this.getEventInfo();
    this.getCompanies();
    this.getEventCompanies();
    console.log(this.events_company);
    console.log(this.data);

  }
};