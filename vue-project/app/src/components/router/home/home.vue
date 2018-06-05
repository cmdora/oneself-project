<template>
  <div>
      首页
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '首页'
    }
  },
  created () {
    this.bus.$emit('head', this.type)
  }
}
</script>

<style>

</style>
