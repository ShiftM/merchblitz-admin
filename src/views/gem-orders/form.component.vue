<template>
  <div class="card-body table-responsive">
    <form @submit.prevent="update()">
      <table class="table table-borderless">
        <tbody>
        <tr>
          <td>Order Number</td>
          <td><strong>{{data.order_number}}</strong></td>
        </tr>
        <tr>
          <td>Order Date</td>
          <td><strong>{{data.created_at}}</strong></td>
        </tr>
        <tr>
          <td>Customer Name</td>
          <td><strong>{{data.has_one_order_recipient.full_name}}</strong></td>
        </tr>
        <tr>
          <td>Contact Number</td>
          <td><strong>{{data.has_one_order_recipient.phone_number}}</strong></td>
        </tr>
        <tr>
          <td>Contact Email</td>
          <td><strong>{{data.has_one_order_recipient.email_address}}</strong></td>
        </tr>
        <!--<tr>-->
        <!--<td>Currency Type</td>-->
        <!--<td><strong>Coins</strong></td>-->
        <!--</tr>-->
        <tr>
          <td class="pt-3">Order Status</td>
          <td>
            <strong>  {{data.status_option.name}}</strong>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="col-12">
        <h4>Order Summary</h4>
        <div class="table-responsive">
          <table class="table">
            <thead>
            <tr>
              <th width="15%">Package Name</th>
              <th width="15%">Package Amount</th>
              <th width="15%">Package Price</th>
              <th width="15%">Package Total</th>
            </tr>
            </thead>
            <tbody>
            <tr >

              <td>{{data.has_one_gem_order_detail.gem_package_name}}</td>
              <td>{{data.has_one_gem_order_detail.gem_package_amount}}</td>
              <td>{{data.has_one_gem_order_detail.gem_package_price}}</td>
              <td>{{data.has_one_gem_order_detail.gem_package_price}}</td>

            </tr>
            </tbody>
            <tfoot class="tfoot-light">
            <tr>
              <td><strong>Total</strong></td>
              <td colspan="2"></td>
              <td>
                <strong>{{data.has_one_order_total.grand_total}}</strong>
              </td>
            </tr>
            </tfoot>
          </table>

          <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Close</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./form.component.js"></script>
