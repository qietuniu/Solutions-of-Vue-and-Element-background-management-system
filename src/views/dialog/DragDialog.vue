<template>
  <div>
    <el-button
type="text"
@click="dialogTableVisible = true"
      >打开嵌套表格的 Dialog</el-button
    >
    <el-dialog
      v-el-drag-dialog="{ width: '600px', height: '400px' }"
      title="收货地址"
      :append-to-body="true"
      :close-on-click-modal="false"
      :visible.sync="dialogTableVisible"
    >
      <el-table :data="tableData" :show-overflow-tooltip="true" height="260">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址1"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: true,
      tableData: Array(5).fill({
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      })
    }
  }
}
</script>
<style lang="scss"></style>
