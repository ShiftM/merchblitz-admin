import api from '../../globals/client';
import config from '../../config/app.config';
import axios from 'axios'

var promise;

export default class AdministratorService {
    store(data) {
        promise = api.client.post('api/register/', data);
        return promise;
    }

    update(data, id) {
        promise = api.client.put(config.end_point.admin.management.administrator + '/update/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.post('api/all-users' + '/' + data.page + '/' + data.per_page, { 'api-token': localStorage.getItem('auth_token') })
        return promise;
    }

    show(id, data) {
        promise = api.client.post(config.end_point.admin.management.administrator + '/' + id, { params: data });
        return promise;
    }

    delete(id) {
        promise = api.client.delete('api/delete-user/' + id);
        return promise;
    }

    force_delete(id) {
        promise = api.client.delete(config.end_point.admin.management.administrator + '/force-delete/' + id);
        return promise;
    }

    uploadOrganizerLogo(file) {
        var bodyFormData = new FormData();
        bodyFormData.append('file', file);
        bodyFormData.append('upload_path', 'eventOrganizers');


        // ALSO USED TO STORE COMPANY LOGOS
        promise = window.axios({
            method: 'post',
            url: window.api_url + '/admin/upload/single/Event',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return promise;
    }
}

export const administratorService = new AdministratorService();
