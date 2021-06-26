<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <div class="row h-100 align-items-center">
              <div class="col-6">
                <i class="icon-grid"></i> Events
              </div>
              <div class="col-6 text-right">
                <router-link :to="{name: 'EventsCrud' }">
                  <button type="button" class="btn btn-success">
                    <i class="fa fa-plus"></i>&nbsp; Add Event
                  </button>
                </router-link>
              </div>
            </div>
          </div>

          <div class="card-body table-responsive">

            <div class="row mb-3">
              <div class="col-4">
                <input type="text" class="form-control dp-height-custom" v-model="filter" placeholder="Organizer, Title"
                       @keyup="getFilterEvents(filter)">
              </div>
              <div class="col-5">
                <div class="row">
                  <div class="col-6">
                    <VueCtkDateTimePicker v-model="date.from"
                                          :only-date="demo[0].options.onlyDate"
                                          :format="demo[0].options.dateFormat"
                                          :formatted="demo[0].options.dateFormatted"
                                          :label="demo[0].options.dateFrom"
                    />
                  </div>
                  <div class="col-6">
                    <VueCtkDateTimePicker v-model="date.to"
                                          :only-date="demo[0].options.onlyDate"
                                          :format="demo[0].options.dateFormat"
                                          :formatted="demo[0].options.dateFormatted"
                                          :label="demo[0].options.dateTo"
                    />
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-primary form-control dp-height-custom text-capitalize"
                            :disabled="date.from == null || date.to == null"
                            @click="getFilterEvents(date.from, date.to)">search
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-danger form-control dp-height-custom text-capitalize" @click="clearFilter()">
                      clear
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <table class="table table-bordered">
              <thead>
              <tr>
                <th>Organizer</th>
                <th>Title</th>
                <th>Date</th>
                <th>Controls</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="mod in modify">
                <td>{{mod.name}}</td>
                <td>{{mod.title}}</td>
                <td>{{mod.startDate}}</td>
                <td>
                  <router-link :to="{ name: 'BoothAssign', params: { id: mod.id }}">Assign Booth</router-link>
                  |
                  <router-link :to="{ name: 'EventEdit', params: { id: mod.id }}">Edit</router-link>
                  | <a href="javascript:void(0)"
                       @click="changeStatus(mod.id, mod.title, mod.deletedAt ? 'activate' : 'deactivate')">{{
                  mod.deletedAt ? 'Activate' : 'Deactivate'}}</a></td>
              </tr>
              </tbody>
            </table>
            <p v-if="modify.length == 0" class="text-center">
              <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records found
            </p>

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
              :click-handler="getEvents"
            ></paginate>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import EventService from "../../services/event/event.service";

  const event = new EventService();

  import moment from "moment";
  import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
  import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

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
              dateFrom: 'From',
              dateTo: 'To',
            }
          }
        ],
        data: {
          data: []
        },
        date: {},
        filter: '',
        page_count: 0,
        currentPage: 1,
        search: ''

      }
    },

    methods: {
      getEvents() {
        if (this.search) {
          return event.listFilter(this.currentPage, this.search).then(success => {
            this.data = success.data.data;
            this.page_count = Math.ceil(this.data.total / this.data.perPage);
          })
        }
        // if(this.date.from != null && this.date.to != null){
        //   return event.listFilterDate(this.currentPage, this.date.from, this.date.to).then(success => {
        //   this.data = success.data.data;
        //   this.page_count = Math.ceil(this.data.total / this.data.perPage);
        //   })
        // }

        return event.list(this.currentPage).then(success => {
          this.data = success.data.data;
          this.page_count = Math.ceil(this.data.total / this.data.perPage);
        })
      },
      getFilterEvents() {
        this.currentPage = 1;
        if (this.filter) {
          this.search = '&filter=' + this.filter;
        }
        if (this.date.from != null && this.date.to != null) {
          this.search = '&from=' + this.date.from + '&to=' + this.date.to;
        }
        if (this.filter && this.date.from != null && this.date.to != null) {
          this.search = '&filter=' + this.filter + '&from=' + this.date.from + '&to=' + this.date.to;
        }

        this.getEvents();
      },
      // getFilterDateEvents() {
      //   this.currentPage = 1;
      //   this.getEvents();
      // },
      changeStatus(id, name, status) {
        this.$swal({
          title: 'Are you sure ',
          text: "You want to " + status + " " + name + '?',
          icon: 'warning',
          buttons: [
            'No',
            'Yes'
          ]
        }).then(response => {
          if (response) {
            return event.changeStatus(id).then(success => {
              // location.reload();
              this.getEvents();
            }, fail => {
              console.log(fail);
            })
          }
          else {
            this.$swal.close();
          }
        })
      },
      clearFilter() {
        this.search = '';
        this.date = {};
        this.filter = '';
        this.getEvents();
        this.currentPage = 1;
        // this.modify();
      }
    },
    mounted() {
      this.getEvents()
    },
    computed: {
      modify() {
        var data = [];
        this.data.data.forEach(function (val) {
          var date = new Date(val.startDate);
          val.startDate = date.toISOString().substring(0, 10);
          data.push(val);
        });
        return data;
      }
    }
  }
</script>
