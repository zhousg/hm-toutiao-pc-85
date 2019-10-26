// 导出一个配置好的axios提供给main挂载
import axios from 'axios'

// 对axios进行配置
// baseURL  作用：设置基准地址（前面一段相同的地址）
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 其他配置 ...

export default axios
