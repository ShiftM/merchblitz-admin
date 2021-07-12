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
          Inventories
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
                <th width="1%">Record id</th>
                <th width="1%">Store id</th>
                <th width="1%">Product id</th>
                <th width="1%">Price</th>
                <th width="5%">Availability</th>
                <th width="5%">Pack Sold Per Week</th>
                <th width="10%">Created At</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(value, key) in data.data">
                <tr>
                  <td>
                    {{ value.record_id }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.product_id }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.store_id }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.price }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.availability }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.packs_sold_per_week }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.created_at }}
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
</template>

<script src="./index.component.js"></script>
