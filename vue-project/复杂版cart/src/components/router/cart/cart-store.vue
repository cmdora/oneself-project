<template>
	<div class="cart-store">
		<dl v-for="(item, index) in produces">
			<dt>
				<div class="produce-check button-check" @click="produceCheck(item)">
					<div class="box"><span :class="{'check': item.checkFlag}">√</span></div>
				</div>
				<div class="producePic">
					<img :src="item.produceImage" alt="" />
				</div>
			</dt>
			<dd>
				<h4 class="produceName">{{item.produceName}}</h4>
				<div class="producePrice">
					<p class="price">{{item.producePrice}}</p>
					<p>
						<span @click='quantity(item, -1)'>-</span>
						<input type="text" :value="item.produceQuantity" disabled />
						<span @click='quantity(item, 1)'>+</span>
					</p>
				</div>
			</dd>
		</dl>
	</div>
</template>

<script>
export default {
	props: ['produces'],
	data () {
		return {
			allPrice: 0
		}
	},
	methods: {
		produceCheck(produce) {
			if (typeof produce.checkFlag == 'undefined') {
				this.$set(produce, 'checkFlag', true)
			}else {
				produce.checkFlag = !produce.checkFlag
			}
			this.totalPrice()
		},
		quantity (item, index) {
			if (index > 0) {
				item.produceQuantity++
			}else {
				item.produceQuantity--
				if (item.produceQuantity < 0) {
					item.produceQuantity = 0
				}
			}
			this.totalPrice()
		},
		totalPrice () {
			this.allPrice = 0
			this.produces.forEach((v) => {
				if (v.checkFlag) {
					this.allPrice += v.producePrice * v.produceQuantity
				}
			})
			this.bus.$emit('ok', this.allPrice)
		}
	}
}
</script>

<style>
	dl {
		border-bottom: 1px solid #e9e9e9;
		padding: .15rem;
		display: flex;
		justify-content: space-around;
	}
	dl dt {
		display: flex;
		align-items: center;
	}
	dl dt .produce-check {
		margin-right: .1rem;
	}
	dl dt .producePic {
		width: .8rem;
		height: auto;
		float: left;
	}
	dl dt .producePic img {
		width: 100%;
		height: 100%;
	}
	dl dd .producePrice {
		display: flex;
		margin-top: .2rem;
	}
	dl dd .producePrice .price {
		margin-right: .2rem;
		line-height: .22rem;
	}
	dl dd .producePrice span {
		display: inline-block;
		border: 1px solid #e9e9e9;
		width: .15rem;
		height: .2rem;
		line-height: .2rem;
		text-align: center;
	}
	dl dd .producePrice span:nth-of-type(1) {
		margin-left: .12rem;
		margin-right: -.05rem;
	}
	dl dd .producePrice span:nth-of-type(2) {
		margin-left: -.05rem;
	}
	dl dd .producePrice input {
		background: none;
		border: 1px solid #e9e9e9;
		width: .3rem;
		height: .2rem;
		vertical-align: bottom;
		text-align: center;
	}
</style>