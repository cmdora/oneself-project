<template>
  <div class="project_payment_uplane">
      <div class="project_payment_uplane_list" v-for="(item, index) in list">
        <h3 class="title">{{item.title}}</h3>
        <ul class="content">
          <li class="value"><p>{{item.value}}</p><span>期待年回报率</span></li>
          <li class="day"><p><span>{{item.month}}</span>个月</p><span>锁定期</span></li>
          <li class="add"><span>立即加入</span></li>
        </ul>
        <p class="quan"><span>现金券</span></p>
      </div>
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
    
  },
  mounted () {
    this.axios('project')
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
  .project_payment_uplane_list {
    background: #fff;
    margin-bottom: .12rem;
    padding: .15rem;
  }
  .project_payment_uplane_list .title {
    line-height: .3rem;
  }
  .project_payment_uplane_list ul {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: .12rem 0;
  }
  .project_payment_uplane_list ul li {
    line-height: .25rem;
  }
  .project_payment_uplane_list ul .value p{
    color: orangered;
    font-size: .2rem
  }
  .project_payment_uplane_list ul .value span {
    color: #ccc;
    font-size: .1rem;
  }
  .project_payment_uplane_list ul .day p span {
    font-size: .2rem;
  }
  .project_payment_uplane_list ul .day>span {
    color: #ccc;
    font-size: .1rem;
  }
  .project_payment_uplane_list ul .add span{
    color: #fff;
    background: orangered;
    border-radius: .06rem;
    padding: .05rem;
    display: block;
  }
  .project_payment_uplane_list .quan span {
    border: 1px solid orangered;
    color: orangered;
    margin-top: .15rem;
    display: block;
    width: 15%;
    text-align: center;
  }
</style>
