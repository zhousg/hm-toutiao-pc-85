<template>
  <div class="container-article">
    <!-- 筛选条件布局 -->
    <el-card>
      <!-- 头 -->
      <div slot="header">
        <!-- 使用面包屑组件 -->
        <my-bread>内容管理</my-bread>
      </div>
      <!-- 表单 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="reqParams.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <!-- v-model 绑定的值是[起始日期,结束日期] -->
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选结果布局 -->
    <page>
      <!-- scope 对象是一个变量（数据） 收集了当前插槽上所有的自定义属性 -->
      <!-- <div slot="content" slot-scope="scope">内容 {{scope.pn}}</div> -->
      <template v-slot:content="scope">内容 {{scope.pn}}</template>
      <div slot="footer">尾</div>
    </page>
  </div>
</template>

<script>
import Page from '@/test/page'
export default {
  components: { Page },
  data () {
    return {
      // 提交给后台的参数对象
      // 由axios进行数据提交，字段的值null，axios是不会提交该字段
      reqParams: {
        status: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null
      },
      // 频道选项
      channelOptions: [{ value: 1, label: 'java' }, { value: 2, label: '前端' }],
      // 日期范围
      dateArr: []
    }
  }
}
</script>

<style scoped lang='less'></style>
