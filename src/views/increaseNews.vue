<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
      </div>
    </template>
    <div class="content">
      <div style="width:100%;padding:0 20px">
        <GlobalForm ref="newsInfo" :dataSource="getFormData" id="newsInfo">
          <template #editor>
            <div id="editElem" style="text-align: left"></div>
          </template>
          <template #button>
            <div style="margin-top:4px;text-align: right">
              <a-button type="primary" @click="submit">
                提交
              </a-button>
            </div>
          </template>
        </GlobalForm>
        <div class="formButton" style="margin-top:20px;text-align: right">
          <a-button type="primary" :style="{ marginLeft: '8px' }" @click="onSubmit" >
            提交
          </a-button>
          <a-button :style="{ marginLeft: '8px' }" @click="goToHistory">
            取消
          </a-button>
        </div>
      </div>
    </div>
  </page-header-wrapper>
</template>

<script>
    import { formData } from './formData'
    import { updateStudent, getStudentById } from '@/api/student'
    import { checkPhone } from '@/utils/checkFun'
    import E from 'wangeditor'

    export default {
        name: 'Index',
        data () {
            return {
                userInfo: {},
              editContent: ''
            }
        },
        computed: {
            getFormData () {
                return formData.getIncreaseForm(this, 'news')
            }
        },
        created () {
            const userInfo = this.$store.getters.userInfo || {}
            this.userInfo = userInfo
        },
        mounted () {
          const editor = new E('#editElem')
          editor.customConfig.showLinkImg = false
          editor.customConfig.onchange = (h) => {
            this.editContent = h
          }
          editor.create()
        },
        methods: {
          onSubmit () {
            const params = this.$refs.newsInfo.handleSubmit()
            // console.log(params)
            if (params) {
            }
          },
          beforeUpload (file) {
            // application/pdf
            // console.log(file)
            // if (file && file.name && (file.name.indexOf('.') !== -1) && file.name.split('.')[file.name.split('.').length - 1].toUpperCase() === 'PDF') {
            //   return true
            // } else {
            //   this.$notification.error({
            //     message: '只能上传PDF文件'
            //   })
            //   return false
            // }
            console.log(file)
            if (file && file.type && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
              return true
            } else {
              this.$notification.error({
                message: '只能图片文件'
              })
              return false
            }
          },
          goToHistory () {
            this.$router.go(-1)
          },
          onChange (data) {
            // this.$store.dispatch('GetCourse', { schoolId: data })
            // this.selectedRowKeysIncrease = []
            // this.selectedListInfo = []
          },
          customRequest (data) {
            const formData = new FormData()
            formData.append('files', data.file)
            formData.append('process_config_type', this.initData.init_value.process_config_type)
            formData.append('process_base_work_flow_number', this.initData.init_value.process_base_work_flow_number)
            return new Promise((resolve, reject) => {
              // service.uploadProcessFile(formData).then(response => {
              //   this.$notification.success({
              //     message: '文件上传成功'
              //   })
              //   this.fileData = response[0]
              // })
              //         .catch(() => {
              //   this.$notification.error({
              //     message: '文件上传失败'
              //   })
              // })
            })
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
            submit () {
                const params = this.$refs.studentInfo.handleSubmit()
                if (params) {
                    getStudentById({ id: this.userInfo.id }).then(response => {
                        this.updateStudent({ ...response, ...params })
                    })
                }
            },
            updateStudent (data) {
                updateStudent(data).then(response => {
                    this.$router.push({ path: '/book/student/unPayed' })
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import "./style.less";
    .content{
        background: #fff;
        padding:60px 0;
        border-radius:2px;
        display: flex;
        justify-content: center;
    }
</style>
