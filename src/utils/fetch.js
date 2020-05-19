import axios from 'axios';
import { SUCCESS, LOGIN_TIMEOUT} from '@/config/keyCode'

/*
 * 对 axios 进行封装，可以利用拦截器功能对发送数据和返回数据进行处理，或其他操作
 * 比如：使用 token 进行身份验证
*/

let fetch = axios.create({
    baseURL: 'http://localhost:3002/api/',
    timeout: 10000,
    withCredentials: true,
})
fetch.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers['token'] = token;
    }
    return token;
})
fetch.interceptors.response.use(res => {
    if (res.status === 200) {
        const data = res.data;
        const operCode = data.code;
        if (operCode === SUCCESS) { // 请求成功

        } else if (operCode === LOGIN_TIMEOUT) { // 登录超时，token过期，返回 login 页面

        }
        return data;
    }
})


export default fetch;
