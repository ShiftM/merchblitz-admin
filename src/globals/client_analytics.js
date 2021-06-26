import axios from 'axios'
import config from '../config/app.config';

const client_analytics = axios.create({
  baseURL:  config.api_analytics_url,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': config.api_analytics_token,
  }
});


window.isLogin = () => {
  if (document.cookie.indexOf("auth_token") >= 0) {
    return true;
  }
  return false;
};


function toSnakeCase(data) {


  function loopArray(data) {
    data.forEach((value, key) => {
      var obj = toSnakeCase(value);
      data[key] = obj;
    });
    return data;
  }

  function isArray(arr) {
    return arr instanceof Array;
  }

  function camelToUnderscore(key) {
    return key.replace(/([A-Z])/g, "_$1").toLowerCase();
  }

  function loopToSnake(data) {
    var snake;
    if (isArray(data)) {
      snake = loopArray(data);
    }
    else {
      snake = {};
      for (var camel in data) {
        snake[camelToUnderscore(camel)] = data[camel];
        if (isArray(data[camel])) {
          snake[camelToUnderscore(camel)] = loopArray(data[camel]);
        }
      }
    }

    return snake;
  }

  return loopToSnake(data);

}
//response interceptors
client_analytics.interceptors.response.use((response) => {

  let auth_token = localStorage.getItem('auth_token');
  if (auth_token) {
    response.headers['Authorization'] = "Bearer " + auth_token
  }
  var response = response.data.data;

  return toSnakeCase(response);

}, function (error) {
  // return console.log(error.response);
  // if unauthenticated request, redirect to login
  if (window.location.pathname == '/login') {
    return Promise.reject(error.response.data);
  } else if (error.response.status === 401) {
    localStorage.removeItem('auth_token');
    location.href = '/login';
  } else {

    return error.response.data;
  }
});

export default {
  client_analytics
}
