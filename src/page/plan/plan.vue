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
    <div class="plan__container">
      <img src="http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium" alt="" />
      <span>通过创建旅行计划，你可以轻松预定整个行程的住宿，并可得到大鱼旅行顾问的专业服务</span>
      <router-link to="/add">
        <button type="button" class="add__plan__btn">添加新的旅行计划</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
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
    background: url(../../assets/images/add.png) no-repeat;
    background-size: contain;
    left: 7.977rem;
  }
  .history-travel {
    width: 0.70rem;
    height: 0.70rem;
    background: url(../../assets/images/time.png) no-repeat;
    background-size: contain;
    left: 8.833rem;
    top: 0.50rem;
  }
}
.plan__container {
  text-align: center;
  padding: 0.5667rem;
  img {
    width: 3.7066rem;
    height: 4.7066rem;
    margin: 2.5667rem 2.8667rem 1.6667rem 2.8667rem;
    border-radius: 5px;
  }
  span {
    font-size: 16px;
  }
  button {
    font-size: 16px;
    border-radius: 18px;
    margin-top: 0.6671rem;
    padding: 0.1667rem;
    background-color: #6ad6e1;
    color: #fff;
  }
}

</style>
