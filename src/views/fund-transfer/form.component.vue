<template>
    <div class="card-body table-responsive">
        <div class="col-12">
            <form @submit.prevent="store()">
              <div class="row">
                <div class="col-sm-10">
                  <div class="form-group">
                    <label>Source</label>
                    <select required class="form-control" v-model="data.source.account_number" @change="getLists()">
                      <option value="">Select Source</option>
                      <option value="0010044834434504">Quest Rewards (Admin) - 0010044834434504</option>
                      <option v-for="(index, key ) in source_wallets" v-if="index.table_type !== 'users'" :key="key" v-bind:value="index.account_number">
                        {{index.table.name ? index.table.name : index.table.title ? index.table.title : index.table.username}} ({{index.table_type}}) - {{index.account_number}}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <div class="form-group">
                    <label>Destination</label>
                    <select required class="form-control" v-model="data.destination.account_number">
                      <option value="">Select Destination</option>
                      <option v-for="(index, key ) in destination_wallets" :key="key" v-bind:value="index.account_number">
                        {{index.table.name ? index.table.name : index.table.title ? index.table.title : index.table.username}} ({{index.table_type}}) - {{index.account_number}}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <div class="form-group">
                    <label>Amount</label>
                    <input required type="number" class="form-control" v-model="data.amount"/>
                  </div>
                </div>
              </div>
              <div class="row" v-if="errors.length > 0">
                <div class="col-sm-10 ">
                  <div class="form-group alert alert-danger">
                    <div v-for="(value,key) in errors"> {{value.detail}}</div>
                  </div>
                </div>
              </div>
              <div class="col-10 mt-2">
                <button type="submit" class="btn btn-success float-right">Submit</button>
                <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel</button>
              </div>
            </form>            
        </div>
    </div>
</template>

<script src="./form.component.js"></script>
