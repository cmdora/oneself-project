new Vue({
	el: '#app',
	data () {
		return {
			productList: [],
			delFlag: false,
			curProduct: '',
			checkAllFlag: false,
			totalMoney: 0
		}
	},
	filters: {
		formatMoney(value) {
			return '￥' + value.toFixed(2)
		}
	},
	mounted () {
		this.$nextTick(() => {
			this.cartView()
		})
	},
	methods: {
		cartView () {// 渲染产品列表
			this.$http.get('data/cartData.json')
			 .then((result) => {
			 	this.productList = result.body.result.list;
			 })
		},
		changeMoney (product, value) {// 点击加减商品
			if (value > 0) {
				product.productQuantity++
			}else {
				product.productQuantity--
				if (product.productQuantity < 0) {
					product.productQuantity = 0;
				}
			}
			this.calcTotalPrice()
		},
		selectedProduct (product) {// 点击单选按钮
			if (typeof product.checked == 'undefined') {
				this.$set(product, "checked", true)
				console.log(product)
			}else {
				product.checked = !product.checked
				console.log(product)
			}
			this.calcTotalPrice()
		},
		checkAll (flag) {// 点击全选
			this.checkAllFlag = flag;
			this.productList.forEach((item) => {
				if (typeof item.checked == 'undefined') {
					this.$set(item, 'checked', this.checkAllFlag)
				}else {
					item.checked = this.checkAllFlag
				}
			})
			this.calcTotalPrice()
		},
		calcTotalPrice () {
			this.totalMoney = 0
			this.productList.forEach((item) => {
				if (item.checked) {
					this.totalMoney += item.productQuantity * item.productPrice;
				}
			})
		},
		delConfirm (product) {// 点击删除
			this.delFlag = true;
			this.curProduct = product;
		},
		delProduct () {
			var index = this.productList.indexOf(this.curProduct)
			this.productList.splice(index, 1)
			this.delFlag = false;
		}
	}
})

//全局过滤组件
Vue.filter('money', (value, type) => {
	return '￥' + value.toFixed(2) + type
})
