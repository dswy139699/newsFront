<template>
  <div class="contain" :style="{display:params.display ? '':'none'}">
    <a-col :span="params.col" >
      <a-form-item :label="getLabel" :colon="getColon" :label-col="params.layout.labelCol" :wrapper-col="getLayout">
        <a-date-picker
          style="width:100%"
          v-if="params.type&&params.type === 'datePicker'"
          @change="change"
          :disabled-date="params.disabledDate"
          :disabled="params.disabled"
          v-decorator="[params.id, {rules:params.rules,initialValue:params.defaultValue || null}]"
          :placeholder="params.placeholder || '请选择日期'"
          :format="params.format"
        />
        <a-range-picker
          style="width:100%"
          v-if="params.type&&params.type === 'rangePicker'"
          v-decorator="[params.id, {rules:params.rules,initialValue:params.defaultValue || []}]"
          :placeholder="params.placeholder || ['开始日期','结束日期']"
          @change="change"
          :disabled="params.disabled"
          ::disabled-date="params.disabledDate"
          :format="params.format"
        />
      </a-form-item>
    </a-col>
  </div>
</template>

<script>
  // import moment from 'moment'

  export default {
    name: 'Input',
    data () {
      return {
        colon: true
      }
    },
    props: {
      attrData: {
        type: Object,
        default: () => {
          return {
            // placeholder: [
            //   {
            //     type: 'string',
            //     default: '请选择日期'
            //   },
            //   {
            //     type: Array,
            //     default: ['开始日期', '结束日期']
            //   }
            // ]
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
          defaultValue: '',
          display: true,
          rules: [
            {
              required: false
            }
          ],
          label: '',
          placeholder: null,
          disabled: false,
          format: null,
          disabledDate: () => { return null },
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
        // console.log(this)
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
      // 时间改变的回调
      change (value) {
        let startTime = ''
        let endTime = ''
        if (this.params.type && this.params.type === 'datePicker') {
          startTime = value._d
          this.params.onChange(startTime)
        } else if (this.params.type && this.params.type === 'rangePicker') {
          startTime = value[0]._d
          endTime = value[1]._d
          this.params.onChange(startTime, endTime)
        }
      }
      // disabledDate (current) {
      //   console.log(current)
      //   return current && current > moment().endOf('day')
      //   // return this.params.disabledDate(current)
      // }
    }
  }
</script>

<style scoped lang="less">
 .contain{
   /deep/ .ant-calendar-picker-icon{
     color:rgba(0,0,0,0.25)
   }
 }

</style>
