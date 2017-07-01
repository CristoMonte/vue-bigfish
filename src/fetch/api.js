import axios from 'axios'
axios.default.timeout = 5000
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://www.fishtrip.cn/';
export axios.get(url)
.then(function (response) {
  console.log(response)
})
