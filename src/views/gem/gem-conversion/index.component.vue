<template>
  <div class="card-body table-responsive">
    <div class="row">
      <div class="col-12">
        <div>
          <p class="m-0 font-weight-bold">To change the conversion rate, please login to Oktopay’s portal</p>
          <p class="m-0">Link: <i>https://admin.iamokto.com/portal/admin</i></p>
          <p class="m-0">Username: <i>admin@questrewards.com</i></p>
          <p>Password: <i>questrewards2020</i></p>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th width="50%">QR Gem Value</th>
                <th width="50%">QR Qoin Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{data.base_currency}}</td>
                <td>{{data.conversion_rate}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.component.js"></script>
