<template>
  <div class="container-fluid animated fadeIn h-100">
    <div class="row">
      <div class="col-lg-12 mt-4">
        <div class="card">
          <div class="card-header">
            <strong>Quest</strong>
          </div>
          <div class="card-body">
            <form @submit.prevent="updateQuest">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>List of Events</label>
                    <select class="form-control" v-model="data.eventId" :class ="{'error-border' : error && error.eventId}">
                      <option v-for="(ebooth, eboothKey) in events_booths" :key="eboothKey" v-bind:value="ebooth.eventId">{{ebooth.event.title}}</option>
                    </select>
                    <span class="text-danger" v-if="error && error.eventId">{{error.eventId[0]}}</span>
                  </div>
                </div>
              </div>
              <!-- <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                        <button type="button" class="btn btn-success float-right" @click="addQuest">Add quest</button>
                    </div>
                  </div>     
              </div> -->
              <!-- <div v-for="(qv, qk) in data.quest" :key="qk"> -->
                  
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>title</label>
                    <input type="text" v-model="data.title" class="form-control" :class="{'error-border' : error && error.title}" placeholder="title">
                    <span class="text-danger" v-if="error && error.title">{{error.title[0]}}</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>description</label>
                    <!-- <input type="text" v-model="data.description" class="form-control" :class="{'error-border' : error && error.description}" placeholder="Description "> -->
                    <textarea  v-model="data.description" class="form-control" :class ="{'error-border' : error && error.description}" style='white-space:pre-wrap'></textarea>
                    <span class="text-danger" v-if="error && error.description">{{error.description[0]}}</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>points</label>
                    <input type="text" v-model="data.points" patter="[0-9]" :class="{'error-border' : error && error.points}" class="form-control" placeholder="Points">
                    <span class="text-danger" v-if="error && error.points">{{error.points[0]}}</span>
                  </div>
                </div>
              </div>
              <!-- </div> -->
              
              <button type="button" class="btn btn-danger" @click="cancelQuest">Cancel</button>
              <button class="btn btn-success float-right">Save Quest</button>
            </form>
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
          quest : [{
              'title' : '',
              'description' : '',
              'points' : null,
          }]
      },
      events_booths: {},
      quests : {},
      error : {}
    }
  },
  methods: {
    getEvents(){
        return booth.getEventsByBooth(this.$route.params.booth_id).then(response => {
        // console.log(response.data);
        this.events_booths = response.data.data;
        }, fail =>{

        })
    },
    edit(){
        var boothIh = parseInt(this.$route.params.id);
        return booth.editQuest(boothIh).then(response => {
            this.data = response.data.data;
        }, fail =>{

        })
    },
    cancelQuest(){
      location.href = '/booth/quest-form/'+ this.$route.params.booth_id;
    },
    updateQuest(){
      this.$swal({
        title: "Loading...",
        text: "Please wait while saving the data.",
        icon: "/img/loader.gif",
        button: false,
        closeOnClickOutside: false
      });
    //   saveQuest
    this.data.boothId = parseInt(this.$route.params.booth_id);
    
    return booth.updateQuest(this.$route.params.id, this.data).then(response =>{
        // return console.log(response);
        // this.$swal("Success!", "Data has been updated.", "success").then(res =>{
        //   location.href = "/booth/quest-form/"+ this.$route.params.booth_id;
        this.$swal.close();
        this.error = {};
        // });
        alert.update();
    }, fail =>{
       this.$swal("Warning!", "Please fill up all required fields.", "warning")
      this.error = fail.errors;
        return console.log(fail);
    });
    }
  },
  mounted() {
    this.getEvents();
    this.edit();
  }
};
</script>
