<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <!--<page-header-wrapper title="基础表单">-->
  <a-card :bordered="false" style="margin-top:20px">
    <Form ref="basicForm" :dataSource="getData" id="basicForm">
      <template v-slot:content>
        <div style="text-align: center">hahaha</div>
      </template>
      <template v-slot:footer>
        <div style="text-align: center" >啦啦啦</div>
      </template>
      <template v-slot:header>
        <div style="text-align: center" >你好啊</div>
      </template>
    </Form>
    <!--<Form ref="userInfoForm" :dataSource="getData1" id="userInfoForm">-->
    <!--&lt;!&ndash;<template v-slot:content>&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="Text-align: center">hahaha</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</template>&ndash;&gt;-->
    <!--</Form>-->
    <!--<Form ref="userInfo" :dataSource="getData" id="userInfo">-->
    <!--&lt;!&ndash;<template v-slot:content>&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="Text-align: center">hahaha</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</template>&ndash;&gt;-->
    <!--</Form>-->
    <div>
      <a-button @click="onClick" style="margin:10px 0 0 100px" type="primary">
        <!--<IconFont type="icon-user" style="color:red"/>-->
        提交</a-button>
    </div>
  </a-card>
  <!--</page-header-wrapper>-->
</template>

<script>
  import Form from '@/components/GlobalForm'
  import Data from './formData'
  // import { Moment } from 'moment';
  // import { basicForm, userInfoForm } from '@/utils/constant.js'
  // import transfer from '@/utils/transfer.js'

  export default {
  name: 'BaseForm',
  components: {
    Form
  },
  data () {
    return {
      fData: [],
      display: false
      // basicForm,
      // userInfoForm
    }
  },
  mounted () {
    // console.log(this.basicForm, this.userInfoForm)
    // this.dataSource = Data.getFormData({name: '张三', age: '29'}, this)
    // this.dataSource1 = Data.getFormData({name: '李四', age: '80'}, this)
  },
  computed: {
    getData () {
      const dataSource = Data.getFormData({ name: '张三', age: '29' }, this)
      return dataSource
    },
    getData1 () {
      const dataSource1 = Data.getFormData({ name: '李四', age: '80' }, this)
      return dataSource1
    }
  },
  methods: {
    onClick () {
      // this.display = !this.display
      // const data = this.$refs.children.handleSubmit()
      // const data1 = this.$refs.form.handleSubmit()
      // const data = this.$refs.children.getFieldsValue(['age'])
      // const data1 = this.$refs.form.getFieldsValue(['age', 'name'])
      // this.$refs.children.resetFields(['name', 'age'])
      // this.$refs.form.resetFields()
      // this.$refs.children.setFieldsValue('name', '王二麻子')
      // this.$refs.form.setFieldsValue('age', '678')
      // 将创建的form挂在vue实例中,直接调用form的各种方法
      // this.form1.validateFields((err, values) => {
      //   let data = null
      //   if (!err) {
      //     data = values
      //   }
      //   return data
      // })
      this.basicForm.validateFields((err, values) => {
        let data = null
        if (!err) {
          data = values
        }
        console.log(data)
      })
      // 用emit和on监听的方式，设置一个中间变量
     // this.form2.$emit('handleSubmit')
     // this.form1.$emit('handleSubmit')
      // console.log(data, data1)
    },
    change (value) {
      console.log(value)
    },
    check (rule, value, callback) {
      const form = this.basicForm
      if (value && value !== form.getFieldValue('name')) {
        const title = '两次输入的应一致'
        callback(title)
      } else {
        callback()
      }
    }

  }
}
</script>
