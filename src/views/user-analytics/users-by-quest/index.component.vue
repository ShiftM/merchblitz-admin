<template>
    <div class="card-body">
        <div class="collapse-title cell-ellipsis filters-collapse" data-toggle="collapse" data-target="#collapse" @click="toggleFilterCollapse()">
            <h5 class="mb-0">Users by Quest</h5>
            <span class="collapse-icon filter"><span class="mr-2">Show Filters</span><i class="fa fa-chevron-right"></i></span>    
        </div>
        <form action="" class="form-inline row collapse filters-cont" id="collapse">
            <div class="col-12 mb-2">
                <hr>
                <small><b>Search Filters</b></small>
            </div>
            <div class="col-2 form-group">
                <label class="pr-3 pb-2">Age Range</label><small></small>
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
              <option v-for="(interest, key) in interestList" :key="key" v-bind:value="interest.id">{{interest.name}}</option>
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
          <div class="col-7 mt-3 form-group d-flex flex-row">
            <VueCtkDateTimePicker v-model="filter.date_to"
                                  :only-date="demo[0].options.onlyDate"
                                  :format="demo[0].options.dateFormat"
                                  :formatted="demo[0].options.dateFormatted"
                                  :label="demo[0].options.dateTo"
                                  class="pr-4"
                                  @input="dateValidation(filter.date_from,filter.date_to)"
            />
            <button type="button" class="btn btn-danger form-control" @click="resetOptions()"><i class="icon-refresh"></i>
            </button>
          </div>
        </form>
        <hr>
        <div class="row mb-3">
            <div class="col-6">
                <label><b>Event</b></label>
                <select name="event" required
                        class="form-control" v-model="eventFilter.event_id" @change="questList()">
                    <option value="">All</option>
                    <option v-for="(value,key) in events" :value="value.id">{{value.title}}</option>
                </select>
            </div>
            <div class="col-6 d-flex align-items-end">
                <div class="w-100 mr-4">
                    <label><b>Quest</b></label>
                    <div class="d-flex">
                        <select name="quest" required v-model="filter.quest_id"
                                class="form-control">
                            <option value="">All</option>
                            <option v-for="(value,key) in quests" :value="value.id">{{value.title}}</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary mr-1" @click="search()"><i class="icon-magnifier"></i></button>
                <button class="btn btn-danger" @click="clear()"><i class="icon-refresh"></i></button>
            </div>
        </div>
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
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th width="15%">Name</th>
                            <th width="8%">Phone</th>
                            <th width="12%">Email</th>
                            <th width="10%">Gender</th>
                            <th width="12%">Date of Birth</th>
                            <th width="5%">Age</th>
                            <th width="23%">Address</th>
                            <th width="15%">Interests</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value,key) in data.data">
                                <td class="cell-wordbreak">
                                    <p>{{value.username}}</p>
                                </td>
                                <td>{{value.country_code}}{{value.phone_number}}</td>
                                <td class="cell-wordbreak">
                                    <p>{{value.email}}</p>
                                </td>
                                <td>{{value.gender}}</td>
                                <td>{{value.birthday}}</td>
                                <td>{{value.age}}</td>
                                <td class="cell-wordbreak">
                                  <p>{{value.has_one_user_address ? value.has_one_user_address.full_address : value.has_one_user_address}}</p>
                                </td>
                              <td class="cell-wordbreak">
                                <p v-for="(v,k) in value.has_many_user_interest">{{v.interest_option.name}}</p>
                              </td>
                            </tr>
                        </tbody>
                    </table>
                    <paginate v-if="toPageCount(data.total, data.per_page ) > 1"
                            v-model="filter.page"
                            :page-count="toPageCount(data.total, data.per_page )"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination'"
                            :next-class="'page-link'"
                            :prev-class="'page-link'"
                            :page-class="'page-item'"
                            :page-link-class="'page-link'"
                            :click-handler="paginate"
                    ></paginate>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.component.js"></script>
