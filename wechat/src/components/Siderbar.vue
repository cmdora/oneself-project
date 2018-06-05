<template>
    <div class="card">
        <div class="card-header" align="center">
            <img src="../assets/索隆.jpg" class="avatar img-circle img-responsive" />
            <p><strong> 非梦</strong></p>
            <p class="card-title">订阅列表</p>
        </div>
        <div class="card-block">
            <p v-for="(mp, idx) in subscribeList" @mouseover="showRemove(idx)" @mouseout="hideRemove(idx)">
                <small class="lists">
                    <a class="nav-link" :href="mp.encGzhUrl" target="_blank">
                        <!-- ![](mp.image) --><img class="sImg" :src="mp.image" alt=""> {{ mp.mpName }}
                    </a>
                    <a href="javascript:" @click="unsubscribeMp(mp.weixinhao)">
                        <i class="fa fa-lg float-xs-right text-danger sidebar-remove"
                           :class="{'fa-minus-circle': mp.showRemoveBtn}"></i>
                    </a>
                </small>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  },
  computed: {
    subscribeList () {
      // 从store中取出数据
      return this.$store.state.subscribeList
    }
  },
  methods: {
    unsubscribeMp (weixinhao) {
      // 删除公众号
      return this.$store.dispatch('unsubscribeMp', weixinhao)
    },
    showRemove (idx) {
      return this.subscribeList[idx]['showRemoveBtn'] = true
    },
    hideRemove (idx) {
      return this.subscribeList[idx]['showRemoveBtn'] = false
    }
  }
}
</script>

<style>
    .avatar{
        height:75px;
        margin:0 auto;
        margin-top:10px;
        margin-bottom:10px;
    }
    .mpavatar{
        height:30px;    
        margin:0 auto;
        margin-top:2px;
        margin-bottom:2px;
    }
    .img-circle{
        border-radius:50%;
    }
    .sImg {
        width: 100%;
        height: auto;
        border-radius: 100%;
    }
    .lists {
        display: flex;
    }
</style>