<template>
  <div class="contain" :style="{display:params.display ? '':'none'}">
    <a-col :span="params.col" >
      <a-form-item :label="getLabel" :colon="getColon" :label-col="params.layout.labelCol" :wrapper-col="getLayout">
        <a-input
          :disabled="params.disabled"
          :type="params.inputType"
          v-if="params.type&&params.type === 'input'"
          @change="change"
          v-decorator="[params.id, { rules:params.rules,initialValue:params.defaultValue }]"
          :placeholder="params.placeholder"
        />
        <a-input-password
          :disabled="params.disabled"
          v-if="params.type&&params.type === 'inputPassword'"
          @change="change"
          v-decorator="[params.id, { rules:params.rules,initialValue:params.defaultValue }]"
          :placeholder="params.placeholder"
        >
          <!--<a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>-->
        </a-input-password>
        <a-input-number
          style="width:100%"
          :disabled="params.disabled"
          v-if="params.type&&params.type === 'inputNumber'"
          v-decorator="[params.id, { rules:params.rules,initialValue:params.defaultValue }]"
          :min="params.min"
          :max="params.max"
          :step="params.step"
        />
        <!--<a-input-->
        <!--v-if="params.type&&params.type === 'inputFigure'"-->
        <!--:placeholder="params.placeholder"-->
        <!--:max-length="18"-->
        <!--style="width: 100%"-->
        <!--@change="numberChange"-->
        <!--v-decorator="[params.id, { rules:params.rules,initialValue:params.defaultValue }]"-->
        <!--@blur="onBlur"-->
        <!--/>-->
      </a-form-item>
    </a-col>
    <!--<div>-->
    <!--<a-button @click="onClick" style="margin:10px 0 0 100px" type="primary">提交</a-button>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data () {
      return {
        colon: true
        // value: ''// 数字输入框值
      }
    },
    props: {
      attrData: {
        type: Object,
        default: () => {
          return {
            onChange: () => {}
          }
        }
      }
    },
    computed: {
      params () {
        return Object.assign({
          col: '24',
          layout: {},
          type: '',
          id: '',
          inputType: 'text',
          defaultValue: '',
          step: 1,
          display: true,
          rules: [
            {
              required: false
            }
          ],
          label: '',
          placeholder: '',
          min: 0,
          max: 100000000,
          disabled: false,
          onChange: () => {}
        }, this.attrData)
      },
      getLayout () { // 当label为false,就是没有label，不需要占位，就把组件的宽度置为100%
        if (this.params.label === false) {
          return { style: { width: '100%' } }
        }
        return this.params.layout.wrapperCol
      },
      getColon () {
        if (this.params.label === false || this.params.label === '') { // label为false，或者''，label那块都没有内容，因此colon为false，不展示：
          return false
        }
        return true// 否则colon为true
      },
      getLabel () {
        if (this.params.label === false) { // 当label为false,label就为''，渲染的时候自动不渲染，也没有：
          return ''
        } else if (this.params.label === '') { // 当label为'',意思是label为空，但是需要占位，因此label' '
          return ' '
        }
        return this.params.label// 否则label就为传过来的值
      }
    },
    created () {

    },
    methods: {
      // change事件
      change (value) {
        this.params.onChange(value.target.value)
      }
      // numberChange (e) {
      //   const { value } = e.target
      //   const reg = /^-?[0-9]*(\.[0-9]*)?$/
      //   if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      //     this.value = value
      //     this.params.onChange(value)
      //   }
      // },
      // '.' at the end or only '-' in the input box.
      // onBlur () {
      //   const { value, numberChange } = this
      //   if (value.charAt(value.length - 1) === '.' || value === '-') {
      //     numberChange({ value: value.slice(0, -1) })
      //   }
      // }
      // onClick () {
      //   const data = this.children.$emit('handleSubmit')
      //   const data1 = this.form1.$emit('handleSubmit')
      //   console.log(data, data1)
      // }
    }
  }
</script>

<style scoped lang="less">
  /*.contain {*/
    /*/deep/.ant-col.ant-form-item-label{*/
      /*float: left*/
    /*}*/
    /*/deep/ .ant-col.ant-form-item-control-wrapper{*/
      /*float: left*/
    /*}*/
  /*}*/

</style>
