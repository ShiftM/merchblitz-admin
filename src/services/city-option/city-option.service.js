import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class CityOptionService {
    store(data) {
        promise = api.client.post(config.end_point.admin.e_commerce.city_options, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.e_commerce.city_options+ '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.e_commerce.city_options, {params: data});
        return promise;
    }

    show(id) {
        promise = api.client.get(config.end_point.admin.e_commerce.city_options + '/' + id);
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.e_commerce.city_options+ '/' + id);
        return promise;
    }
}

export const cityOptionService = new CityOptionService();
