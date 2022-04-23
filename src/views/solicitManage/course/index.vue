<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
      </div>
    </template>
    <a-spin tip="Loading..." :spinning="spinning">
      <div class="content spin-content">
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
        <div style="text-align: left">
          <a-button type="primary" @click="increase" style="margin-right:5px">
            新增
          </a-button>
          <a-upload
            :showUploadList="false"
            :customRequest="customRequest"
            @change="()=>{}"
          >
            <a-button type="primary">
              导入课程信息
            </a-button>
          </a-upload>
        </div>
        <div class="table" style="margin-top:10px;">
          <a-table
            :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
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
                @confirm="delStu(data)"
              >
                <a>删除</a>
              </a-popconfirm>
            </span>
            <template slot="footer" slot-scope="" v-if="data&&data.length>0">
              <a-button type="primary" @click="delStus(data)">删除所选数据</a-button>
            </template>
          </a-table>
        </div>
        <div class="modal" ref="modal">
          <a-modal
            :title="title"
            :visible="visible"
            @cancel="cancel"
            @ok="handelOk"
            destroyOnClose
            :getContainer="()=>this.$refs.modal"
          >
            <div class="increase">
              <GlobalForm ref="increaseDom" :dataSource="getIncreaseForm" id="increaseDom">
                <template v-slot:warning>
                  <a-alert style="margin:5px 0 0 10px" message="课程号必须唯一" type="warning" show-icon />
                </template>
                <!--<template v-slot:handel>-->
                <!--<a-alert  style="margin:5px 0 0 10px" message="老师 如：张三" type="warning" show-icon />-->
                <!--</template>-->
                <!--<template v-slot:empCode>-->
                <!--<a-alert  style="margin:5px 0 0 10px" message="如：12345" type="warning" show-icon />-->
                <!--</template>-->
                <template v-slot:telPhone>
                  <a-alert style="margin:5px 0 0 10px" message="如：0755-1234567" type="warning" show-icon />
                </template>
                <template v-slot:password>
                  <a-alert style="margin:5px 0 0 10px" message="密码必须六位以上" type="warning" show-icon />
                </template>
                <template v-slot:books>
                  <div>
                    <div class="table" style="margin-top:10px;">
                      <a-table
                        :row-selection="{ selectedRowKeys:selectedRowKeysIncrease,onChange:onSelectChangeIncrease }"
                        :columns="columnsCourse"
                        :data-source="$store.getters.bookNameList || []"
                        :loading="loadingCourse"
                        :pagination="{pageSize:5}"
                        :rowKey="record=>record.id"
                      >
                        <template slot="footer" slot-scope="" v-if="$store.getters.bookNameList&&$store.getters.bookNameList.length>0">
                          <div>
                            已选：
                            <span v-for="item in selectedListInfo" :key="item.id" style="margin:0 5px 5px 0;display: inline-block">
                              <a-tag style="vertical-align: top" color="blue" closable @close="(e)=>closeTag(e,item)">({{ item.id }}){{ item.name }}</a-tag>
                            </span>
                          </div>
                        </template>
                      </a-table>
                    </div>
                  </div>
                </template></GlobalForm>
            </div>
          </a-modal>
        </div>
      </div>
    </a-spin>
  </page-header-wrapper>
</template>

