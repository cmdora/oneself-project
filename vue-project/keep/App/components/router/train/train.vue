<template>
  <div>
      训练
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '训练'
    }
  },
  created () {
    this.bus.$emit('head', this.type)
  }
}
</script>

<style>

</style>
