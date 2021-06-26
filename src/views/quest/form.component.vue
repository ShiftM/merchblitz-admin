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
          <td>Shipping Address</td>
          <td><strong>{{data.has_one_order_shipping.house_number}} {{data.has_one_order_shipping.street}}
            {{data.has_one_order_shipping.barangay}} {{data.has_one_order_shipping.zip_code}}
            {{data.has_one_order_shipping.city}},
            {{data.has_one_order_shipping.province}}, {{data.has_one_order_shipping.country}}</strong></td>
        </tr>
        <tr>
          <td>Contact Number</td>
          <td><strong>{{data.has_one_order_recipient.phone_number}}</strong></td>
        </tr>
        <!--<tr>-->
        <!--<td>Currency Type</td>-->
        <!--<td><strong>Coins</strong></td>-->
        <!--</tr>-->
        <tr>
          <td class="pt-3">Order Status</td>
          <td>
            <div class="input-group" style="width: 15%;">
              <select class="form-control input-group-text" v-model="data.status_option_id">
                <option v-for="(list, key) in status" :key="key" v-bind:value="list.id">{{list.name}}</option>
              </select>
            </div>
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
              <th width="15%">Item</th>
              <th width="15%">Item Name</th>
              <th width="9%">SKU</th>
              <th width="9%">Color</th>
              <th width="9%">Size</th>
              <th width="10%">Quantity</th>
              <th width="10%">Currency</th>
              <th width="10%">Price</th>
              <th width="12%">Total Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, key) in data.has_many_order_detail" :key="key">
              <td>
                <div class="item-image" v-if="item.item_stock.item_variant.has_many_image.length > 0">
                  <img v-for="(image, pKey) in item.item_stock.item_variant.has_many_image" class="img-thumbnail"
                       v-if="image.primary === 1" :src="image.full_path" alt="">
                </div>
                <div class="item-image" v-if="item.item_stock.item_variant.has_many_image.length < 1">
                  <img class="img-thumbnail" src="/img/testimg.jpg" alt="">
                </div>
              </td>
              <td>{{ item.item_stock.item.name}}</td>
              <td>{{ item.item_stock.sku}}</td>
              <td>{{ item.color_option.name}}</td>
              <td>{{ item.item_stock.size_option.name}}</td>
              <td>{{ item.quantity}}</td>
              <td>{{ item.item_stock.currency_type.name}}</td>
              <td>{{ item.price}}</td>
              <td>{{ item.sub_total}}</td>
            </tr>

            <tr>
              <td><strong>Shipping Fee</strong></td>
              <td colspan="7"></td>
              <td>
                <strong>{{Number(data.has_one_order_total.shipping_fee).toLocaleString()}}</strong>
              </td>
            </tr>
            </tbody>
            <tfoot class="tfoot-light">
            <tr>
              <td><strong>Total</strong></td>
              <td colspan="7"></td>
              <td>
                <strong>{{Number(data.has_one_order_total.grand_total).toLocaleString()}}</strong>
              </td>
            </tr>
            </tfoot>
          </table>
          <button type="submit" class="btn btn-success float-right">Save</button>
          <button type="button" class="btn btn-danger mr-3 float-right" @click="$router.go(-1)">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script src="./form.component.js"></script>
