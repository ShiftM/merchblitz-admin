<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <strong>Add Event</strong>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="Title">Event Title</label>
                  <input type="text" v-model="data.title" class="form-control"
                         v-bind:class="{ 'error-border': errors.title}" id="Title"/>
                  <small class="text-danger" v-if="errors.title">{{errors.title[0]}}</small>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="organizer">Organizer</label>
                  <input type="text" v-model="data.organizer.name" class="form-control" id="organizer"
                         v-bind:class="{ 'error-border': errors['organizer.name']}"/>
                  <small class="text-danger" v-if="errors['organizer.name']">{{errors['organizer.name'][0]}}</small>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5 col-12">
                <div class="form-group">
                  <label for="eventBanner">Organizer Logo</label>
                  <div class="alert alert-success" role="alert">
                    <input type="file" id="organizerLogo" ref="orgLogo" @change="uploadOrganizer($event)"/>
                  </div>
                  <small class="d-block">Upload a copy of your logo. Max file size: 300kb</small>
                  <small class="d-block">Recommended Dimensions: (300x600)</small>
                  <small class="d-block text-info">(File types: jpg, png)</small>
                  <small class="text-danger" v-if="errors['organizer.imageUrl']">{{errors['organizer.imageUrl'][0]}}
                  </small>
                </div>
              </div>
              <div class="col-lg-7 col-12 upload-logo">
                <div class="banner-container position-relative">
                  <div class="img-cont">
                    <i v-if="data.organizer.imageUrl" class="fa fa-close position-absolute img-close-btn"
                       @click="removeOrganizerLogo"></i>
                    <img :src="data.organizer.imageUrl" alt class="img-fluid"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 mb-3">
                <label for="event-description">Description</label>
                <div id="app">
                  <!-- <ckeditor v-model="data.description" v-bind:class="{ 'error-border': errors.description}"></ckeditor> -->
                  <textarea class="form-control" rows="10" v-model="data.description" v-bind:class="{ 'error-border': errors.description}"></textarea>
                  <small class="text-danger" v-if="errors.description">{{errors.description[0]}}</small>

                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="eventDate">Start Date</label>
                  <VueCtkDateTimePicker v-model="data.startDate" minute-interval="15" format="YYYY-MM-DD h:mm a" no-button-now/>
                  <small class="text-danger" v-if="errors.startDate">{{errors.startDate[0]}}</small>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="eventEndDate">End Date</label>
                  <VueCtkDateTimePicker v-model="data.endDate" minute-interval="15" format="YYYY-MM-DD h:mm a" id="startDay" no-button-now/>
                  <small class="text-danger" v-if="errors.endDate">{{errors.endDate[0]}}</small>
                </div>
              </div>
            </div>
            <h3 class="mt-4 mb-4">Event Details</h3>
            <label for="eventBanner">Header</label>
            <div class="row mb-4">
              <div class="col-lg-5 col-12">
                <div class="alert alert-success" role="alert">
                  <input type="file" multiple ref="eventImage" @change="uploadImages($event)"/>
                </div>
                <small class="text-danger" v-if="errors.eventImages">{{errors.eventImages[0]}}</small>
              </div>


            </div>
            <div class="row mb-5">
              <div class="col-3 mb-5" v-for="(img, imgKey ) in data.eventImages" :key="imgKey">
                <div class="banner-container position-relative">
                  <i class="fa fa-close position-absolute img-close-btn" @click="removeImage(imgKey)"></i>
                  <img :src="img.fullPath" alt class="img-fluid"/>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-lg-4 col-12">
                <div class="form-group">
                  <label for="eventLocation">Location/venue</label>
                  <input
                    type="text"
                    v-model="data.location"
                    class="form-control"
                    id="eventLocation"
                    v-bind:class="{ 'error-border': errors.location}"
                  />
                  <small class="text-danger" v-if="errors.location">{{errors.location[0]}}</small>

                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="form-group">
                  <label for="eventCountry">City</label>
                  <input type="text" v-model="data.city" class="form-control" id="eventCity"
                         v-bind:class="{ 'error-border': errors.city}"/>
                  <small class="text-danger" v-if="errors.city">{{errors.city[0]}}</small>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="form-group">
                  <label for="eventCountry">Country</label>
                  <input type="text" v-model="data.country" class="form-control" id="eventCountry"
                         v-bind:class="{ 'error-border': errors.country}"/>
                  <small class="text-danger" v-if="errors.country">{{errors.country[0]}}</small>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label for="eventAdmissionFee">Admission Fee</label>
                  <input
                    type="text"
                    v-model="data.admissionFee"
                    class="form-control"
                    id="eventAdmissionFee"
                    v-bind:class="{ 'error-border': errors.admissionFee}"
                  />
                  <small class="text-danger" v-if="errors.admissionFee">{{errors.admissionFee[0]}}</small>
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label for="eventLink">Link</label>
                  <input
                    type="text"
                    v-model="data.link"
                    class="form-control"
                    id="eventLink"
                    placeholder="www.yourlink.com"
                    v-bind:class="{ 'error-border': errors.link}"
                  />
                  <small class="text-danger" v-if="errors.link">{{errors.link[0]}}</small>
                </div>
              </div>
            </div>

            <h3 class="mt-4 mb-4">Event Schedule</h3>
            <div class="row event-schedule" v-for="(per_day, dayKey) in data.eventDays" :key="dayKey" :id="'day'+dayKey">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <div class="row h-100 align-items-center">
                      <div class="col-12">
                        <button type="button" class="btn btn-success" @click="addMoreDay()">
                          <i class="fa fa-plus"></i>&nbsp; Add a Day
                        </button>
                      
                        <button
                          type="button"
                          class="btn btn-danger ml-3"
                          v-if="data.eventDays.length > 1"
                          @click="removeDay(dayKey)"
                        >
                          <i class="fa fa-close"></i>&nbsp; Remove Day
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <label for="Day">Day</label>
                          <VueCtkDateTimePicker v-model="per_day.date"
                            :id="'daySched'+dayKey" 
                            :only-date="demo[0].options.onlyDate"
                            :format="demo[0].options.dateFormat"
                            :formatted="demo[0].options.dateFormatted"
                            :label="demo[0].options.title"
                          />
                        </div>
                      </div>
                      <div
                        class="col-12"
                        v-for="(sched, schedKey) in per_day.schedules"
                        :key="schedKey"
                        :id="'day'+dayKey+'timeslot'+schedKey"
                      >
                        <div class="card">
                          <div class="card-header">
                            <div class="row h-100 align-items-center">
                              <div class="col-6">
                                <h5 class="m-0">
                                  <i class="fa fa-calendar"></i> Schedule of the Day
                                </h5>
                              </div>
                              <div class="col-6 text-right">
                                <button
                                  type="button"
                                  class="btn btn-success"
                                  @click="addDaySchedule(dayKey)"
                                >
                                  <i class="fa fa-plus"></i>&nbsp; Add a timeslot
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-danger ml-3"
                                  v-if="per_day.schedules.length > 1"
                                  @click="removeDaySchedule(dayKey, schedKey)"
                                >
                                  <i class="fa fa-close"></i>&nbsp; Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="form-group">
                              <label for="eventTitle">Description</label>
                              <input
                                type="text"
                                v-model="sched.title"
                                class="form-control"
                                id="eventTitle"
                                placeholder="Ex. Registration, Game Hackathon Competition etc."
                                v-bind:class="{ 'error-border': errors['eventDays.'+dayKey+'.schedules.'+schedKey+'.title']}"
                              />
                              <small class="text-danger"
                                     v-if="errors['eventDays.'+dayKey+'.schedules.'+schedKey+'.title']">
                                {{errors['eventDays.'+dayKey+'.schedules.'+schedKey+'.title'][0]}}
                              </small>
                            </div>
                            <VueCtkDateTimePicker v-model="sched.time"
                              :id="'dayTimeslot'+schedKey"
                              :label="demo[0].options.label"
                              :only-time="demo[0].options.onlyTime"
                              :format="demo[0].options.format"
                              :formatted="demo[0].options.formatted"
                              :minute-interval="demo[0].options.minuteInterval"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="custom-divider">

            <!-- <h3 class="mt-4 mb-4">Exhibitors</h3> -->
            <h3 class="mt-4 mb-4">Event Section</h3>
            <div class="row">
              <div class="col-12" v-for="(ex, exKey) in data.segments" :key="exKey" :id="'exhibitor'+exKey">
                <div class="card">
                  <div class="card-header">
                    <div class="row h-100 align-items-center">
                      <div class="col-12">
                        <button type="button" class="btn btn-success" @click="addExhibitor">
                          <i class="fa fa-plus"></i>&nbsp; Add Exhibitors
                        </button>

                        <button
                          type="button"
                          class="btn btn-danger ml-3"
                          v-if="data.segments.length > 1"
                          @click="removeExhibitor(exKey)"
                        >
                          <i class="fa fa-close"></i>&nbsp; Remove Exhibitor
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <label for="CreateSection">Create Section</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="ex.title"
                            id="CreateSection"
                            placeholder="Enter Section"
                            v-bind:class="{ 'error-border': errors['segments.'+exKey+'.title']}"
                          />
                          <small class="text-danger" v-if="errors['segments.'+exKey+'.title']">
                            {{errors['segments.'+exKey+'.title'][0]}}
                          </small>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="card">
                          <div class="card-header">
                            <div class="row h-100 align-items-center">
                              <div class="col-6">
                                <h5 class="m-0">
                                  <i class="fa fa-tasks"></i> Create section content
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="form-group">
                              <label for="UploadImage">Upload Images</label>
                              <div class="row mb-4">
                                <div class="col-lg-5 col-12">
                                  <div class="alert alert-success" role="alert">
                                    <input type="file" id="UploadImage" :class="'segmentImages'+exKey"
                                           @change="uploadSegmentImage($event, exKey)"/>
                                  </div>
                                  <small class="text-danger"
                                         v-if="errors['segments.'+exKey+'.locationImages.'+0+'.fileName']">
                                    {{errors['segments.'+exKey+'.locationImages.'+0+'.fileName'][0]}}
                                  </small>
                                </div>
                                <div class="col-lg-7 col-12 upload-images"
                                     v-for="(locImg, LocImgKey) in ex.locationImages" :key="LocImgKey">
                                  <div class="banner-container">
                                    <div class="img-cont">
                                      <i v-if="locImg.path && locImg.fileName"
                                         @click="removeSectionImage(exKey, LocImgKey)"
                                         class="fa fa-close position-absolute img-close-btn"></i>
                                      <img :src="locImg.path + locImg.fileName" alt class="img-fluid"/>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                            <label for="eventLink">Create List</label>
                            <div class="row mb-3" v-for="(list, listKey) in ex.segmentExhibitors" :key="listKey">
                              <div class="col-6">
                                <input type="text" class="form-control" v-model="list.description"
                                       v-bind:class="{ 'error-border': errors['segments.'+exKey+'.segmentExhibitors.'+listKey+'.description']}"
                                />
                                <small class="text-danger"
                                       v-if="errors['segments.'+exKey+'.segmentExhibitors.'+listKey+'.description']">
                                  {{errors['segments.'+exKey+'.segmentExhibitors.'+listKey+'.description'][0]}}
                                </small>

                              </div>
                              <div class="col-6">
                                <button
                                  type="button"
                                  class="btn btn-success"
                                  @click="addList(exKey)"
                                >
                                  <i class="fa fa-plus"></i>&nbsp; Add
                                </button>

                                <button
                                  type="button"
                                  class="btn btn-danger ml-3"
                                  v-if="ex.segmentExhibitors.length > 1"
                                  @click="removeList(exKey,listKey)"
                                >
                                  <i class="fa fa-close"></i>&nbsp; Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" @click="saveEvent" class="btn btn-success float-right">Submit All</button>
            <button type="button" class="btn btn-danger mr-3 float-right" @click="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import CKEditor from "ckeditor4-vue";
  import EventService from "../../services/event/event.service";

  const event = new EventService();
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
          // options: {
          //   format: 'YYYY-MM-DD h:mm a',
          //   minuteInterval: '15',
          //   id: 'DateTimePicker',
          // }
        }
      ],
        active_id: "",
        data: {
          fullPath: "",
          startDate: moment(new Date()).format("YYYY-MM-DD"),
          endDate: moment(new Date()).format("YYYY-MM-DD"),
          organizer: {
            name: '',
            imageUrl: ''
          },
          segments: [
            {
              title: "",
              segmentExhibitors: [
                {
                  description: ""
                }
              ],
              locationImages: [{
                path: '',
                fileName: ''
              }]

            }
          ],
          // event schedules
          eventDays: [
            {
              date: moment(new Date()).format("YYYY-MM-DD"),
              schedules: [
                {
                  title: "",
                  time: "12:00"
                }
              ]
            }
          ],
          //end of event schedules
          eventImages: []
        },
        errors: {},
      };
    },
    methods: {
      convertIsoToDateTime() {
        this.data.startDate.replace('T', '');
        this.data.startDate.replace('Z', '');
        this.data.endDate.replace('T', '');
        this.data.endDate.replace('Z', '');
        //equal startDate and endDate to startTime and endTime
        this.data.startTime = this.data.startDate;
        this.data.endTime = this.data.endDate;

        //loop through arrays that has invalid format
        this.data['eventDays'].forEach((value) => {
          // value.date = moment(value.date).format("YYYY-MM-DD HH:mm:ss");
          value.date.replace('T', '');
          value.date.replace('Z', '');
          value['schedules'].forEach((sched) => {
            var date = new Date(sched['time']);
            sched['time'] = date.toISOString().substring(11, 19)
          });
        });
      },
      cancel() {
        location.href = '/events';
      },
      saveEvent() {
        //show swal loader
        this.$swal({
          title: "Loading...",
          text: "Please wait while saving the data.",
          icon: "/img/loader.gif",
          button: false,
          closeOnClickOutside: false
        });

        //equal startDate and endDate to startTime and endTime
        // this.data.startDate = moment(this.data.startDate).format("YYYY-MM-DD HH:mm:ss");
        // this.data.endDate = moment(this.data.endDate).format("YYYY-MM-DD HH:mm:ss");

        this.data.startTime = this.data.startDate;
        this.data.endTime = this.data.endDate;

        

        //checker if update or store
        if (this.$route.params.id) {
          this.updateEvent();
        } else {
          this.storeEvent();
        }

      },
      storeEvent() {
        //convert all iso format to datetime
        return event.store(this.data).then(
          success => {
            this.$swal(
              {
                title: "Success!",
                icon: "success",
                text: "Successfully Saved!",
                type: "success",
                allowOutsideClick: false
              })
              .then(response => {
                location.reload();
              });

          },
          fail => {
            this.errors = fail.errors;
            this.$swal("Error!", "Please fill up all required fields.", "error");
          }
        );
      },
      updateEvent() {

        // this.convertTimeToDateTime(this.data.eventDays);
        return event.update(this.data, this.$route.params.id).then(success => {
            this.$swal(
              {
                title: "Success!",
                icon: "success",
                text: "Data has been updated!",
                type: "success",
                allowOutsideClick: false
              })
              .then(response => {
                location.reload();
              });
          },
          fail => {
            this.errors = fail.errors;
            this.$swal("Error!", "Please fill up all required fields.", "error");
          })

      },
      uploadOrganizer(e) {
        var files = e.target.files[0];
        return event.uploadOrganizerLogo(files).then(success => {
          this.data.organizer.imageUrl = success.data.data.fullPath;
        });
      },

      uploadImages(e) {
        var selectedFiles = e.target.files;
        for (var a = 0; a < selectedFiles.length; a++) {
          event.uploadEventImages(selectedFiles[a]).then(success => {
            this.data.eventImages.push({
              "path": success.data.data.path,
              "fileName": success.data.data.fileName,
              "fullPath": success.data.data.fullPath
            });
          });

        }
      },

      uploadSegmentImage(e, index) {
        var files = e.target.files[0];
        return event.uploadEventBanner(files, 'eventSegmentImages').then(success => {
          console.log(success);
          this.data.segments[index].locationImages[0].path = success.data.data.path;
          this.data.segments[index].locationImages[0].fileName = success.data.data.fileName;
          this.data.segments[index].locationImages[0].fullPath = success.data.data.fullPath;
        });
      },

      removeSectionImage(index, imgKey) {
        // console.log(index);
        $('.segmentImages' + imgKey).val('');
        // this.data.segments[index].locationImages.splice(imgKey, 1);
        this.data.segments[index].locationImages[0].path = '';
        this.data.segments[index].locationImages[0].fileName = '';
        this.data.segments[index].locationImages[0].fullPath = '';
      },

      addMoreDay() {
        this.data.eventDays.push({
          date: new Date(),
          schedules: [
            {
              title: "",
              time: "12:00"
            }
          ]
        });
        var key =  this.data.eventDays.length - 1;
      this.moveDAy = '#day'+key;
      // $('#moveToAddDay a').click();
      setTimeout(()=>{
        var elmnt = document.getElementById('day'+key);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
      },300);
      },
      addDaySchedule(index) {
        this.data.eventDays[index].schedules.push({
          title: "",
          time: "12:00"
        });

      var timeKey =  this.data.eventDays[index].schedules.length - 1;
      var key =  this.data.eventDays.length - 1;
      this.moveDAy = '#timeslot'+timeKey;
    
//    scroll to new timeslot
      setTimeout(()=>{
        var elmnt = document.getElementById('day'+index+'timeslot'+timeKey);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
      },300);
      },
      removeDay(index) {
        this.data.eventDays.splice(index, 1);
         //  setTimeout(()=>{
        var key =  this.data.eventDays.length - 1;
        var elmnt = document.getElementById('day'+key);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        
      // },500);
      },
      removeDaySchedule(index, key) {
        this.data.eventDays[index].schedules.splice(key, 1);

        var key =  this.data.eventDays.length - 1;
        var timeKey =  this.data.eventDays[index].schedules.length - 1;
        var elmnt = document.getElementById('day'+index+'timeslot'+timeKey);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
      },
      addExhibitor() {
        this.data.segments.push({
          title: "",
          segmentExhibitors: [
            {
              description: ""
            }
          ],
          locationImages: [{
            path: '',
            fileName: ''
          }]

        });

        //    scroll to new timeslot
        var key =  this.data.segments.length - 1;
        // this.moveDAy = '#exhibitors'+key;
        setTimeout(()=>{
          var elmnt = document.getElementById('exhibitor'+key);
          elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
        },300);
      },

      removeExhibitor(index) {
        this.data.segments.splice(index, 1);
        var key =  this.data.segments.length - 1;
        var elmnt = document.getElementById('exhibitor'+key);
        elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
      },

      addList(index) {
        this.data.segments[index].segmentExhibitors.push({
          description: ""
        });
      },

      removeList(rootIndex, index) {
        this.data.segments[rootIndex].segmentExhibitors.splice(index, 1);
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
        return event.info(id).then(success => {
          this.data = success.data.data;
          this.convertIsoToDateTime(this.data);
        })
      }
    },

    mounted() {
      if (this.$route.params.id) {
        this.getEventInfo();
      }
    }
  };
</script>
