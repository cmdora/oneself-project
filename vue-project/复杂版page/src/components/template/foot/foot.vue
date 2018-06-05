<template>
	<div class="footer">
		<btn v-for="(item, index) in footlist" :text="item.text" :path="item.path" :key="index"></btn>
	</div>
</template>

<script>
import btn from './foot-button.vue'

export default {
	props: ['footlist'],
	components: {
		btn
	}
}
</script>

<style>
</style>