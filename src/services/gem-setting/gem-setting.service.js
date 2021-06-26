import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class GemSettingService {
    store(data) {
        promise = api.client.post(config.end_point.admin.wallet.gem_setting, data);
        return promise;
    }

    update(id, data) {
        promise = api.client.put(config.end_point.admin.wallet.gem_setting+ '/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.wallet.gem_setting, {params: data});
        return promise;
    }

    show(id) {
        promise = api.client.get(config.end_point.admin.wallet.gem_setting + '/' + id);
        return promise;
    }
}

export const gemSettingService = new GemSettingService();
