<template>
  <div class="card-body table-responsive">
    <div class="nav-tabs custom-tabs">
      <div class="nav-item primary">
        <button type="button" @click="search({status_option_id: 1, page: 1}), toggleTab()" class="nav-link"
                :class="{'active': filter.status_option_id == 1 }">List
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
        <router-link :to="{name: 'category-create' }">
          <button type="button" class="btn btn-success mb-2">
            <i class="fa fa-plus"></i>&nbsp; Add Category
          </button>
        </router-link>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Name</th>
              <th>Slug</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(value,key) in data.data">
              <td>{{value.name}}</td>
              <td>{{value.slug}}</td>
              <td v-if="filter.status_option_id == 1">
                <template v-if="value.name != 'Featured'">
                  <router-link tag="a" class="text-primary"
                               :to="{name: 'category-edit', params: {id: value.id}}">Edit
                  </router-link>
                  | <a href="#" @click="archive(value.id)" class="text-danger">Archive</a>
                </template>

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
