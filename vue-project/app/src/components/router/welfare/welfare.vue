<template>
  <div>
      福利
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '福利'
    }
  },
  created () {
    this.bus.$emit('head', this.type)
  }
}
</script>

<style>

</style>
