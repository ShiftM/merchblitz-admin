<template>
  <div class="card">
    <div class="card-header">
      <strong>{{e_info.title}}</strong>
    </div>
    <div class="card-body">
      <form action>
        <div class="row">
          <div class="col-sm-12">
            <label>List of booths</label>
          </div>
          
          <div class="col-sm-10">
            <div class="form-group">
              <select class="form-control" v-model="selected">
                <option v-for="(booth, boothKey) in data" :key="boothKey" v-bind:value="{ id: booth.id}">{{booth.name}}</option>
              </select>
            </div>
          </div>
          <div class="col-sm-2">
              <div class="form-group">
                <button type="button" @click="addBooth" class="btn btn-success form-control float-right">Add</button>
              </div>
          </div>
        </div>
        
      </form>
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Booth/Exhibitor name</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(eb, ebkey) in events_booths.data" :key="ebkey">
            <td style="vertical-align: middle;">{{eb.booth.name}}</td>
            <td >
                <button type="button" class="btn btn-danger" @click="removeBooth(eb.id, eb.booth.name)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <paginate
        v-if="page_count > 1"
        v-model="currentPage"
        :page-count="page_count"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :next-class="'page-link'"
        :prev-class="'page-link'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :click-handler="getEventBooths"
      ></paginate>
    </div>
  </div>
</template>

<script src="./assign.component.js"></script>
