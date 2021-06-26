var promise;

export default class BoothService {
  

  list(page) {
    promise =  window.axios.get(window.api_url + '/admin/booth/index?page=' + page);
    return promise;
  }

  store(data) {
    promise = window.axios.post(window.api_url + '/admin/booth/store', data);
    return promise;
  }

  update(id, data) {
    promise = window.axios.put(window.api_url + '/admin/booth/update/'+id, data);
    return promise;
  }

  edit(id){
    promise = window.axios.get(window.api_url + '/admin/booth/edit/' + id);
    return promise;
  }

  changeStatus(id) {
    promise = window.axios.post(window.api_url + '/admin/booth/update-status/'+id);
    return promise;
  }

  getEventsByBooth(id){
    promise = window.axios.get(window.api_url + '/admin/event-booth/index?boothId='+ id);
    return promise;
  }

  saveQuest(data){
    promise = window.axios.post(window.api_url + '/admin/quest/store', data);
    return promise;
  }
  
  getQuestByBooth(id, page){
    promise = window.axios.get(window.api_url + '/admin/quest/index?boothId=' + id + '&page=' + page);
    return promise;
  }

  editQuest(id){
    promise = window.axios.get(window.api_url + '/admin/quest/edit/' + id);
    return promise;
  }

  updateQuest(id, data){
    promise = window.axios.put(window.api_url + '/admin/quest/update/' + id, data);
    return promise;
  }

  forgoutPassword(id, data){
    promise = window.axios.put(window.api_url + '/admin/booth/forgot-password/' + id, data);
    return promise;
  }

  deleteQuest(id){
    promise = window.axios.delete(window.api_url + '/admin/quest/delete/'+ id);
    return promise;
  }
}
