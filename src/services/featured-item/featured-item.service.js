import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class FeaturedItemService {
    store(data) {
        promise = api.client.post(config.end_point.admin.e_commerce.featured_items, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.e_commerce.featured_items + '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.e_commerce.featured_items, {params: data});
        return promise;
    }

    show(id, data) {
        console.log(data);
        promise = api.client.get(config.end_point.admin.e_commerce.featured_items + '/' + id, {params: data});
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.e_commerce.featured_items + '/' + id);
        return promise;
    }


}

export const featuredItemService = new FeaturedItemService();
