<template>
  <div>
    <el-menu class="navbar" mode="horizontal">
      <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
      <breadcrumb />
      <div class="avatar-wrapper">
        <span>欢迎 , {{ name }}!</span>
      </div>
    </el-menu>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      name: '小姐姐'
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;

  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-wrapper {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    cursor: pointer;
    font-size: 14px;
  }
}
</style>

<style  rel="stylesheet/scss" lang="scss">
@import 'src/styles/variables.scss';

</style>
