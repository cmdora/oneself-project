<template>
  <div class="footer-button">
      <router-link :to="path" tag="div" v-text="text"></router-link>
  </div>
</template>

<script>
export default {
    props: {
        text: {
            type: [String]
        },
        path: {
            type: [String]
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>
