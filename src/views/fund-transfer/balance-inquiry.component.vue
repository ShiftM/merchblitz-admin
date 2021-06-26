<template>
    <div class="table-responsive">
      <button class="btn mr-3" @click="$router.go(-1)"><i class="fa fa-arrow-circle-left"></i> Back</button>

      <div class="col-12 mb-5">
        <h1 class="text-center mb-4">Available Balance</h1>
        <div class="row text-center">
          <!--Number(data.data[0].total_price).toLocaleString()-->
          <div class="card w-25 m-auto" v-for="(value,key) in balance.anonymous_wallets" v-if="value.currency_code!=='PHP'">
            <h1>{{(value.available_balance / 100) > 0 ? Number((value.available_balance / 100)).toLocaleString() : 0 }}</h1>
            <h5>{{value.currency_code}}</h5>
          </div>
        </div>
      </div>
      <div class="tab-content">
          <div class="col-12 mt-3">
            <div>
              <small class="text-danger">Note*</small><small> Wallet logs are available via Oktopay, login by going to:</small>
              <p class="m-0">Link: <i>https://admin.iamokto.com/portal/admin</i></p>
              <p class="m-0">Username: <i>admin@questrewards.com</i></p>
              <p>Password: <i>questrewards2020</i></p>
            </div>
            <h4>Transaction Logs</h4>
            <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>Action</th>
                            <th>Amount</th>
                            <th>Source Available Balance</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(value,key) in history_logs.content">
                            <td>{{value.action}}</td>
                          <td>{{(value.amount / 100) > 0 ? (value.amount / 100) : 0 }}</td>
                          <td>{{(value.source_available_balance / 100) > 0 ? Number((value.source_available_balance / 100)).toLocaleString() : 0 }}</td>
                        </tr>
                        </tbody>
                    </table>
                    <p v-if="history_logs.content.length === 0" class="text-center">
                        <i class="fa fa-folder-open-o" aria-hidden="true"></i> No records found
                    </p>

                    <paginate v-if="toPageCount((history_logs.total_elements), history_logs.size ) > 1"
                            v-model="filter.page"
                            :page-count="toPageCount((history_logs.total_elements), history_logs.size )"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination'"
                            :next-class="'page-link'"
                            :prev-class="'page-link'"
                            :page-class="'page-item'"
                            :page-link-class="'page-link'"
                            :click-handler="paginate">

                    </paginate>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./balance-inquiry.component.js"></script>
