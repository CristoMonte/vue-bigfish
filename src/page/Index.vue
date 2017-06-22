<template lang="html">
  <div class="app">
    <f-head></f-head>
    <f-container></f-container>
    <f-footer></f-footer>
    <router-view></router-view>
  </div>
</template>
<script>
import fHead from '../components/home/head.vue'
import fContainer from '../components/home/container.vue'
import fFooter from '../components/home/footer.vue'
export default {
  components: {
    fHead,
    fContainer,
    fFooter
  }
}
</script>

<style lang="css">
</style>
