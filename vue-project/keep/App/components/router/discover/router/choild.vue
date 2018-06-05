<template>
  <div class="discover_payment_choild">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <dl class="discover_payment_choild_list" v-for="(item, index) in list">
          <dt>
            <img :src="item.img" alt="">
          </dt>
          <dd>
            <h4 v-text="item.title" class="title"></h4>
            <p class="msg">{{item.msg}}</p>
            <p class="price">{{item.price}}</p>
          </dd>
        </dl>
      </mt-loadmore>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
      loadTop() {
          console.log('top事件触发');
          this.axios('discover')
              .then( (result)=>{
                  this.data = this.data.concat(result.data);
                  this.$refs[this.loadmore].onTopLoaded();
              }, (error)=>{
                  throw new Error(error);
              } );
      }
  },
  mounted () {
    this.axios('discover')
      .then((result) => {
        result.data.forEach((v) => {
          if (this.$route.params.type === v.type) {
            this.list = v.list[this.$route.params.id].list
          }
        })
      })
  }
}
</script>

<style>
  .discover_payment_choild_list {
    display: flex;
    padding: .15rem;
  }
  .discover_payment_choild_list dt {
    flex: 4;
    border-radius: .16rem;
  }
  .discover_payment_choild_list dt img {
    width: 100%;
    height: auto;
    border-radius: .15rem;
  }
  .discover_payment_choild_list dd {
    flex: 6;
    padding-left: .12rem;
    line-height: .2rem;
  }
  .discover_payment_choild_list dd .msg {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .discover_payment_choild_list dd .price {
    color: seagreen;
  }
</style>
