<template>
    <div class="card-body table-responsive">
        <div class="nav-tabs custom-tabs">
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 1}), toggleTab()"
                        :class="{'active': filter.type == 1 }">Quest Viewed 
                </button>
            </div>
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 2}), toggleTab()"
                        :class="{'active': filter.type == 2 }">Quest Finished
                </button>
            </div>
        </div>
        <div class="tab-content">
            <div class="container-fluid mt-3 px-3">
                <div class="cell-ellipsis">
                     <h5 class="mb-0" v-if="filter.type == 1">Number of Times Quest has been Viewed</h5>
                    <h5 class="mb-0" v-if="filter.type == 2">Number of Times Quest has been Finished</h5>
                </div>
                <!-- <hr> -->
                <div class="row mb-3">
                    <!-- <div class="col-6"> -->
                        <!--<label><b>Event</b></label>-->
                        <!--<span class="text-danger"> *</span>-->
                      <!--<select name="event" required-->
                              <!--class="form-control" v-model="eventFilter.event_id" @change="questList()">-->
                        <!--<option value="">Choose Event</option>-->
                        <!--<option v-for="(value,key) in events" :value="value.id">{{value.title}}</option>-->

                      <!--</select>-->
                      <!-- <div class="w-100 mr-4">
                        <label><b>Event</b></label>
                        <input type="text" v-model="eventFilter.event_detail" class="form-control" placeholder="Event Title"
                               list="users" @input="suggest({name: $event.target.value})"
                               @change="suggest({name: $event.target.value})"
                               @keyup.enter="search()">
                      </div> -->

                      <!-- <datalist id="users" width="100%">
                        <option v-for="(value,key) in suggestions" :value="value.suggestion">
                          {{value.suggestion}}
                        </option>
                      </datalist> -->
                    <!-- </div> -->
                    <!-- <div class="col-6 d-flex align-items-end">
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
                        <button class="btn btn-primary mr-1" @click="search(filter)"><i class="icon-magnifier"></i></button>
                        <button class="btn btn-danger" @click="clear()"><i class="icon-refresh"></i></button>
                    </div> -->
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th width="20%">Quest name</th>
                                    <th width="60%">Description</th>
                                    <th width="20%" v-if="filter.type == 1">No. of times viewed</th>
                                    <th width="20%" v-if="filter.type == 2">No. of times finished</th>
                                </tr>
                                </thead>
                                <tbody>
                                     <tr v-for="(value,key) in data.data">
                                        <td>{{value.title}}</td>
                                        <td>{{value.description}}</td>
                                        <td>{{value.count}}</td>
                                    </tr>
                                </tbody>
                            </table>
                          <p v-if="data.data && data.data.length == 0" class="text-center">
                            <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records found
                          </p>

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
