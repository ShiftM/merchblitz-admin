<template>
  <div class="card-body table-responsive">
    <div class="nav-tabs custom-tabs">
      <div class="nav-item primary">
        <button
          type="button"
          @click="
            search({ status_option_id: 1, page: 1, has_featured: false }),
              toggleTab()
          "
          class="nav-link"
          :class="{
            active: !filter.has_featured && filter.status_option_id == 1,
          }"
        >
          Locations/Areas
        </button>
      </div>
    </div>
    <div class="tab-content">
      <div class="col-12 mt-3">
        <div class="input-group">
          <span class="input-group-append">
            <button class="btn btn-danger" @click="clear()">
              <i class="icon-refresh"></i>
            </button>
          </span>
          <datalist id="items" width="100%">
            <option
              v-for="(value, key) in suggestions.data"
              :value="value.name"
              @click="search({})"
            />
          </datalist>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th width="25%">Province</th>
                <th width="25%">City</th>
                <th width="25%">Created At</th>
                <th width="25%">Actions</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(value, key) in data.data">
                <tr>
                  <td>
                    {{ value.province }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.city }}
                  </td>
                  <td class="cell-ellipsis">
                    2021-07-10T07:16:09.000000Z
                    <!-- {{ value.created_at }} -->
                  </td>
                  <td>
                    <template>
                      <!-- <router-link
                        :to="{
                          name: 'administrator-edit',
                          params: { id: value.id },
                        }"
                        tag="a"
                      >
                        Edit Info
                      </router-link>
                      | -->
                      <a
                        href="#"
                        @click="archive(value.id)"
                        class="text-danger"
                      >
                        Delete</a
                      >
                    </template>
                    <template v-if="filter.status_option_id == 2">
                      <a href="#" @click="restore(value.id)"> Restore</a>
                    </template>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <p v-if="data.total == 0" class="text-center">
            <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records
            found
          </p>
        </div>
        <!-- <paginate
          v-model="filter.page"
          :page-count="toPageCount(data.total, data.per_page)"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :next-class="'page-link'"
          :prev-class="'page-link'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :click-handler="paginate"
        ></paginate> -->
      </div>
    </div>
  </div>
</template>

<script src="./index.component.js"></script>
