// import moment from 'moment'
import store from '@/store'

export const formData = {
  getFormData (extend) {
    const data = [
      // {
      //   type: 'select',
      //   label: '学校名称',
      //   col: '10',
      //   options: store.getters.schoolNameList || [],
      //   defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
      //   id: 'schoolId',
      //   layout: {
      //     labelCol: '100px'
      //   }
      // },
      {
        type: 'input',
        label: '教材名称',
        col: '10',
        id: 'name',
        // options: store.getters.schoolNameList,
        // defaultValue: store.getters.schoolNameList[0].value,
        layout: {
          labelCol: '100px'
        }
      },
      // {
      //   type: 'input',
      //   label: '课程号',
      //   col: '10',
      //   id: 'courseId',
      //   layout: {
      //     labelCol: '100px'
      //   }
      // },
      {
        type: 'children',
        col: '4',
        name: 'button'
      }
    ]
    return data
  },
  getFormInfo (extend) {
    let data = []
    if (extend.typeInfo.id && (extend.typeInfo.id === 'name' || extend.typeInfo.id === 'press')) {
      data = [
        {
          type: 'input',
          label: extend.typeInfo.label || '',
          col: '24',
          id: extend.typeInfo.id || '',
          layout: {
            labelCol: '80px'
          }
        }
      ]
    } else if (extend.typeInfo.id && (extend.typeInfo.id === 'materialCount')) {
      data = [
        {
          type: 'input',
          label: extend.typeInfo.label || '',
          col: '24',
          id: extend.typeInfo.id || '',
          onChange: (value) => extend.dataChange(value, extend.typeInfo.id),
          layout: {
            labelCol: '80px'
          }
        }
      ]
    } else if (extend.typeInfo.id && (extend.typeInfo.id === 'must' || extend.typeInfo.id === 'offline')) {
      data = [
        {
          type: 'switch',
          label: extend.typeInfo.label || '',
          col: '24',
          id: extend.typeInfo.id || '',
          layout: {
            labelCol: '80px'
          }
        }
      ]
    } else {
      data = [
        {
          type: 'input',
          label: extend.typeInfo.label || '',
          col: '24',
          id: extend.typeInfo.id || '',
          onChange: (value) => extend.numberChange(value, extend.typeInfo.id),
          layout: {
            labelCol: '80px'
          }
        }
      ]
    }
    return data
  },
  getIncreaseForm (extend) {
    // const courseName = [
    //   {
    //     label: 'C语言程序设计教程与实验',
    //     value: 'C语言程序设计教程与实验'
    //   },
    //   {
    //     label: 'H5创意与广告设计',
    //     value: 'H5创意与广告设计'
    //   }
    // ]
    const data = [
      {
        type: 'input',
        label: '教材名',
        col: '12',
        id: 'name',
        rules: [
          {
            required: true,
            message: '教材名不能为空'
          }
        ],
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'children',
      //   col: '6',
      //   name: 'warning'
      // },
      {
        type: 'input',
        label: '出版社名称',
        col: '12',
        // rules: [
        //   {
        //     required: true,
        //     message: '学号不能为空'
        //   }
        // ],
        id: 'press',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'select',
        label: '所属学校',
        options: store.getters.schoolNameList || [],
        defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
        rules: [
          {
            required: true,
            message: '所属学校不能为空'
          }
        ],
        col: '12',
        id: 'schoolId',
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'children',
      //   col: '6',
      //   name: 'studentNum'
      // },
      {
        type: 'input',
        label: 'ISBN',
        col: '12',
        id: 'isbn',
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'children',
      //   col: '6',
      //   name: 'schoolSystem'
      // },
      {
        type: 'input',
        label: '版次',
        // disabledDate: (current) => { return current && current >= moment().startOf('day') },
        // disabled: extend.checkDisabled,
        col: '12',
        id: 'edition',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '定价',
        col: '12',
        onChange: (value) => extend.numChange(value, 'price'),
        id: 'price',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '折扣',
        col: '12',
        onChange: (value) => extend.numChange(value, 'discount'),
        id: 'discount',
        // // lineFeed: true,
        // rules: [
        //   {
        //     required: true,
        //     message: '身份证号不能为空'
        //   },
        //   {
        //     validator: extend.checkIdCard
        //   }
        // ],
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '旧书折扣',
        col: '12',
        onChange: (value) => extend.numChange(value, 'oldBookDiscount'),
        id: 'oldBookDiscount',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '退款定价',
        col: '12',
        rules: [
          {
            required: extend.refundPrice,
            message: '退款定价不能为空'
          }
        ],
        onChange: (value) => extend.numChange(value, 'refundPrice'),
        id: 'refundPrice',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '12',
        name: 'refundPrice'
      },
      {
        type: 'input',
        label: '退款折扣',
        onChange: (value) => extend.numChange(value, 'refundDiscount'),
        col: '12',
        id: 'refundDiscount',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '12',
        name: 'refundDiscount'
      },
      {
        type: 'input',
        label: '获奖情况',
        col: '12',
        id: 'awards',
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'children',
      //   col: '6',
      //   name: 'buildId'
      // },
      {
        type: 'input',
        label: '作者',
        col: '12',
        id: 'author',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'inputNumber',
        label: '教参数量',
        col: '12',
        id: 'materialCount',
        min: 1,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '回告信息',
        col: '12',
        id: 'tellbackInfo',
        min: 1,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'textarea',
        label: '备注',
        col: '24',
        id: 'remark',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'switch',
        label: '是否可征订',
        defaultValue: false,
        col: '5',
        id: 'offline',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '16',
        name: 'disBuy'
      },
      {
        type: 'switch',
        label: '是否必须征订',
        defaultValue: false,
        col: '5',
        id: 'must',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '16',
        name: 'must'
      }
    ]
    return data
  }
}
