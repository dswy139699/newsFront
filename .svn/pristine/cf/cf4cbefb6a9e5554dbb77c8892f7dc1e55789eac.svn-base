// import store from '@/store'
export const formData = {
  getFormData (extend) {
    const data = [
      // {
      //   type: 'select',
      //   label: '学校名称',
      //   col: '5',
      //   options: store.getters.schoolNameList || [],
      //   defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
      //   id: 'schoolId',
      //   layout: {
      //     labelCol: '100px'
      //   }
      // },
      {
        type: 'input',
        label: '学生姓名',
        col: '6',
        id: 'studentName',
        // options: store.getters.schoolNameList,
        // defaultValue: store.getters.schoolNameList[0].value,
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'input',
        label: '学生学号',
        col: '6',
        id: 'studentNum',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'input',
        label: '班级号',
        col: '6',
        id: 'clazzNum',
        layout: {
          labelCol: '100px'
        }
      },
      // {
      //   type: 'select',
      //   label: '付款情况',
      //   col: '5',
      //   id: 'payMent',
      //   options: [
      //     {
      //       label: '已付款',
      //       value: '已付款'
      //     },
      //     {
      //       label: '未付款',
      //       value: '未付款'
      //     },
      //     {
      //       label: '已补款',
      //       value: '已补款'
      //     }
      //   ],
      //   layout: {
      //     labelCol: '100px'
      //   }
      // },
      {
        type: 'children',
        col: '6',
        name: 'button'
      }
    ]
    return data
  }
  // getIncreaseForm (extend) {
  //   const data = [
  //     {
  //       type: 'input',
  //       label: '课程号',
  //       rules: [
  //         {
  //           required: true,
  //           message: '课程号不能为空'
  //         }
  //       ],
  //       col: '12',
  //       id: 'courseNum',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'children',
  //       col: '6',
  //       name: 'warning'
  //     },
  //     {
  //       type: 'input',
  //       label: '课程负责人',
  //       col: '12',
  //       id: 'courseHandel',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     // {
  //     //   type: 'children',
  //     //   col: '4',
  //     //   name: 'handel'
  //     // },
  //     {
  //       type: 'input',
  //       label: '老师工号',
  //       col: '12',
  //       id: 'teacherId',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     // {
  //     //   type: 'children',
  //     //   col: '4',
  //     //   name: 'empCode'
  //     // },
  //     {
  //       type: 'input',
  //       label: '课程名',
  //       col: '12',
  //       rules: [
  //         {
  //           required: true,
  //           message: '课程名不能为空'
  //         }
  //       ],
  //       id: 'courseName',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'input',
  //       label: '课程代码',
  //       col: '12',
  //       id: 'courseCode',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'select',
  //       label: '开课学院',
  //       options: store.getters.schoolNameList,
  //       defaultValue: store.getters.schoolNameList[0].value,
  //       col: '12',
  //       rules: [
  //         {
  //           required: true,
  //           message: '开课学院不能为空'
  //         }
  //       ],
  //       id: 'schoolName',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'input',
  //       label: '办公地点',
  //       col: '12',
  //       id: 'address',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     // {
  //     //   type: 'input',
  //     //   label: '联系电话',
  //     //   col: '12',
  //     //   id: 'telPhone',
  //     //   layout: {
  //     //     labelCol: '100px'
  //     //   }
  //     // },
  //     // {
  //     //   type: 'children',
  //     //   col: '6',
  //     //   name: 'telPhone'
  //     // },
  //     {
  //       type: 'input',
  //       label: '邮箱',
  //       col: '12',
  //       id: 'email',
  //       rules: [
  //         {
  //           validator: extend.checkEma
  //         }
  //       ],
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'input',
  //       label: '教参收货地址',
  //       col: '12',
  //       id: 'acceptAddress',
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'input',
  //       label: '联系电话',
  //       col: '12',
  //       id: 'telPhone',
  //       rules: [
  //         {
  //           validator: extend.checkTel
  //         }
  //       ],
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'children',
  //       col: '6',
  //       name: 'telPhone'
  //     },
  //     {
  //       type: 'input',
  //       label: '收货电话',
  //       col: '12',
  //       id: 'acceptTel',
  //       rules: [
  //         {
  //           validator: extend.checkTel
  //         }
  //       ],
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'children',
  //       col: '6',
  //       name: 'telPhone'
  //     },
  //     {
  //       type: 'inputPassword',
  //       label: '登陆密码',
  //       col: '12',
  //       id: 'password',
  //       rules: [
  //         {
  //           required: true,
  //           min: 7,
  //           message: '密码必须六位以上'
  //         }
  //         // {
  //         //   validator: extend.check
  //         // }
  //       ],
  //       layout: {
  //         labelCol: '120px'
  //       }
  //     },
  //     {
  //       type: 'children',
  //       col: '6',
  //       name: 'password'
  //     }
  //
  //   ]
  //   return data
  // }
}
