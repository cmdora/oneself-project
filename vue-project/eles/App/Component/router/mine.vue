<template>
  <div>
    我的
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '我的'
    }
  },
  created () {
    this.bus.$emit('class', this.type)
  }
}
</script>

<style>

</style>
