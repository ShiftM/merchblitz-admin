import api from '../../../globals/client';
import config from '../../../config/app.config';

var promise;

export default class EventAnalyticsService {

  mostViewed(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.number_of_times_quest_viewed, {params: data});
    return promise;
  }

  numberOfFinished(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.number_of_quest_finished, {params: data});
    return promise;
  }

  interest(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.interest, {params: data});
    return promise;
  }

  checkIn(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.check_ins, {params: data});
    return promise;
  }

  checkInWithQuest(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.check_in_with_quests, {params: data});
    return promise;
  }


  questViewed(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.quest_viewed, {params: data});
    return promise;
  }
  questStart(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.quest_started, {params: data});
    return promise;
  }
  questFinish(data) {
    promise = api.client.get(config.end_point.analytics.event_analytics.quest_finished, {params: data});
    return promise;
  }
}

export const eventAnalyticsService = new EventAnalyticsService();
