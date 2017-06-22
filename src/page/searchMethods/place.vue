<template lang="html">
  <div class="search__place">
    <div v-for="(place,index) in places" :class="{active: place.isActive}" class="places" @click="changeCitys(index)">
      <span class="search__country__span">{{place.place}}</span>
      <div class="search__cities__wrapper">
        <div v-if="selected === index" class="search__cities" v-for="item in place.cities" >
          <router-link to="/">
            <span class="search__cities__span">{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      selected: 0
    }
  },
  mounted () {
    console.log(this.places[0].cities)
    console.log(this.places)
  },
  computed: {
    ...mapGetters([
      'places'
    ])
  },
  methods: {
    changeCitys (index) {
      this.click = index
      this.selected = index
      if (this.click >= 0) {
        this.$store.dispatch('changeCitys', index)
      }
    }
  }
}

</script>

<style lang="scss">
.search__place {
  margin-top: 0.467rem;
  height: 15rem;
  overflow: hidden;
  .places{
    // position: fixed;
    padding-left: 0.4259rem;
    width: 2.24rem;
    span {
      font-size: 16px;
      line-height: 1.53rem;
    }
    .search__country__span {
      color: #ababab;
    }
  }
  .active {
    border-left: 2px solid #6ed6e1;
  }
}
.search__cities__wrapper {
  overflow-y: scroll;
  height: 15rem;
  position: absolute;
  left: 3.58rem;
  top: 2.433rem;
  &:-webkit-scrollbar {
    width: 0;
  }
  .search__cities {
    .search__cities__span {
      color: #6ad6e1;
      font-size: 18px;
      line-height: 1.33rem;
    }
  }
}


</style>
