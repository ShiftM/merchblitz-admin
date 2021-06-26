/**
 * API path and version
 */
window.api_url = process.env.VUE_APP_API_URL+process.env.VUE_APP_API_VERSION;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = require('axios');

let auth_token = localStorage.getItem('auth_token');
if(auth_token) {
    window.axios.defaults.headers.common['Authorization'] = "Bearer " +auth_token
}

window.isLogin = ()=> {
    if(document.cookie.indexOf("auth_token") >= 0){
        return true;
    }
    return false;
}


//response interceptors
window.axios.interceptors.response.use(function (response) {
    return response;
    }, function (error) {

        // return console.log(error.response);
    // if unauthenticated request, redirect to login
    if(window.location.pathname == '/login'){
        return Promise.reject(error.response.data);
    }

    else if (error.response.status === 401) {
        localStorage.removeItem('auth_token');
        location.href = '/login';
    } else {
        return Promise.reject(error.response.data);
    }
})
