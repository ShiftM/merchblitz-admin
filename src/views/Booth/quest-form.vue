<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <strong>Quest</strong>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitQuest">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>List of Events</label>
                    <!--<select class="form-control" v-model="data.eventId"-->
                    <!--:class="{'error-border' : error && error.eventId}">-->
                    <!--<option v-for="(ebooth, eboothKey) in events_booths" :key="eboothKey"-->
                    <!--v-bind:value="ebooth.eventId">{{ebooth.event.title}}-->
                    <!--</option>-->
                    <!--</select>-->
                    <v-select v-model="eventSelected" :options="options" label="title" index="id" />
                    <span class="text-danger" v-if="error && error.eventId">{{error.eventId[0]}}</span>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <!-- <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <button type="button" class="btn btn-danger float-right ml-3"  @click="removeKeyQuest(vk)" v-if="qk !== 0">Remove Quest</button>
                        <button type="button" class="btn btn-success float-right " @click="addQuest">Add Quest</button>
                      </div>
                    </div>
                  </div> -->
                  <div>

                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <label>Title</label>
                          <input type="text" v-model="data.title" class="form-control"
                                 :class="{'error-border' : error && error.title}">
                          <span class="text-danger" v-if="error && error.title">{{error && error.title[0]}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <label>Description</label>
                          <!-- <input type="text" v-model="data.description" class="form-control" :class ="{'error-border' : error && error.description}"> -->
                          <textarea v-model="data.description" class="form-control"
                                    :class="{'error-border' : error && error.description}"
                                    style='white-space:pre-wrap'></textarea>
                          <span class="text-danger"
                                v-if="error && error.description">{{error && error.description[0]}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <label>Points</label>
                          <input type="text" v-model="data.points" patter="[0-9]" class="form-control"
                                 :class="{'error-border' : error && error.points}">
                          <span class="text-danger" v-if="error && error.points">{{error && error.points[0]}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          <div class="card-header">
            <div class="row h-100 align-items-center">
              <div class="col-6">
                 Remaining points: 500
              </div>
              <div class="col-6 text-right">
                <!-- <router-link :to="{name: 'BoothCrud' }"> -->
                <button :disabled="disableSaveButton" class="btn btn-success">Save Quest</button>

                <!-- </router-link> -->
              </div>
            </div>
          </div>
              <!-- <div class="col-12 text-right">
                <button :disabled="disableSaveButton" class="btn btn-success">Save Quest</button>
              </div> -->

            </form>
            <table class="table table-bordered mt-5">
              <thead>
              <tr>
                <th>Event Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Points</th>
                <th>Controls</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(q, qkey) in quests.data" :key="qkey">
                <td style="vertical-align: middle;">{{q.event.title}}</td>
                <td style="vertical-align: middle;">{{q.title}}</td>
                <td style="vertical-align: middle;">{{q.description}}</td>
                <td style="vertical-align: middle;">{{q.points}}</td>
                <td>
                  <a :href="'/booth/edit-quest/' + q.id + '/' + $route.params.id" class="btn btn-success mr-3">Edit</a>
                  <button type="button" class="btn btn-danger " @click="removeQuest(q.id, q.title)">Delete</button>
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
              :click-handler="getQuest"
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
  import BoothService from "../../services/booth/booth.service";
  import AlertService from "../../services/alert/alert.service";

  const booth = new BoothService();
  const alert = new AlertService();

  Vue.use(VueTelInput);
  export default {
    data: () => {
      return {
        data: {
          quest: [{
            'title': '',
            'description': '',
            'points': null,
          }]
        },
        events_booths: {},
        quests: {},
        error: {},
        page_count: 0,
        currentPage: 1,
        disableSaveButton: false,
        options: [],
        eventSelected:{},
      }
    },
    methods: {
      getEvents() {
        return booth.getEventsByBooth(this.$route.params.id).then(response => {
          this.events_booths = response.data.data;
          this.events_booths.forEach((val) => {
            this.options.push({id: val.event.id, title: val.event.title});
          });
        }, fail => {

        })
      },
      getQuest() {
        var boothIh = parseInt(this.$route.params.id);
        return booth.getQuestByBooth(boothIh, this.currentPage).then(response => {
            // console.log(response.data.data);
            this.quests = response.data.data;
            this.page_count = Math.ceil(this.quests.total / this.quests.perPage);

        }, fail => {

        })
      },
      submitQuest() {
        this.data.eventId = this.eventSelected.id;
        this.disableSaveButton = true;
        //   saveQuest
        this.data.boothId = parseInt(this.$route.params.id);
        // return console.log(this.data);
        return booth.saveQuest(this.data).then(response => {
          this.data = {
            quest: [{
              'title': '',
              'description': '',
              'points': null,
            }]
          };
          this.error = {};
          this.getQuest();
          alert.save();
          this.disableSaveButton = false;
          // return console.log(response);

        }, fail => {
          this.$swal("Warning!", "Please fill up all required fields.", "warning");
          this.error = fail.errors;
          this.disableSaveButton = false;
          // return console.log(this.error);
        });
      },
      removeQuest(id, eventName) {
        this.$swal({
          title: 'Are you sure ',
          text: "You want to delete " + eventName + '?',
          icon: 'warning',
          buttons: [
            'No',
            'Yes'
          ]
        }).then(response => {
          if (response) {
            return booth.deleteQuest(id).then(response => {
              this.getQuest();
              this.$swal.close();
            }, fail => {
              console.log(fail);
            })
          }
          else {
            this.$swal.close();
          }

        })


      },
      addQuest() {
        this.data.quest.push({
          'title': '',
          'description': '',
          'points': null,
        });
      },
      removeKeyQuest(key) {
        this.data.quest.splice(key, 1);
      }
    },
    mounted() {
      this.getEvents();
      this.getQuest();
    }
  };
</script>
