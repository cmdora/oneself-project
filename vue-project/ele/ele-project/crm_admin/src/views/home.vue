<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu active-key="1-2" @on-select="clicks" theme="dark" width="auto" :open-keys="['1']">
                    <div class="layout-logo-left"></div>
                    <Submenu v-for="(item, index) in list" :key="index" :name="index">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            {{item.meta.title}}
                        </template>
                        <Menu-item v-for="(item2, index2) in item.children" :key="index2" :name="item2.path">
                            {{item2.meta.title}}
                        </Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-header"><span @click="backSubmit">退出登录</span><span>{{userInfo.name}}</span></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                    	<router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import menuList from '@/router/index.config.js'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                list: null
            }
        },
        created () {
            this.$store.dispatch('get_user_info')
            this.list = menuList
        },
        computed: {
            ...mapState([
                'userInfo'
            ])
        },
        methods: {
            clicks (name) {
                this.$router.replace(name)
            },
            backSubmit () {
                this.$store.dispatch('login_out')
                this.$router.replace('/login')
            }
        }
    }
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 465px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>