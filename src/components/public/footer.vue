<template lang="html">
  <div class="footer">
    <div class="icon-footer">
      <router-link to="/found" class="found" @click.native="changeSelect(1)">
        <img v-if="isSelected != 1" src="../../assets/images/found.png" alt="" />
        <img v-if="isSelected === 1" src="../../assets/images/found-black.png" alt="" />
        <span v-if="isSelected != 1">发现</span>
        <span v-if="isSelected === 1" class="active">发现</span>
      </router-link>
      <router-link to="/plan" class="plan" @click.native="changeSelect(2)">
        <img v-if="isSelected != 2" src="../../assets/images/travel.png" alt="" />
        <img v-if="isSelected === 2" src="../../assets/images/travel-black.png" alt="" />
        <span v-if="isSelected != 2" >旅行计划</span>
        <span v-if="isSelected === 2" class="active">旅行计划</span>
      </router-link>
      <router-link to="/order" class="order" @click.native="changeSelect(3)">
        <img v-if="isSelected != 3" src="../../assets/images/order.png" alt="" />
        <img v-if="isSelected === 3" src="../../assets/images/order-black.png" alt="" />
        <span v-if="isSelected != 3" >订单</span>
        <span v-if="isSelected === 3" class="active">订单</span>
      </router-link>
      <router-link to="/mine" class="mine"  @click.native="changeSelect(4)">
        <img v-if="isSelected != 4" src="../../assets/images/mine.png" alt="" />
        <img v-if="isSelected === 4" src="../../assets/images/mine-black.png" alt="" />
        <span v-if="isSelected != 4" >我的</span>
        <span v-if="isSelected === 4" class="active">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSelected: 1
    }
  },
  methods: {
    changeSelect: function (n) {
      this.isSelected = n
      console.log(this.isSelected)
    }
  },
  watch: {
    isSelected (value) {
      this.$emit('changeSelect', value)
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
  .active {
    color: #000;
  }
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

</style>
