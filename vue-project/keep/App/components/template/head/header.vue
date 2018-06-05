<template>
  <div>
      {{title}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    this.bus.$on('head', (val) => {
      this.title = val
    })
  }
}
</script>

<style>

</style>
