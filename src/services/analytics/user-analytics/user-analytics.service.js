import api from '../../../globals/client_analytics';
import config from '../../../config/app.config';

var promise;

export default class UserAnalyticsService {

    userList(data) {
        promise = api.client_analytics.get(config.end_point.analytics.user_analytics.user_list, {params: data});
        return promise;
    }

    userByLocation(data) {
        promise = api.client_analytics.get(config.end_point.analytics.user_analytics.user_by_location, {params: data});
        return promise;
    }

    userByQuest(data) {
        promise = api.client_analytics.get(config.end_point.analytics.user_analytics.user_by_quest, {params: data});
        return promise;
    }

    userByDemographics(data) {
        promise = api.client_analytics.get(config.end_point.analytics.user_analytics.user_by_demographics, {params: data});
        return promise;
    }
}

export const userAnalyticsService = new UserAnalyticsService();
