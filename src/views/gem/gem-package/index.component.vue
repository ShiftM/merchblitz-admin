<template>
  <div class="card-body table-responsive">
    <div class="nav-tabs custom-tabs">
      <div class="nav-item primary">
        <button type="button" @click="search({status_option_id: 1, page: 1}), toggleTab()" class="nav-link "
                :class="{'active': filter.status_option_id == 1 }">Gem Packages
        </button>
      </div>
      <div class="nav-item archive">
        <button type="button" @click="search({status_option_id: 2, page: 1}), toggleTab()" class="nav-link"
                :class="{'active': filter.status_option_id == 2 }">Archive
        </button>
      </div>
    </div>
    <div class="tab-content">
      <div class="col-12 mt-3">
        <router-link :to="{name: 'gems-create' }">
          <button type="button" class="btn btn-success mb-2">
            <i class="fa fa-plus"></i>&nbsp; Add Gem Package
          </button>
        </router-link>

        <div class="input-group">
          <input v-model="filter.name" class="form-control" id="gem" name="gems" size="16" placeholder="Gem package name" list="gems"
                 @input="suggest({name: $event.target.value})" @change="suggest({name: $event.target.value})"
                 @keyup.enter="search()">
          <span class="input-group-append">
                        <button class="btn btn-secondary" type="button" @click="search({})"><i
                          class="icon-magnifier"></i></button>
            <button class="btn btn-danger" @click="clear()"><i class="icon-refresh"></i></button>
                    </span>
          <datalist id="gems" width="100%">
            <option v-for="(value,key) in suggestions.data" :value="value.name">
              {{value.name}}
            </option>
          </datalist>
        </div>
        <div class="col-12 mt-3">
        </div>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th width="15%">SKU</th>
              <th width="35%">Package name</th>
              <th width="20%">Total Number of Gems</th>
              <th width="15%">Price</th>
              <th width="15%">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(value,key) in data.data" v-bind:key="key">
              <td>{{value.code}}</td>
              <td>{{value.name}}</td>
              <td>{{value.amount}}</td>
              <td>{{value.price}}</td>
              <td v-if="filter.status_option_id == 1">
                <router-link tag="a" class="text-primary"
                             :to="{name: 'gems-edit', params: {id: value.id}}">Edit
                </router-link>
                | <a href="#" @click="archive(value.id)" class="text-danger">Archive</a>
              </td>
              <td v-if="filter.status_option_id == 2">
                <a href="#" @click="restore(value.id)" class="text-danger">Restore</a>
              </td>
            </tr>
            </tbody>
          </table>
          <p v-if="data.data.length == 0" class="text-center">
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
