<template>
    <div class="card-body">
        <div class="nav-tabs custom-tabs">
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 'Item'}), toggleTab()"
                        :class="{'active': filter.type == 'Item' }">Items
                </button>
            </div>
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 'Gem'}), toggleTab()"
                        :class="{'active': filter.type == 'Gem' }">Gems
                </button>
            </div>
        </div>
        <div class="tab-content">
            <div class="container-fluid mt-3 px-3">
                <div class="collapse-title cell-ellipsis filters-collapse" data-toggle="collapse" data-target="#collapse" @click="toggleFilterCollapse()">
                     <h5 class="mb-0" v-if="filter.type == 'Item'">Sales by Customer Name - Items</h5>
                    <h5 class="mb-0" v-if="filter.type == 'Gem'">Sales by Customer Name - Gems</h5>
                    <span class="collapse-icon filter"><span class="mr-2">Show Filters</span><i class="fa fa-chevron-right"></i></span>
                </div>
                <form action="" class="form-inline row collapse filters-cont" id="collapse">
                    <div class="col-12">
                        <hr>
                        <small><b>Search Filters</b></small>
                    </div>
                    <div class="col-12 mt-3 form-group d-flex flex-row justify-content-between">
                        <VueCtkDateTimePicker class="pr-2" v-model="filter.date_from"
                                                :only-date="demo[0].options.onlyDate"
                                                :format="demo[0].options.dateFormat"
                                                :formatted="demo[0].options.dateFormatted"
                                                :label="demo[0].options.dateFrom"
                                              @input="dateValidation(filter.date_from,filter.date_to)"
                        />
                        <VueCtkDateTimePicker class="px-2" v-model="filter.date_to"
                                                :only-date="demo[0].options.onlyDate"
                                                :format="demo[0].options.dateFormat"
                                                :formatted="demo[0].options.dateFormatted"
                                                :label="demo[0].options.dateTo"
                                              @input="dateValidation(filter.date_from,filter.date_to)"
                        />
                        <button class="btn btn-danger form-control ml-2"  @click="clear()"><i class="icon-refresh"></i></button>
                    </div>
                  <div class="col-sm-12">
                    <small v-if="!validDate" class="text-danger">Invalid date range</small>
                  </div>
                  <!-- <div class="col-5 mt-3 form-group">
                  </div> -->
                    <!-- <div class="col-1 mt-3 d-flex"> -->
                        <!-- <button class="btn btn-primary form-control w-100 mr-1">Apply Filter</button> -->
                    <!-- </div> -->
                </form>
                <hr>
                <div class="row mb-3">
                    <div class="col-12 d-flex align-items-end">
                        <div class="w-100 mr-4">
                            <label><b>User</b></label>
                            <span class="text-danger"> *</span>
                            <input type="text" v-model="filter.user_detail" class="form-control" placeholder="Phone Number, Email"
                                   list="users" @input="suggest({name: $event.target.value})"
                                   @change="suggest({name: $event.target.value})"
                                   @keyup.enter="search()">
                        </div>

                      <datalist id="users" width="100%">
                        <option v-for="(value,key) in suggestions" :value="value.suggestion">
                          {{value.suggestion}}
                        </option>
                      </datalist>
                        <button class="btn btn-primary mr-1" @click="search()"><i class="icon-magnifier"></i></button>
                        <button class="btn btn-danger" @click="clear()"><i class="icon-refresh"></i></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <template v-if="filter.type === 'Item'">
                                        <th width="25%">Item Code</th>
                                        <th width="53%">Item Name</th>
                                    </template>
                                    <template v-if="filter.type === 'Gem'">
                                        <th width="25%">Gem Package Code</th>
                                        <th width="53%">Gem Package Name</th>
                                    </template>
                                    <th width="15%">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(value,key) in data.data">
                                    <template v-if="filter.type === 'Item'">
                                        <td>{{value.item_stock.sku}}</td>
                                        <td>{{value.item_stock.item.name}}</td>
                                        <td>{{value.sub_total}} </td>
                                    </template>
                                    <template v-if="filter.type === 'Gem'">
                                      <td>{{value.gem_package.code}}</td>
                                      <td>{{value.gem_package_name}}</td>
                                      <td>{{value.gem_package_price}}</td>
                                    </template>
                                </tr>
                                </tbody>
                            </table>
                            <div class="float-right">
                              <span><b>Total Price: </b></span><h3 class="d-inline-block font-weight-normal">{{data.data.length > 0 ? Number(data.data[0].total_price).toLocaleString() : 0}}</h3>
                            </div>
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
        </div>
    </div>
</template>

<script src="./index.component.js"></script>
