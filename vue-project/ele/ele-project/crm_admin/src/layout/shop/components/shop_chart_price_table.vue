<template>
  <div>
    <el-table
      :data="shopList"
      style="width: 100%">
      <el-table-column
        label="商家名称"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.shop_title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="店铺地址"
        width="180">
        <template slot-scope="scope">
          <el-popover placement="top">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.shop_city }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="店铺类型"
        width="180">
        <template slot-scope="scope">
          <el-popover placement="top">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.shop_class_main }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="店铺介绍"
        width="180">
        <template slot-scope="scope">
          <el-popover placement="top">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.shop_class_less }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)" v-if="scope.row.status == 0">审核</el-button>
            <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)" v-else-if="scope.row.status == 2">审核不通过</el-button>
            <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)" v-else="scope.row.status == 1">审核通过</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="shop_title" label="商家名称"></el-table-column>
        <el-table-column property="shop_city" label="店铺地址"></el-table-column>
        <el-table-column property="shop_class_main" label="店铺类型"></el-table-column>
        <el-table-column property="shop_class_less" label="店铺介绍"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="shopNum"
      @current-change="currentPage">
    </el-pagination>
  </div>
</template>

<script>
  import $http from '../../../../../commen/plugins/http.js'
  export default {
    data() {
      return {
        shopList: null,
        dialogTableVisible: false,
        gridData: [],
        state: 0,
        id: null,
        shopNum: null,
        pageNum: 1
      }
    },
    created () {
      setTimeout(() => {
        this.getShopList()
      }, 20)
    },
    methods: {
      handleEdit(index, row) {
        this.dialogTableVisible = true
        this.gridData = []
        this.gridData.push(row)
        this.id = row.id
        this.state = row.state
      },
      getShopList () {
        $http.get('/api/shop/list', {}).then((result) => {
          this.shopList = result.slice(0, 10)
          this.shopNum = result.length
        })
      },
      cancel () {
        this.dialogTableVisible = false
        this.state = 2
        $http.post('/api/shop/audit', {
          state: this.state,
          id: this.id
        }).then((result) => {
          if (result.status == 200) {
            $http.get('/api/shop/list', {}).then((result) => {
              this.shopList = result
            })
          }
        })
      },
      sure () {
        this.dialogTableVisible = false
        this.state = 1
        $http.post('/api/shop/audit', {
          state: this.state,
          id: this.id
        }).then((result) => {
          if (result.status == 200) {
            $http.get('/api/shop/list', {}).then((result) => {
              this.shopList = result
            })
          }
        })
      },
      currentPage (val) {
        console.log(val)
        $http.post('/api/shop/page', {
          page: val
        }).then((result) => {
          this.shopList = result
        })
      }
    }
  }
</script>