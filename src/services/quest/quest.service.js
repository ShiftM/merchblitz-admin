var promise;

export default class QuestService {

    list(data) {
      promise =  window.axios.get(window.api_url + '/admin/quest/index', {params: data});
      return promise;
    }
}

export const questService = new QuestService();
