import axios from  'axios'
import { message} from 'antd';
const http = axios.create()
// response 拦截器(数据返回后的处理)
http.interceptors.response.use(
    response => {
        const res = response.data
        if(res.result === 0) {
            return res
        } else {
            message.warning(res.msg);
            return res
        }
    },
    error => {
      message.warning('服务器错误');
      return Promise.reject(error)
    }
  )
  export default http