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
          Records
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
                <th width="5%">id</th>
                <th width="10%">Store Branch</th>
                <th width="10%">Store Name</th>
                <th width="10%">Owner</th>
                <th width="20%">Address</th>
                <th width="10%">Poster</th>
                <th width="10%">Grill Talker</th>
                <th width="5%">Wall Sticker</th>
                <th width="5%">Cash Mat</th>
                <th width="10%">Awning</th>
                <th width="10%">Store Signage</th>
                <th width="10%">Products</th>
                <th width="10%">Created At</th>

                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(value, key) in data.data">
                <tr>
                  <td>
                    {{ value.id }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.store_branch }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.store_name }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.store_owner_name }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.street + ", " + value.town_city }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.poster }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.grill_talker }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.wall_sticker }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.cash_mat }}
                  </td>

                  <td class="cell-ellipsis">
                    {{ value.awning }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.store_signage }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.product_name }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.created_at }}
                  </td>
                  <td>
                    <template>
                      <router-link
                        :to="{
                          name: 'administrator-edit',
                          params: { id: value.id },
                        }"
                        tag="a"
                      >
                        Edit Info
                      </router-link>
                      |
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

          <paginate
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
          ></paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.component.js"></script>
