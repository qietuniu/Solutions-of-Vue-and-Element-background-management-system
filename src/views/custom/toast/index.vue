<template>
  <div class="paddingWrapper">
    <h2>自定义Toast</h2>
    <el-button type="info" @click="show('info')">info</el-button>
    <el-button type="success" @click="show('success')">success</el-button>
    <el-button type="danger" @click="show('error')">error</el-button>
    <el-button type="warning" @click="show('warning')">warning</el-button>
    <hr>
    <el-button type="primary" @click="hide">关闭所有</el-button>
    <h2>element的Message限定只弹一个</h2>
    <el-button type="info" @click="showMsg">原来的Message</el-button>
    <el-button type="primary" @click="showResetMsg">重写的Message</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    show(type) {
      this.instance = this.$toast({
        type,
        message: `我是${type}类型弹框`,
        position: 'center'
      })
    },
    hide() {
      this.$toast.closeAll()
    },
    showMsg() {
      this.$message.info('我是原生的message')
    },
    showResetMsg() {
      this.$restMessage.success('我是重写的message')

    }
  }
}
</script>
<style lang="scss">
</style>
