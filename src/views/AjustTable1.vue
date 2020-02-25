<template>
<div class="ajustTable commonWrapper">
  滚动条:颜色样式
  <el-table
    :data="tableData"
    height="100%"
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
.commonWrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
  .el-table {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0%;
    flex: 1 1 0%;
  }
}
</style>
