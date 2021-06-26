<template>
  <div class="card-body table-responsive">
    <div class="col-12">
      <h5>Add Voucher</h5>
      <hr>
      <form @submit.prevent="$route.params.id ? update() : store()">
        <div class="row">
          <div class="col-12 mb-2">
            <label>Voucher Name</label>
            <span class="text-danger"> *</span>
            <input type="text" v-model="data.name" required class="form-control"
                    :class="{'error-border': getError(errors,'name')}">
            <small v-if="getError(errors,'name')" class="text-danger">{{getError(errors,'name').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Voucher Code</label>
            <span class="text-danger"> *</span>
            <input type="text" v-model="data.code" class="form-control"
                    :class="{'error-border': getError(errors,'code')}">
            <small v-if="getError(errors,'code')" class="text-danger">{{getError(errors,'code').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Voucher Type</label>
            <span class="text-danger"> *</span>
            <select class="form-control" v-model="data.voucher_type_id">
              <option v-for="(voucher, key) in voucherType" :key="key" v-bind:value="voucher.id">{{voucher.name}}</option>
            </select>
            <small v-if="getError(errors,'voucher_type_id')" class="text-danger">{{getError(errors,'voucher_type_id').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Currency Type</label>
            <span class="text-danger"> *</span>
            <select class="form-control" v-model="data.currency_type_id">
              <option v-for="(currency, key) in currencyType" :key="key" v-bind:value="currency.id">{{currency.name}}</option>
            </select>
            <small v-if="getError(errors,'currency_type_id')" class="text-danger">{{getError(errors,'currency_type_id').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Minimum Amount</label>
            <span class="text-danger"> *</span>
            <input min="1" type="number" v-model="data.minimum_amount" class="form-control"
                    :class="{'error-border': getError(errors,'minimum_amount')}">
            <small v-if="getError(errors,'minimum_amount')" class="text-danger">{{getError(errors,'minimum_amount').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Number of Uses</label>
            <span class="text-danger"> *</span>
            <input  min="1" type="number" v-model="data.number_of_use" class="form-control"
                    :class="{'error-border': getError(errors,'number_of_use')}">
            <small v-if="getError(errors,'number_of_use')" class="text-danger">{{getError(errors,'number_of_use').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Uses per Customer</label>
            <span class="text-danger"> *</span>
            <input  min="1" type="number" v-model="data.use_per_customer" class="form-control"
                    :class="{'error-border': getError(errors,'use_per_customer')}">
            <small v-if="getError(errors,'use_per_customer')" class="text-danger">{{getError(errors,'use_per_customer').detail}}</small>
          </div>
          <div class="col-12 mb-2">
            <label>Voucher Expiration Date</label>
            <VueCtkDateTimePicker :min-date="config.min_date" v-model="data.expiration" minute-interval="15" format="YYYY-MM-DD h:mm a" id="DateTimePicker"/>
            <small v-if="getError(errors,'expiry_date')" class="text-danger">{{getError(errors,'expiry_date').detail}}</small>
          </div>
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
