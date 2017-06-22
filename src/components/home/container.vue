<template lang="html">
  <div class="home__container">
    <mt-swipe :auto="4000" class="mt-swipe">
      <mt-swipe-item class="slide" v-for="swiperItem in swiperItems" :style="{backgroundImage: 'url(' + swiperItem.img + ')'}">
        <p class="swiper-desc">{{swiperItem.desc}}</p>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperItems: [
        {img: './static/image/house.jpg'},
        {img: './static/image/house2.jpg'},
        {img: './static/image/house3.jpg'}
      ]
    }
  }
}
</script>

<style lang="scss">
.home__container {
  margin-top: 0.73rem;
  height: 12rem;
  width: 10rem;
  border: 1px solid blue;
}
</style>
