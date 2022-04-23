// import store from '@/store'
export const formData = {
  getFormData (extend, formData) {
    const data = [
      {
        type: 'text',
        label: '学生姓名',
        col: '12',
        id: 'studentName',
        defaultValue: formData.studentName,
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
        defaultValue: formData.className,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '支付宝交易号',
        col: '12',
        defaultValue: formData.zfbCode,
        id: 'zfbCode',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '支付宝账号',
        col: '12',
        defaultValue: formData.account,
        id: 'account',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '支付金额',
        col: '12',
        defaultValue: formData.payMoney,
        id: 'payMoney',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '微信交易单号',
        col: '12',
        defaultValue: formData.wechatCode,
        id: 'wechatCode',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '微信商户订单号',
        col: '12',
        defaultValue: formData.wechatAccount,
        id: 'wechatAccount',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '是否付款',
        col: '12',
        defaultValue: formData.payed,
        id: 'payed',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '付款日期',
        col: '12',
        defaultValue: formData.payTime,
        id: 'payTime',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '收件人',
        lineFeed: true,
        col: '12',
        defaultValue: formData.addressee,
        id: 'addressee',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '电话',
        col: '12',
        lineFeed: true,
        defaultValue: formData.telPhone,
        id: 'telPhone',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'text',
        label: '地址',
        col: '12',
        defaultValue: formData.address,
        id: 'address',
        lineFeed: true,
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'input',
        label: '填写发货单号',
        col: '12',
        defaultValue: formData.trackNumber,
        id: 'trackNumber',
        layout: {
          labelCol: '120px'
        }
      },
      {
        type: 'children',
        name: 'warning',
        col: '8'
      },
      {
        type: 'children',
        name: 'button',
        col: '4'
      }
    ]
    return data
  }
}
