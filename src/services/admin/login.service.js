var promise;
export default class AdminServices {
    login(data) {
        // eslint-disable-next-line no-undef
        promise = axios.post(api_url + '/api/login', data);
        return promise;
    }

    profile() {
        // eslint-disable-next-line no-undef
        promise = axios.get(api_url + '/admin/profile');
        return promise;
    }

    async logout() {
        // POST request using fetch with error handling

        console.log('LOGOUT')
        let payload = { 'api-token': localStorage.getItem('auth_token') }
        let formBody = [];
        for (let property in payload) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(payload[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");


        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody,
        };
        await fetch(api_url + "/api/logout", requestOptions)
            .then((res) => res.text())
            .then((responseData) => {
                localStorage.clear();
                location.href = "/login";
            })
            .catch((err) => {
                this.error = err;
            });

        // eslint-disable-next-line no-undef
        // promise = axios.post(api_url + '/admin/logout');
        return promise;
    }
}
