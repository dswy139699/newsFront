export const formData = {
  getFormData (extend) {
    const data = [
      {
        type: 'input',
        label: '电话号码',
        col: '24',
        rules: [
          {
            required: true,
            message: '电话号码不能为空'
          },
          {
            validator: extend.checkTel
          }
        ],
        id: 'telPhone',
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'input',
        label: '收货地址',
        col: '24',
        id: 'address',
        rules: [
          {
            required: true,
            message: '收货地址不能为空'
          }
        ],
        layout: {
          labelCol: '100px'
        }
      },
      {
        type: 'children',
        col: '24',
        name: 'button'
      }
    ]
    const newData = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].id) {
        if (data[i].id === 'telPhone' && !extend.userInfo.telPhone) {
          newData.push(data[i])
        }
        if (data[i].id === 'address' && extend.userInfo.enableAddress) {
          newData.push(data[i])
        }
      } else {
        newData.push(data[i])
      }
    }
    return newData
  }
}
