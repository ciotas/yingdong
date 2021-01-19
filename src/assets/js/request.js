import axios from 'axios'
import store from '../../store/index.js'

//设置默认请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

//根据环境不同，设置baseURL
let baseURL
if (process.env.NODE_ENV == 'development') { // 测试环境
    baseURL = 'https://app.newtiming.com/api/v1';
} else { // 正式环境        
    baseURL = 'https://app.newtiming.com/api/v1';
}

//创建axios实例，并将baseurl传入，设置baseURL的该实例默认值
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: baseURL
})

//请求拦截器，在请求发起之前进行拦截，并处理该次请求的携带信息
service.interceptors.request.use(config => {
    console.log("请求拦截器")

    //判断是否需要添加token到请求头中
    try {
        if (config.token || config.params.token) {
            config.headers.token = store.state.userInfo.access_token
            config.headers.authorization = store.state.userInfo.token_type + ' ' + store.state.userInfo.access_token
        }
    } catch (e) {
        console.log(e)
    }

    console.log(config)
    return config
})

//响应拦截器，在相应数据被回调函数处理之前进行拦截，并处理该次请求的返回信息
service.interceptors.response.use(response => {
    console.log("响应拦截器")
    return response.data
}, (error) => {
    // console.log(error.message)
    // console.log(error.response)
    return Promise.reject(error);
})

export default service