<template>
  <div class="contain" :style="{display:params.display ? '':'none'}">
    <a-col :span="params.col" >
      <a-form-item :label="getLabel" :colon="getColon" :label-col="params.layout.labelCol" :wrapper-col="getLayout">
        <!--<a-upload-->
        <!--name="file"-->
        <!--:multiple="true"-->
        <!--action="https://www.mocky.io/v2/5cc8019d300000980a055e76"-->
        <!--:headers="headers"-->
        <!--@change="handleChange"-->
        <!--&gt;-->
        <!--<a-button> <a-icon type="upload" /> Click to Upload </a-button>-->
        <!--</a-upload>-->
        <a-upload
          v-decorator="[
            params.id,
            {
              rules:params.rules,initialValue:params.defaultValue,
            },
          ]"
          v-if="!params.disabled"
          :customRequest="params.customRequest"
          :disabled="params.disabled"
          :beforeUpload="params.beforeUpload"
          @change="change"
          :showUploadList="false"
        >
          <a-button> 上传 </a-button>
        </a-upload>
        <FileList
          v-if="params.isShow"
          :fileList="params.fileList"
          :download="params.download"
          :disabled="params.disabled"
          :onDelete="params.onDelete"
          style="margin-top:10px;"/>
      </a-form-item>
    </a-col>
    <!--<div>-->
    <!--<a-button @click="onClick" style="margin:10px 0 0 100px" type="primary">提交</a-button>-->
    <!--</div>-->
  </div>
</template>

<script>
  import FileList from '@/components/fileList'
  export default {
    name: 'Input',
    components: {
      FileList
    },
    data () {
      return {
        colon: true,
        false: false,
        fileList: []
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
          layout: {},
          type: '',
          id: '',
          accept: null,
          display: true,
          rules: [
            {
              required: false
            }
          ],
          label: '',
          name: 'files',
          data: {},
          download: () => {},
          onDelete: () => {},
          disabled: false,
          isShow: true,
          fileList: [],
          beforeUpload: () => {},
          customRequest: () => {},
          action: '',
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
    // mounted () {
    //     this.fileList = this._.cloneDeep(this.params.defaultValue)
    // },
    methods: {
      getDisabled (value, data) {
        if ('disabled' in data && (data.disabled)) {
          return true
        }
        return false
      },
      change (value) {
        // console.log(value)
        // this.fileList = value.fileList
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
