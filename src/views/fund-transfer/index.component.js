import {walletAccountService} from "../../services/wallet-account/wallet-account.service";
import {alertService} from "../../services/alert/alert.service";
import {debounce} from "debounce";
import {searchService} from "../../services/search/search.service";

export default {
  data: () => {
    return {
      data: [],
      page_count: 100,
      filter: {
        paginate: true,
        per_page: 10,
        page: 1,
        type: 'events',
        account_detail: ''
      },
      suggestions: [],
    }
  },
  async mounted() {

    await this.list(this.filter);
    await this.suggest({});
  },
  methods: {
    async search(data){
      this.filter = Object.assign(this.filter,data);
      await this.list(this.filter);
    },
    async clear(){
      this.filter.account_detail = '';
      this.search();
    },
    async list(data) {
      const response = await walletAccountService.list(this.filter);
      this.data = response;

    },
    async paginate(page) {
      this.filter.page = page;
      await this.list(this.filter);
    },
    suggest: debounce(async function (data) {
      var filter = {
        paginate: true,
        per_page: 10,
        status_option_id: 1,
        order_by: 'ASC',
        account_detail: this.filter.account_detail
      };

      filter = Object.assign(filter, data);
      this.suggestions = await searchService.searchWalletAccount(filter);
    }, 800),
  }

}
