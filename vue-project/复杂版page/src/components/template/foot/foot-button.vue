<template>
	<div class="foot-button">
		<router-link :to="path" v-text="text" tag="div"></router-link>
	</div>
</template>

<script>
export default {
	props: {
		path: {
			type: [String]
		},
		text: {
			type: [String]
		}
	}
}
</script>

<style>
</style>