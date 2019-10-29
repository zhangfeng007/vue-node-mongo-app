import axios from 'axios'
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d6f86e26ba82d7ea3fe04d4/example'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export default {
  install: function (Vue) {
    Vue.prototype.$post = params => {
      return new Promise((resolve, reject) => {
        axios.post("/CallMethod", params)
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject(err);
          })
      })
    }

    Vue.prototype.$get = url =>{
      return new Promise((resolve, reject) => {
        axios.get(axios.defaults.baseURL+url)
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject(err);
          })
      })
    }

  }
}
