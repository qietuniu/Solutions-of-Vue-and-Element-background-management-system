<template>
<div>
  <el-table
    v-el-height-adaptive-table
    :data="tableData"
    height="100px"
    border>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <div class="pagination-container pagination-fix">
    <el-pagination
      :current-page="1"
      :page-sizes="[10,20,30, 50]"
      :page-size="25"
      :total="25"
      background
      layout="total, sizes, prev, pager, next, jumper"

    />
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      tableData: Array(25).fill({
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      })
    }
  }
}
</script>
<style lang="scss">

</style>
