<template>
  <div class="content">
    <div style="width:800px;border:1px solid #f5f5f5;padding:20px">
      <GlobalForm ref="studentInfo" :dataSource="getFormData" id="studentInfo">
        <template #button>
          <div style="margin-top:4px;text-align: right">
            <a-button type="primary" @click="submit">
              提交
            </a-button>
          </div>
        </template>
      </GlobalForm>
    </div>
  </div>
</template>

<script>
  import GlobalForm from '@/components/GlobalForm'
  import { formData } from './formData'
  import { updateStudent, getStudentById } from '@/api/student'
  import { checkPhone } from '@/utils/checkFun'

  export default {
    name: 'Index',
    components: {
      GlobalForm
    },
    data () {
      return {
          userInfo: {}
      }
    },
    computed: {
      getFormData () {
        return formData.getFormData(this)
      }
    },
    created () {
        const userInfo = this.$store.getters.userInfo || {}
        this.userInfo = userInfo
    },
    mounted () {
    },
    methods: {
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
  @import "../style.less";
  .content{
  background: #fff;
  padding:60px 0;
  border-radius:2px;
      display: flex;
      justify-content: center;
}
</style>
