import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class ItemVariantService {
    store(data) {
        promise = api.client.post(config.end_point.admin.e_commerce.item_variants, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.e_commerce.item_variants + '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.e_commerce.item_variants, {params: data});
        return promise;
    }

    show(id) {
        console.log(data);
        promise = api.client.get(config.end_point.admin.e_commerce.item_variants + '/' + id);
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.e_commerce.item_variants + '/' + id);
        return promise;
    }
}

export const itemVariantService = new ItemVariantService();
