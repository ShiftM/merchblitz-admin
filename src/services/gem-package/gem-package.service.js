import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class GemPackageService {
    store(data) {
        promise = api.client.post(config.end_point.admin.wallet.gem_packages, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.wallet.gem_packages+ '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.wallet.gem_packages, {params: data});
        return promise;
    }

    show(id) {
        promise = api.client.get(config.end_point.admin.wallet.gem_packages + '/' + id);
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.wallet.gem_packages + '/' + id);
        return promise;
    }
}

export const gemPackageService = new GemPackageService();
