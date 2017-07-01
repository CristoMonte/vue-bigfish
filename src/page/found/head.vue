<template lang="html">
  <div class="search">
    <div class="home__search">
      <i class="logo"></i>
      <router-link to="/search">
        <button type="button" class="search-btn">
          <i class="search-icon"></i>
          想去的地方?
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" >
.home__search {
  position: fixed;
}
.search {
  width: 10rem;
  height: 0.933rem;
  .logo {
    display: inline-block;
    width: 1.1333rem;
    height: 0.933rem;
    margin: 0.5667rem 0.6133rem 0 0.4133rem;
    background: url(../../assets/images/logo.png) no-repeat;
    background-size: contain;
  }
  }
  .search-btn {
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 0 1px 0 rgba(0,0,0,.1);
    border-radius: 18px;
    font-size: 16px;
    background-color: lighten(gray,45%);
    width: 6.3333rem;
    padding: 0.1667rem;
    margin-bottom: 1.13rem;
    color: gray;
    position: relative;
    top: -0.5667rem;
    right: 0.000667rem;
    .search-icon {
      background: url(../../assets/images/search.png) no-repeat 100%;
      display: inline-block;
      width: .4268rem;
      height: .4268rem;
      position: absolute;
      left: 1.153rem;
      top: 0.2577rem;
    }
  }


</style>
