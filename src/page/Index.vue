<template lang="html">
  <div class="app">
    <router-view></router-view>
    <f-footer></f-footer>
  </div>
</template>
<script>
import fFooter from '@/components/public/footer'
export default {
  components: {
    fFooter
  }
}
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
}
</style>
