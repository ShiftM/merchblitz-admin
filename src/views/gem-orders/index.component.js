
import {searchService} from "../../services/search/search.service";
import {debounce} from "debounce";
import {gemOrderService} from "../../services/gem-order/gem-order.service";

export default {
  data: () => {
    return {
      data: [],
      page_count: 25,
      filter: {
        paginate: true,
        per_page: 10,
        page: 1,
        status_option_id: null,
        keyword: null
      },
      status: [
        {id: null, name: 'All'},
        {id: 3, name: 'Pending'},
        {id: 4, name: 'Processing'},
        {id: 5, name: 'Shipped'},
        {id: 6, name: 'Completed'},
        {id: 7, name: 'Cancelled'},
        {id: 8, name: 'Refund'}
      ],
      suggestions: [],
      loading: true
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
    async list(data) {
      const response = await gemOrderService.list(data);
      this.data = response;
      this.loading = false;
    },
    async paginate(page) {
      this.filter.page = page;
      await this.list(this.filter);
    },
    async clear() {
      this.filter.keyword  = '';
      this.search();
    },
    suggest: debounce(async function (data) {
      var filter = {
        paginate: true,
        per_page: 10,
        page: 1,
        status_option_id: this.filter.status_option_id,
        keyword: this.filter.keyword
      };

      filter = Object.assign(filter, data);
      this.suggestions = await searchService.searchGemOrder(filter);
      this.filter.keyword = data.name;
    }, 800),
  }

}
