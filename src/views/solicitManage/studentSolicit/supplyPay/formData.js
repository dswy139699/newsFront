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
      {
        type: 'children',
        col: '6',
        name: 'button'
      }
    ]
    return data
  }
}
