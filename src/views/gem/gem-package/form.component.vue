<template>
  <div class="card-body table-responsive">
    <div class="col-12">
      <form @submit.prevent="$route.params.id ? update() : store()">
        <div class="row">
          <div class="col-12 mb-2">
            <label>Package Name</label>
            <span class="text-danger"> *</span>
            <input type="text" v-model="data.name" required class="form-control"  :class="{'error-border': getError(errors,'name')}">
            <small v-if="getError(errors,'name')" class="text-danger">{{getError(errors,'name').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Total Number of QR Gems</label>
            <span class="text-danger"> *</span>
            <input type="text" @keyup="isNumber($event)" v-model="data.amount" required class="form-control"  :class="{'error-border': getError(errors,'amount')}">
            <small v-if="getError(errors,'amount')" class="text-danger">{{getError(errors,'amount').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Description</label>
            <span class="text-danger"> *</span>
            <textarea name="description" type="text" required v-model="data.description"
                        class="form-control"
                        :class="{'error-border': getError(errors,'description')}">
            </textarea>
            <small v-if="getError(errors,'description')" class="text-danger">{{getError(errors,'description').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Price</label>
            <span class="text-danger"> *</span>
            <input min="1" name="price" type="number" v-model="data.price"
                    required
                    class="form-control"
                    :class="{'error-border': getError(errors,'price')}">
            <small v-if="getError(errors,'price')" class="text-danger">{{getError(errors,'price').detail}}</small>
          </div>
<!--          <div class="col-12 mb-2">-->
<!--            <label>SKU</label>-->
<!--            <span class="text-danger"> *</span>-->
<!--            <input :disabled="!is_new" name="sku" type="text"-->
<!--                    v-model="data.code" required-->
<!--                    class="form-control"-->
<!--                    :class="{'error-border': getError(errors,'code')}">-->
<!--            <small v-if="getError(errors,'code')" class="text-danger">{{getError(errors,'code').detail}}</small>-->
<!--          </div>-->
          <div class="col-12 mt-2">
            <button type="submit" class="btn btn-success float-right">Submit</button>
            <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./form.component.js"></script>
