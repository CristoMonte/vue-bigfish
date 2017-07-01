<template lang="html">
  <div class="wrapper">
    <div class="order__head" >
      <div class="todos">
        <span  v-for="(item, index) in todos" :class="{active: item.isActive}"
        @click="changeTodos(index)">{{item.todo}}</span>
      </div>
      <div class="order__container">
        <img src="http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium" alt="" />
        <h2>还没有订单</h2>
        <p>你预定的住宿订单会在这里出现</p>
        <button type="button" class="add__plan__btn">刷新</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    changeTodos (index) {
      this.click = index
      if (this.click >= 0) {
        this.$store.dispatch('changeTodos', index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.order__head {
  height: 1.555rem;
  .todos {
    text-align: center;
    padding-top: 0.57rem;
    .active {
      border-bottom: 1px solid #6ad6e1;
      color: #000;
    }
  }
  span {
    font-size: 16px;
    padding-left: 0.4133rem;
    padding-right: 0.4133rem;
    padding-bottom: 0.57rem;
    color: #9b9b9b;
  }
  .order__container {
    text-align: center;
    padding: 0.5667rem;
    img {
      width: 3.7066rem;
      height: 4.7066rem;
      margin: 2.5667rem 2.8667rem 1.6667rem 2.8667rem;
      border-radius: 5px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
      color: #000;
    }
    button {
      font-size: 16px;
      text-align: center;
      border-radius: 18px;
      margin-top: 0.6671rem;
      padding: 0.1667rem 0.5667rem;
      border: 1px solid #6ad6e1;
      background-color: transparent;
      color: #6ad6e1;
    }
  }
}
</style>
