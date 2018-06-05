<template>
  <div class="classify">
    <div class="classify_search">
      <input type="text" placeholder="搜索商家、商品名称">
    </div>
    <div class="classify_payment">
      <ul class="classify_payment_list" v-for="(item, index) in list">
        <li v-text="item.title"></li>
        <li><img :src="item.img" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      type: '分类'
    }
  },
  created () {
    this.bus.$emit('class', this.type)
    this.$http('before')
      .then((result) => {
        this.list = result.data[0].list
      })
  }
}
</script>

<style>
  .classify {
    padding: .15rem;
  }
  .classify_payment {
    display: flex;
    flex-wrap: wrap;
  }
  .classify_payment_list {
    display: flex;
    justify-content: space-between;
    width: 40%;
    background: #ccc;
    border-radius: .06rem;
    padding: .1rem;
    margin-top: .1rem;
  }
  .classify_payment_list:nth-child(odd) {
  }
  .classify_payment_list:nth-child(even) {
    margin-left: .1rem;
  }
  .classify_payment_list li:nth-child(1) {
    flex: 5;
  }
  .classify_payment_list li:nth-child(2) {
    flex: 5;
  }
  .classify_payment_list li img{
    width: 100%;
    height: auto;
  }
  .classify_search {
    line-height: .3rem;
    text-align: center;
  }
  .classify_search input {
    border: none;
    border: 1px solid #ccc;
    width: 80%;
    border-radius: .16rem;
    text-align: center;
    line-height: .25rem;
    color: #ccc;
  }
</style>
