import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class ItemCategoryService {
    store(data) {
        promise = api.client.post(config.end_point.admin.e_commerce.item_categories, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.e_commerce.item_categories + '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.e_commerce.item_categories, {params: data});
        return promise;
    }

    show(id) {
        console.log(data);
        promise = api.client.get(config.end_point.admin.e_commerce.item_categories + '/' + id);
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.e_commerce.item_categories + '/' + id);
        return promise;
    }
}

export const itemCategoryService = new ItemCategoryService();
