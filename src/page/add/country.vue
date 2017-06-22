<template lang="html">
  <div class="wrapper">
    <div class="add__home__country">
      <header class="add__home__hd">
        <span>X</span>
        <div>
          Hi, 要去哪里呢
        </div>
      </header>
      <div class="add__home__container">
        <div class="country__item" v-for="item in places">
          <img src="" alt="" />
          <div class="country__desc">
            <span>{{item.place}}</span>
            <span>{{item.englishName}}</span>
          </div>
        </div>
      </div>
    </div>
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

<style lang="css">
</style>
