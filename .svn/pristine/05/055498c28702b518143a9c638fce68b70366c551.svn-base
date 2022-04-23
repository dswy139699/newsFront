<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
      </div>
    </template>
    <div class="content">
      <div style="text-align: left">
        <a-button type="primary" @click="increase">
          新增
        </a-button>
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
            <a @click="onEdit(data)">编辑</a>
            <a-divider type="vertical" />
            <a-popconfirm
              title="确定删除?"
              ok-text="是"
              cancel-text="否"
              @confirm="delSchool(data)"
            >
              <a >删除</a>
            </a-popconfirm>
            <a-divider type="vertical" />
            <a >导出征订明细</a>
            <a-divider type="vertical" />
            <a >导出征订汇总</a>
            <a-divider type="vertical" />
            <span style="color:#1890ff">开放征订</span>
            <a-switch :checked="data.enableSubscription ? true : false" @change="(value)=>onChange(value,data,'enableSubscription')" style="margin:0 0 4px 5px" size="small"/>
            <a-divider type="vertical" />
            <span style="color:#1890ff">开放地址</span>
            <a-switch :checked="data.enableAddress ? true : false" @change="(value)=>onChange(value,data,'enableAddress')" style="margin:0 0 4px 5px" size="small"/>
            <a-divider type="vertical" />
            <a @click="onNotice(data)">公告</a>
          </span>
        </a-table>
      </div>
      <div class="modal">
        <a-modal
          :title="title"
          :visible="visible"
          @cancel="cancel"
          @ok="handelOk"
        >
          <div class="increase">
            <GlobalForm ref="increaseDom" :dataSource="getIncreaseForm" id="increaseDom">
            </GlobalForm>
          </div>
        </a-modal>
      </div>
      <div class="modal">
        <a-modal
          title="公告"
          :visible="visibleNotice"
          @cancel="cancelNotice"
          @ok="handelOkNotice"
        >
          <div class="increase">
            <GlobalForm ref="notice" :dataSource="getNoticeData" id="notice">
            </GlobalForm>
          </div>
        </a-modal>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
  import GlobalForm from '@/components/GlobalForm'
  import { formData } from './formData'
  import { services } from './service'
  const columns = [
    {
      title: '学校名称',
      dataIndex: 'name',
      key: 'name',
      width: 450,
      ellipsis: true
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
        visibleNotice: false,
        title: '新增学校',
        loading: true,
        noticeInfo: null,
        editInfo: null, // 需要编辑的该条数据的信息
        visible: false,
        searchData: {}, // 查询条件
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
      },
      getIncreaseForm () {
        return formData.getIncreaseForm(this)
      },
      getNoticeData () {
        return formData.getNoticeData(this)
      }
    },
    mounted () {
      this.getSchoolForPage({ pageIndex: this.pagination.current, pageSize: this.pagination.pageSize })
    },
    methods: {
      // check (rule, value, callback) {
      //   if (value && value.length < 7) {
      //     const title = '密码不少于六位数'
      //     callback(title)
      //   } else {
      //     callback()
      //   }
      // },
      // 分页切换
      changePage (pagination) {
        this.pagination.current = pagination.current
        this.getSchoolForPage({ pageIndex: pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
        // this.getProcessList({ process_label: 'Done', pageIndex: pagination.current, pageSize: this.pagination.pageSize, process_config_type: 'individualCase', ...this.params })
      },
      increase () { // 新增
        this.title = '新增学校'
        this.visible = true
        this.editInfo = null
      },
      onEdit (data) {
        const newData = this._.cloneDeep(data)
        this.title = '编辑学校'
        this.editInfo = data
        this.visible = true
        delete newData.id
        this.$nextTick(() => { // 延时，不然dom没有加载出来
          setTimeout(() => {
            this.$refs.increaseDom.setFieldsValue({
              name: newData.name,
              loginId: newData.loginId,
              importType: newData.importType
            })
          })
        })
      },
      handelOk () { // 新增确定
        const params = this.$refs.increaseDom.handleSubmit()
        // console.log(params)
        if (params) {
          if (this.editInfo) { // 编辑情况
            this.updateSchool({ ...this.editInfo, ...params })
          } else { // 新增情况
            this.saveSchool(params)
          }
          // this.cancel()
        }
      },
      cancel () {
        this.$refs.increaseDom.resetFields()
        this.visible = false
      },
      cancelNotice () {
        this.$refs.notice.resetFields()
        this.visibleNotice = false
      },
      handelOkNotice () {
        const params = this.$refs.notice.handleSubmit()
        services.updateSchool({ ...this.noticeInfo, notice: params.notice }).then(response => {
          this.$notification.success({
            message: '更新成功'
          })
          this.$store.dispatch('GetSchool')
          // this.searchData = {}
          // this.pagination.current = 1
          this.getSchoolForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
            ...this.searchData
          })
        })
        this.visibleNotice = false
      },
      search () { // 查询
        const params = this.$refs.schoolSerch.getFieldsValue()
        this.searchData = params
        this.pagination.current = 1
        this.getSchoolForPage({ pageIndex: 1, pageSize: this.pagination.pageSize, ...params })
      },
      reset () { // 重置
        this.searchData = {}
        this.$refs.schoolSerch.resetFields()
      },
      onNotice (data) {
        this.noticeInfo = data
        this.visibleNotice = true
        this.$nextTick(() => { // 延时，不然dom没有加载出来
          setTimeout(() => {
            this.$refs.notice.setFieldsValue({
              notice: data.notice
            })
          })
        })
      },
      getSchoolForPage (data) { // 分页查询
        this.loading = true
        services.getSchoolForPage(data).then(response => {
          this.data = response.records || []
          this.pagination.total = response.total || 0
          this.loading = false
        })
      },
      saveSchool (data) { // 新增
        services.saveSchool(data).then(response => {
          this.$notification.success({
            message: '新增成功'
          })
          this.$store.dispatch('GetSchool')
          // this.searchData = {}
          // this.pagination.current = 1
          this.cancel()
          this.getSchoolForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
            ...this.searchData
          })
        })
      },
      updateSchool (data) { // 更新
        services.updateSchool(data).then(response => {
          this.$notification.success({
            message: '更新成功'
          })
          this.cancel()
          this.$store.dispatch('GetSchool')
          // this.searchData = {}
          // this.pagination.current = 1
          this.getSchoolForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
            ...this.searchData
          })
        })
      },
      delSchool (data) {
        services.delSchool({ idList: [data.id] }).then(response => {
          this.$notification.success({
            message: '删除成功'
          })
          this.$store.dispatch('GetSchool')
          // this.searchData = {}
          // this.pagination.current = 1
          this.getSchoolForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
            ...this.searchData
          })
        })
      },
      onChange (value, data, id) {
        services.updateSchool({ ...data, [id]: value ? 1 : 0 }).then(response => {
          this.$notification.success({
            message: '更新成功'
          })
          this.$store.dispatch('GetSchool')
          // this.searchData = {}
          // this.pagination.current = 1
          this.getSchoolForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
            ...this.searchData
          })
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../style.less';
  .content{
  background: #fff;
  padding:20px;
  border-radius:2px;
}
</style>
