<template>
  <div>
    <div class="discover_nav">
      <btn v-for="(item, index) in list" :text="item.text" :path="item.path" :key="index"></btn>
    </div>
    <div class="discover_payment">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import btn from './discover_button.vue'
export default {
  data () {
    return {
      type: '发现',
      list: []
    }
  },
  methods: {
    
  },
  created () {
    this.bus.$emit('head', this.type)
    this.axios('discover')
      .then((result) => {
        result.data.forEach((v) => {
          if (this.$route.params.type === v.type) {
            this.list = v.list
          }
        })
      })
  },
  components: {
    btn
  }
}
</script>

<style>
  .discover_nav {
    display: flex;
    justify-content: space-around;
    line-height: .35rem;
    border-bottom: 1px solid #ccc;
  }
</style>
