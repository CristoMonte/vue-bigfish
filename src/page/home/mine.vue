<template lang="html">
  <div class="mine">
    <div class="mine__head">我的</div>
    <f-footer></f-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import fFooter from '../../components/home/footer.vue'
export default {
  components: {
    fFooter
  }
}
</script>

<style lang="scss" scoped>
.mine__head {
  height: 1.0277rem;
  line-height: 1;
  text-align: center;
  padding-top: 0.5373rem;
  border-bottom: 1px solid rgba(0,0,0,.1);
  font-size: 18px;
}
</style>
