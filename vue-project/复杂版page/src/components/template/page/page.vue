<template>
	<div class="page">
		<div class="payment">
			<p v-for="item in list">
				<img :src="item.img" alt="" />
			</p>
		</div>
		<ul class="pagination">
			<li v-show="current != 1" @click="current--"><a href="#">上一页</a></li>
			<li v-for="index in pages" @click="goto(index, homelist.length)" :class="{'active': current == index}"><a href="#">{{index}}</a></li>
			<li v-show="current != allpage && allpage != 0" @click="current++"><a href="#">下一页</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['homelist'],
	data () {
		return {
			current: 1,
			showItem: 5,
			allpage: 13,
			list: []
		}
	},
	computed: {
		pages () {
			let pag = []
			if (this.current < this.showItem) {
				let i = Math.min(this.showItem, this.allpage)
				while (i) {
					pag.unshift(i--)
				}
			}else {
				let middle = this.current - Math.floor(this.showItem / 2),
					i = this.showItem
				
				if (middle > (this.allpage - this.showItem)) {
					middle = (this.allpage - this.showItem) + 1
				}
				
				while(i--) {
					pag.push(middle++)
				}
			}
			
			return pag
		}
	},
	methods: {
		goto (index, length) {
			if (this.current == index) return
			this.current = index
			this.list = this.homelist.splice(0, 1)
		}
	}
}
</script>

<style>
	.pagination {
		position: relative;
	}
	.pagination li {
		display: inline-block;
		margin: 0 .05rem;
	}
	.pagination li a {
		padding: .03rem .06rem;
		display: inline-block;
		border: 1px solid #ddd;
		color: #0E90D2;
		font-size: .1rem;
	}
	.pagination li.active a {
		background: #0E90D2;
		color: #fff;
	}
	.page {
		position: fixed;
		bottom: .55rem;
		left: 0;
		text-align: center;
		width: 100%;
	}
	img {
		width: 50px;
		height: 50px;
	}
</style>