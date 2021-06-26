<template>
  <div class="card">
    <div class="card-header">
      <strong>Add Company</strong>
    </div>
    <div class="card-body">
      <div class="row" >
        <div class="col-sm-12">
          <div class="form-group">
            <label for="Title">Company Name</label>
            <input  type="text" v-model="data.name" class="form-control" key=""
                              placeholder="Company Name"
                    v-bind:class="{ 'error-border': errors.name}" id="Title"/>
            <small class="text-danger" v-if="errors.name">{{errors.name}}</small>
          </div>
        </div>
      </div>


      <!-- <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="Title">Email Domain</label>
              <input type="text" v-model="data.email" class="form-control"
              placeholder="Ex: companydomain.com"
                      v-bind:class="{ 'error-border': errors.email}" id="Title"/>
              <small class="text-danger" v-if="errors.email">{{errors.email}}</small>
          </div>
        </div>
      </div> -->


          <h3 class="mt-4 mb-4">Email Domains</h3>
            <div class="row event-schedule" v-for="(per_day, dayKey) in data.email" :key="dayKey" :id="'day'+dayKey">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <div class="row h-100 align-items-center">
                      <div class="col-12">
                        <button type="button" class="btn btn-success" @click="addMoreDomain()">
                          <i class="fa fa-plus"></i>&nbsp; Add a Domain
                        </button>
                      
                        <button
                          type="button"
                          class="btn btn-danger ml-3"
                          v-if="data.email.length > 1"
                          @click="removeDay(dayKey)"
                        >
                          <i class="fa fa-close"></i>&nbsp; Remove Domain
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                          <label for="Title">Domain</label>
                          <input
                            type="text"
                            v-model="per_day.title"
                            class="form-control"
                            id="eventTitle"
                            placeholder="Ex: companydomain.com"
                            v-bind:class="{ 'error-border': errors.email[dayKey]}"
                          />
                          <small class="text-danger" v-if="errors.email[dayKey]">{{errors.email[dayKey].error}}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


      <div class="row">
        <div class="col-lg-5 col-12">
          <div class="form-group">
            <label for="eventBanner">Company Logo</label>
            <div class="alert alert-success" role="alert">
              <input type="file" id="organizerLogo" ref="orgLogo" @change="uploadOrganizer($event)"/>
            </div>
            <small class="d-block">Upload a copy of your logo. Max file size: 300kb</small>
            <small class="d-block">Recommended Dimensions: (300x600)</small>
            <small class="d-block text-info">(File types: jpg, png)</small>
            <small class="text-danger" v-if="errors.imageUrl">{{errors.imageUrl}}
            </small>
          </div>
        </div>
        <div class="col-lg-7 col-12 upload-logo">
          <div class="banner-container position-relative">
            <div class="img-cont">
              <i v-if="data.image_url" class="fa fa-close position-absolute img-close-btn"
                  @click="removeOrganizerLogo"></i>
              <img :src="data.image_url" alt class="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-lg-4 col-12">
          <div class="form-group">
            <label for="eventLocation">Address</label>
            <input
              type="text"
              v-model="data.address"
              class="form-control"
              id="eventLocation"
              placeholder="Address"
              v-bind:class="{ 'error-border': errors.address}"
            />
            <small class="text-danger" v-if="errors.address">{{errors.address}}</small>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="form-group">
            <label for="eventCountry">City</label>
            <input type="text" v-model="data.city" class="form-control" id="eventCity"
                    placeholder="City"
                    v-bind:class="{ 'error-border': errors.city}"/>
            <small class="text-danger" v-if="errors.city">{{errors.city}}</small>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="form-group">
            <label for="eventCountry">Country</label>
            <input type="text" v-model="data.country" class="form-control" id="eventCountry"
                    placeholder="Country"
                    v-bind:class="{ 'error-border': errors.country}"/>
            <small class="text-danger" v-if="errors.country">{{errors.country}}</small>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-6 col-12">
            <div class="form-group">
            <label for="gender">Plan Package</label>
            <span class="text-danger"> *</span>
            <select class="form-control" v-model="data.plan_package" >
              <option v-for="(planpackage, key) in info.plan_package_type" :key="key" v-bind:value="planpackage.id">{{planpackage.plan_name}}</option>
            </select>
            <small class="text-danger" v-if="errors.plan_package">{{errors.plan_package}}</small>
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
              placeholder="www.company.com"
              v-bind:class="{ 'error-border': errors.link}"
            />
            <small class="text-danger" v-if="errors.link">{{errors.link}}</small>
          </div>
        </div>
      </div>
      <button type="button" @click="saveEvent" class="btn btn-success float-right">Submit All</button>
      <button type="button" class="btn btn-danger mr-3 float-right" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script src="./form.component.js"></script>
