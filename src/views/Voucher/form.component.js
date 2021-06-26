import {voucherService} from "../../services/voucher/voucher.service";
import {alertService} from "../../services/alert/alert.service";

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import Vue from "vue";
import moment from "moment";
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
var date = new Date();
export default {
  data: () => {
    return {
      data: {
        status_option_id: 1,
        voucher_type_id: 1,
        currency_type_id: 1,
        expiration: moment(new Date()).format("YYYY-MM-DD"),
      },
      currencyType: [
        {id: 1, name: 'Peso', slug: 'peso'},
        {id: 2, name: 'Coin', slug: 'coin'}
      ],
      voucherType: [
        {id: 1, name: 'Percentage', slug: 'percentage'},
        {id: 2, name: 'Fixed', slug: 'fixed'}
      ],
      errors: [],
      config: {
        min_date: date.getFullYear()+'-'+(date.getUTCMonth()+1)+'-'+date.getDate()
      }
    }
  },
  async mounted() {
    if (this.$route.params.id) {
      this.show(this.$route.params.id);
    }


    console.log(this.config);

  },
  methods: {
    async store() {
      const cb = async () => {
        this.data.expiry_date = moment(new Date(this.data.expiration)).format("YYYY-MM-DD");
        this.data.expiry_time = moment(new Date(this.data.expiration)).format("HH:mm:ss");
        const response = await voucherService.store(this.data);
        if (response.code == 422) {
          this.errors = response.errors;
        } else {
          alertService.successWithMessage('Success', 'Voucher created successfully.');
          this.$router.go(-1);
        }
      }
      alertService.withConfirmation(cb, 'Are you sure you want to add this record?');

    },
    async update() {
      const cb = async () => {
        this.data.expiry_date = moment(new Date(this.data.expiration)).format("YYYY-MM-DD");
        this.data.expiry_time = moment(new Date(this.data.expiration)).format("HH:mm:ss");
        const response = await voucherService.update(this.$route.params.id, this.data);
        if (response.code == 422) {
          this.errors = response.errors;
        } else {
          this.data = {
            status_option_id: 1
          };
          alertService.successWithMessage('Success', 'Record Successfully Updated.');
          this.$router.go(-1);
        }
      }
      alertService.withConfirmation(cb, 'Are you sure you want to update this record?');
    },
    async show(id) {
      const response = await voucherService.show(id);
      this.data = response;
    },
    async getCurrencyType() {
      const response = await voucherService.getCurrencyType();
      this.data = response;
    },
    async getVoucherType() {
      const response = await voucherService.getVoucherType();
      this.data = response;
    }
  }

}
