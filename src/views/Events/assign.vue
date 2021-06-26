<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <strong>{{e_info.title}}</strong>
          </div>
          <div class="card-body">
            <form action>
              <div class="row">
                <div class="col-sm-12">
                  <label>List of booths</label>
                </div>
                
                <div class="col-sm-10">
                  <div class="form-group">
                    <select class="form-control" v-model="selected">
                      <option v-for="(booth, boothKey) in data" :key="boothKey" v-bind:value="{ id: booth.id}">{{booth.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                    <div class="form-group">
                      <button type="button" @click="addBooth" class="btn btn-success form-control float-right">Add</button>
                    </div>
                </div>
              </div>
              
            </form>
            <table class="table table-bordered mt-5">
              <thead>
                <tr>
                  <th>Booth/Exhibitor name</th>
                  <th>Controls</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(eb, ebkey) in events_booths.data" :key="ebkey">
                  <td style="vertical-align: middle;">{{eb.booth.name}}</td>
                  <td >
                      <button type="button" class="btn btn-danger" @click="removeBooth(eb.id, eb.booth.name)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <paginate
              v-if="page_count > 1"
              v-model="currentPage"
              :page-count="page_count"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'pagination'"
              :next-class="'page-link'"
              :prev-class="'page-link'"
              :page-class="'page-item'"
              :page-link-class="'page-link'"
              :click-handler="getEventBooths"
            ></paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
</script>
