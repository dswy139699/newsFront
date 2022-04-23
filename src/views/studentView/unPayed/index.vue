<template>
  <!--  <page-header-wrapper>-->
  <!--    <template v-slot:content>-->
  <!--      <div class="page-header-content">-->
  <!--      </div>-->
  <!--    </template>-->
  <!--    <a-spin tip="Loading...">-->
  <!--        <div class="spin-content">-->
  <div style="position:relative" class="payDom">
    <div class="content" :style="{width:$store.getters.isMobile ? '90%' : '450px'}">
      <div style="width:100%">
        <a-checkbox :checked="allChecked" @change="selectAll" style="margin-right:10px;">
          全选
        </a-checkbox>
        <a-button v-if="toPayButton" type="primary" @click="submitPay">提交付款</a-button>
      </div>
      <div>
        <a-list item-layout="horizontal" :data-source="data">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-checkbox :disabled="item.must === 1" :checked="item.checked" @change="(e)=>selectBook(e,item.teachingMaterialId)" style="margin-right:10px;">
            </a-checkbox>
            <a-list-item-meta
              :description="`折扣价格：${item.finalPrice}`"
            >
              <a slot="title">{{ item.teachingMaterialName }}</a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
    </div>
    <!--      <div class="table" style="margin-top:10px;width:80%;display: inline-block">-->
    <!--        <a-table-->
    <!--          :row-selection="{ selectedRowKeys: selectedRowKeys,getCheckboxProps:getCheckboxProps, onChange: onSelectChange }"-->
    <!--          :columns="columns"-->
    <!--          :data-source="data"-->
    <!--          @change="changePage"-->
    <!--          :loading="loading"-->
    <!--          :pagination="pagination"-->
    <!--          :rowKey="record=>record.teachingMaterialId"-->
    <!--        >-->
    <!--          <span slot="action" slot-scope="text,record">-->
    <!--            <a @click="onShow(record)">付款</a>-->
    <!--          </span>-->
    <!--          <template slot="footer" v-if="data&&data.length>0">-->
    <!--            <a-button type="primary" @click="submitPay">提交付款</a-button>-->
    <!--          </template>-->
    <!--        </a-table>-->
    <!--      </div>-->
    <!--      弹出框支付-->
    <div class="modal" ref="modal">
      <a-modal
        title="支付"
        :visible="visible"
        @cancel="OnCancel"
        :footer="false"
        destroyOnClose
        :getContainer="()=>this.$refs.modal"
      >
        <div class="pay">
          <div style="text-align: center;font-weight: bold;margin-bottom:20px;">点击下方按钮可以切换支付方式，默认支付宝支付</div>
          <div style="text-align: center;margin-bottom:20px;">
            <a-button @click="payTypeFun(1)" type="dashed" :style="{marginRight:'30px'}" :class="payType ? 'borderStyle' : ''">
              <IconFont type="icon-weixinzhifu" style="width:40px;height:40px;display: inline-block;font-size: 40px"/>
            </a-button>
            <a-button @click="payTypeFun(0)" type="dashed" :class="!payType ? 'borderStyle' : ''">
              <IconFont type="icon-zhifubao" style="width:40px;height:40px;display: inline-block;font-size: 40px"/>
            </a-button>
          </div>
          <div style="height:400px;">
            <a-spin tip="Loading..." :spinning="spinning">
              <div class="spin-content">
                <div style="width:300px;margin:0 auto;margin-bottom:20px;"><a-alert :message="message" type="info" :style="{width:$store.getters.isMobile ? '280px' : '300px'}"/></div>
                <div style="width:200px;margin:0 auto" id="qrcode" class="qrcode" ref="qrcode"></div>
              </div>
            </a-spin>
          </div>
        </div>
      </a-modal>
      <!--      -->
      <a-modal
        v-if="$store.getters.userInfo.notice"
        title="公告"
        :visible="visibleNotice"
        @cancel="visibleNotice = false"
        :footer="false"
        destroyOnClose
        :getContainer="()=>this.$refs.modal"
      >
        <div style="min-height:500px">{{ $store.getters.userInfo.notice }}</div>
      </a-modal>
      <!--      </div>-->
    </div>
  </div>
<!--        </div>-->
<!--    </a-spin>-->
<!--  </page-header-wrapper>-->
</template>

