<template>
  <div>
      我
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '我'
    }
  },
  created () {
    this.bus.$emit('head', this.type)
  }
}
</script>

<style>

</style>
