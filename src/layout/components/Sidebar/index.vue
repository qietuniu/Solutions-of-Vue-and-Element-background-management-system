<template>
  <div>
    <div class="scrollbar-logo">
      <img src="../../../assets/logo.png" alt>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        mode="vertical"
        background-color="#4a4e57"
        text-color="#b6b8bb"
        active-text-color="#fff"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
        <el-submenu index="12" class="noIcon">
          <template slot="title">
            <a href="https://www.qietuniu.com" class="outItem" target="_blank">
              <item icon="center" title="博客"/>
            </a>
          </template>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'
import { validateURL } from '@/utils/validate'
import SidebarItem from './SidebarItem'
import Item from './Item'
export default {
  components: { SidebarItem, Item },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      console.log(this.$router.options)
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  mounted() {

  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    },
    isExternalLink(routePath) {
      return validateURL(routePath)
    },
    clickLink(routePath, e, type) {
      if (!this.isExternalLink(routePath)) {
        e.preventDefault()
        const path = this.resolvePath(routePath)
        if (type == 'other') {
          const routeUrl = this.$router.resolve({
            path: path
          })
          window.open(routeUrl.href, '_blank')
        } else {
          this.$router.push(path)
        }
      }
    }
  }
}
</script>
<style lang="scss">
.outItem {
  color: rgb(182, 184, 187);
}
.noIcon {
  .el-submenu__title i {
    display: none;
  }
}
</style>
