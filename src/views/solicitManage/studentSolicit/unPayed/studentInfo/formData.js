// import store from '@/store'
export const formData = {
  getFormData (extend, formData) {
    const data = [
      {
        type: 'text',
        label: '学生姓名',
        col: '12',
        id: 'studentName',
        defaultValue: formData.name,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '学生学号',
        col: '12',
        id: 'studentNum',
        defaultValue: formData.studentNum,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '班级',
        col: '12',
        id: 'className',
        defaultValue: formData.clazzName,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '支付宝交易号',
        col: '12',
        defaultValue: formData.alipayTransNum,
        id: 'zfbCode',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '支付宝账号',
        col: '12',
        defaultValue: formData.alipayAccount,
        id: 'account',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '是否付款',
        col: '12',
        defaultValue: formData.isPayment ? '是' : '否',
        id: 'payed',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '征订日期',
        col: '12',
        defaultValue: formData.dayOfPayment,
        id: 'solicitTime',
        layout: {
          labelCol: '120px'
        }
      }
    ]
    return data
  }
}
