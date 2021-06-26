<template>
    <div class="card-body">
        <div class="collapse-title cell-ellipsis filters-collapse" data-toggle="collapse" data-target="#collapse" @click="toggleFilterCollapse()">
            <h5 class="mb-0">Users by Location</h5>
            <span class="collapse-icon filter"><span class="mr-2">Show Filters</span><i class="fa fa-chevron-right"></i></span>    
        </div>
        <form action="" class="form-inline row collapse filters-cont" id="collapse">
            <div class="col-12 mb-2">
                <hr>
                <small><b>Search Filters</b></small>
            </div>
          <div class="col-2 form-group">
            <label class="pr-3 pb-2">Age Range</label>
            <small></small>
            <div class="d-flex w-100 filter-age">
              <input type="number" class="form-control" name="age-start" v-model="filter.age_from" @keyup="ageValidation(filter.age_from, filter.age_to)">
              <label class="px-2">–</label>
              <input type="number" class="form-control" name="age-end" v-model="filter.age_to" @keyup="ageValidation(filter.age_from, filter.age_to)">
            </div>
            <small v-if="!validAge" class="text-danger">Invalid age range</small>
          </div>
          <div class="col-3 pr-3 form-group">
            <label class="pb-2">Gender</label>
            <select name="gender" v-model="filter.gender"
                    class="form-control w-100">
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Rather not say">Rather not say</option>
            </select>
          </div>
          <div class="col-4 pr-3 form-group">
            <label class="pb-2">Interest</label>
            <select name="interest" v-model="filter.interest_option_id"
                    class="form-control w-100">
              <option value="">All</option>
              <option v-for="(interest, key) in interestList" :key="key" v-bind:value="interest.id">{{interest.name}}
              </option>
            </select>
          </div>
          <div class="col-3 form-group">
            <label class="pb-2">City</label>
            <select name="city" v-model="filter.city"
                    class="form-control w-100">
              <option value="">All</option>
              <option v-for="(city, key) in cityList" :key="key" v-bind:value="city.name">{{city.name}}</option>
            </select>
          </div>
          <div class="col-5 mt-3 form-group">
            <VueCtkDateTimePicker v-model="filter.date_from"
                                  :only-date="demo[0].options.onlyDate"
                                  :format="demo[0].options.dateFormat"
                                  :formatted="demo[0].options.dateFormatted"
                                  :label="demo[0].options.dateFrom"
                                  @input="dateValidation(filter.date_from,filter.date_to)"
            />
            <small v-if="!validDate" class="text-danger">Invalid date range</small>
          </div>
          <div class="col-5 mt-3 form-group">
            <VueCtkDateTimePicker v-model="filter.date_to"
                                  :only-date="demo[0].options.onlyDate"
                                  :format="demo[0].options.dateFormat"
                                  :formatted="demo[0].options.dateFormatted"
                                  :label="demo[0].options.dateTo"
                                  @input="dateValidation(filter.date_from,filter.date_to)"
            />
          </div>
          <div class="col-2 mt-3 d-flex">
            <button type="button" class="btn btn-primary form-control w-100 mr-1" @click="search()">Apply Filters</button>
            <button type="button" class="btn btn-danger form-control" @click="resetOptions()"><i class="icon-refresh"></i>
            </button>
          </div>
        </form>
        <hr>
        <!-- <div class="row mb-3">
            <div class="col-12 filters-applied">
                <small class="mr-3">Filters:</small>
                <div>
                    Ages 18 – 40
                    <span class="ml-2">X</span>
                </div>
                <div>
                    Gender: Rather Not Say
                    <span class="ml-2">X</span>
                </div>
                <small class="clear">Clear All</small>
            </div>
        </div> -->
        <!-- table -->
        <div class="row">
            <div class="col-12">
                <div class="chart-container">
                    <bar-chart v-if="chartLoaded" :chartdata="chartData" :options="chartOptions"></bar-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.component.js"></script>
