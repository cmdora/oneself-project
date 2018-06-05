<template>
	<div class="cart">
		<div class="payment" v-for="(item, index) in cartList" :key='index'>
			<h4 class="store-title">
				<div class="store-check button-check" @click='storeCheck(item)'>
					<div class="box"><span :class="{'check': item.checked}">√</span></div>
				</div>
				<span>{{item.produceStore}}</span>
			</h4>
			<div class="store-content">
				<store :produces='item.produce'></store>
			</div>
		</div>
		<div class="all">
			<div class="left">
				<div class="all-check button-check" @click='checkAll(true)'>
					<div class="box"><span :class="{'check': allFlag}">√</span></div>
				</div>
				<span class="alls" v-show="!allFlag">
					全选
				</span>
				<span class="del" v-show="allFlag" @click='checkAll(false)'>
					取消全选
				</span>
				<div class="all-price">合计：<span>{{allPrice}}</span></div>
			</div>
			<div class="right">
				<span>去结算</span>
			</div>
		</div>
	</div>
</template>

<script>
import store from './cart-store.vue'
export default {
	data () {
		return {
			cartList: [],
			allPrice: 0,
			allFlag: false
		}
	},
	methods: {
		storeCheck (store) { // 点击购物车标题单选按钮
			if (typeof store.checked == 'undefined') {
				this.$set(store, 'checked', true)
			}else {
				store.checked = !store.checked
			}
			store.produce.forEach((item) => {
				if (typeof item.checkFlag == 'undefined') {
					this.$set(item, 'checkFlag', store.checked)
				}else {
					item.checkFlag = store.checked
					this.aPrice(store)
				}
			})
			this.aPrice(store)
		},
		checkAll (flag) { // 点击计算总价按钮
			this.allFlag = flag
			this.cartList.forEach((v) => {
				if (typeof v.checked == 'undefined') {
					this.$set(v, 'checked', this.allFlag)
					v.produce.forEach ((item) => {
						if (typeof item.checkFlag == 'undefined') {
							this.$set(item, 'checkFlag', this.allFlag)
						}else {
							item.checkFlag = this.allFlag
						}
					})
				}else {
					v.checked = this.allFlag
					v.produce.forEach ((item) => {
						if (typeof item.checkFlag == 'undefined') {
							this.$set(item, 'checkFlag', this.allFlag)
						}else {
							item.checkFlag = this.allFlag
						}
					})
				}
			})
			this.allsPrice()
		},
		allsPrice() { // 计算全选金额
			this.allPrice = 0
			this.cartList.forEach((v) => {
				v.produce.forEach((item) => {
					if (this.allFlag) {
						this.allPrice += item.producePrice * item.produceQuantity
					}
				})
			})
		},
		aPrice(store) { // 计算点击商店标题按钮计算金额
			this.allPrice = 0
			store.produce.forEach((item) => {
				if (item.checkFlag) {
					this.allPrice += item.producePrice * item.produceQuantity
				}
			})
		}
	},
	created () {
		this.bus.$on('ok', (v) => {
			this.allPrice = 0
			this.allPrice += v
		})
		this.axios('data')
		 .then((result) => {
		 	this.cartList = result.data.produceList
		 })
	},
	components: {
		store
	}
}
</script>

<style>
	.cart {
		padding-bottom: .6rem;
	}
	.store-title {
		line-height: .45rem;
		border-bottom: 1px solid #e9e9e9;
		padding-left: .15rem;
	}
	.store-title .store-check {
		float: left;
		margin-right: .1rem;
		margin-top: .1rem;
	}
	.all {
		position: fixed;
		bottom: .45rem;
		height: .5rem;
		background: #fff;
		border-top: 1px solid #e9e9e9;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.all .left .all-check {
		float: left;
		margin-left: .15rem;
		margin-right: .15rem;
		margin-top: .15rem;
	}
	.all .left .alls {
		float: left;
		margin-top: .18rem;
	}
	.all .left .del {
		float: left;
		margin-top: .18rem;
	}
	.all .left .all-price {
		float:left;
		margin-top: .18rem;
		margin-left: .1rem;
	}
	.all .right span {
		background: #d1434a;
		height: .5rem;
		display: inline-block;
		width: .8rem;
		color: #fff;
		text-align: center;
		line-height: .5rem;
	}
</style>