<template>
  <div>
    外卖
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '外卖'
    }
  },
  created () {
    this.bus.$emit('class', this.type)
  }
}
</script>

<style>

</style>
