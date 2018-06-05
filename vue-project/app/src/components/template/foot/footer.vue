<template>
  <div class="footer">
      <btn v-for="(item, index) in data" :key='index' :text='item.text' :path='item.path'></btn>
  </div>
</template>

<script>
import btn from './footer-button.vue'
export default {
  props: ['data'],
  components: {
    btn
  }
}
</script>

<style>
  
</style>
