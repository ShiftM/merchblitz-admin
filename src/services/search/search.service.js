import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class SearchService {

    searchCustomer(data) {
      promise = api.client.get(config.end_point.admin.search.customer_info, {params: data});
      return promise;
    }

    searchOrder(data) {
      promise = api.client.get(config.end_point.admin.search.order_info, {params: data});
      return promise;
    }

    searchGemOrder(data) {
        promise = api.client.get(config.end_point.admin.search.gem_order_info, {params: data});
        return promise;
    }


    searchItem(data) {
      promise = api.client.get(config.end_point.admin.search.item_info, {params: data});
      return promise;
    }


    searchWalletAccount(data) {
        promise = api.client.get(config.end_point.admin.search.wallet_account_info, {params: data});
        return promise;
    }
    searchEvent(data) {
      promise = api.client.get(config.end_point.admin.search.event_info, {params: data});

      return promise;
    }
}

export const searchService = new SearchService();
