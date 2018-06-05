<template>
  <div>
      动态
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '动态'
    }
  },
  created () {
    this.bus.$emit('head', this.type)
  }
}
</script>

<style>

</style>
