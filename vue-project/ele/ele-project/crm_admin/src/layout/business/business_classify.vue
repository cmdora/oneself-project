<template>
	<div>
		<header class="header" style="border-bottom: 1px solid #ccc;">
			<span>分类管理</span>
			<Button type="primary" @click="modalShow">添加分类</Button>
		</header>
		<table border="0" cellspacing="0" style="margin-top: 15px;" class="table">
			<thead class="thead">
				<tr>
					<th>图标</th>
					<th>名称</th>
					<th>描述</th>
					<th>食物</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody class="tbody" v-for="(item, index) in food_data" :key="index">
				<tr class="shopFather">
					<td><img :src="item.shop_img" class="img" /></td>
					<td>{{item.shop_title}}</td>
					<td>{{item.shop_msg}}</td>
					<td>{{item.shop_food}}</td>
					<td class="edit">
						<Button type="primary" @click="modalShowChild(item.id)">添加子类</Button>
						<Button type="warning">修改</Button>
						<Button type="error">删除</Button>
					</td>
				</tr>
				<tr class="child">
					<td colspan="5">子类</td>
				</tr>
				<tr class="shopChild">
					<td colspan="3">全部</td>
					<td colspan="3">
						<!-- v-for="(item2, index2) in item.shop_child" -->
						<span v-for="(item2, index2) in item.shop_child">{{item2}}</span>
					</td>
				</tr>
			</tbody>
		</table>
		<Modal
	        v-model="modal1"
	        title="添加父类"
	        @on-ok="ok"
	        @on-cancel="cancel">
	        <Form :model="formItem" :label-width="80">
	        	<FormItem label="商店名称">
	            	<Input v-model="formItem.title"></Input>
		        </FormItem>
		        <FormItem label="信息描述">
		            <Input v-model="formItem.msg"></Input>
		        </FormItem>
		        <FormItem label="子类信息">
		            <Select v-model="formItem.child" multiple style="width:260px">
				        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
		        <FormItem label="选择食物">
		            <Select v-model="formItem.food">
		                <Option value="果冻">果冻</Option>
		                <Option value="巧克力">巧克力</Option>
		                <Option value="鸡肉">鸡肉</Option>
		            </Select>
		        </FormItem>
    		</Form>
    		<Upload
    		 action="/api/upload"
    		 :on-success="fileSuccess"
    		 :before-upload="beforeUploads"
    		 :show-file-list="false"
    		 >
		        <img v-if="formItem.icon" :src="formItem.icon" class="img" />
		        <Button v-else type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
		    </Upload>
    	</Modal>
    	<Modal
	        v-model="modal2"
	        title="添加子类"
	        @on-ok="ok2"
	        @on-cancel="cancel">
	        <Form :model="formItem" :label-width="80">
		        <FormItem label="子类信息">
		            <Select v-model="formItem.child" multiple style="width:260px">
				        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
		        </FormItem>
    		</Form>
    	</Modal>
	</div>
</template>

<script type="ecmascript-6">
	import $http from '../../../../commen/plugins/http.js'
	export default {
      data () {
          return {
              modal1: false,
              modal2: false,
              formItem: {
                  title: '',
                  msg: '',
                  food: '',
                  icon: '',
                  child: []
              },
              cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
   			child_id: null,
   			food_data: []
          }
      },
      created () {
      	$http.get('/api/get_classify', {}).then((data) => {
			data.result.forEach((item) => {
  				item.shop_child = item.shop_child.split(',')
  			})
  			this.food_data = data.result
		})
      },
      methods: {
          ok () {
              this.$Message.info('Clicked ok');
              $http.post('/api/classify', {
              	...this.formItem
              }).then((result) => {
              	if (result.msg == 'ok') {
              		$http.get('/api/get_classify', {}).then((data) => {
              			data.result.forEach((item) => {
              				item.shop_child = item.shop_child.split(',')
              			})
              			this.food_data = data.result
              		})
              	}
              })
          },
          ok2 () {
          	this.$Message.info('Clicked ok')
          	$http.post('/api/get_child', {
          		child: this.formItem.child,
          		id: this.child_id
          	}).then((data) => {
          		if(data.status == 200){
					$http.get('/api/get_classify', {}).then((data) => {
              			data.result.forEach((item) => {
              				item.shop_child = item.shop_child.split(',')
              			})
              			this.food_data = data.result
              		})
          		}
          	})
          },
          cancel () {
              this.$Message.info('Clicked cancel');
          },
          modalShow () {
          	if (!this.modal1) {
          		this.modal1 = true
          	}
          },
          modalShowChild (id) {
          	if (!this.modal2) {
          		this.modal2 = true
          	}
          	this.child_id = id
          },
          fileSuccess (res, file) {
          	this.formItem.icon = 'http://47.94.19.116:9001/' + res.url
          },
          beforeUploads (file) {
          	return true
          }
      }
  }
</script>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		padding-bottom: 8px;
	}
	.header span {
		font-size: 18px;
		font-weight: 600;
	}
	.table {
		width: 100%;
		text-align: left;
	}
	.thead > tr > th {
		padding: 10px 0;
		border-bottom: 1px solid #ccc;
	}
	.thead > tr > th:last-child {
		text-align: center;
	}
	.shopChild td {
		border-bottom: 1px solid #ccc;
	}
	.shopFather .edit {
		width: 40%;
		padding: 15px 0;
		text-align: center;
	}
	.shopFather .edit button {
		margin-left: 5%;
	}
	.child {
		color: #1989FA;
	}
	.child,
	.shopChild td {
		padding: 8px 0;
	}
	.shopChild td:last-child span {
		margin-right: 8px;
	}
	.img {
		padding: 10px 0;
	}
	.img {
		width: 128px;
		height: 128px;
	}
</style>
