import {walletAccountService} from "../../../services/wallet-account/wallet-account.service";

export default {
    data: () => {
        return {
          data: [],
          filter: {
            currency: 'Qoin'
          }
        }
    },
    async mounted() {
        await this.list();
    },
    methods: {
        async list(data) {
            const response = await walletAccountService.exchangeRate(this.filter);
            this.data = response;
            console.log(this.data);
        }
    }

}
