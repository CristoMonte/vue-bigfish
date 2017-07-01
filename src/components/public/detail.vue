<template lang="html">
  <div class="detail__wrapper">
    <div class="swiper__hotal__img">
      <mt-swipe :auto="4000" class="mt-swipe">
        <mt-swipe-item class="slide" v-for="swiperItem in swiperItems" :style="{backgroundImage: 'url(' + swiperItem.img + ')'}">
        </mt-swipe-item>
      </mt-swipe>
      <span>10张照片</span>
    </div>
    <div class="detail__title">
      <h1>薇米精品商旅</h1>
      <div class="detail__score">
        <i></i>
        <p>73人点评</p>
      </div>
      <p class="detail__address">台湾，台中，台湾台中市中区继光街166号</p>
      <span>详情</span>
    </div>
    <div class="detail__container">
      <div class="detail__recommand">
        <img src="http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium" alt="" />
        <span>旅行猎人推荐</span>
        <p class="detail__recommand__person">
          多老师
        </p>
        <p>
          极具设计感<br/>
          当地特色装修风格<br/>
          适合亲自出行<br/>
          每间房都有特别的装修主题<br/>
          房间温馨舒服<br/>
        </p>
      </div>
      <router-link to="/calendar">
        <div class="detail__choose__calendar">
          <div class="detail__checkin">
            <p>入住</p>
            <p>请选择</p>
          </div>
          <div class="detail__checkout">
            <p>离开</p>
            <p>请选择</p>
          </div>
        </div>
      </router-link>
      <div class="detail__nearby__recommand" v-for="swiperItem in swiperItems">
        <img :src="swiperItem.img" alt="" />
        <div class=" detail__nearby__right">
          <p>{{swiperItem.title}}</p>
          <p>{{swiperItem.subTitle}}</p>
          <p>{{swiperItem.desc}}</p>
        </div>
        <div class="detail__nearby__desc">
          <div class="detail__nearby__food">
            <i></i>
            <span>可选含餐</span>
          </div>
          <div class="detail__nearby__delete">
            <i></i>
            <span>免费取消</span>
          </div>
          <div class="detail__nearby__price">
            <p class="detail__nearby__price__account">优惠￥{{swiperItem.account}}</p>
            <i></i>
            <span class="detail__nearby__price__span">￥{{swiperItem.price}}</span>
            <span>/晚起</span>
          </div>
        </div>
      </div>
      <div class="detail__command">
        <div class="detail__command__title">
          <h1>20人觉得不错</h1>
          <i></i>
        </div>
        <div class="user__command__box" >
          <div class="comment" v-for="Item in commentlist">
            <p>
              {{Item.comment}}
            </p>
            <span>台湾用户</span>
            <span>{{Item.livetime}} 入住</span>
          </div>
          <router-link to="/comment">
            <p class="command__all">
              全部评价
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperItems: [],
      commentlist: []
    }
  },
  mounted () {
    this.axios.get('https://www.easy-mock.com/mock/595759179adc231f356f0f25/comment/commentlist_copy_1498899280389')
      .then(res => {
        this.commentlist = res.data.commentlist
        console.log(res.data.commentlist)
      }).catch((error) => {
        console.log(error)
      })
    this.axios.get('https://www.easy-mock.com/mock/595759179adc231f356f0f25/comment/nearby')
      .then(response => {
        this.swiperItems = response.data.swiperItems
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
@import '../../assets/style/detail.scss'
</style>
