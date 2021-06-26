<template>
    <div class="table-responsive">
        <div class="tab-content">
            <div class="col-12 mt-3">
                <router-link :to="{name: 'fund-transfer-create' }">
                    <button type="button" class="btn btn-success mb-2">
                        <i class="fa fa-plus"></i>&nbsp; Create Fund Transfer
                    </button>
                </router-link>
              <div class="row mb-3">
                <div class="col-12 d-flex align-items-end">
                  <div class="w-100 mr-4">
                    <label><b>Name/Title</b></label>
                    <input type="text" v-model="filter.account_detail" class="form-control" placeholder="Event title, Booth Name, Username"
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
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th width="25%">Name/Title</th>
                            <th width="25%">Device ID</th>
                            <th width="25%">Type</th>
                            <th width="25%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(value,key) in data.data">
                            <td>{{value.table.name ? value.table.name : value.table.title ? value.table.title : value.table.username}}</td>
                            <td>{{value.account_number}}</td>
                            <td class="text-uppercase">{{value.table_type}}</td>
                            <td>
                                <router-link class="text-primary"
                                             :to="{name: 'balance-inquiry', params: {account_number: value.account_number, type: value.account_identifier}}">Balance Inquiry
                                </router-link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p v-if="data.data.length < 1" class="text-center">
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
</template>

<script src="./index.component.js"></script>