<script>
  import GlobalForm from '@/components/GlobalForm'
  import { formData } from './formData'
  import { checkPhone, checkEmail } from '@/utils/checkFun'
  import { services } from './service'
  const columns = [
    {
      title: '课程号',
      dataIndex: 'num',
      key: 'num'
    },
    {
      title: '课程名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '课程代码',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: '所属学校',
      dataIndex: 'schoolName',
      key: 'schoolName'
    },
    {
      title: '操作',
      key: 'action',
      scopedSlots: { customRender: 'action' }
    }
  ]
  const columnsCourse = [
    {
      title: '出版社',
      dataIndex: 'press',
      key: 'press'
    },
    {
      title: '教材名',
      dataIndex: 'name',
      key: 'name'
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
        columnsCourse,
        title: '新增课程',
        loading: true,
        spinning: false,
        url: process.env.VUE_APP_API_BASE_URL || '/api',
        loadingCourse: false,
        selectedRowKeysIncrease: [], // 教材key
        selectedListInfo: [], // 教材信息
        searchData: {}, // 查询数据
        selectedRowKeys: [], // 选中的table数据
        editInfo: null, // 需要编辑的该条数据的信息
        visible: false,
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
      }
    },
    created () {
    },
    mounted () {
      this.searchData = { schoolId: this.$store.getters.selectSchoolInfo.value || '' }
      // this.searchData = { schoolId: this.$store.getters.schoolNameList[0] ? this.$store.getters.schoolNameList[0].value : '' }// 查询数据
      this.$store.dispatch('GetTeachingMaterial', { schoolId: this.searchData.schoolId })
      this.getCourseForPage({ pageIndex: 1, pageSize: this.pagination.pageSize, ...this.searchData })
    },
    methods: {
      onChange (data) {
        this.$store.dispatch('GetTeachingMaterial', { schoolId: data })
        this.selectedRowKeysIncrease = []
        this.selectedListInfo = []
      },
      // checkAdmin (type) {
      //   if (type === 'className') {
      //     if (this.$store.getters.admin) {
      //       return true
      //     }
      //     return false
      //   }
      //   return true
      // },
      // 校验电话号码是否标准
      checkTel (rule, value, callback) {
        if (value && !checkPhone(value)) {
          const title = '请输入正确格式的号码'
          callback(title)
        } else {
          callback()
        }
      },
      // 校验邮箱格式
      checkEma (rule, value, callback) {
        if (value && !checkEmail(value)) {
          const title = '请输入正确格式的邮箱'
          callback(title)
        } else {
          callback()
        }
      },
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
        this.getCourseForPage({ pageIndex: pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
        // this.getProcessList({ process_label: 'Done', pageIndex: pagination.current, pageSize: this.pagination.pageSize, process_config_type: 'individualCase', ...this.params })
      },
      increase () { // 新增
        this.title = '新增课程'
        this.$store.dispatch('GetTeachingMaterial', { schoolId: this.$store.getters.schoolNameList[0] ? this.$store.getters.schoolNameList[0].value : '' })
        this.visible = true
        this.editInfo = null
      },
      onEdit (data) {
        services.getCourseById({ id: data.id }).then(response => {
          const newData = this._.cloneDeep(response)
          this.title = '编辑课程'
          this.editInfo = response
          this.$store.dispatch('GetTeachingMaterial', { schoolId: newData.collegeId })
          // delete newData.courseId// 不能多传，会报warning
          this.visible = true
          const bookData = newData.teachingMaterialIds || []
          this.selectedRowKeysIncrease = []
          this.selectedListInfo = bookData
          for (let i = 0; i < bookData.length; i++) {
            this.selectedRowKeysIncrease.push(bookData[i].id)
          }
          this.$nextTick(() => { // 延时，不然dom没有加载出来
            setTimeout(() => {
              this.$refs.increaseDom.setFieldsValue(this._.pick(newData, 'num', 'chargePerson', 'jobNumber', 'name', 'code', 'collegeId',
                      'officeLocation', 'email', 'recieveLocation', 'telphone', 'recieveTel'))
              // this.$refs.increaseDom.setFieldsValue({ ...newData })
            })
          })
        })
      },
      handelOk () { // 新增确定
        const params = this.$refs.increaseDom.handleSubmit()
        // console.log(params)
        params.teachingMaterialIds = this.selectedListInfo
        if (params) {
          if (this.editInfo) { // 编辑情况
            this.updateCourse({ ...this.editInfo, ...params })
          } else { // 新增情况
            this.saveCourse(params)
          }
          this.cancel()
        }
      },
      cancel () {
        this.$refs.increaseDom.resetFields()
        this.visible = false
      },
      search () { // 查询
        const params = this.$refs.schoolSerch.getFieldsValue()
        this.pagination.current = 1
        this.searchData = { ...params, schoolId: this.$store.getters.selectSchoolInfo.value || '' }
        this.getCourseForPage({ pageIndex: 1, pageSize: this.pagination.pageSize, ...this.searchData })
      },
      reset () { // 重置
        this.$refs.schoolSerch.resetFields()
        // this.searchData = { schoolId: this.$store.getters.schoolNameList[0] ? this.$store.getters.schoolNameList[0].value : '' }// 查询数据
      },
      onSelectChange (selectedRowKeys) { // table选择
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys
      },
      closeTag (e, data) {
        for (let i = 0; i < this.selectedRowKeysIncrease.length; i++) {
          if (this.selectedRowKeysIncrease[i] === data.id) {
            this.selectedRowKeysIncrease.splice(i, 1)
            break
          }
        }
        for (let i = 0; i < this.selectedListInfo.length; i++) {
          if (this.selectedListInfo[i].id === data.id) {
            this.selectedListInfo.splice(i, 1)
            break
          }
        }
      },
      getCourseForPage (data) {
        this.loading = true
        services.getCourseForPage(data).then(response => {
          this.data = response.records || []
          this.pagination.total = response.total || 0
          this.loading = false
        })
      },
      onSelectChangeIncrease (selectedRowKeys, selectedRows) { // table选择
        // console.log('selectedRowKeys changed: ', selectedRowKeys, selectedRows)
        this.selectedRowKeysIncrease = selectedRowKeys
        this.selectedListInfo = selectedRows
      },
      // 新增
      saveCourse (data) {
        services.saveCourse(data).then(response => {
          this.$notification.success({
            message: '新增成功'
          })
          // this.searchData = {}
          // this.pagination.current = 1
          this.$store.dispatch('GetCourse')
          this.getCourseForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
...this.searchData
          })
        })
      },
      // 更新
      updateCourse (data) {
        services.updateCourse(data).then(response => {
          this.$notification.success({
            message: '更新成功'
          })
          this.$store.dispatch('GetCourse')
          // this.searchData = {}
          // this.pagination.current = 1
          this.getCourseForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
...this.searchData
          })
        })
      },
      delStu (data) { // 删除一个
        this.delCourse({ idList: [data.id] })
      },
      delStus () { // 删除多个
        this.delCourse({ idList: this.selectedRowKeys })
      },
      // 删除
      delCourse (data) {
        services.delCourse(data).then(response => {
          this.$notification.success({
            message: '删除成功'
          })
          this.$store.dispatch('GetCourse')
          // this.searchData = {}
          // this.pagination.current = 1
          this.getCourseForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
...this.searchData
          })
        })
      },
       // 文件上传的改变
      customRequest (data) {
        const schoolInfo = this.$store.getters.selectSchoolInfo || {}
        if (!schoolInfo.value) {
          this.$notification.error({ message: '学校信息不能为空', description: '请在右上角选择学校之后再上传' })
          return true
        }
        this.spinning = true
        const formData = new FormData()
        formData.append('files', data.file)
        formData.append('schoolId', schoolInfo.value)
        formData.append('importType', schoolInfo.importType)
        // formData.append('process_base_work_flow_number', this.workFlowNumber.process_base_work_flow_number)
          services.importCourseInfo(formData).then(response => {
            this.$notification.success({
              message: '文件上传成功'
            })
            this.spinning = false
            this.files = response
          }).catch(() => {
            this.spinning = false
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
