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
          <!-- <span class="input-group-append">
            <button class="btn btn-danger" @click="list(this.filter)">
              <i class="icon-refresh"></i>
            </button>
          </span> -->
          <!-- <datalist id="items" width="100%">
            <option
              v-for="(value, key) in suggestions.data"
              :value="value.name"
              @click="search({})"
            />
          </datalist> -->
          <vue-excel-xlsx
            :data="middledata.data"
            :columns="columns"
            :filename="'Merchblitz_Extracted_' + Date.now()"
            :sheetname="'sheetname'"
          >
            Download All Reports
          </vue-excel-xlsx>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div class="row">
          <div class="col-lg-6 col-12">
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
          <div class="col-lg-6 col-12">
            <div class="row">
              <div class="col">
                <input
                  type="email"
                  v-model="filter.per_page"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="col">
                <button class="btn btn-danger" @click="reload()">
                  <i class="icon-refresh"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th width="1%">Record id</th>
                <th width="1%">Store Branch</th>
                <th width="1%">Store Name</th>
                <th width="1%">Owner</th>
                <th width="5%">Street</th>
                <th width="5%">Town/City</th>
                <th width="1%">Contact Number</th>
                <th width="1%">Banner</th>
                <th width="1%">Poster</th>
                <th width="1%">Flange</th>
                <th width="1%">Grill Talker</th>
                <th width="1%">Wall Sticker</th>
                <th width="5%">Cash Mat</th>
                <th width="5%">Awning</th>
                <th width="5">Store Signage</th>
                <th width="10%">Products</th>
                <th width="10%">Reported By</th>
                <th width="10%">Created At</th>
                <th width="10%">Location</th>
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
                    {{ value.street }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.town_city }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.contact_number }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.banner }}
                  </td>
                  <td class="cell-ellipsis">
                    {{ value.poster }}
                  </td>
                  <td class="cell-ellipsis">0 {{ value.flange }}</td>
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
                  <td v-if="value.products != []" class="cell-ellipsis">
                    <div class="column" style="display: flex">
                      <div
                        v-for="(item, key) in value.products[0].slice(0, 5)"
                        :key="item.id"
                      >
                        <div
                          style="
                            min-width: 200px;
                            padding: 10px;
                            margin: 3px;
                            border-radius: 2px;
                            border-style: solid;
                            border-color: grey;
                            border-width: 1px;
                          "
                        >
                          id: {{ item.id }} {{ item.title }} <br />
                          Price: PHP {{ item.price }} <br />
                          Sold Per Week: {{ item["packs-sold"] }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="cell-ellipsis">
                    <div style="min-width: 100px; margin: 3px">
                      id: {{ value.report_by }}
                    </div>
                  </td>
                  <td class="cell-ellipsis">
                    <div style="min-width: 250px">
                      {{ value.created_at }} <br />
                      (Philippine Standard Time)
                    </div>
                  </td>
                  <td class="cell-ellipsis">
                    <div style="min-width: 140px">
                      Long:
                      {{ value.long != null ? value.long : "Not Recorded" }}
                      <br />
                      Lat: {{ value.lat != null ? value.lat : "Not Recorded" }}
                    </div>
                  </td>
                  <td>
                    <template>
                      <router-link
                        :to="{
                          name: 'records-view',
                          params: { id: value.id, data: value },
                        }"
                        tag="a"
                      >
                        See Images
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
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.component.js"></script>
