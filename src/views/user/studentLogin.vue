<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 19 }"
      @submit="handleSubmit"
    >
      <div style="margin-top:70px;">
        <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误" />
        <a-form-item label="用户名">
          <a-input
            size="large"
            type="text"
            placeholder="请输入用户名"
            v-decorator="[
              'loginId',
              {rules: [{ required: true, message: '请输入用户名' }]}
            ]"
          >
            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input>
        </a-form-item>

        <a-form-item label="密码">
          <a-input-password
            size="large"
            placeholder="请输入密码"
            v-decorator="[
              'loginPwd',
              {rules: [{ required: true, message: '请输入密码' }]}
            ]"
          >
            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
          </a-input-password>
        </a-form-item>
        <a-form-item label="学校">
          <a-select
            placeholder="请选择学校"
            size="large"
            style="width:100%"
            v-decorator="[
              'schoolId',
              {rules: [{ required: true, message: '请选择学校' }]}
            ]"
          >
            <a-select-option v-for="item in schoolNameList" :key="item.schoolId" :value="item.value">
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>
      <a-form-item style="margin-top:24px" :wrapper-col="{ span: 19, offset: isMobile ? 0 : 5 }" >
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
        >确定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: {
    },
    data () {
      return {
        customActiveKey: 'tab1',
        loginBtn: false,
        loginType: 0,
        isLoginError: false,
        requiredTwoStepCaptcha: false,
        stepCaptchaVisible: false,
        form: this.$form.createForm(this),
        state: {
          time: 60,
          loginBtn: false,
          loginType: 0,
          smsSendBtn: false
        }
      }
    },
    computed: {
      ...mapGetters(['isMobile', 'schoolNameList'])
    },
    created () {
      this.GetSchool()
    },
    methods: {
      ...mapActions(['Login', 'Logout', 'GetSchool', 'GetClass']),
      handleSubmit (e) {
        e.preventDefault()
        const {
          form: { validateFields },
          state
          // Login
        } = this
        state.loginBtn = true
        validateFields((err, values) => {
          if (!err) {
            // this.$router.addRoutes(this.$store.getters.addRouters)
            // const data = { ...values }
            // Login(data)
            //         .then((res) => this.loginSuccess(res))
            //         .catch(err => this.requestFailed(err))
            //         .finally(() => {
            //           state.loginBtn = false
            //         })
          } else {
            setTimeout(() => {
              state.loginBtn = false
            }, 600)
          }
        })
      },
      loginSuccess (res) {
        // this.GetSchool().then().catch().finally(response => {
        //   this.GetClass().then()
          this.$store.dispatch('GenerateRoutes', { roles: [], user: res.user || {} }).then(() => { // 写死角色，实际应该根据后台传过来的角色信息
            // 根据roles权限生成可访问的路由表
            // 动态添加可访问路由表
            this.$router.addRoutes(this.$store.getters.addRouters)
            if (res && res.user && res.user.userType && res.user.userType === 'school') {
              this.$router.push({ path: '/book/solicitManage/courseManage' })
            } else if (res && res.user && res.user.userType && res.user.userType === 'student') {
              if (!res.user.telPhone || res.user.enableAddress) {
                  this.$router.push({ path: '/book/student/studentInfo' })
              } else {
                this.$router.push({ path: '/book/student/unPayed' })
              }
            }
          })
        // })
        this.isLoginError = false
      },
      requestFailed (err) {
        this.isLoginError = true
        this.$notification['error']({
          message: '错误',
          description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
          duration: 4
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .main{
  }
  .user-layout-login {
    label {
      font-size: 14px;
    }

    .getCaptcha {
      display: block;
      width: 100%;
      height: 40px;
    }

    .forge-password {
      font-size: 14px;
    }

    button.login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }

    .user-login-other {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;

      .item-icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }

      .register {
        float: right;
      }
    }
  }
</style>
