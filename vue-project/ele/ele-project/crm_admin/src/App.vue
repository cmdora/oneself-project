<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  	return {
  	}
  },
  created () {
    this.$store.dispatch('get_user_info')
    if (document.cookie == '') {
      this.$router.replace('/login')
    }else {
      this.$router.replace('/home')
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
