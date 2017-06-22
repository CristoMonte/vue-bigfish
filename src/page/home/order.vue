<template lang="html">
  <div class="wrapper">
    <div class="order__head" >
      <div class="todos">
        <span  v-for="(item, index) in todos" :class="{active: item.isActive}"
        @click="changeTodos(index)">{{item.todo}}</span>
      </div>
    </div>
    <router-view class="router__container"></router-view>
    <f-footer></f-footer>
  </div>
</template>

<script>
import fFooter from '../../components/home/footer.vue'
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
  },
  components: {
    fFooter
  }
}
</script>

<style lang="scss" scoped>
.order__head {
  height: 1.555rem;
  .todos {
    text-align: center;
    padding-top: 0.57rem;
    // padding-left: 0.0667rem;
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
}
</style>
