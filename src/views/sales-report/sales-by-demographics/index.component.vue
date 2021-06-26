<template>
    <div class="card-body">
        <div class="collapse-title cell-ellipsis filters-collapse" data-toggle="collapse" data-target="#collapse" @click="toggleFilterCollapse()">
            <h5 class="mb-0">Sales by Demographics</h5>
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
          <div class="col-5 pr-3 form-group">
            <label class="pb-2">Interest</label>
            <select name="interest" v-model="filter.interest_option_id"
                    class="form-control w-100">
              <option value="">All</option>
              <option v-for="(interest, key) in interestList" :key="key" v-bind:value="interest.id">{{interest.name}}</option>
            </select>
          </div>
          <div class="col-5 form-group">
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
        <div class="row">
            <div class="col-12">
                 <!-- <div>
                            <small>Filters: </small>
                            <div>Ages 18-40</div>
                            <div>Male</div>
                            <div>Manila</div>
                        </div> -->
                <div class="chart-container">
                    <bar-chart v-if="chartLoaded" :chartdata="chartData" :options="chartOptions"></bar-chart>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th width="35%">Item name</th>
                                <th width="20%">Variant</th>
                                <th width="15%">Size</th>
                                <th width="15%">Price</th>
                                <th width="15%">Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value,key) in data">
                                <tr>
                                    <td class="collapse-title cell-ellipsis" data-toggle="collapse" :data-target="'#collapse'+key">
                                        {{value.name}}
                                        <span class="collapse-icon"><i class="fa fa-chevron-down"></i></span>
                                        <i class="fa fa-star featured-item-label pl-2" title="Featured Item"
                                        v-if="value.has_one_featured_item"></i>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <template v-for="(s_value,s_key) in value.has_many_item_stock">
                                    <tr :id="'collapse'+key" class="collapse " :class="{'show': key == 0 }">
                                        <td></td>
                                        <td>{{s_value.item_variant.colorOption.name}}</td>
                                        <td>{{s_value.size_option.name}}</td>
                                        <template v-for="(s_value,s_key) in value.has_many_item_stock">
                                            <td>{{s_value.price}}</td>
                                        </template>
                                        <td><strong>{{value.total_price}}</strong></td>
                                    </tr>
                                </template>
                            </template>
                        </tbody>
                        <tfoot class="tfoot-light">
                            <tr>
                                <td class="pl-4"><strong>Total Sales</strong></td>
                                <td colspan="3"></td>
                                <td>
                                    <strong>32472</strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script src="./index.component.js"></script>
