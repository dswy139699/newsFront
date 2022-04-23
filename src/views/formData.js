
export const formData = {
  getFormData (extend, type) {
    let data = []
    if (type === 'items') {
      data = [
        {
          type: 'input',
          label: '栏目名称',
          col: '10',
          id: 'title',
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
    } else if (type === 'news') {
      data = [
        {
          type: 'input',
          label: '新闻标题',
          col: '10',
          id: 'title',
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
    } else if (type === 'users') {
      data = [
        {
          type: 'input',
          label: '用户名称',
          col: '10',
          id: 'title',
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
    }
    return data
  },
  getIncreaseForm (extend, type) {
    let data = []
   if (type === 'items') {
     data = [
       {
         type: 'input',
         label: '栏目名称',
         col: '24',
         rules: [
           {
             required: true,
             message: '栏目名称不能为空'
           }
         ],
         id: 'title',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'textarea',
         label: '栏目描述',
         col: '24',
         rules: [
           {
             required: true,
             message: '栏目描述不能为空'
           }
         ],
         id: 'content',
         layout: {
           labelCol: '120px'
         }
       }
     ]
   } else if (type === 'news') {
     data = [
       {
         type: 'select',
         label: '所属栏目',
         options: [],
         onChange: extend.onChange,
         defaultValue: '',
         col: '12',
         rules: [
           {
             required: true,
             message: '所属栏目必选'
           }
         ],
         lineFeed: true,
         id: 'schoolId',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'input',
         label: '新闻标题',
         col: '12',
         lineFeed: true,
         rules: [
           {
             required: true,
             message: '新闻标题不能为空'
           }
         ],
         id: 'title',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'input',
         label: '作者',
         col: '12',
         lineFeed: true,
         rules: [
           {
             required: true,
             message: '作者不能为空'
           }
         ],
         id: 'title',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'upload',
         label: '新闻图片',
         // accept: '.pdf',
         // rules: [
         //   {
         //     required: true,
         //     message: '文件不能为空'
         //   }
         // ],
         col: '12',
         lineFeed: true,
         beforeUpload: extend.beforeUpload,
         // defaultValue: [extend.fileData],
         isShow: false,
         customRequest: extend.customRequest,
         id: 'upload',
         // disabled: extend.checkDisabled('upload'),
         layout: {
           labelCol: '120px'
         }
       },
       {
         label: '新闻内容',
         type: 'text',
         id: 'editor',
         layout: {
           labelCol: '120px'
         },
         col: '24',
         name: 'editor',
         rules: [
           {
             required: true,
             message: '新闻内容不能为空'
           }
         ]
       }
     ]
   } else if (type === 'comment') {
     data = [
       {
         type: 'select',
         label: '所属栏目',
         options: [],
         onChange: extend.onChange,
         defaultValue: '',
         col: '24',
         rules: [
           {
             required: true,
             message: '所属栏目必选'
           }
         ],
         lineFeed: true,
         id: 'schoolId',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'select',
         label: '所属新闻',
         options: [],
         onChange: extend.onChange,
         col: '24',
         lineFeed: true,
         rules: [
           {
             required: true,
             message: '所属新闻不能为空'
           }
         ],
         id: 'title',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'textarea',
         label: '评论内容',
         col: '24',
         lineFeed: true,
         rules: [
           {
             required: true,
             message: '评论内容不能为空'
           }
         ],
         id: 'title',
         layout: {
           labelCol: '120px'
         }
       }
     ]
   } else if (type === 'users') {
     data = [
       {
         type: 'input',
         label: '用户名称',
         col: '24',
         lineFeed: true,
         rules: [
           {
             required: true,
             message: '作者不能为空'
           }
         ],
         id: 'title',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'input',
         label: '用户手机号',
         col: '24',
         lineFeed: true,
         rules: [
           {
             required: true,
             message: '作者不能为空'
           }
         ],
         id: 'title',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'input',
         label: '新密码',
         col: '24',
         inputType: 'password',
         id: 'user_password_new',
         defaultValue: '',
         layout: {
           labelCol: '120px'
         }
       },
       {
         type: 'upload',
         label: '用户头像',
         col: '24',
         lineFeed: true,
         beforeUpload: extend.beforeUpload,
         // defaultValue: [extend.fileData],
         isShow: false,
         customRequest: extend.customRequest,
         id: 'upload',
         // disabled: extend.checkDisabled('upload'),
         layout: {
           labelCol: '120px'
         }
       }
     ]
   }
    return data
  }
}
