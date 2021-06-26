
import {alertService} from "../../services/alert/alert.service";
import {gemOrderService} from "../../services/gem-order/gem-order.service";

export default {
  data: () => {
    return {
      data: {
        has_one_order_total: {},
        has_one_order_shipping: {},
        has_one_order_recipient: {},
        has_one_gem_order_detail: {}
      },
      status : [
        {id: 3, name: 'Pending'},
        {id: 4, name: 'Processing'},
        {id: 5, name: 'Shipped'},
        {id: 6, name: 'Completed'},
        {id: 7, name: 'Cancelled'},
        {id: 8, name: 'Refund'}
      ],
      errors: []
    }
  },
  async mounted() {


    if (this.$route.params.id) {
      this.show(this.$route.params.id);
    }

  },
  methods: {

    async store() {
      const cb = async () => {
        const response = await gemOrderService.store(this.data);
        if (response.code == 422) {
          this.errors = response.errors;
        }else{
          alertService.successWithMessage('Success','Record Successfully saved.');
          this.$router.go(-1);
        }
      }
      alertService.withConfirmation(cb,'Are you sure you want to add this record?');

    },
    async update() {
      const cb = async () => {
        const response = await gemOrderService.update(this.$route.params.id, this.data);
        if (response.code == 422) {
          this.errors = response.errors;
        }else{
          alertService.successWithMessage('Success','Record Successfully Updated.');
          this.$router.go(-1);
        }
      }
      alertService.withConfirmation(cb,'Are you sure you want to update this record?');
    },
    async show(id) {
      const response = await gemOrderService.show(id);
      this.data = response;
    }
  }

}
