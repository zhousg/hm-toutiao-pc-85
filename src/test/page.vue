<template>
  <div class='page'>
    <!-- 头 -->
    <p>header</p>
    <!-- 内容 -->
    <div>
      <slot name="content" :pn="pageName" test="测试">后备内容</slot>
    </div>
    <!-- 尾 -->
    <p>
      <slot name="footer">后备尾</slot>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: '组件内部数据'
    }
  }
}
</script>

<style scoped lang='less'></style>
