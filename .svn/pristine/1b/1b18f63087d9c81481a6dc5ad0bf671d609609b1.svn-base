// import store from '@/store'
export const formData = {
  getFormData (extend) {
    const data = [
      {
        type: 'inputPassword',
        label: '密码',
        col: '20',
        id: 'loginPwd',
        rules: [
          {
            required: true,
            message: '密码为必填项'
          }
          // {
          //   validator: extend.check
          // }
        ],
        layout: {
          labelCol: '100px'
        }
      }
      // {
      //   type: 'select',
      //   label: '学校名称',
      //   col: '20',
      //   options: store.getters.schoolNameList || [],
      //   defaultValue: store.getters.schoolNameList[0] ? store.getters.schoolNameList[0].value : '',
      //   id: 'schoolId',
      //   layout: {
      //     labelCol: '100px'
      //   }
      // }
    ]
    return data
  }
}
