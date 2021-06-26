import api from '../../../globals/client_analytics';
import config from '../../../config/app.config';

var promise;

export default class TopListReportService {

    topWishlistedItem(data) {
        promise = api.client_analytics.get(config.end_point.analytics.sales_report.top_wish_listed_item, {params: data});
        return promise;
    }

    topViewedCategory(data) {
        promise = api.client_analytics.get(config.end_point.analytics.sales_report.top_viewed_category, {params: data});
        return promise;
    }

    topPurchasedGemPackage(data) {
        promise = api.client_analytics.get(config.end_point.analytics.sales_report.top_purchased_gem_package, {params: data});
        return promise;
    }

    topOnlineStoreSearch(data) {
        promise = api.client_analytics.get(config.end_point.analytics.sales_report.top_online_store_searches, {params: data});
        return promise;
    }

    topItemsAddedToCart(data) {
        promise = api.client_analytics.get(config.end_point.analytics.sales_report.top_items_added_to_cart, {params: data});
        return promise;
    }

    topItemsRemovedToCart(data) {
        promise = api.client_analytics.get(config.end_point.analytics.sales_report.top_items_removed_to_cart, {params: data});
        return promise;
    }
}

export const topListReportService = new TopListReportService();
