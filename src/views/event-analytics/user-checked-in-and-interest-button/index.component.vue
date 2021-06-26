<template>
    <div class="card-body table-responsive">
        <div class="nav-tabs custom-tabs">
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 1}), toggleTab()"
                        :class="{'active': filter.type == 1 }">Clicked Interest Button, No Quest Done
                </button>
            </div>
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 2}), toggleTab()"
                        :class="{'active': filter.type == 2 }">Finished Quest, User Checked In
                </button>
            </div>
            <div class="nav-item primary">
                <button type="button" class="nav-link" @click="search({status_option_id: 1, page: 1, type: 3}), toggleTab()"
                        :class="{'active': filter.type == 3 }">User Checked In, No Quest Done
                </button>
            </div>
        </div>
        <div class="tab-content">
            <div class="container-fluid mt-3 px-3">
                <div class="cell-ellipsis">
                    <div v-if="filter.type == 1" class="tab-content-header">
                        <h5 class="mb-0">Clicked Interest Button, No Quest Done</h5>
                        <span>No. of Users:  {{data.total}}</span>
                    </div>
                    <div v-if="filter.type == 2" class="tab-content-header">
                        <h5 class="mb-0">Finished Quest, User Checked In</h5>
                        <span>No. of Users:  {{data.total}}</span>
                    </div>
                    <div v-if="filter.type == 3" class="tab-content-header">
                        <h5 class="mb-0">User Checked In, No Quest Done</h5>
                        <span>No. of Users: {{data.total}}</span>
                    </div>
                </div>
                <hr>
                <div class="row mb-3">
                    <div class="col-12 d-flex align-items-end">
                        <div class="w-100 mr-4">
                            <label><b>Event</b></label>
                            <div class="d-flex">
                                <select name="quest" required
                                        class="form-control" v-model="filter.eventId">
                                  <option value="">All</option>
                                    <option  v-for="(value,key) in events" :value="value.id">{{value.title}}</option>

                                </select>
                            </div>
                        </div>
                        <button class="btn btn-primary mr-1" @click="search(filter)"><i class="icon-magnifier"></i></button>
                        <button class="btn btn-danger" type="button" @click="clear(filter)"><i class="icon-refresh"></i></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                         <!-- <div>
                            <small>Filters: </small>
                            <div>Ages 18-40</div>
                            <div>Male</div>
                            <div>Manila</div>
                        </div> -->
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
                                    <th width="15%">Event</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr v-for="(value,key) in data">
                                        <td>{{value.name}}</td>
                                        <td>{{value.count}}</td>
                                    </tr> -->
                                    <tr v-for="(value,key) in data.data">
                                        <td class="cell-wordbreak">
                                            <p>{{value.user.username}}</p>
                                        </td>
                                        <td>{{value.user.country_code}}{{value.user.phoneNumber}}</td>
                                        <td class="cell-wordbreak">
                                            <p>{{value.user.email}}</p>
                                        </td>
                                        <td>{{value.user.gender}}</td>
                                        <td>{{value.user.birthday}}</td>
                                        <td>{{value.user.age}}</td>
                                        <td class="cell-wordbreak">
                                            <p v-if="value.user.has_one_user_address"> {{value.user.has_one_user_address.complete_address}}</p>
                                        </td>
                                        <td class="cell-wordbreak">
                                          {{ value.table ? value.table.title : value.event.title }}
                                          <!--<p><template v-for="(value,key) in value.user.has_many_user_interest" >-->
                                            <!--{{value.user.interest_option.name}}-->
                                          <!--</template></p>-->
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
        </div>
    </div>
</template>

<script src="./index.component.js"></script>
