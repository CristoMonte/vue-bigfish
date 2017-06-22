<template lang="html">
  <div class="wrapper">
    <div class="plan__head">
      <span>旅行计划</span>
      <router-link to="/add">
        <i class="add-plan"></i>
      </router-link>
      <router-link to="/add">
        <i class="history-travel"></i>
      </router-link>
    </div>
    <f-footer></f-footer>
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
.plan__head {
  height: 1.57rem;
  text-align: center;
  span {
    font-size: 18px;
    display: block;
    padding-top: 0.5033rem;
    color: #323232;
  }
  .add-plan , .history-travel {
    display: inline-block;
    position: absolute;
    top: 0.555rem;
  }
  .add-plan {
    width: 0.54rem;
    height: 0.54rem;
    background: url(../../assets/add.png) no-repeat;
    background-size: contain;
    left: 7.977rem;
  }
  .history-travel {
    width: 0.70rem;
    height: 0.70rem;
    background: url(../../assets/time.png) no-repeat;
    background-size: contain;
    left: 8.833rem;
    top: 0.50rem;
  }
}
</style>
