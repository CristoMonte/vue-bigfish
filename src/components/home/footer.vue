<template lang="html">
  <div class="footer">
    <div class="icon-footer">
      <router-link to="/">
        <div class="found" v-on:click="changeSelect">
          <img v-if="isSelected" src="../../assets/found.png" alt="" />
          <img v-else="!isSelected" src="../../assets/found-black.png" alt="" />
          <span v-if="isSelected" class="active">发现</span>
          <span v-else="!isSelected">发现</span>
        </div>
      </router-link>
      <router-link to="/plan">
        <div class="plan" v-on:click="changeSelect">
          <img v-if="isSelected" src="../../assets/travel-black.png" alt="" />
          <img v-else="!isSelected" src="../../assets/travel.png" alt="" />
          <span v-if="isSelected" class="active">旅行计划</span>
          <span v-else="!isSelected" >旅行计划</span>
        </div>
      </router-link>
      <router-link to="/order">
        <div class="order" v-on:click="changeSelect">
          <img src="../../assets/order.png" alt="" />
          <span>订单</span>
        </div>
      </router-link>
      <router-link to="/mine">
        <div class="mine"  v-on:click="changeSelect">
          <img src="../../assets/mine.png" alt="" />
          <span>我的</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSelected: false
    }
  },
  methods: {
    changeSelect: function () {
      this.isSelected = !this.isSelected
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  img {
    display: block;
    width: 32px;
    height: 32px;
  }
  span {
    font-size: 16px;
    color: #8b867b;
  }
}
.icon-footer {
  padding: 0.3125rem 0.999rem 0.2123rem 0.84rem;
}
.found {
  position: absolute;
  bottom: 0.2129rem;

}
.plan {
  position: absolute;
  width: 1.787rem;
  left: 3.01rem;
  bottom: 0.2129rem;
  text-align: center;
  img {
    margin-left: 0.38667rem;
  }
}
.order {
  position: absolute;
  left: 5.86rem;
  bottom: 0.2129rem;
}
.mine {
  position: absolute;
  left: 8.0037rem;
  bottom: 0.2129rem;
}
.active {
  color: #000;
}
</style>
