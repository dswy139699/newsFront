// import store from '@/store'

export const formData = {
  getFormData (extend) {
    const school = extend.data.map(item => {
     return {
          label: item.name,
          value: item.id
        }
    })
    const data = [
      {
        type: 'select',
        label: '学校名称',
        col: '12',
        id: 'name',
        options: school || [],
        defaultValue: school[0] ? school[0].value : '',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'children',
        col: '12',
        name: 'button'
      }
    ]
    return data
  },
  getNoticeData (extend) {
    const data = [
      {
        type: 'textarea',
        label: '公告内容',
        col: '24',
        autoSize: { minRows: 6, maxRows: 10 },
        id: 'notice',
        layout: {
          labelCol: '100px'
        }
      }
    ]
    return data
  },
  getIncreaseForm (extend) {
    const data = [
      {
        type: 'input',
        label: '学校名称',
        col: '20',
        id: 'name',
        rules: [
          {
            required: true,
            // min: 7,
            message: '学校名称不能为空'
          }
          ],
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'input',
        label: '学校账号',
        col: '20',
        id: 'loginId',
        rules: [
          {
            required: true,
            // min: 7,
            message: '学校账号不能为空'
          }
        ],
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'inputPassword',
        label: '密码',
        col: '20',
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
          labelCol: '100px'
        }
      },
      {
        type: 'select',
        label: '导入模板类型',
        col: '20',
        id: 'importType',
        options: [
          {
            label: '类同电力学院',
            value: 1
          },
          {
            label: '类同电子信息职院',
            value: 2
          },
          {
            label: '类同普陀业大',
            value: 3
          }
        ],
        layout: {
          labelCol: '100px'
        }
      }
    ]
    return data
  }
}