<script>
  import GlobalForm from '@/components/GlobalForm'
  // import QRcode from 'qrcode'
  import QRCode from 'qrcodejs2'// 引入方法
  import { formData } from './formData'
  import { services } from './service'

  const columns = [
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '教材名称',
      dataIndex: 'teachingMaterialName',
      key: 'teachingMaterialName'
    },
    {
      title: '应付金额',
      dataIndex: 'finalPrice',
      key: 'finalPrice'
    }
    // {
    //   title: '班级',
    //   dataIndex: 'className',
    //   key: 'className'
    // },
    // {
    //   title: '是否付款',
    //   dataIndex: 'payed',
    //   key: 'payed'
    // },
    // {
    //   title: '征订日期',
    //   dataIndex: 'solicitTime',
    //   key: 'solicitTime'
    // }
    // {
    //   title: '操作',
    //   key: 'action',
    //   scopedSlots: { customRender: 'action' }
    // }
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
        visibleNotice: true,
        allChecked: false,
        loading: false,
        toPayButton: false,
          message: '共购买0本书，共计0元',
          spinning: true,
        payType: 0, // 支付宝
        payUrl: null, // 支付链接
        qrCode: null, // weixin
        selectRowValues: [],
        selectedRowKeys: [], // 选中的table数据
        editInfo: null, // 需要编辑的该条数据的信息
        visible: false,
        data: [
        //         {
        //   id: 1,
        //   payPrice: '123',
        //   courseName: '大学物理',
        //   bookName: '大学物理',
        //   studentName: '张三',
        //   studentNum: '089789',
        //   className: '01班',
        //   solicitTime: '2019-09-12 12:00'
        // }, {
        //   id: 2,
        //   payPrice: '123',
        //   courseName: '大学物理',
        //   bookName: '大学物理',
        //   studentName: '李四',
        //   studentNum: '089789',
        //   className: '02班',
        //   solicitTime: '2019-09-12 12:00'
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
      }
    },
    created () {
      // this.$store.dispatch('GetSchool')
    },
    mounted () {
      const userInfo = this.$store.getters.userInfo || {}
      services.getStudent({ schoolId: userInfo.schoolId, id: userInfo.id }).then(response => {
        this.data = this.checkData(response.subscriptionsDetailList || [])
                  if (this.data.filter(item => item.checked).length === this.data.length) {
                    this.allChecked = true
                  }
                  this.checkToPay(this.data)
        this.setSelectKeys(response.subscriptionsDetailList || [])
              })
    },
    methods: {
      // 分页切换
      changePage (pagination) {
        this.pagination.current = pagination.current
        this.getStudent({ pageIndex: pagination.current, pageSize: this.pagination.pageSize, ...this.searchData })
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
      onSelectChange (selectedRowKeys, value) { // table选择
        console.log('selectedRowKeys changed: ', selectedRowKeys, value)
        this.selectRowValues = value
        this.selectedRowKeys = selectedRowKeys
      },
      onShow (data) { // 查看已付款学生信息详情
        this.$router.push({ path: '/book/solicitManage/unPayedInfo', query: { id: data.id } })
      },
      getStudent (data) {
        this.loading = true
        services.getStudent({ ...data, isPayment: 0 }).then(response => {
          this.data = response.records || []
          this.pagination.total = response.total || 0
          this.loading = false
        })
      },
      checkData (bookData) {
        return bookData.map(item => {
          return {
            ...item,
            checked: item.must === 1
          }
        })
      },
        setSelectKeys (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].must) {
                    this.selectRowValues.push(data[i])
                    this.selectedRowKeys.push(data[i].teachingMaterialId)
                }
            }
        },
      toPayAsPC () {
        const userInfo = this.$store.getters.userInfo || {}
          // this.payUrl = null// 默认支付宝方式
          this.spinning = true
        let newData = this._.cloneDeep(this.data)
         newData = newData.filter(item => item.checked).map(item => {
          delete item.checked
          return {
          ...item
        }
})
        services.toPayAsPC({ schoolId: userInfo.schoolId,
          studentId: userInfo.id,
          studentNum: userInfo.studentNum,
          subscriptionsDetailList: newData }).then(response => {
          // this.qrCode = null
          // this.payUrl = response// 默认支付宝方式
          this.qrCode = response.payUrl
            this.message = `共购买${response.bookCount}本书，共计${response.totalPrice}元`
          this.$nextTick(() => {
            document.getElementById('qrcode').innerHTML = ''
            const qrcode = new QRCode(this.$refs.qrcode, {
              width: 200,
              height: 200 // 高度
            })
              this.spinning = false
            qrcode.makeCode(response.payUrl)
          })
          // window.open(response)
        })
      }, // 支付宝接口
      wxPay () { // 微信接口
        const userInfo = this.$store.getters.userInfo || {}
          this.spinning = true
        let newData = this._.cloneDeep(this.data)
         newData = newData.filter(item => item.checked).map(item => {
          delete item.checked
          return {
            ...item
          }
        })
          services.wxPay({ schoolId: userInfo.schoolId,
          studentId: userInfo.id,
          studentNum: userInfo.studentNum,
          subscriptionsDetailList: newData }).then(response => {
              this.qrCode = response.payUrl
              this.message = `共购买${response.bookCount}本书，共计${response.totalPrice}元`
          this.$nextTick(() => {
            document.getElementById('qrcode').innerHTML = ''
            const qrcode = new QRCode(this.$refs.qrcode, {
              width: 200,
              height: 200 // 高度
            })
              this.spinning = false
              qrcode.makeCode(response.payUrl)
            // this.payUrl = null// 默认支付宝方式
          })
        })
      }, // 支付宝接口
      submitPay () {
        // if (this.selectRowValues && this.selectRowValues.length > 0) {
          this.payType = 0
          this.visible = true
          this.toPayAsPC()
        // }
      },
      payTypeFun (type) { // 切换支付方式
          this.payType = type
        if (type) {
          // TODO 调微信接口
          this.wxPay()
        } else {
          // TODO 调支付宝接口
          this.toPayAsPC()
        }
      },
        getCheckboxProps (record) {
         return {
                props: {
                    disabled: record.must === 1 // Column configuration not to be checked
                    // checked: record.must === 1
                }
                }
            },
      OnCancel () {
        this.visible = false
        const userInfo = this.$store.getters.userInfo || {}
        services.getStudent({ schoolId: userInfo.schoolId, id: userInfo.id }).then(response => {
          const data = response.subscriptionsDetailList || []
          if (this.data.length !== data.length) {
            this.data = this.checkData(response.subscriptionsDetailList || [])
            if (this.data.filter(item => item.checked).length === this.data.length) {
              this.allChecked = true
            }
            this.checkToPay(this.data)
          }
        })
      },
      selectAll (e) {
        if (e.target.checked) {
          this.allChecked = true
          this.data = this.data.map(item => {
            return {
              ...item,
              checked: true
            }
          })
        } else {
          this.allChecked = false
          this.data = this.checkData(this.data)
        }
        this.checkToPay(this.data)
      },
      checkToPay (data) {
        if (data.filter(item => item.checked).length > 0) {
          this.toPayButton = true
        } else {
          this.toPayButton = false
        }
      },
      selectBook (e, id) {
        this.data = this.data.map(item => {
          if (item.teachingMaterialId === id) {
            return {
              ...item,
              checked: e.target.checked
            }
          }
          return {
            ...item
          }
        })
        if (this.data.filter(item => item.checked).length === this.data.length) {
          this.allChecked = true
        } else {
          this.allChecked = false
        }
        this.checkToPay(this.data)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../style.less";
  .payDom {
    .content {
      background: #fff;
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
      /*padding:60px 10px 10px 10px;*/
      border-radius: 2px;
      /*display: flex;*/
      /*  justify-content: center;*/
      /*flex-flow:nowrap;*/
      /*flex-direction:column;*/

      .modal {
        /deep/ .ant-modal {
          width: 900px;
          min-width: 900px;
        }

        /deep/ .ant-alert {
          padding: 5px 5px 5px 15px;
          font-size: 12px;

          .ant-alert-icon {
            top: 8px;
          }
        }
      }
    }
    .pay {
      .borderStyle {
        border-color: #1890ff;
      }
      /deep/ .ant-btn {
        height: auto;
        padding: 10px 15px;
      }
    }
  }
</style>
