(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b14efe7"],{5256:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-header-wrapper",{scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"page-header-content"})]},proxy:!0}])},[a("div",{staticClass:"content"},[a("a-card",{staticClass:"card",attrs:{title:"详细已付款学生信息",bordered:!1}},[a("div",[a("GlobalForm",{ref:"schoolSerch",attrs:{dataSource:e.getFormData,id:"schoolSearch"},scopedSlots:e._u([{key:"warning",fn:function(){return[a("a-alert",{staticStyle:{margin:"5px 0 0 10px"},attrs:{message:"如：韵达1212121，填写了说明已发货状态",type:"warning","show-icon":""}})]},proxy:!0},{key:"button",fn:function(){return[a("a-button",{staticStyle:{margin:"4px 0 0 10px"},attrs:{type:"primary"}},[e._v("提交发货")])]},proxy:!0}])})],1)]),a("a-card",{staticClass:"card",attrs:{title:"学生征订信息",bordered:!1}},[a("div",{staticClass:"table",staticStyle:{"margin-top":"10px"}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.data,loading:e.loading,pagination:!1,rowKey:function(e){return e.id}}},[e.data&&e.data.length>0?a("template",{slot:"footer"},[a("div",{staticStyle:{"text-align":"center"}},[e._v("总书册数：5册 原价：191元 折后总价：191元")])]):e._e()],2)],1)]),a("div",{staticStyle:{"text-align":"right"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.print}},[e._v(" 打印学生征订信息 ")]),a("a-button",{staticStyle:{"margin-left":"10px","margin-right":"24px"},attrs:{type:"primary"},on:{click:function(){}}},[e._v(" 导出学生征订信息 ")])],1)],1)])},o=[],n=a("c0ad"),d={getFormData:function(e,t){var a=[{type:"text",label:"学生姓名",col:"12",id:"studentName",defaultValue:t.studentName,layout:{labelCol:"120px"}},{type:"text",label:"学生学号",col:"12",id:"studentNum",defaultValue:t.studentNum,layout:{labelCol:"120px"}},{type:"text",label:"班级",col:"12",id:"className",defaultValue:t.className,layout:{labelCol:"120px"}},{type:"text",label:"支付宝交易号",col:"12",defaultValue:t.zfbCode,id:"zfbCode",layout:{labelCol:"120px"}},{type:"text",label:"支付宝账号",col:"12",defaultValue:t.account,id:"account",layout:{labelCol:"120px"}},{type:"text",label:"支付金额",col:"12",defaultValue:t.payMoney,id:"payMoney",layout:{labelCol:"120px"}},{type:"text",label:"微信交易单号",col:"12",defaultValue:t.wechatCode,id:"wechatCode",layout:{labelCol:"120px"}},{type:"text",label:"微信商户订单号",col:"12",defaultValue:t.wechatAccount,id:"wechatAccount",layout:{labelCol:"120px"}},{type:"text",label:"是否付款",col:"12",defaultValue:t.payed,id:"payed",layout:{labelCol:"120px"}},{type:"text",label:"付款日期",col:"12",defaultValue:t.payTime,id:"payTime",layout:{labelCol:"120px"}},{type:"text",label:"收件人",lineFeed:!0,col:"12",defaultValue:t.addressee,id:"addressee",layout:{labelCol:"120px"}},{type:"text",label:"电话",col:"12",lineFeed:!0,defaultValue:t.telPhone,id:"telPhone",layout:{labelCol:"120px"}},{type:"text",label:"地址",col:"12",defaultValue:t.address,id:"address",lineFeed:!0,layout:{labelCol:"120px"}},{type:"input",label:"填写发货单号",col:"12",defaultValue:t.trackNumber,id:"trackNumber",layout:{labelCol:"120px"}},{type:"children",name:"warning",col:"8"},{type:"children",name:"button",col:"4"}];return a}},u=[{title:"课程名称",dataIndex:"courseName",key:"courseName"},{title:"课程号",dataIndex:"courseNum",key:"courseNum"},{title:"教材名",dataIndex:"bookName",key:"bookName"},{title:"出版社名称",dataIndex:"press",key:"press"},{title:"ISBN",dataIndex:"ISBN",key:"ISBN"},{title:"定价",dataIndex:"price",key:"price"},{title:"折扣",dataIndex:"discount",key:"discount"},{title:"允许旧书",dataIndex:"oldBook",key:"oldBook"}],c={name:"Index",components:{GlobalForm:n["a"]},data:function(){return{columns:u,title:"新增课程",loading:!1,formData:{studentName:"段贤龙",studentNum:"2019165103",className:"191无人机1",zfbCode:"2020122922001439101420754991",account:"13124828701",payMoney:"191.00",wechatCode:"",wechatAccount:"20201229144430",payed:"",addressee:"孙德明",telPhone:"13501699886",address:"上海市闵行区虹中路460弄流晶逸彩5号501",payTime:"2020/12/29 14:44:56"},selectedRowKeys:[],editInfo:null,visible:!1,data:[{courseName:"创业计划书实战（选修）",courseNum:"创业创新教育",bookName:"创业计划书实战（选修)",press:"西北工业大学出版社",ISBN:"9787561269596",price:"45",discount:"1",oldBook:"",id:"1"},{courseName:"学生就业指导",courseNum:"职业生涯规划与就业指导2",bookName:"大学生就业指导",press:"北京交通大学出版社",ISBN:"9787512134256",price:"38",discount:"1",oldBook:"",id:"2"}],pagination:{current:1,pageSize:20,total:0}}},computed:{getFormData:function(){return d.getFormData(this,this.formData)}},methods:{print:function(){this.$router.push({path:"/book/solicitManage/printInfo"})}}},i=c,r=(a("f627"),a("2877")),s=Object(r["a"])(i,l,o,!1,null,"3a1eb2eb",null);t["default"]=s.exports},f425:function(e,t,a){},f627:function(e,t,a){"use strict";a("f425")}}]);