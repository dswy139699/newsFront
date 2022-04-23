<template>
  <div class="fileList">
    <a-table :columns="columns" :data-source="fileList" :pagination="pagination" :rowKey="(record)=>{record.report_file_id}">
      <span slot="action" slot-scope="text, record">
        <a @click="edit(record)">下载</a>
        <a-divider type="vertical" v-if="!disabled"/>
        <a @click="deleteClick(record)" v-if="!disabled">删除</a>
      </span>
    </a-table>
  </div>
</template>

<script>
 const columns = [
   {
     dataIndex: 'report_file_name',
     key: 'report_file_name',
     title: '文件名'
   },
   {
     title: '操作',
     key: 'action',
     scopedSlots: { customRender: 'action' }
   }
 ]
  export default {
    name: 'Index',
    props: {
      fileList: {
        type: Array,
        default: () => {
          return []
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      download: {
        type: Function,
        default: () => {}
      },
      onDelete: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        columns,
        pagination: false
      }
    },
    computed: {
      params () {
        return {
          download: this.download || (() => {}),
          onDelete: this.onDelete || (() => {})
        }
      }
    },
    methods: {
      edit (value) {
        this.params.download(value)
      },
      deleteClick (value) {
        this.params.onDelete(value)
      }
    }
  }
</script>

<style scoped lang="less">
  .fileList{
    /deep/ .ant-table-wrapper{
      border:1px solid #e8e8e8;
      border-radius:2px;
    }
    /deep/ .ant-table-placeholder{
      border-bottom:none;
    }
    /deep/ .ant-table-tbody > tr > td{
      border-bottom:1px solid #e8e8e8;
      padding:0 16px;
      line-height:54px;
    }
    /deep/ .ant-table-tbody > tr:last-child > td{
      border:none
    }
    /deep/ .ant-table-tbody .ant-table-row:nth-child(even){
      background:#FFF;
    }
  }

</style>
