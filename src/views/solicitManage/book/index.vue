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
          <a-button type="primary" @click="increase" style="margin-right:10px">
            新增
          </a-button>
          <a-upload
            :showUploadList="false"
            :customRequest="customRequest"
          >
            <a-button type="primary">
              导入教材信息
            </a-button>
          </a-upload>
        </div>
        <div class="table scroll" style="margin-top:10px;">
          <a-table
            :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
            :columns="columns"
            :data-source="data"
            @change="changePage"
            :loading="loading"
            :scroll="{x:1700}"
            :pagination="pagination"
            :rowKey="record=>record.id"
          >
            <!--            修改-->
            <span slot="name" slot-scope="text,data">
              <a @click="openInsertNum(data,'name','教材名')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="press" slot-scope="text,data">
              <a @click="openInsertNum(data,'press','出版社')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="originalDiscount" slot-scope="text,data">
              <a @click="openInsertNum(data,'originalDiscount','原始折扣')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="must" slot-scope="text,data">
              <a @click="openInsertNum(data,'must','必须预定')">
                {{ text ? '是' : '否' }}
              </a>
            </span>
            <span slot="offline" slot-scope="text,data">
              <a @click="openInsertNum(data,'offline','可征订')">
                {{ text ? '是' : '否' }}
              </a>
            </span>
            <span slot="originalPrice" slot-scope="text,data">
              <a @click="openInsertNum(data,'originalPrice','原始价格')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="newPrice" slot-scope="text,data">
              <a @click="openInsertNum(data,'newPrice','修改价格')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="newDiscount" slot-scope="text,data">
              <a @click="openInsertNum(data,'newDiscount','修改折扣')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="refundPrice" slot-scope="text,data">
              <a @click="openInsertNum(data,'refundPrice','退款定价')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="refundDiscount" slot-scope="text,data">
              <a @click="openInsertNum(data,'refundDiscount','退款折扣')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
            <span slot="materialCount" slot-scope="text,data">
              <a @click="openInsertNum(data,'materialCount','征订数量')"><span style="display: inline-block;width:100%">{{ text }}</span>
              </a>
            </span>
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
            <template slot="footer" v-if="data&&data.length>0">
              <a-button type="primary" @click="delStus">删除所选数据</a-button>
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
                <template v-slot:refundPrice>
                  <a-alert style="margin:5px 0 0 10px" message="默认可不填，如果涉及到图书退款定价，请在这里填写，然后系统算出该退款差价。如拍后折扣实价是50元，退款定价可以设置成47元。那么退3元。" type="warning" show-icon />
                </template>
                <template v-slot:refundDiscount>
                  <a-alert style="margin:5px 0 0 10px" message=" 如:0.78 如果填写了退款定价就必须填写" type="warning" show-icon />
                </template>
                <template v-slot:disBuy>
                  <a-alert style="margin:5px 0 0 10px" message="如果选择否，那么学生不可以在线征订" type="warning" show-icon />
                </template>
                <template v-slot:must>
                  <a-alert style="margin:5px 0 0 10px" message=" 如果选择是，学生没有选择余地，必须要订这本书。" type="warning" show-icon />
                </template>
              <!--<template v-slot:buildId>-->
              <!--<a-alert style="margin:5px 0 0 10px" message="如：五号楼" type="warning" show-icon />-->
              <!--</template>-->
              <!--<template v-slot:password>-->
              <!--<a-alert style="margin:5px 0 0 10px" message="密码必须六位以上" type="warning" show-icon />-->
              <!--</template>-->
              </GlobalForm>
            </div>
          </a-modal>
        </div>
        <!--        <a-modal-->
        <!--          title="征订数量"-->
        <!--          :visible="visiblePress"-->
        <!--          @cancel="cancelNum"-->
        <!--          @ok="handleOkNum"-->
        <!--        >-->
        <!--          <div class="familyPeople">-->
        <!--            <GlobalForm ref="press" :dataSource="formData" id="press">-->
        <!--            </GlobalForm>-->
        <!--          </div>-->
        <!--        </a-modal>-->
        <a-modal
          title="征订数量"
          :visible="visibleNum"
          @cancel="cancelNum"
          @ok="handleOkNum"
        >
          <div class="familyPeople">
            <GlobalForm ref="buyNumDom" :dataSource="getFormInfo" id="buyNumDom">
            </GlobalForm>
          </div>
        </a-modal>
      </div>
    </a-spin>
  </page-header-wrapper>
