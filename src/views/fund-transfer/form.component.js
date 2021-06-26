import {walletAccountService} from "../../services/wallet-account/wallet-account.service";
import {alertService} from "../../services/alert/alert.service";

export default {
  data: () => {
    return {
      data: {
        source: {
          account_number: '',
          type: ''
        },
        destination: {
          account_number: '',
          type: ''
        }
      },
      filter: {
        paginate: false
      },
      errors: [],
      source_wallets: [],
      destination_wallets: []
    }
  },
  async mounted() {
    this.getAccountWallet();
  },
  methods: {

    async store() {
      const cb = async () => {
        this.data.source.type = 'ACCOUNT_NUMBER';
        this.source_wallets.filter(obj => {
          if (obj.account_number === this.data.source.account_number) {
            this.data.source.type = obj.account_identifier.toUpperCase();
            this.data.source.type = obj.account_identifier.toUpperCase();
          }
          if (obj.account_number === this.data.destination.account_number) {
            this.data.destination.type = obj.account_identifier.toUpperCase();
          }
        });
        const response = await walletAccountService.transferFund(this.data);
        if (response.code == 422) {
          this.errors = response.errors;
        } else {
          alertService.successWithMessage('Success', 'Record Successfully saved.');
          this.$router.go(-1);
        }
      }
      alertService.withConfirmation(cb, 'Are you sure you want to add this record?');

    },
    async getAccountWallet() {
      const response = await walletAccountService.list(this.filter);
      this.source_wallets = response;
    },

    async getLists(data) {
    //  function to call events/booth
      this.source_wallets.filter(obj => {
        if (obj.account_number === this.data.source.account_number) {
          if (obj.table_type === 'events') {
            this.filter.table_type = 'booths';
            this.filter.table_id = obj.table_id;
          }
          if (obj.table_type === 'booths') {
            this.filter.table_type = 'events';
            this.filter.table_id = obj.table_id;
          }
        }
      });

      if (this.data.source.account_number === '0010044834434504') {
        this.filter.table_type = 'events';
        this.filter.table_id = '';
      }

      const response = await walletAccountService.list(this.filter);
      this.data.destination.account_number = '';
      this.destination_wallets = response;
    }
  }

}
