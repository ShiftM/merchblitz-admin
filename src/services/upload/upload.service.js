import api from '../../globals/client';
import config from '../../config/app.config';

var promise;

export default class UploadService {
    image(event, upload_path) {

        let data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('upload_path', upload_path);
        const options = {
            header: {
                'Content-Type': 'image/png'
            }
        }

        promise = api.client.post(config.end_point.admin.upload.image, data, options);

        return promise;


    }

}

export const uploadService = new UploadService();
