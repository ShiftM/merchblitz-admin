import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class CompanyService {
    store(data) {
        console.log(data)
        promise = api.client.post(config.end_point.admin.management.company + '/create', data);
        return promise;
    }

    update(data, id) {
        promise = api.client.put(config.end_point.admin.management.company + '/update/' + id, data);
        return promise;
    }

    list(data) {
        promise = api.client.get(config.end_point.admin.management.company , {params: data});
        return promise;
    }

    listCompanies() {
        promise = api.axios.get(config.end_point.admin.management.company + '/get-companies');
        return promise;
    }
    
    listEventsCompanies(id, page) {
        promise = api.axios.get(config.end_point.admin.management.company + '/get-event-companies' + '?page=' + page);
        return promise;
    }

    listSubscriptionPlans() {
        promise = api.client.get(config.end_point.admin.management.subscription_plan + '/getplans');
        return promise;
    }
    
    show(id, data) {
        promise = api.client.get(config.end_point.admin.management.company + '/' + id, {params: data});
        return promise;
    }

    delete(id) {
        promise = api.client.delete(config.end_point.admin.management.company + '/' + id);
        return promise;
    }

    force_delete(id) {
        promise = api.client.delete(config.end_point.admin.management.company + '/force-delete/' + id);
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
          headers: {'Content-Type': 'multipart/form-data' }
        });
        return promise;
    }
}

export const companyService = new CompanyService();
