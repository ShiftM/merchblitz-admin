import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class ItemService {
    store(data) {
        promise = api.client.post(config.end_point.admin.e_commerce.items, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.e_commerce.items + '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.e_commerce.items, {params: data});
        return promise;
    }

    show(id, data) {
        console.log(data);
        promise = api.client.get(config.end_point.admin.e_commerce.items + '/' + id, {params: data});
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.e_commerce.items + '/' + id);
        return promise;
    }

    force_delete(id) {
        promise = api.client.delete(config.end_point.admin.e_commerce.items + '/force-delete/' + id);
        return promise;
    }
}

export const itemService = new ItemService();
