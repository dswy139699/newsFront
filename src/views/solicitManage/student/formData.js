// import moment from 'moment'
import store from '@/store'

export const formData = {
  getFormData (extend) {
    const data = [
      // {
      //   type: 'select',
      //   label: '学校名称',
      //   col: '5',
      //   id: 'schoolId',
      //   options: store.getters.schoolNameList || [],
      //   defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
      //   layout: {
      //     labelCol: '100px'
      //   }
      // },
      {
        type: 'input',
        label: '班级名称',
        col: '6',
        id: 'clazzName',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'input',
        label: '学生姓名',
        col: '6',
        id: 'name',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'input',
        label: '学号',
        col: '6',
        id: 'studentNum',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'children',
        col: '6',
        name: 'button'
      }
    ]
    return data
  },
  getIncreaseForm (extend) {
    // const className = [
    //   {
    //     label: '201微电子',
    //     value: '201微电子'
    //   },
    //   {
    //     label: '203电竞',
    //     value: '203电竞'
    //   }
    // ]
    const data = [
      {
        type: 'input',
        label: '姓名',
        col: '12',
        id: 'name',
        rules: [
          {
            required: true,
            message: '姓名不能为空'
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
        label: '学号',
        col: '12',
        rules: [
          {
            required: true,
            message: '学号不能为空'
          }
        ],
        id: 'studentNum',
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
        type: 'inputNumber',
        label: '学制',
        min: 1,
        col: '12',
        id: 'educationalSys',
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
        type: 'datePicker',
        label: '入学年月',
        // disabledDate: (current) => { return current && current >= moment().startOf('day') },
        // disabled: extend.checkDisabled,
        format: 'YYYY-MM-DD',
        col: '12',
        id: 'dateInSchool',
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'radio',
      //   label: '性别',
      //   col: '12',
      //   id: 'sex',
      //   options: [
      //     {
      //       label: '男',
      //       value: '男'
      //     },
      //     {
      //       label: '女',
      //       value: '女'
      //     }
      //   ],
      //   layout: {
      //     labelCol: '120px'
      //   }
      // },
      {
        type: 'input',
        label: '身份证号',
        col: '12',
        // lineFeed: true,
        rules: [
          {
            required: true,
            message: '身份证号不能为空'
          },
          {
            validator: extend.checkIdCard
          }
        ],
        id: 'idNum',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'radio',
        label: '性别',
        col: '12',
        id: 'sex',
        options: [
          {
            label: '男',
            value: '男'
          },
          {
            label: '女',
            value: '女'
          }
        ],
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '宿舍室号',
        col: '12',
        id: 'roomNum',
        layout: {
          labelCol: '120px'
        }
      },
      // {
      //   type: 'children',
      //   col: '6',
      //   name: 'roomId'
      // },
      {
        type: 'input',
        label: '宿舍楼号',
        col: '12',
        id: 'roomBuilding',
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
        type: 'inputNumber',
        label: '宿舍楼层',
        col: '12',
        id: 'roomFloor',
        min: 1,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'inputNumber',
        label: '宿舍床号',
        col: '12',
        id: 'roomBed',
        min: 1,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '手机号',
        col: '12',
        id: 'telPhone',
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
        type: 'cascader',
        label: '所属班级',
        rules: [
          {
            required: true,
            message: '所属班级不能为空'
          }
        ],
        col: '12',
        id: 'classIds',
        options: store.getters.classNameList || [],
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '学生账号',
        col: '12',
        id: 'loginId',
        rules: [
          {
            required: true,
            message: '学生账号不能为空'
          }
        ],
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'inputPassword',
        label: '密码',
        col: '12',
        id: 'loginPwd',
        rules: [
          {
            required: !extend.editInfo,
            min: 7,
            message: '密码必须六位以上'
          }
          // {
          //   validator: extend.check
          // }
        ],
        layout: {
          labelCol: '120px'
        }
      }
      // {
      //   type: 'children',
      //   col: '6',
      //   name: 'password'
      // }

    ]
    return data
  },
  getInfoData (extend) {
    const data = [
      {
        type: 'select',
        label: '学校名称',
        col: '20',
        options: store.getters.schoolNameList || [],
        defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
        id: 'schoolId',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'children',
        name: 'button',
        col: 24
      }
    ]
    return data
  }
}
