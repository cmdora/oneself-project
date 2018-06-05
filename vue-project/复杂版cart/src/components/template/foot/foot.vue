<template>
	<div class="footer">
		<btn v-for="(item, index) in footlist" :key="index" :path="item.path" :text="item.text"></btn>
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