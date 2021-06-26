import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class ItemsToCartService {
    list(data) {
        if (data.type == 1) {
            //items added to cart
            //UPDATE BELOW WHEN API IS AVAILABLE 
            promise = api.client.get(config.end_point.admin.e_commerce.reports.most_sold_by_price, {params: data});
            return promise;
        }
        else if (data.type == 2) {
            //items removed from cart
            //UPDATE BELOW WHEN API IS AVAILABLE 
            promise = api.client.get(config.end_point.admin.e_commerce.reports.most_sold_by_quantity, {params: data});
            return promise;
        }
    }
}

export const reportService = new ItemsToCartService();
