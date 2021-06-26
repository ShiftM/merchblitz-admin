<template>
  <div class="card-body table-responsive">
    <div class="col-lg-12">
      <h5>Add Category</h5>
      <hr>
      <form @submit.prevent="$route.params.id ? update() : store()">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label class="text-danger"> * </label>
              <label>Interest Name</label>
              <input type="text" v-model="data.name" required class="form-control"  :class="{'error-border': getError(errors,'name')}">
              <small v-if="getError(errors,'name')" class="text-danger">{{getError(errors,'name').detail}}</small>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-success float-right">Submit</button>
        <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script src="./form.component.js"></script>
