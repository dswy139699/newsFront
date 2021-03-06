import store from '@/store'

export const formData = {
  getFormData (extend) {
    const data = [
      // {
      //   type: 'select',
      //   label: '学校名称',
      //   col: '7',
      //   options: store.getters.schoolNameList || [],
      //   defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
      //   id: 'schoolId',
      //   layout: {
      //     labelCol: '100px'
      //   }
      // },
      {
        type: 'input',
        label: '班级名称',
        col: '10',
        id: 'clazzName',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'input',
        label: '班级号',
        col: '10',
        id: 'clazzNum',
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
    // const schoolName = [
    //   {
    //     label: '上海大学',
    //     value: '上海大学'
    //   }
    // ]
    const data = [
      {
        type: 'input',
        label: '班级名称',
        col: '12',
        rules: [
          {
            required: true,
            message: '班级名称不能为空'
          }
        ],
        id: 'clazzName',
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
        label: '班级号',
        col: '12',
        rules: [
          {
            required: true,
            message: '班级号不能为空'
          }
        ],
        id: 'clazzNum',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '6',
        name: 'classNum'
      },
      {
        type: 'input',
        label: '年级',
        col: '12',
        id: 'grade',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '6',
        name: 'grade'
      },
      {
        type: 'input',
        label: '专业',
        col: '12',
        id: 'major',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        col: '6',
        name: 'career'
      },
      {
        type: 'input',
        label: '校区',
        col: '12',
        id: 'campus',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'select',
        label: '学校',
        options: store.getters.schoolNameList || [],
        onChange: extend.onChange,
        defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
        col: '12',
        rules: [
          {
            required: true,
            message: '学校不能为空'
          }
        ],
        lineFeed: true,
        id: 'schoolId',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '所包含课程号',
        col: '24',
        lineFeed: true,
        id: 'clazzIds',
        name: 'classIds',
        layout: {
          labelCol: '120px'
        }
      }
    ]
    return data
  }
}
