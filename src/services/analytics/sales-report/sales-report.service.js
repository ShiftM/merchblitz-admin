import api from '../../../globals/client';
import apiAnalytics from '../../../globals/client_analytics';
import config from '../../../config/app.config';

var promise;

export default class SalesReportService {
    list(data) {
        if (data.type == 1) {
            //most sold by price
            promise = api.client.get(config.end_point.admin.e_commerce.reports.most_sold_by_price, {params: data});
            return promise;
        }
        else if (data.type == 2) {
            //most sold by quantity
            promise = api.client.get(config.end_point.admin.e_commerce.reports.most_sold_by_quantity, {params: data});
            return promise;
        }
    }
    salesByCustomerName(data) {
      promise = apiAnalytics.client_analytics.get(config.end_point.analytics.sales_report.sales_by_customer_name, {params: data});
      return promise;
    }

    salesByDemographics(data) {
      promise = apiAnalytics.client_analytics.get(config.end_point.analytics.sales_report.sales_by_demographics, {params: data});
      return promise;
    }
    salesByItem(data) {
      promise = apiAnalytics.client_analytics.get(config.end_point.analytics.sales_report.sales_by_item, {params: data});
      return promise;
    }
}

export const salesReportService = new SalesReportService();
