import axios from 'axios'
import {getToken} from './index'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 1000,
    headers: { 'authorization': getToken() }
});


// Add a request interceptor
instance.interceptors.request.use( (config)=> {
    // Do something before request is sent
    return config;
},  (error)=> {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use( (response)=> {
    // Do something with response data
    return response.data;
},  (error)=> {
    // Do something with response error
    return Promise.reject(error);
});

export default instance