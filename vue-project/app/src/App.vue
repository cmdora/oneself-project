<template>
  <div id="app">
      <heads class="header"></heads>
      <router-view class="section"></router-view>
      <foot :data='footlist'></foot>
  </div>
</template>

<script>
import heads from "./components/template/head/header.vue"
import foot from "./components/template/foot/footer.vue"
export default {
    data () {
        return {
            footlist: ''
        }
    },
    created () {
        this.axios('foot')
         .then((result) => {
             this.footlist = result.data
         })
    },
    components: {
        heads,
        foot
    }
}
</script>

<style>

</style>
