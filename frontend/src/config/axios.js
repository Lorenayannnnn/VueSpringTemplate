import Axios from 'axios'
import { Loading, Message } from 'element-ui';
var loading = null;

Axios.interceptors.request.use((config) => {
  loading = Loading.service({
    lock: true,
    text: '首次加载稍慢，请稍后...',
    spinner: 'el-icon-loading',
    background: 'white'
  })
  return config;
}), (error) => {
  Message.error(error)
  console.log(error);
  return Promise.reject(error);
}

Axios.interceptors.response.use((response) => {
  loading.close();
  return Promise.resolve(response)
}), (error) => {
  console.log(error);
  Message.error(error)
  return Promise.reject(error);
}

export default Axios
