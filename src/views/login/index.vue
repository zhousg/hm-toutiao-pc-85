<template>
  <!-- 全屏容器 -->
  <div class="container">
    <!-- 卡片容器  el-card是一个element组件，根元素上默认添加一个类和组件的名称一致 -->
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单 -->
      <el-form ref="loginForm" :model="LoginForm" status-icon :rules="LoginRules">
        <el-form-item prop="mobile">
          <el-input v-model="LoginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="LoginForm.code" placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import local from '@/utils/local'
export default {
  data () {
    // 校验手机号函数
    const checkMobile = (rule, value, callback) => {
      // 去判断value是否符合手机号格式
      // 格式：1开头  第二位 3-9 之间  9位数字结尾
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      LoginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      LoginRules: {
        mobile: [
          // type 选项：指定内容的格式  date|email|...  不包含手机号类型
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码是6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 对整个表单进行校验
      this.$refs['loginForm'].validate(async valid => {
        if (valid) {
          // 校验成功  进行登录（发请求）
          // post(url,参数对象)
          // get(url,{params:参数对象})
          // this.$http.post('authorizations', this.LoginForm).then(res => {
          //   // 成功 res 是响应对象  res.data 是响应主体
          //   // 保存用户信息（token）
          //   local.setUser(res.data.data)
          //   this.$router.push('/')
          // }).catch(() => {
          //   // 失败 提示
          //   this.$message.error('手机号或验证码错误')
          // })

          // 以下代码可能出现异常（报错）  使用try{ 可能报错代码 }catch(e){ 处理错误 }
          try {
            const { data: { data } } = await this.$http.post('authorizations', this.LoginForm)
            local.setUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background: pink;
  position: absolute;
  left: 0;
  top: 0;
  // 背景图尺寸：拆分写法 background-size
  // 组合写法：background:..... / 背景图尺寸(width,height)
  // 特殊写法：cover  等比例缩放铺满容器多余不显示  contain 等比例缩放完全显示在容器内
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
