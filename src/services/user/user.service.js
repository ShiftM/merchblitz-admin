var promise;
export default class UserService {

  getUsers(page) {
    promise = window.axios.get(window.api_url +'/admin/user/get-users?page=' + page);
    return promise;
  }

  changeStatus(id) {
    promise = window.axios.post(window.api_url + '/admin/user/update-user-status/'+id);
    return promise;
  }

  editUser(id) {
    promise = window.axios.get(window.api_url + '/admin/user/get-user-details/'+id);
    return promise;
  }

  updateUser(id, data) {
    promise = window.axios.put(window.api_url + '/admin/user/update-user-details/'+id, data);
    return promise;
  }

}
