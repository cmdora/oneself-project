<template>
	<Form ref="formCustom" :label-width="150">
        <FormItem label="用户名">
            <Input type="text" v-model="userInfo.userName" ></Input>
        </FormItem>
        <FormItem label="密码">
            <Input type="password" v-model="userInfo.password"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="submits">Submit</Button>
        </FormItem>
    </Form>
</template>

<script type="ecmascript-6">
import $http from '../../../commen/plugins/http.js'
export default {
    data () {
    	return {
    		userInfo: {
    			userName: '',
    			password: ''
    		}
    	}
    },
    methods: {
    	submits () {
    // 		$http.post('http://localhost:9000/login', {
    // 			userName: this.userInfo.userName,
    // 			password: this.userInfo.password
    // 		}).then((result) => {
    // 			console.log(result)
    // 			//var exp = new Date();
				// // exp.setTime(exp.getTime() - 1);
    // 			// document.cookie = 'name' + "="+ escape (result.userName)
    // 			// + ";expires=" + exp.toGMTString();
    // 			if (result) {
    // 				window.localStorage.setItem('user', JSON.stringify(result))
    // 				this.$router.replace('/home')
    // 			}

    //             this.$store.dispatch('login_in', result)

    // 		}, (error) => {
    // 			console.log(error)
    // 		})
            this.$store.dispatch('login_in', this.userInfo).then(() => {
                console.log('成功')
                this.$router.replace('/home')
            })
    	}
    }
}
</script>

<style>
	
</style>