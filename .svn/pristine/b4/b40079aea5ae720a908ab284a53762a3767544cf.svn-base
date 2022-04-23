<template>
  <div class="contain" :style="{display:params.display ? '':'none'}">
    <a-col :span="params.col" >
      <a-form-item :label="getLabel" :colon="getColon" :label-col="params.layout.labelCol" :wrapper-col="getLayout">
        <!--<a-col :style="getLayout.style">-->
        <!--        <span  class="ant-form-text">-->
        <div v-if="params.name">
          <slot name="text" ></slot>
        </div>
        <div v-else>
          {{ params.defaultValue }}
        </div>
        <!--        </span>-->
        <!--</a-col>-->
      </a-form-item>
    </a-col>
  </div>
</template>

<script>
  export default {
    name: 'Index',
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
            options: []
          }
        }
      }
    },
    computed: {
      params () {
        return Object.assign({
          col: '24',
          name: '',
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
          disabled: false,
          // mode:'default',
          options: [],
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
      },
      getDisabled (value, data) {
        if ('disabled' in data && (data.disabled)) {
          return true
        }
        return false
      }
    },
    created () {

    },
    methods: {
      change (value) {
        // console.log(value.target.value)
        this.params.onChange(value)
      }
      // onClick () {
      //   const data = this.children.$emit('handleSubmit')
      //   const data1 = this.form1.$emit('handleSubmit')
      //   console.log(data, data1)
      // }
    }
  }
</script>

<style scoped>

</style>
