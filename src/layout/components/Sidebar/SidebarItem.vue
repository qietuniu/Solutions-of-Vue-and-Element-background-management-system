<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <a
        v-if="onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path)"
        @click="clickLink(onlyOneChild.path,$event)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}" >
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </a>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { validateURL } from '@/utils/validate'
import Item from './Item'

export default {
  name: 'SidebarItem',
  components: { Item },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) return true
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath(routePath) {
      if (this.isExternal(routePath)) {
        return routePath
      }
      if (this.isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path)
    },
    isExternalLink(routePath) {
      return validateURL(routePath)
    },
    clickLink(routePath, e) {
      if (!this.isExternalLink(routePath)) {
        e.preventDefault()
        const path = this.resolvePath(routePath)
        this.$router.push(path)
      }
    }
  }
}
</script>
