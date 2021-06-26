import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class SubscriptionPlanService {
    store(data) {
        promise = api.client.post(config.end_point.admin.management.subscription_plan + '/create', data);
        return promise;
    }

    update(data, id) {
        promise = api.client.put(config.end_point.admin.management.subscription_plan + '/update/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.management.subscription_plan , {params: data});
        return promise;
    }

    show(id, data) {
        promise = api.client.get(config.end_point.admin.management.subscription_plan + '/' + id, {params: data});
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.management.subscription_plan + '/delete/' + id);
        return promise;
    }

    force_delete(id) {
        promise = api.client.delete(config.end_point.admin.management.subscription_plan + '/force-delete/' + id);
        return promise;
    }
}

export const subscriptionPlanService = new SubscriptionPlanService();
