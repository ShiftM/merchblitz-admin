<template>
    <div class="card-body">
        <div class="collapse-title cell-ellipsis filters-collapse" data-toggle="collapse" data-target="#collapse"
             @click="toggleFilterCollapse()">
            <h5 class="mb-0">Sales by Category &#38; Item</h5>
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
            <div class="col-4 pr-3 frm-group">
                <label class="pb-2">Interest</label>
                <select v-model="filter.interest_option_id" name="interest" required
                        class="form-control w-100">
                    <option :value="value.id" v-for="(value,key) in interest_options">{{value.name}}</option>
                </select>
            </div>
            <div class="col-3 form-group">
                <label class="pb-2">City</label>
                <select v-model="filter.city" name="city" required
                        class="form-control w-100">
                    <option :value="value.name" v-for="(value,key) in cities_options">{{value.name}}</option>
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
                <button type="button" class="btn btn-primary form-control w-100 mr-1" @click="search(filter)">Apply
                    Filters
                </button>
                <button  type="button" @click="search({paginate: true,
                per_page: 10,
                page: 1,
                status_option_id: 1,
                type: 1})"
                         class="btn btn-danger form-control"><i class="icon-refresh"></i></button>
            </div>
        </form>
        <hr>
        <div class="row mb-3">
            <div class="col-6">
                <label><b>Category</b></label>
                <span class="text-danger"> *</span>
                <div class="d-flex">
                    <select v-model="filter.category_header_id" name="quest" required
                            class="form-control">
                        <option :value="value.id" v-for="(value,key) in category_options">{{value.name}}</option>
                    </select>
                </div>
                <!-- <label><b>Event</b></label>
                <input type="text" class="form-control" placeholder="Event Name"> -->
            </div>
            <div class="col-6 d-flex align-items-end">
                <div class="w-100 mr-4">
                    <label><b>Item</b></label>
                    <div class="d-flex">
                        <input v-model="filter.name" type="text" list="items" class="form-control"
                               placeholder="Item Number, Item Name" @input="suggest({name: $event.target.value})" @change="suggest({name: $event.target.value})">
                    </div>
                </div>
              <datalist id="items" width="100%">
                <option v-for="(value,key) in suggestions" :value="value.suggestion">
                  {{value.suggestion}}
                </option>
              </datalist>
                <button @click="search(filter)" type="button" class="btn btn-primary mr-1"><i
                        class="icon-magnifier"></i></button>
                <button type="button" @click="search({paginate: true,
                per_page: 10,
                page: 1,
                status_option_id: 1,
                type: 1})" class="btn btn-danger"><i class="icon-refresh"></i></button>
            </div>
        </div>
        <div class="row">
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

                            <template v-for="(value,key) in data.data">
                                <tr>
                                    <td class="collapse-title cell-ellipsis" data-toggle="collapse" :data-target="'#collapse'+key" @click="toggleCollapse()">
                                        {{value.name}}
                                        <span class="collapse-icon"><i :class="[key == 0 ? 'fa-chevron-down' : 'fa-chevron-right', 'fa']"></i></span>
                                        <i class="fa fa-star featured-item-label pl-2" title="Featured Item"
                                        v-if="value.has_one_featured_item"></i>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>{{value.total_price}}</strong></td>
                                </tr>
                                <template v-for="(s_value,s_key) in value.has_many_item_stock">
                                    <tr :id="'collapse'+key" class="collapse " :class="{'show': key == 0 }">
                                        <td></td>
                                        <td>{{s_value.item_variant.color_option.name}}</td>
                                        <td>{{s_value.size_option.name}}</td>

                                        <td>{{s_value.price}}</td>

                                        <td><strong>{{s_value.total_sales}}</strong></td>
                                    </tr>
                                </template>
                        </template>
                        </tbody>
                        <tfoot class="tfoot-light">
                        <tr>
                            <td class="pl-4"><strong>Total Sales</strong></td>
                            <td colspan="3"></td>
                            <td>
                                <strong>{{this.data.total_sales}}</strong>
                            </td>
                        </tr>
                        </tfoot>
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
