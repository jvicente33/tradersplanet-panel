const axios = require('axios')
//require('dotenv').config();
const NProgress = require('nprogress')

NProgress.configure({ showSpinner: false });
NProgress.configure({ minimum: 0.3 });

const url = process.env.VUE_APP_API_URL;

// create a new axios instance
const instance = axios.create({
    baseURL: url,
    timeout: 30000
})

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
    NProgress.start()
    return config
})

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export default instance