<template>
  <div>
    订单
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '订单'
    }
  },
  created () {
    this.bus.$emit('class', this.type)
  }
}
</script>

<style>

</style>
