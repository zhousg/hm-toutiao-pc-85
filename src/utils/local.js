// 导出一个本地操作用户信息的模块（设置用户，获取用户，清除用户）
const KEY = 'hm-toutiao-pc-85-user-key'
const local = {
  setUser (user) {
    // 存储 setItem(key,value) key将来获取时候需要使用  value json字符串格式
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
  },
  delUser () {
    window.sessionStorage.removeItem(KEY)
    // clear() 清除所有的数据  不建议使用
    // setItem(KEY,'') 删除除
  }
}
export default local
