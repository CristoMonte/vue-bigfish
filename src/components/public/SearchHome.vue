<template lang="html">
  <div class="search__home">
    <div class="search__home__hd">
      <div class="search">
        <div class="search__btn">
          <i class="search-icon"></i>
          <input type="text" placeholder="目的地、住宿名称" class="search__hd__input">
        </div>
        <router-link to="/">
          <button type="button">取消</button>
        </router-link>
      </div>
      <div class="search__methods" v-for="item in lists" :key="item.id">
        <router-link :to="item.linkTo">
          <span :class="{active: item.isActive}" @click="changeMethods(item.id)">{{item.methods}}</span>
        </router-link>
      </div>
    </div>
    <router-view class="search__home__container"></router-view>
    <!-- 进入搜索页面 -->
    <div class="search__result" @click="changeDisplay">

    </div>
  </div>
</template>

<script>
export default {
  // props: [ 'lists' ],
  data () {
    return {}
  },
  computed: {
    lists () {
      return this.$store.getters.searchMethods
    }
  },
  methods: {
    changeMethods (id) {
      // 判断当前点击的选项
      if (this.$route.path.indexOf('search')) {
        this.$store.dispatch('changeSearchMethods', id)
        return false
      }
    },
    changeDisplay () {
      if (document.querySelector('.search__hd__input').lenght > 0) {
        var oResult = document.querySelector('.search__result')
        oResult.style.display = 'block'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$tur: #6ad6e1;
$bg: #f3f3f3;
.search__home__hd {
  width: 100%;
  height: 20%;
  background-color: $bg;
  .search__btn {
    display: inline-block;
    line-height: 1;
    .search-icon {
      background: url(../../assets/images/search.png) no-repeat 100%;
      display: inline-block;
      width: .4268rem;
      height: .4268rem;
      position: relative;
      left: 1.0333rem;
      top: 0.1133rem;
    }
    input {
      text-align: center;
      width: 5.0333rem;
      font-size: 16px;
      padding: 0.16667rem 1.577rem 0.16667rem 0.0667rem;
      border: 1px solid rgba(0,0,0,.1);
      border-radius: 18px;
      font-size: 14px;
      /*color: red;*/
     }
   }
   button {
     font-size: 14px;
     margin-left: 0.6133rem;
     background-color: #fff;
     color: $tur;
     background-color: $bg;
   }
   .search {
     padding: 0.1667rem 0 0.3333rem 0;
   }
   .search__methods {
     display: inline-block;
     padding: 0 0 0 0.5667rem;
     span {
       /*text-decoration: underline;*/
       color: #9e9e9e;
       display: inline-block;
       margin-right: 0.7333rem;
       font-size: 14px;
       padding: 0 0.2133rem 0.267rem 0.2133rem;
       // padding-bottom: 0.267rem;
      }
      .active {
       border-bottom: 1px solid $tur;
       color: #000;
     }
   }
}
.search__result {
  height: 17rem;
  width: 100%;
  margin-top: -16.3664rem;
  // background-color: blue;
  z-index: 9999999;
  color: #fff;
}



</style>
