<template>
  <div id="app">
    <router-view></router-view>
    <!-- <f-footer v-on:changeSelect="changeSelect"></f-footer> -->
  </div>
</template>

<script>
// import fFooter from '@/components/home/footer.vue'
export default {
  name: 'app'
  // components: {
  //   fFooter
  // },
  // methods: {
  //   changeSelect (value) {
  //     this.pageIndex = value
  //     console.log(this.pageIndex)
  //   }
  // }
}
</script>

<style lang="scss">
@import "assets/style/resets.css"
</style>
