<template>
  <div class="card-body table-responsive">
    <!--<form action="">-->
    <!-- <div class="input-group">
      <div class="input-group-prepend">
        <select @change="search()" class="form-control input-group-text" v-model="filter.status_option_id">
          <option v-for="(list, key) in status" :key="key" v-bind:value="list.id">{{list.name}}</option>
        </select>
      </div>
      <input class="form-control" id="order" name="orders" autocomplete="off" size="16"
             placeholder="Order Number, Customer Name" list="orders" v-model="filter.keyword"
             @input="suggest({name: $event.target.value})" @change="suggest({name: $event.target.value})"
             @keyup.enter="search()">
      <span class="input-group-append">
          <button class="btn btn-secondary" type="button" @click="search({})"><i
            class="icon-magnifier"></i></button>
        <button class="btn btn-danger" @click="clear()"><i class="icon-refresh"></i></button>
                </span>
      <datalist id="orders" width="100%">
        <option v-for="(value,key) in suggestions" :value="value.suggestion">
          {{value.suggestion}}
        </option>
      </datalist>
    </div> -->
    <table class="table table-bordered mt-3">
      <thead>
      <tr>
        <th width="10%">Quest Id</th>
        <th width="20%">Quest Name</th>
        <th width="10%">Points</th>
        <th width="25%">Description</th>
        <th width="10%">Event Id</th>
        <th width="10%">Date Created</th>
        <!-- <th width="15%">Action</th> -->
      </tr>
      </thead>
      <tbody>
      <tr v-for="(order, key) in data.data.data.data" :key="key">
        <td>{{ order.id }}</td>
        <td>{{ order.title }}</td>
        <td>{{ order.points }}</td>
        <td>{{ order.description }}</td>
        <td>{{ order.eventId }}</td>
        <td>{{ order.createdAt }}</td>
        <!-- <td>{{order.status_option.name}}</td> -->
        <!-- <td>
          <router-link :to="{ name: 'order-details', params: { id: order.id }}">View</router-link>
            | <router-link :to="{ name: 'BoothEdit', params: { id: booth.id }}">Change Status</router-link>   
        </td> -->
      </tr>
      </tbody>
    </table>

    <div class="screen-states text-center">
      <spinner v-if="loading"></spinner>
      <p v-if="data.length == 0 && !loading">
        <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records found
      </p>
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
    <!--</form>-->
  </div>
</template>

<script src="./index.component.js"></script>
