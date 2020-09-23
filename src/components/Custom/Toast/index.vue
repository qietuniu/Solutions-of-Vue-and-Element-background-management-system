<template>
  <transition name="fade" @after-leave="handleAfterLeave">
    <div :class="['ct-toast', type, position]" v-show="visible">
      <i :class="['ct-toast__icon',iconClass]"/>
      <span class="ct-toast__container">{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      closed: false,
      type: 'info',
      position: 'center',
      icon: '',
      message: '',
      timer: null,
      duration: 3000,
      typeClass: {
        success: 'success',
        error: 'error',
        warning: 'warning',
        info: 'info'
      }
    }
  },
  computed: {
    iconClass() {
      if (this.icon) {
        return this.icon;
      } else {
        return `el-icon-${this.typeClass[this.type]}`;
      }
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.ct-toast {
  position: fixed;
  top: 20px;
  width: 300px;
  min-width: 200px;
  color: $Info;
  background: mix($White, $Info, 90%);
  border: 1px solid mix($White, $Info, 40%);
  left: 50%;
  margin-left: -150px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  &.right{
    right: 20px;
    left: auto;
  }
  &.success {
    color: $Success;
    background: mix($White, $Success, 90%);
    border-color: mix($White, $Success, 40%);
  }
  &.error {
    color: $Danger;
    background: mix($White, $Danger, 90%);
    border-color: mix($White, $Danger, 40%);
  }
  &.warning {
    color: $Warning;
    background: mix($White, $Warning, 90%);
    border-color: mix($White, $Warning, 40%);
  }
}
</style>
