<template>
  <div id="app">
  	<heads></heads>
    <section class="section">
    	<router-view/>
    </section>
    <foots :footlist='footList'></foots>
  </div>
</template>

<script>
import heads from './components/template/head/head.vue'
import foots from './components/template/foot/foot.vue'
export default {
  name: 'App',
  data () {
  	return {
  		footList: []
  	}
  },
  created () {
  	this.axios('foot')
  	 .then((result) => {
  	 	this.footList = result.data
  	 })
  },
  components: {
  	heads,
  	foots
  }
}
</script>

<style>
</style>
