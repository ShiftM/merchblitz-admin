<template>
  <div class="card">
    <div class="card-header">
      <strong>Add Event</strong>
    </div>
    <div class="card-body">
      <div class="row" v-if="$route.params.id">
        <div class="col-sm-12 text-center">
          <router-link class="h5" :to="{ name: 'event-qr-code', params: { id: data.code }}">CLICK THIS TO VIEW QR CODE</router-link>
        </div>
      </div>
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
</template>

<script src="./form.component.js"></script>
