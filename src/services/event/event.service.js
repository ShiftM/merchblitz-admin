var promise;

export default class EventService {
  info(id) {
    promise = window.axios.get(window.api_url + '/admin/events/info/'+id);
    return promise;
  }
  store(data) {
    promise = window.axios.post(window.api_url + '/admin/events/store', data);
    return promise;
  }

  update(data, id) {
    promise = window.axios.put(window.api_url + '/admin/events/update/'+id, data);
    return promise;
  }

  storeSchedule(data) {
    promise = window.axios.post(window.api_url + '/admin/event-schedule/store', data);
    return promise;
  }

  storeExhibitor(data) {
    promise = window.axios.post(window.api_url + '/admin/event-segment/store', data);
    return promise;
  }

  list(data) {
    promise = window.axios.get(window.api_url + '/admin/events/index', {params: data});
    return promise;
  }

  // list(page,paginate =true) {
  //   promise = window.axios.get(window.api_url + '/admin/events/index?page=' + page+'&paginate='+paginate);
  //   return promise;
  // }

  listFilter(page, filter) {
    promise = window.axios.get(window.api_url + '/admin/events/index?page=' + page + filter);
    return promise;
  }

  listFilterDate(page, from, to) {
    promise = window.axios.get(window.api_url + '/admin/events/index?page=' + page + '&from='+ from +'&to=' + to);
    return promise;
  }

  listBooths() {
    promise = window.axios.get(window.api_url + '/admin/events/get-booths');
    return promise;
  }

  listEventsBooths(id, page) {
    promise = window.axios.get(window.api_url + '/admin/event-booth/get-events-booths/'+id + '?page=' + page);
    return promise;
  }

  assignBooth(data) {
    promise = window.axios.post(window.api_url + '/admin/event-booth/store',data);
    return promise;
  }

  deleteBooth(data) {
    promise = window.axios.post(window.api_url + '/admin/event-booth/delete',data);
    return promise;
  }


  listCompanies() {
    promise = window.axios.get(window.api_url + '/company/get-companies');
    return promise;
  }
  assignCompany(data) {
    promise = window.axios.post(window.api_url + '/admin/event-company/store',data);
    return promise;
  }
  deleteCompany(data) {
    promise = window.axios.post(window.api_url + '/admin/event-company/delete',data);
    return promise;
  }
  listEventsCompanies(id, page) {
    promise = window.axios.get(window.api_url + '/admin/event-company/get-events-companies/'+id + '?page=' + page);
    return promise;
  }

  uploadOrganizerLogo(file) {
    var bodyFormData = new FormData();
    bodyFormData.append('file', file);
    bodyFormData.append('upload_path', 'eventOrganizers');

    promise = window.axios({
      method: 'post',
      url: window.api_url + '/admin/upload/single/Event',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
    });
    return promise;
  }

  uploadEventBanner(file, path) {
    var bodyFormData = new FormData();
    bodyFormData.append('file', file);
    bodyFormData.append('upload_path', path);

    promise = window.axios({
      method: 'post',
      url: window.api_url + '/admin/upload/single/Event',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
    });
    return promise;
  }

  uploadEventImages(file) {
    var bodyFormData = new FormData();
    bodyFormData.append('file', file);
    bodyFormData.append('upload_path', 'eventImages');

    promise = window.axios({
      method: 'post',
      url: window.api_url + '/admin/upload/single/Event',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
    });
    return promise;
  }

  changeStatus(id) {
    promise = window.axios.post(window.api_url + '/admin/events/update-status/'+id);
    return promise;
  }
}
export const eventService = new EventService();
