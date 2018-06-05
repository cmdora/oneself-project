<template>
  <div class="footer">
      <btn v-for="(item, index) in data" :path='item.path' :key="index" :text='item.text'></btn>
  </div>
</template>

<script>
import btn from "./foot-button.vue"
export default {
    props: ["data"],
    data () {
        return {
            datas: []
        }
    },
    components: {
        btn
    }
}
</script>

<style>
    .footer {
        border-top: 1px solid #000;
        line-height: .45rem;
        display: flex;
        justify-content: space-around;
    }
</style>
