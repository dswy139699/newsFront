function getFormData (formData, extend) {
  const data = [
    {
      type: 'input',
      label: '姓名',
      defaultValue: formData.name,
      placeholder: '请输入姓名',
      onChange: (value) => { extend.change(value) },
      col: '6',
      id: 'name',
      disabled: false,
      rules: [
        {
          required: true,
          message: '不能为空'
        }
        // {
        //   pattern: '/^\\d+$|^\\d+[.]?\\d+$/',
        //   message: '只能输入数字'
        // },
        // {
        //   validator: extend.check
        // }
      ],
      layout: {
        labelCol: '100px'
      }
    },
    // {
    //   type: 'input',
    //   label: '年龄',
    //   defaultValue: formData.age,
    //   col: '18',
    //   id: 't',
    //   display: extend.display,
    //   layout: {
    //     labelCol: '120px'
    //   }
    // },
    {
      type: 'datePicker',
      // label: false,
      disabled: false,
      format: 'YYYY/MM',
      label: '姓名',
      // defaultValue: formData.name,
      col: '6',
      id: 'age',
      layout: {
        labelCol: '100px'
      },
      rules: [
        {
          required: true,
          message: '不能为空'
        },
        {
          required: true,
          min: 6,
          message: '必须大于五个字符'
        }
        // {
        //   pattern: '/^\\d+$|^\\d+[.]?\\d+$/',
        //   message: '只能输入数字'
        // },
        // {
        //   validator: extend.check
        // }
      ]
    },
    {
      type: 'rangePicker',
      label: '姓名',
      format: ['YYYY-MM-DD', 'YYYY-MM-DD'],
      // defaultValue: formData.name,
      col: '8',
      id: 'ran',
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'upload',
      label: '文件',
      defaultValue: [],
      col: '16',
      lineFeed: true,
      // action: '',
      onChange: () => {},
      id: 'ikkk',
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'inputNumber',
      label: '姓名',
      defaultValue: '3',
      col: '6',
      id: 'i',
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'switch',
      label: '姓名',
      defaultValue: true,
      // defaultValue: formData.name,
      col: '6',
      id: 'a',
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'select',
      label: '姓名',
      defaultValue: ['萝卜'],
      col: '8',
      id: 'g',
      options: [
        {
          label: '萝卜',
          value: '萝卜',
          disabled: true
        },
        {
          label: '白菜',
          value: '白菜'
        }
      ],
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'textarea',
      label: '姓名',
      defaultValue: formData.name,
      autoSize: { minRows: 3, maxRows: 3 },
      col: '12',
      id: 'e',
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'input',
      label: '姓名',
      defaultValue: formData.name,
      col: '8',
      id: 'n',
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'radio',
      label: '姓名',
      defaultValue: '白菜',
      options: [
        {
          label: '萝卜',
          value: '萝卜'
        },
        {
          label: '白菜',
          value: '白菜',
          disabled: true
        },
        {
          label: '大葱',
          value: '大葱'
        }
      ],
      col: '12',
      id: 'radio',
      lineFeed: true,
      layout: {
        labelCol: '100px'
      }
    },
    {
      type: 'checkBox',
      label: '姓名',
      defaultValue: ['萝卜', '白菜'],
      col: '8',
      options: [
        {
          label: '萝卜',
          value: '萝卜'
        },
        {
          label: '白菜',
          value: '白菜',
          disabled: true
        },
        {
          label: '大葱',
          value: '大葱'
        }
      ],
      id: 'l',
      layout: {
        labelCol: '100px'
      }
    },
    {
    type: 'children',
    name: 'content',
    col: '4'
  },
    {
      type: 'input',
      label: '姓名',
      defaultValue: formData.age,
      col: '8',
      id: 'u',
      layout: {
        labelCol: '100px'
      }
    },
    {
      id: 'text',
      type: 'text',
      label: '提示',
      name: 'footer',
      col: '4'
    },
   {
     id: 'llll',
       type: 'text',
     label: '提示',
     name: 'header',
     col: '4'
   }
  ]
  return data
}
export default { getFormData }
// export const data = [
//   {
//     type: 'input',
//     defaultValue: '123',
//     col: '6',
//     id: 'name',
//     layout: {
//       labelCol: '100px'
//     }
//   },
//   {
//     type: 'input',
//     defaultValue: 'sd',
//     col: '18',
//     id: 'age',
//     layout: {
//       labelCol: '120px'
//     }
//   }
// ]
// export const fData = [
//   {
//     type: 'input',
//     defaultValue: '123',
//     col: '6',
//     id: 'name',
//     layout: {
//       labelCol: '100px'
//     }
//   },
//   {
//     type: 'select',
//     defaultValue: '123',
//     id: 'age',
//     col: '6',
//     layout: {
//       labelCol: '120px'
//     }
//   },
//   {
//     type: 'children',
//     name: 'content',
//     col: '24'
//   }
// ]
