<template>
  <div>
    <!-- <svg
      :class="{'is-active':isActive}"
      t="1492500959545"
      class="hamburger"
      style=""
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1691"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      @click="toggleClick">
      <path
        d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z"
        p-id="1692" />
      <path
        d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z"
        p-id="1693" />
      <path
        d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z"
        p-id="1694" />
    </svg> -->
    <!-- <svg-icon :class="{'is-active':isActive}" icon-class="toggle" @click="toggleClick"/> -->
    <svg
      :class="{'is-active':isActive}"
      t="1536735385912"
      class="hamburger"
      style=""
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1734"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="20"
      height="14"
      @click="toggleClick">
      <path
        d="M51.2 870.4h921.6a51.2 51.2 0 0 0 0-102.4H51.2a51.2 51.2 0 1 0 0 102.4z m153.6-307.2h614.4a51.2 51.2 0 0 0 0-102.4H204.8a51.2 51.2 0 0 0 0 102.4z m153.6-307.2h307.2a51.2 51.2 0 0 0 0-102.4H358.4a51.2 51.2 0 0 0 0 102.4z"
        p-id="1735"
        data-spm-anchor-id="a313x.7781069.0.i5"
        fill="#212121"
        class="selected"/>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger {
	display: inline-block;
	cursor: pointer;
	width: 20px;
	height: 20px;
	transform: rotate(180deg);
	transition: .38s;
	transform-origin: 50% 50%;
}
.hamburger.is-active {
	transform: rotate(0deg);
}
</style>
