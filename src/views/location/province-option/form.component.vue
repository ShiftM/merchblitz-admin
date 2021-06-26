<template>
  <div class="card-body table-responsive">
    <div class="col-12">
      <form @submit.prevent="$route.params.id ? update() : store()">
        <div class="row">
          <div class="col-12 mb-2">
            <label>Country</label>
            <span class="text-danger"> *</span>
            <select required class="form-control" v-model="data.country_option_id" @change="getRegion()">
              <option value="">Select Country</option>
              <option v-for="(country, key) in countryList" :key="key" v-bind:value="country.id">{{country.name}}</option>
            </select>
            <small v-if="getError(errors,'country_option_id')" class="text-danger">{{getError(errors,'country_option_id').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Region</label>
            <span class="text-danger"> *</span>
            <select required class="form-control" v-model="data.region_option_id">
              <option value="">Select Region</option>
              <option v-for="(region, key) in regionList" :key="key" v-bind:value="region.id">{{region.name}}</option>
            </select>
            <small v-if="getError(errors,'region_option_id')" class="text-danger">{{getError(errors,'region_option_id').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Province Name</label>
            <span class="text-danger"> *</span>
            <input type="text" v-model="data.name" required class="form-control"  :class="{'error-border': getError(errors,'name')}">
            <small v-if="getError(errors,'name')" class="text-danger">{{getError(errors,'name').detail}}</small>
          </div>
          <div class="col-12 mt-2">
            <button type="submit" class="btn btn-success float-right">Submit</button>
            <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./form.component.js"></script>
