<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
      </div>
    </template>
    <div class="content">
      <div>
        <GlobalForm :dataSource="getFormData" ref="schoolSerch" id="schoolSearch">
          <template v-slot:button>
            <div style="margin-top:4px;text-align: right">
              <a-button type="primary" @click="search">
                查询
              </a-button>
              <a-button style="margin-left:10px" @click="reset">
                重置
              </a-button>
            </div>
          </template>
        </GlobalForm>
      </div>
      <div class="table" style="margin-top:10px;">
        <a-table
          :columns="columns"
          :data-source="data"
          @change="changePage"
          :loading="loading"
          :pagination="pagination"
          :rowKey="record=>record.id"
        >
          <span slot="action" slot-scope="text,data">
            <a @click="onShow(data)">查看</a>
            <!--<a-divider type="vertical" />-->
            <!--<a-popconfirm-->
            <!--title="确定删除?"-->
            <!--ok-text="是"-->
            <!--cancel-text="否"-->
            <!--@confirm="()=>{}"-->
            <!--&gt;-->
            <!--<a>删除</a>-->
            <!--</a-popconfirm>-->
          </span>
          <!--<template slot="footer" slot-scope="" v-if="data&&data.length>0">-->
          <!--<a-button type="primary">删除所选数据</a-button>-->
          <!--</template>-->
        </a-table>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
  import GlobalForm from '@/components/GlobalForm'
  import { formData } from './formData'
  import { services } from '../service'

  const columns = [
    {
      title: '学生姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '学生学号',
      dataIndex: 'studentNum',
      key: 'studentNum'
    },
    {
      title: '班级',
      dataIndex: 'clazzName',
      key: 'clazzName'
    },
    {
      title: '补款金额',
      dataIndex: 'supplyMoney',
      key: 'supplyMoney'
    },
    {
      title: '付款时间',
      dataIndex: 'dayOfPayment',
      key: 'dayOfPayment'
    },
    {
      title: '操作',
      key: 'action',
      scopedSlots: { customRender: 'action' }
    }
  ]
  export default {
    name: 'Index',
    components: {
      GlobalForm
    },
    data () {
      return {
        columns,
        title: '新增课程',
        loading: true,
        searchData: {},
        selectedRowKeys: [], // 选中的table数据
        data: [],
        pagination: {// 分页
          current: 1,
          pageSize: 20,
          total: 0
        }
      }
    },
    computed: {
      getFormData () {
        return formData.getFormData(this)
      }
    },
    created () {
      // this.$store.dispatch('GetSchool')
    },
    mounted () {
      this.searchData = { schoolId: this.$store.getters.selectSchoolInfo.value || '' }
      // this.searchData = { schoolId: this.$store.getters.schoolNameList[0] ? this.$store.getters.schoolNameList[0].value : '' }// 查询数据
      this.getStudent({ pageIndex: this.pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
    },
    methods: {
      // 分页切换
      changePage (pagination) {
        this.pagination.current = pagination.current
        this.getStudent({ pageIndex: pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
        // this.getProcessList({ process_label: 'Done', pageIndex: pagination.current, pageSize: this.pagination.pageSize, process_config_type: 'individualCase', ...this.params })
      },
      search () { // 查询
        const params = this.$refs.schoolSerch.getFieldsValue()
        this.searchData = { ...params, schoolId: this.$store.getters.selectSchoolInfo.value || '' }
        this.pagination.current = 1
        this.getStudent({ pageIndex: 1, pageSize: this.pagination.pageSize, ...this.searchData })
      },
      reset () { // 重置
        this.$refs.schoolSerch.resetFields()
        // this.searchData = { schoolId: this.$store.getters.schoolNameList[0] ? this.$store.getters.schoolNameList[0].value : '' }// 查询数据
      },
      onSelectChange (selectedRowKeys) { // table选择
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys
      },
      onShow (data) { // 查看已付款学生信息详情
        this.$router.push({ path: '/book/solicitManage/supplyPayInfo', query: { id: data.id } })
      },
      getStudent (data) {
        this.loading = true
        services.getStudent({ ...data, isPayment: 1 }).then(response => {
          this.data = response.records || []
          this.pagination.total = response.total || 0
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../style.less';
  .content{
  background: #fff;
  padding:20px;
  border-radius:2px;
  .modal {
    /deep/ .ant-modal {
      width: 900px;
      min-width: 900px;
    }
    /deep/ .ant-alert {
      padding: 5px 5px 5px 35px;
      font-size: 12px;
      .ant-alert-icon {
        top: 8px;
      }
    }
  }
}
</style>
