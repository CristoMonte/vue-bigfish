<template lang="html">
  <div class="mine">
    <div class="mine__head">我的</div>
    <div class="mine__container">
      <div class="user__avartar">
        <img src="static/image/house.jpg" alt="" />
        <span class="userName">中国用户</span>
      </div>
      <div class="user__info__cell">
         <div class="hd__cell">
           <div class="hd__cell__left">
             <div class="hd__cell__left-icon">
               <i></i>
             </div>
             <div class="hd__cell__left__desc">
               <p>1</p>
               <span>优惠券</span>
             </div>
           </div>
           <div class="hd__cell__right">
             <div class="hd__cell__right-icon">
               <i></i>
             </div>
             <div class="hd__cell__right__desc">
               <p>{{count}}</p>
               <span>我的收藏</span>
             </div>
           </div>
         </div>
         <mt-cell class="cell__lists" :class='{active: isActive}' v-for="(listItem,index) in listItems" is-link>
           <img slot="icon" :src="listItem.bgImg" height="16px" width="16px"/>
           <span slot="title">{{listItem.title}}</span>
         </mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listItems: [
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'},
        {bgImg: 'static/image/house.jpg', title: '钱包'}
      ],
      count: 0
    }
  },
  // created () {
  //   Hub.$on('likeSelect', () => {
  //     if(this.scrollItems[index].isLiked)
  //     {
  //       this.count++
  //     }
  //   })
  // },
  methods: {
    setIndex () {
      console.log(this.isActive)
      console.log('sdjs')
    }
  }
}
</script>

<style lang="scss" scoped>
.mine__head {
  height: 1.0277rem;
  line-height: 1;
  text-align: center;
  padding-top: 0.5373rem;
  border-bottom: 1px solid rgba(0,0,0,.1);
  font-size: 18px;
}
.mine__container {
  height: 14.6667rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  .active {
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 10px;
      background-color: lighten(rgba(0,0,0,.1),60%);
    }
  }
  .user__avartar {
    height: 4.7553rem;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    img {
      display: block;
      margin-left: 3.8703rem;
      margin-top: 0.5133rem;
      height: 2.2222rem;
      width: 2.22rem;
      border-radius: 50%;
    }
    span {
      font-size: 18px;
      line-height: 4;
    }
  }
  .user__info__cell {
    .hd__cell {
      height: 1.6203rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      .hd__cell__left {
        float: left;
        width: 4.0667rem;
        height: 1.0133rem;
        padding: 0.25rem;
        .hd__cell__left-icon {
          background: rgba(0,0,0,.1);
          width: 1.0666rem;
          height: 1.0666rem;
          border-radius: 50%;
          position: relative;
          i {
            display: block;
            width: 0.8534rem;
            height: 0.8534rem;
            position: relative;
            left: 0.1234rem;
            top: 0.1234rem;
            // // margin-top: 0.3234rem;
            // margin-left: 0.1534rem;
            background: url(../../assets/images/cheap.png)  no-repeat;
          }
        }
        .hd__cell__left__desc {
          margin-left: 1.3666rem;
          margin-top: -0.9667rem;
          &:after {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            position: relative;
            left:1.5333rem;
            border-top: 2px solid rgba(0,0,0,0.3);
            border-right: 2px solid rgba(0,0,0,.3);
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }
        }
      }
      .hd__cell__right {
        width: 50%;
        padding: 0.25rem;
        .hd__cell__right-icon {
          background: rgba(0,0,0,.1);
          width: 1.0666rem;
          height: 1.0666rem;
          border-radius: 50%;
          position: relative;
          left: 5.1667rem;
          i {
            display: block;
            width: 0.8534rem;
            height: 0.8534rem;
            position: relative;
            left: 0.1234rem;
            top: 0.2234rem;
            background: url(../../assets/images/heart.png)  no-repeat;
            background-size: contain;
            &:before {
              content: '';
              display: inline-block;
              width: 6px;
              height: 1.1666rem;
              position: absolute;
              left: -.9rem;
              top: -0.2rem;
              border-right: 1px solid rgba(0,0,0,.3);
            }
          }
        }
        .hd__cell__right__desc {
          // position: absolute;
          width: 50px;
          margin-left:6.5666rem;
          margin-top: -0.8667rem;
          &:after {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            position: relative;;
            left:2rem;
            top: -0.4733rem;
            border-top: 2px solid rgba(0,0,0,0.3);
            border-right: 2px solid rgba(0,0,0,.3);
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }
        }
      }
    }
  }
}

</style>
