<template>
  <div>
      账户
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '账户'
    }
  },
  created () {
    this.bus.$emit('head', this.type)
  }
}
</script>

<style>

</style>
