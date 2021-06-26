<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <strong>Add Booth</strong>
          </div>
          <div class="card-body">
            <form action @submit.prevent="submit">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="text-danger"> * </label> <label for="ExhibitorName">Exhibitor Name</label>
                    <input type="text" v-model="data.name" class="form-control" :class ="{'error-border' : error && error.errors && error.errors.name}" id="ExhibitorName" />
                    <p class="text-danger" v-if="error && error.errors && error.errors.name">{{error.errors.name[0] ? ' The Exhibitor name field is required.' : ''}}</p>
                  </div>
                </div>
                <!-- <div class="col-12 col-lg-6">
                  <div class="form-group">
                    <label for="ExhibitorNumber">Mobile Number</label>
                    <input type="text" class="form-control" id="ExhibitorNumber" />
                  </div>
                </div> -->
                <div class="col-12">
                  <div class="form-group">
                    <label for="ExhibitorAreaCode">Phone Number</label>
                    <!-- <input type="text" class="form-control" id="ExhibitorAreaCode" /> -->
                   <vue-tel-input v-model="data.areaCode" :enabledCountryCode="true" :class ="{'error-border' : error && error.errors && error.errors.areaCode}"></vue-tel-input>
                   <p class="text-danger" v-if="error && error.errors && error.errors.areaCode">{{error.errors.areaCode[0] }}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="text-danger"> * </label> <label for="ExhibitorUsername">Email</label>
                    <input type="email" v-model="data.email" class="form-control" id="ExhibitorUsername" :class ="{'error-border' : error && error.errors && error.errors.email}"/>
                    <p class="text-danger" v-if="error && error.errors && error.errors.email">{{error.errors.email[0]}}</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="text-danger"> * </label> <label for="ExhibitorUsername">Username</label>
                    <input type="text" v-model="data.username" class="form-control" @keydown="$event.keyCode === 32 ? $event.preventDefault() : false" id="ExhibitorUsername" :class ="{'error-border' : error && error.errors && error.errors.username}"/>
                    <p class="text-danger" v-if="error && error.errors && error.errors.username">{{error.errors.username[0]}}</p>
                  </div>
                </div>
              </div>
              <div class="row" v-if="!$route.params.id">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="text-danger"> * </label> <label for="ExhibitorPassword">Password</label>
                    <input type="password" v-model="data.password" class="form-control" id="ExhibitorPassword" :class ="{'error-border' : error && error.errors && error.errors.password}"/>
                    <p class="text-danger" v-if="error && error.errors && error.errors.password">{{error.errors.password[0]}}</p>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-success float-right">Submit</button>
              <button type="button" class="btn btn-danger mr-3 float-right" @click="cancel">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
import AlertService from "../../services/alert/alert.service";
import BoothService from "../../services/booth/booth.service";
const booth = new BoothService();
const alert = new AlertService();

Vue.use(VueTelInput)
export default {
  data : () =>{
    return {
      phone: null,
      data : {},
      error : {}
    }
  },
  methods:{
      editBooth(){
       
         return booth.edit(this.$route.params.id).then(response=>{
            this.data = response.data.data;
         }, fail =>{

         });
      },
      countryChanged(country) {
        return console.log(country.dialCode);
       },
      submit(){
        this.$swal({
        title: "Loading...",
        text: "Please wait while saving the data.",
        icon: "/img/loader.gif",
        button: false,
        closeOnClickOutside: false
        });
         if(this.$route.params.id){
              return booth.update(this.$route.params.id, this.data).then(response=>{
                  // location.href = '/booth';
                  this.error = {};
                  this.$swal.close();
                  alert.update();
              }, fail =>{
                
                this.$swal("Warning!", "Please fill up all required fields.", "warning")
                  this.error = fail; 
              });
         }

         return booth.store(this.data).then(response=>{
                // location.href = '/booth';
                this.data = {};
                this.error = {};
                 this.$swal.close();
                  alert.save();
              }, fail =>{
                
                this.$swal("Warning!", "Please fill up all required fields.", "warning")
                this.error = fail; 
              });
         
      },
      cancel(){
        location.href = '/booth';
      },
      
  },
  mounted(){
    if(this.$route.params.id){
        this.error = {};
        this.editBooth();
    }
  }


}
</script>