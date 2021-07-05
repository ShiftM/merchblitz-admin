<template>
  <div class="card-body table-responsive">
    <!-- <router-link :to="{ name: 'administrator-create' }">
      <button type="button" class="btn btn-success mb-2 add-button">
        <i class="fa fa-plus"></i>&nbsp; Add Product
      </button>
    </router-link> -->
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
          Cigarrete Variants
        </button>
      </div>
    </div>
    <div class="tab-content">
      <div class="col-12 mt-3">
        <div class="input-group">
          <!-- <input
            v-model="filter.name"
            class="form-control"
            id="item"
            name="items"
            size="16"
            placeholder="Administrator name"
            list="items"
            @input="suggest({ name: $event.target.value })"
            @change="suggest({ name: $event.target.value })"
            @keyup.enter="search()"
          /> -->
          <span class="input-group-append">
            <!-- <button class="btn btn-secondary" type="button" @click="search({})">
              <i class="icon-magnifier"></i>
            </button> -->
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
                <th width="20%">Cigarrete Variant</th>
                <th width="10%">Created At</th>
                <th width="10%">Updated At</th>
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
                    {{ value.product_name }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.created_at }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.updated_at }}
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
