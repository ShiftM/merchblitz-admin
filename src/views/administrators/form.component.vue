<template>
  <div class="card">
    <div class="card-body">
      <div class="row" >
        <div class="col-sm-12">
          <div class="form-group">
            <label for="Title">Username</label>
            <input  type="text" v-model="data.name" class="form-control"
                    placeholder="Username"
                    v-bind:class="{ 'error-border': errors.name}" id="Title"/>
            <small class="text-danger" v-if="errors.name">{{errors.name}}</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="Title">Email</label>
            <input type="email" v-model="data.email" class="form-control"
                    placeholder="Email"
                    v-bind:class="{ 'error-border': errors.email}" id="Title"/>
            <small class="text-danger" v-if="errors.email">{{errors.email}}</small>
          </div>
        </div>
      </div>
     
      <div class="row">
        <div class="col-12 mb-2">
          <label>User Type</label>
          <span class="text-danger"> *</span>
          <select class="form-control" v-model="data.account_type">
            <option v-for="(admin, key) in info.adminType" :key="key" v-bind:value="admin.slug">{{admin.name}}</option>
          </select>
          <!-- <small v-if="getError(errors,'account_type')" class="text-danger">{{getError(errors,'account_type').detail}}</small> -->
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-6 col-12">
          <div class="form-group">
            
            <label for="firstname">First Name</label>
            <input
              type="text"
              v-model="data.first_name"
              class="form-control"
              id="firstname"
              placeholder="First Name"
              v-bind:class="{ 'error-border': errors.first_name}"
            />
            <small class="text-danger" v-if="errors.first_name">{{errors.first_name}}</small>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              v-model="data.last_name"
              class="form-control"
              id="lastname"
              placeholder="Last Name"
              v-bind:class="{ 'error-border': errors.last_name}"
            />
            <small class="text-danger" v-if="errors.last_name">{{errors.last_name}}</small>
          </div>
        </div>
      </div>

    <div class="row mb-4">
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="gender">Gender</label>
            <span class="text-danger"> *</span>
            <select class="form-control" v-model="data.gender">
              <option v-for="(gender, key) in info.genderType" :key="key" v-bind:value="gender.slug">{{gender.name}}</option>
            </select>
          </div>
        </div>
        <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>Phone Number</label>
              <vue-tel-input v-model="data.areaCode" :enabledCountryCode="true" :class ="{'error-border' : errors.number}"></vue-tel-input>
              <!-- <p class="text-danger" v-if="errors.number">{{errors.number}}</p> -->
            </div>
        </div>
      </div>


      <div class="row mb-4">
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="eventAdmissionFee">Password</label>
            <input
              type="password"
              v-model="data.password"
              class="form-control"
              id="eventAdmissionFee"
              placeholder="Password"
              v-bind:class="{ 'error-border': errors.password}"
            />
            <small class="text-danger" v-if="errors.password">{{errors.password}}</small>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="form-group">
            <label for="eventAdmissionFee">Re-Type Password</label>
            <input
              type="password"
              v-model="data.password1"
              class="form-control"
              id="eventAdmissionFee"
              placeholder="Password"
              v-bind:class="{ 'error-border': errors.password1}"
            />
            <small class="text-danger" v-if="errors.password1">{{errors.password1}}</small>
          </div>
        </div>
      </div>

      <!-- <h3 class="mt-4 mb-4">Event Schedule</h3> -->
      <button type="button" @click="saveEvent" class="btn btn-success float-right">Submit All</button>
      <button type="button" class="btn btn-danger mr-3 float-right" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script src="./form.component.js"></script>
