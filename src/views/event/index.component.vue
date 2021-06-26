<template>
  <div class="card">
    <div class="card-header">
      <div class="row h-100 align-items-center">
        <div class="col-6">
          <i class="icon-grid"></i> Events
        </div>
        <div class="col-6 text-right">
          <router-link :to="{name: 'event-create' }">  <button type="button" class="btn btn-success">
            <i class="fa fa-plus"></i>&nbsp; Add Event
          </button></router-link>
        </div>
      </div>
    </div>

    <div class="card-body">

        <div class="row mb-3">
        <div class="col-4">
          <!--<input type="text" class="form-control dp-height-custom" v-model="filter.name" placeholder="Organizer, Title">-->
          <div class="input-group">
            <input v-model="filter.name" class="form-control" name="eventList" size="16" placeholder="Organizer, Title" list="eventList"
                   @input="suggest({name: $event.target.value})" @change="suggest({name: $event.target.value})"/>
            <datalist id="eventList" width="100%">
              <option v-for="(value,key) in suggestions" :value="value.suggestion">
                {{value.suggestion}}
              </option>
            </datalist>
          </div>
        </div>
        <div class="col-5">
          <div class="row">
            <div class="col-6">
              <VueCtkDateTimePicker v-model="filter.date_from"
                                    :only-date="demo[0].options.onlyDate"
                                    :format="demo[0].options.dateFormat"
                                    :formatted="demo[0].options.dateFormatted"
                                    :label="demo[0].options.dateFrom"
              />
            </div>
            <div class="col-6">
              <VueCtkDateTimePicker v-model="filter.date_to"
                                    :only-date="demo[0].options.onlyDate"
                                    :format="demo[0].options.dateFormat"
                                    :formatted="demo[0].options.dateFormatted"
                                    :label="demo[0].options.dateTo"
              />
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row">
            <div class="col-6">
                <!--<button class="btn btn-primary form-control dp-height-custom text-capitalize" :disabled="date.from == null || date.to == null" @click="getFilterEvents(date.from, date.to)">search</button>-->
                <button class="btn btn-primary form-control dp-height-custom text-capitalize" @click="search({})">search</button>
            </div>
            <div class="col-6">
                <button class="btn btn-danger form-control dp-height-custom text-capitalize"  @click="clearFilter()">clear</button>
            </div>
          </div>

        </div>
      </div>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Organizer</th>
            <th>Title</th>
            <th>Date</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>

        <tr v-for="mod in data.data">
          <td>{{mod.name}}</td>
          <td>{{mod.title}}</td>
          <td>{{mod.startDate}}</td>
          <td>
            <router-link :to="{ name: 'event-qr-code', params: { id: mod.code }}">View QR Code</router-link> |
            <router-link :to="{ name: 'event-assign-booth', params: { id: mod.id }}">Assign Booth</router-link> | 
            <router-link :to="{ name: 'event-assign-company', params: { id: mod.id }}">Assign Company</router-link> | 
            <router-link :to="{ name: 'event-edit', params: { id: mod.id }}">Edit</router-link> | <a href="javascript:void(0)" @click="changeStatus(mod.id, mod.title, mod.deletedAt ? 'activate' : 'deactivate')">{{ mod.deletedAt ? 'Activate' : 'Deactivate'}}</a></td>
        </tr>
        </tbody>
      </table>
      <div class="screen-states text-center">
        <spinner v-if="loading"></spinner>
        <p v-if="data.data.length == 0 && !loading">
          <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records found
        </p>
      </div>
      <paginate v-if="toPageCount(data.total, data.perPage ) > 1"
                v-model="filter.page"
                :page-count="toPageCount(data.total, data.perPage )"
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
</template>

<script src="./index.component.js"></script>
