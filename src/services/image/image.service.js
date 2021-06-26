import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class ImageService {
    store(data) {
        promise = api.client.post(config.end_point.admin.images, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.images+ '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.admin.images, {params: data});
        return promise;
    }

    show(id) {
        promise = api.client.get(config.end_point.admin.admin.images+ '/' + id);
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.images + '/' + id);
        return promise;
    }

    deleteByParent(id,table){
        promise = api.client.delete(config.end_point.admin.images + '/delete-by-parent/' + id +'/'+table);
        return promise;
    }
}

export const imageService = new ImageService();
