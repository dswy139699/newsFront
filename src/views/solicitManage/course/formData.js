import store from '@/store'
export const formData = {
  getFormData (extend) {
    const data = [
      // {
      //   type: 'select',
      //   label: '学校名称',
      //   col: '10',
      //   id: 'schoolId',
      //   options: store.getters.schoolNameList || [],
      //   defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
      //   layout: {
      //     labelCol: '100px'
      //   }
      // },
      {
        type: 'input',
        label: '课程名称',
        col: '10',
        id: 'name',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'children',
        col: '4',
        name: 'button'
      }
    ]
    return data
  },
  getIncreaseForm (extend) {
    const data = [
      {
        type: 'input',
        label: '课程号',
        rules: [
          {
            required: true,
            message: '课程号不能为空'
          }
        ],
        col: '12',
        id: 'num',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '6',
        name: 'warning'
      },
      {
        type: 'input',
        label: '课程负责人',
        col: '12',
        id: 'chargePerson',
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'children',
      //   col: '4',
      //   name: 'handel'
      // },
      {
        type: 'input',
        label: '老师工号',
        col: '12',
        id: 'jobNumber',
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'children',
      //   col: '4',
      //   name: 'empCode'
      // },
      {
        type: 'input',
        label: '课程名',
        col: '12',
        rules: [
          {
            required: true,
            message: '课程名不能为空'
          }
        ],
        id: 'name',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '课程代码',
        col: '12',
        rules: [
          {
            required: true,
            message: '课程代码不能为空'
          }
        ],
        id: 'code',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'select',
        label: '开课学校',
        options: store.getters.schoolNameList || [],
        defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
        col: '12',
        onChange: extend.onChange,
        rules: [
          {
            required: true,
            message: '开课学校不能为空'
          }
        ],
        id: 'collegeId',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '办公地点',
        col: '12',
        id: 'officeLocation',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '邮箱',
        col: '12',
        id: 'email',
        rules: [
          {
            validator: extend.checkEma
          }
        ],
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '教参收货地址',
        col: '12',
        id: 'recieveLocation',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '联系电话',
        col: '12',
        id: 'telphone',
        rules: [
          {
            validator: extend.checkTel
          }
        ],
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '6',
        name: 'telPhone'
      },
      {
        type: 'input',
        label: '收货电话',
        col: '12',
        id: 'recieveTel',
        rules: [
          {
            validator: extend.checkTel
          }
        ],
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '6',
        name: 'telPhone'
      },
      {
        type: 'text',
        label: '教材',
        col: '24',
        id: 'books',
        name: 'books',
        layout: {
          labelCol: '120px'
        }
      }
    ]
    return data
  }
}
