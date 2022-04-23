export function checkIdCard (idcode) {
  // 加权因子
  const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  // 校验码
  const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

  const code = idcode + ''
  const last = idcode[17]// 最后一位

  const seventeen = code.substring(0, 17)

  // ISO 7064:1983.MOD 11-2
  // 判断最后一位校验码是否正确
  const arr = seventeen.split('')
  const len = arr.length
  let num = 0
  for (let i = 0; i < len; i++) {
    num = num + arr[i] * weightFactor[i]
  }

  // 获取余数
  const resisue = num % 11
  const lastNo = checkCode[resisue]

  // 格式的正则
  // 正则思路
  /*
  第一位不可能是0
  第二位到第六位可以是0-9
  第七位到第十位是年份，所以七八位为19或者20
  十一位和十二位是月份，这两位是01-12之间的数值
  十三位和十四位是日期，是从01-31之间的数值
  十五，十六，十七都是数字0-9
  十八位可能是数字0-9，也可能是X
  */
  const idcardPatter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/

  // 判断格式是否正确
  const format = idcardPatter.test(idcode)

  // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
  return !!(last === lastNo && format)
}
// 校验电话号码
export function checkPhone (telPhone) {
  const tel = /^0\d{2,3}-?\d{7,8}$/
  const phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  if (phone.test(telPhone) || tel.test(telPhone)) {
    return true
  }
  return false
}

// 校验邮箱

export function checkEmail (email) {
  // console.log(email)
  const myreg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
  if (myreg.test(email)) {
    return true
  }
  return false
}
