var promise;
export default class AdminServices{
    login(data){
        // eslint-disable-next-line no-undef
        promise = axios.post(api_url + '/api/login', data);
        return promise;
    }

    profile(){
        // eslint-disable-next-line no-undef
        promise = axios.get(api_url + '/admin/profile');
        return promise;
    }

    logout(){
        // eslint-disable-next-line no-undef
        promise = axios.post(api_url + '/admin/logout');
        return promise;
    }
}
