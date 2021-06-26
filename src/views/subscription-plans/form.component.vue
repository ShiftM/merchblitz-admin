<template>
  <div class="card">
    <div class="card-header">
      <strong>Add Subscription Plan</strong>
    </div>
    <form @submit.prevent="$route.params.id ? update() : store()">

      <div class="card-body">
        <div class="row" >
          <div class="col-sm-12">
            <div class="form-group">
              <label for="Title">Subscription Plan Name</label>
              <span class="text-danger"> *</span>

              <input  type="text" v-model="data.plan_name" class="form-control" 
                      v-bind:class="{ 'error-border': errors.plan_name}" id="Title" required/>
              <small class="text-danger" v-if="errors.plan_name">{{errors.plan_name}}</small>

            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-lg-4 col-12">
            <div class="form-group" id="periodComponent">
                <label for="period">Period</label>
              <span class="text-danger"> *</span>
              <select class="form-control" v-model="data.period" required >
                <option v-for="(periodtype, key) in data.period_type" :key="key" v-bind:value="periodtype.slug">{{periodtype.name}}</option>
              </select>
              <!-- <small class="text-danger" v-if="errors.period">{{errors.period[0]}}</small> -->

            </div>
          </div>


          <div class="col-lg-4 col-12">
            <div class="form-group">
              <label for="eventLocation">Price</label>
              <span class="text-danger"> *</span>

              <input
                type="number"
                v-model="data.price"
                class="form-control"
                id="eventLocation"
                v-bind:class="{ 'error-border': errors.price}" required
              />
              <small class="text-danger" v-if="errors.price">{{errors.price}}</small>

            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="form-group">
              <label for="eventCountry">Item Points Cap</label>
              <span class="text-danger"> *</span>

              <input type="number" v-model="data.item_points_cap" class="form-control" id="eventCity"
                      v-bind:class="{ 'error-border': errors.item_points_cap}" required/>
              <small class="text-danger" v-if="errors.item_points_cap">{{errors.item_points_cap}}</small>
            </div>
          </div>
        </div>
        <!-- <h3 class="mt-4 mb-4">Event Schedule</h3> -->
        <button type="button" @click="saveEvent" class="btn btn-success float-right">Submit All</button>
        <button type="button" class="btn btn-danger mr-3 float-right" @click="cancel">Cancel</button>
      </div>
    </form>

  </div>

</template>

<script src="./form.component.js"></script>
