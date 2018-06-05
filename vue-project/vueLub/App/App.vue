<template>
	<div id="app">
		<lub :datas='list'></lub>
	</div>
</template>

<script>
	import lub from './components/template/lub.vue'
	
	export default {
		data () {
			return {
				list: []
			}
		},
		created () {
			this.axios('list')
			 .then((result) => {
			 	this.list = result.data
			 })
		},
		components: {
			lub
		}
	}
</script>

<style>
</style>