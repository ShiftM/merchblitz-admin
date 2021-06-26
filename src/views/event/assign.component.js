import Vue from "vue";
import VueTelInput from "vue-tel-input";
import EventService from "../../services/event/event.service";
import AlertService from "../../services/alert/alert.service";
const event = new EventService();
const alert = new AlertService();

Vue.use(VueTelInput);
export default {
  data: () => {
    return {
      data: [],
      events_booths: [],
      ev_booths: {},
      selected: 'Select Booth',
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
    getBooths() {
      return event.listBooths().then(success => {
        this.data = success.data.data;
      })
    },

    getEventBooths() {
      var id = this.$route.params.id;
      return event.listEventsBooths(id, this.currentPage).then(success => {
        // return console.log(success.data);
        this.events_booths = success.data.data;
        this.page_count = Math.ceil(this.events_booths.total / this.events_booths.perPage);
      })
    },
    addBooth() {
      
      this.ev_booths.eventId = this.$route.params.id;
      this.ev_booths.boothId = this.selected.id;
      return event.assignBooth(this.ev_booths).then(success => {
          this.events_booths = success.data.data;
          this.page_count = Math.ceil(this.events_booths.total / this.events_booths.perPage);
          alert.save();
      }, fail => {
          alert.errorWithMessage(fail.error.message);
      })
    },

    removeBooth(id, name) {

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
                return event.deleteBooth(b).then(success => {
                  this.events_booths = success.data.data;
                  this.page_count = Math.ceil(this.events_booths.total / this.events_booths.perPage);
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
    this.getBooths();
    this.getEventBooths();
  }
};