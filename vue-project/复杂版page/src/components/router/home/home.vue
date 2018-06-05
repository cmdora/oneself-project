<template>
	<div class="home">
		首部
		<page :homelist='homeList'></page>
	</div>
</template>

<script>
import page from '../../template/page/page.vue'

export default {
	data () {
		return {
			homeList: []
		}
	},
	components: {
		page
	},
	created () {
		this.axios('home')
		 .then((result) => {
		 	this.homeList = result.data
		 })
	}
}
</script>

<style>
</style>