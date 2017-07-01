<template lang="html">
  <div class="home__container">
    <router-link to="/detail">
      <mt-swipe :auto="4000" class="mt-swipe">
        <mt-swipe-item class="slide" v-for="swiperItem in swiperItems" :style="{backgroundImage: 'url(' + swiperItem.img + ')'}">
          <div class="hotel__account">
            精选折扣 {{swiperItem.accountNum}}折
            <span>{{swiperItem.address}}</span>
          </div>
          <div class="hotel__price">
            <div class="hotel__name">
              {{swiperItem.name}}
            </div>
            <div class="price">
              <span>￥{{swiperItem.accountPrice}}起</span>
              <span>￥{{swiperItem.originPrice}}</span>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </router-link>
      <div class="hotel__scroll" v-for="(scrollItem, index) in scrollItems">
        <router-link to="/detail">
          <img :src="scrollItem.img"/>
          <div class="hotel__description">
            <div class="hotel__description__name">
              {{scrollItem.hotelName}}
            </div>
            <div class="starGrade">
              <i class="star__icon"></i>
              <span>{{scrollItem.score}}分</span>
              <span>{{scrollItem.desc}}</span>
            </div>
            <div class="hotel__scroll__address">
              <i class="address__icon"></i>
              <span>{{scrollItem.countryName}}-{{scrollItem.cityName}}</span>
            </div>
        </div>
        </router-link>
        <div class="like__btn"  @click="likeSelect(index)">
          <i class="like__img" :class="{liked: scrollItem.isLiked}"></i>
        </div>
      </div>
      <transition name="">
        <div class="liked__dropup">
          <button type="button" class="liked__dropup__btn">{{isSelected? '收藏成功' : '取消收藏'}}</button>
        </div>
      </transition>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isSelected: false,
      scrollItems: [],
      swiperItems: []
    }
  },
  methods: {
    likeSelect (index) {
      this.click = index
      if (this.click >= 0) {
        this.scrollItems[index].isLiked = !this.scrollItems[index].isLiked
        this.isSelected = this.$store.getters.scrollItems[index].isLiked
      }
      // Hub.$on('likeSelect', this.scrollItems[index].isLiked)
    }
  },
  mounted () {
    this.axios.get('https://www.easy-mock.com/mock/595759179adc231f356f0f25/comment/hotalList')
      .then(res => {
        // console.log(res.data.swiperItems)
        this.scrollItems = res.data.scrollItems
        this.scrollItems.forEach(scrollItem => {
          scrollItem.isLiked = false
        })
        this.swiperItems = res.data.swiperItems
        // console.log(this.$store.getters.scrollItems)
      }).catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss">
@import '../../assets/style/container'
</style>
