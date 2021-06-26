import {walletAccountService} from "../../services/wallet-account/wallet-account.service";
import {alertService} from "../../services/alert/alert.service";

export default {
    data: () => {
        return {
          data: [],
          page_count: 100,
          filter: {
            page: 0,
            type: ''
          },
          balance: [],
          history_logs: []
        }
    },
    async mounted() {
      this.filter.account_number = this.$route.params.account_number;
      this.filter.type = this.$route.params.type.toUpperCase();
      await this.balanceInquiry(this.filter);
      await this.transactionHistory(this.filter);

    },
    methods: {
        async search(data){

            this.filter = Object.assign(this.filter,data);
            await this.transactionHistory(this.filter);
        },
        async balanceInquiry(){
          const response = await walletAccountService.balanceInquiry(this.filter.account_number);
          this.balance = response;
        },
        async transactionHistory(){
          const response = await walletAccountService.transactionHistory(this.filter);
          this.history_logs = response.logs;
        },
        async paginate(page) {
            this.filter.page = page;
            await this.transactionHistory(this.filter);
        }
    }

}
