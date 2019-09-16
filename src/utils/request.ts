import axios from 'axios'
import { getToken } from './index'
import { message } from 'antd'
const Url = {
    '123.206.55.50': "//exam.jasonandjay.com",
    'jasonandjay.com': "//exam.jasonandjay.com",
    '127.0.0.1': '//169.254.191.25:7001'
}

const instance = axios.create({
    baseURL: Url[window.location.host],
    timeout: 1000,
    headers: { 'authorization': getToken() }
});

// Add a request interceptor
instance.interceptors.request.use(
    config => {
        // Do something before request is sent
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
instance.interceptors.response.use(
    response => {
        // Do something with response data
        // if (response.status !== 200){
        //     message.error(response.statusText);
        //   }
        return response.data
    },
    error => {
        // console.log('error...', error.response)
        if (error.response.status && error.response.status !== 200) {
            message.error(error.response.statusText)
        } else {
            // message.error(error.response);
        }
        // Do something with response error
        return Promise.reject(error)
    }
)

export default instance