</template>

<script>
  import GlobalForm from '@/components/GlobalForm'
  import { formData } from './formData'
  import { checkPhone, checkEmail, checkIdCard } from '@/utils/checkFun'
  import { services } from './service'
  const columns = [
    {
      title: '教材名',
      dataIndex: 'name',
      key: 'name',
      width: 350,
      ellipsis: true,
      fixed: 'left',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '出版社',
      dataIndex: 'press',
      width: 200,
      ellipsis: true,
      key: 'press',
      scopedSlots: { customRender: 'press' }
    },
    {
      title: '必须征订',
      dataIndex: 'must',
      width: 100,
      key: 'must',
      scopedSlots: { customRender: 'must' }
    },
    {
      title: '可征订',
      dataIndex: 'offline',
      width: 100,
      key: 'offline',
      scopedSlots: { customRender: 'offline' }
    },
    {
      title: '原始折扣',
      dataIndex: 'originalDiscount',
      width: 100,
      ellipsis: true,
      key: 'originalDiscount',
      scopedSlots: { customRender: 'originalDiscount' }
    },
    {
      title: '原始价格',
      dataIndex: 'originalPrice',
      width: 100,
      ellipsis: true,
      key: 'originalPrice',
      scopedSlots: { customRender: 'originalPrice' }
    },
    {
      title: '修改价格',
      dataIndex: 'newPrice',
      width: 100,
      ellipsis: true,
      key: 'newPrice',
      scopedSlots: { customRender: 'newPrice' }
    },
    {
      title: '修改折扣',
      dataIndex: 'newDiscount',
      width: 100,
      ellipsis: true,
      key: 'newDiscount',
      scopedSlots: { customRender: 'newDiscount' }
    },
    {
      title: '退款定价',
      dataIndex: 'refundPrice',
      width: 100,
      ellipsis: true,
      key: 'refundPrice',
      scopedSlots: { customRender: 'refundPrice' }
    },
    {
      title: '退款折扣',
      dataIndex: 'refundDiscount',
      width: 100,
      ellipsis: true,
      key: 'refundDiscount',
      scopedSlots: { customRender: 'refundDiscount' }
    },
    {
      title: '征订数量',
      dataIndex: 'materialCount',
      key: 'materialCount',
      scopedSlots: { customRender: 'materialCount' }
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      scopedSlots: { customRender: 'action' },
      fixed: 'right'
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
        typeInfo: {},
        visiblePress: false,
        spinning: false,
        visibleNum: false, // 征订数量modal
        refundPrice: false, //
        title: '新增教材',
        loading: true,
        searchData: {},
        selectedRowKeys: [], // 选中的table数据
        editInfo: null, // 需要编辑的该条数据的信息
        visible: false,
        formData: [
          {
            type: 'input',
            label: '征订数量',
            col: '24',
            id: 'price',
            buyNumId: null, // 需要更改的数据的id
            onChange: this.numberChange,
            layout: {
              labelCol: '80px'
            }
          }
        ],
        data: [
          // {
          //   bookName: '组织行为学-互联时代的视角',
          //   schoolName: '上海外国语大学',
          //   press: '机械工业出版社',
          //   courseName: '组织行为学',
          //   must: '是',
          //   disBuy: '否',
          //   price: '39.8',
          //   refundPrice: '38',
          //   discount: '1',
          //   refundDiscount: '0.8',
          //   buyNum: 58,
          //   id: 1
          // },
          // {
          //   schoolName: '上海大学',
          //   bookName: '自动控制原理及应用项目式教程',
          //   press: '冶金工业出版社',
          //   courseName: '控制与调节技术',
          //   must: '是',
          //   disBuy: '否',
          //   price: '39.8',
          //   refundPrice: '38',
          //   discount: '1',
          //   refundDiscount: '0.8',
          //   buyNum: 58,
          //   id: 2
          // }
        ],
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
      getFormInfo () {
        return formData.getFormInfo(this)
      },
      getIncreaseForm () {
        return formData.getIncreaseForm(this)
      }
    },
    created () {
      // this.$store.dispatch('GetSchool')
      // this.$store.dispatch('GetCourse')
    },
    mounted () {
      this.searchData = { schoolId: this.$store.getters.selectSchoolInfo.value || '' }
      // this.searchData = { schoolId: this.$store.getters.schoolNameList[0] ? this.$store.getters.schoolNameList[0].value : '' }// 查询数据
      // this.$store.dispatch('GetCourse', { schoolId: this.searchData.schoolId })
      this.getTeachingMaterialForPage({ pageIndex: 1, pageSize: this.pagination.pageSize, ...this.searchData })
    },
    methods: {
      // 校验身份证号是否合法
      checkIdCard (rule, value, callback) {
        // const form = this.$refs.caseForm
        if (value && !checkIdCard(value)) {
          const title = '请输入正确的身份证号'
          callback(title)
        } else {
          callback()
        }
      },
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
        this.getTeachingMaterialForPage({ pageIndex: pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
        // this.getProcessList({ process_label: 'Done', pageIndex: pagination.current, pageSize: this.pagination.pageSize, process_config_type: 'individualCase', ...this.params })
      },
      increase () { // 新增
        this.title = '新增教材'
        this.visible = true
        this.editInfo = null
      },
      onEdit (data) {
        const newData = this._.cloneDeep(data)
        this.title = '编辑教材'
        this.editInfo = data
        this.visible = true
        this.$nextTick(() => { // 延时，不然dom没有加载出来
          setTimeout(() => {
            this.$refs.increaseDom.setFieldsValue(this._.pick(newData, 'name', 'press', 'schoolId',
              'isbn', 'edition', 'price', 'discount', 'oldBookDiscount',
              'refundPrice', 'refundDiscount', 'awards', 'author', 'materialCount', 'tellbackInfo', 'remark', 'offline', 'must'))
            // this.$refs.increaseDom.setFieldsValue({ ...newData, courseName: [newData.courseName] })
            if (data.refundDiscount) { // 如果退款折扣有值，那么退款定价必填
              this.refundPrice = true
            } else {
              this.refundPrice = false
            }
          })
        })
      },
      handelOk () { // 新增确定
        const params = this.$refs.increaseDom.handleSubmit()
        // console.log(params)
        if (params) {
          if (this.editInfo) { // 编辑情况
            this.updateTeachingMaterial({ ...this.editInfo, ...params })
          } else { // 新增情况
            this.saveTeachingMaterial(params)
          }
          this.cancel()
        }
      },
      // cancel
      cancel () {
        this.refundPrice = false
        this.$refs.increaseDom.resetFields()
        this.visible = false
      },
      search () { // 查询
        const params = this.$refs.schoolSerch.getFieldsValue()
        this.searchData = { ...params, schoolId: this.$store.getters.selectSchoolInfo.value || '' }
        this.pagination.current = 1
        this.getTeachingMaterialForPage({ pageIndex: 1, pageSize: this.pagination.pageSize, ...this.searchData })
      },
      reset () { // 重置
        this.$refs.schoolSerch.resetFields()
        // this.searchData = { schoolId: this.$store.getters.schoolNameList[0] ? this.$store.getters.schoolNameList[0].value : '' }// 查询数据
      },
      // 编辑装订数量
      openInsertNum (data, type, label) {
        this.buyNumId = data.id
        // console.log(this.buyNumId)
        this.typeInfo = { id: type, label: label }
        this.visibleNum = true
        this.$nextTick(() => { // 延时，不然dom没有加载出来
          setTimeout(() => {
            this.$refs.buyNumDom.setFieldsValue({ [type]: data[type] })
          })
        })
      },
      onSelectChange (selectedRowKeys) { // table选择
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.selectedRowKeys = selectedRowKeys
      },
      // 征订数量cancel
      cancelNum () {
        this.visibleNum = false
      },
      // 弹出框确定
      handleOkNum () {
        // console.log(this.$refs.buyNumDom.getFieldsValue())
        let newData = {}
        const buyNum = this.$refs.buyNumDom.getFieldsValue()
        for (let i = 0; i < this.data.length; i++) {
          if (this.buyNumId === this.data[i].id) {
            newData = this._.cloneDeep(this.data[i])
            newData = { ...newData, ...buyNum }
            break
            // this.data[i].buyNum = buyNum
          }
        }
        this.updateTeachingMaterial(newData)
        this.cancelNum()
      },
      numChange (value, type) {
        let newValue = value
        newValue = newValue.replace(/[^\d.]/g, '')// 清除“数字”和“.”以外的字符
        newValue = newValue.replace(/^\./g, '')// 验证第一个字符是数字而不是.
        newValue = newValue.replace(/\.{2,}/g, '.')// 只保留第一个. 清除多余的.
        newValue = newValue.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
        this.$nextTick(() => { // 延时，不然dom没有加载出来
          setTimeout(() => {
            this.$refs.increaseDom.setFieldsValue({ [type]: newValue })
            if (type === 'refundDiscount') { // 如果退款折扣有值，那么退款定价必填
              if (newValue) {
                this.refundPrice = true
              } else {
                this.refundPrice = false
              }
            }
          })
        })
      },
      numberChange (value, id) {
        let newValue = value
        newValue = newValue.replace(/[^\d.]/g, '')// 清除“数字”和“.”以外的字符
        newValue = newValue.replace(/^\./g, '')// 验证第一个字符是数字而不是.
        newValue = newValue.replace(/\.{2,}/g, '.')// 只保留第一个. 清除多余的.
        newValue = newValue.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
        this.$nextTick(() => { // 延时，不然dom没有加载出来
          setTimeout(() => {
            this.$refs.buyNumDom.setFieldsValue({ [id]: newValue })
          })
        })
      },
      dataChange (value, id) {
        let newValue = value
        newValue = newValue.replace(/[^\d]/g, '')// 清除“数字”和“.”以外的字符
        // newValue = newValue.replace(/^\./g, '')// 验证第一个字符是数字而不是.
        // newValue = newValue.replace(/\.{2,}/g, '.')// 只保留第一个. 清除多余的.
        newValue = newValue.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
        this.$nextTick(() => { // 延时，不然dom没有加载出来
          setTimeout(() => {
            this.$refs.buyNumDom.setFieldsValue({ [id]: newValue })
          })
        })
      },
      getTeachingMaterialForPage (data) {
        this.loading = true
        services.getTeachingMaterialForPage(data).then(response => {
          this.data = response.records || []
          this.pagination.total = response.total || 0
          this.loading = false
        })
      },
      // 新增
      saveTeachingMaterial (data) {
        services.saveTeachingMaterial(data).then(response => {
          this.$notification.success({
            message: '新增成功'
          })
          this.getTeachingMaterialForPage({ pageIndex: this.pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
        })
      },
      // 更新
      updateTeachingMaterial (data) {
        services.updateTeachingMaterial(data).then(response => {
          this.$notification.success({
            message: '更新成功'
          })
          this.getTeachingMaterialForPage({ pageIndex: this.pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
        })
      },
      delStu (data) { // 删除一个
        this.delTeachingMaterial({ idList: [data.id] })
      },
      delStus () { // 删除多个
        this.delTeachingMaterial({ idList: this.selectedRowKeys })
      },
      // 删除
      delTeachingMaterial (data) {
        services.delTeachingMaterial(data).then(response => {
          this.$notification.success({
            message: '删除成功'
          })
          this.getTeachingMaterialForPage({
            pageIndex: this.pagination.current,
            pageSize: this.pagination.pageSize,
            ...this.searchData
          })
        })
      },
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
          services.importTeachingMaterialInfo(formData).then(response => {
            this.$notification.success({
              message: '文件上传成功'
            })
            this.spinning = false
            this.files = response
          }).catch(() => {
            this.spinning = false
          })
      }
      // cellClickReport (record, type) { // 公告
      //   return {
      //     on: {
      //       dblclick: (event) => {
      //         console.log(record, type, event.target.value)
      //         this.openInsertNum(record)
      //       }
      //     }
      //   }
      // }

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
