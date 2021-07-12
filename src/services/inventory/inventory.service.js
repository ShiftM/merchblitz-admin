import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class InventoryService {
    store(data) {
        promise = api.client.post(config.end_point.admin.management.administrator + '/create', data);
        return promise;
    }

    update(data, id) {
        promise = api.client.put(config.end_point.admin.management.administrator + '/update/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.post('api/inventories' + '/' + data.page + '/' + data.per_page, { 'api-token': localStorage.getItem('auth_token') })
        console.log(promise)
        return promise;
    }

    show(id, data) {
        promise = api.client.post(config.end_point.admin.management.administrator + '/' + id, { params: data });
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.management.administrator + '/delete/' + id);
        return promise;
    }

    force_delete(id) {
        promise = api.client.delete(config.end_point.admin.management.administrator + '/force-delete/' + id);
        return promise;
    }
}

export const inventoryService = new InventoryService();
