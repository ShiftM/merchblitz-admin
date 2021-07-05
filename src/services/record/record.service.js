import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class RecordService {
    store(data) {
        promise = api.client.post(config.end_point.admin.management.administrator + '/create', data);
        return promise;
    }

    update(data, id) {
        promise = api.client.put(config.end_point.admin.management.administrator + '/update/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.post('api/get-reports' + '/' + data.page + '/' + data.per_page, { 'api-token': localStorage.getItem('auth_token') })
        console.log(promise)
        return promise;
    }

    show(id, data) {
        promise = api.client.post(config.end_point.admin.management.administrator + '/' + id, { params: data });
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.management.administrator + '/delete/' + id);
        return promise;
    }

    force_delete(id) {
        promise = api.client.delete(config.end_point.admin.management.administrator + '/force-delete/' + id);
        return promise;
    }

    uploadItemImage(file) {
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

export const recordService = new RecordService();
