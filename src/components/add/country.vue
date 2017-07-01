<template lang="html">
  <div class="wrapper">
    <transition name="fade">
      <div class="add__home__country">
        <header class="add__home__hd">
          <router-link to="/plan">
            <span>X</span>
          </router-link>
          <div class="add__home__hd__title">
            Hi, 要去哪里呢?
          </div>
        </header>
        <div class="add__home__container">
          <router-link to="/">
            <div class="country__item" v-for="item in places">
              <img :src="item.img" alt="" />
              <div class="country__desc">
                <span>{{item.place}}</span>
                <span>{{item.englishName}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    places () {
      return this.$store.getters.places
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease-in
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
header {
  height: 2.8333rem;
  width: 100%;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  span {
    float: right;
    margin-right: 0.3667rem;
    margin-top: 0.3667rem;
  }
  .add__home__hd__title {
    position: absolute;
    top: 1.6333rem;
  }
}
.add__home__container {
  margin-top: 2.8333rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  .country__item {
    float: left;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.1);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 0 0.1435rem 0.2870rem 0.1435rem;
    img {
      height: 6.7129rem;
      width: 4.6574rem;
    }
  }
  .country__desc {
    height: 0.7833rem;
    padding: 0.1240rem;
    line-height: 0.7833rem;
    background-color: #fafafa;
    border: 0;
    span:nth-child(2) {
      color: #868686;
      float: right;
      padding-right: 0.1667rem;
    }
  }
}
</style>
