(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9ba2bf4"],{"0947":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-header-wrapper",{scopedSlots:e._u([{key:"content",fn:function(){return[a("div",{staticClass:"page-header-content"})]},proxy:!0}])},[a("div",{staticClass:"content"},[a("div",{staticStyle:{"text-align":"left"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.increase}},[e._v(" 新增 ")])],1),a("div",{staticClass:"table",staticStyle:{"margin-top":"10px"}},[a("a-table",{attrs:{columns:e.columns,"data-source":e.data,loading:e.loading,pagination:e.pagination,rowKey:function(e){return e.id}},on:{change:e.changePage},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.onEdit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.delSchool(n)}}},[a("a",[e._v("删除")])]),a("a-divider",{attrs:{type:"vertical"}}),a("a",[e._v("导出征订明细")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",[e._v("导出征订汇总")]),a("a-divider",{attrs:{type:"vertical"}}),a("span",{staticStyle:{color:"#1890ff"}},[e._v("开放征订")]),a("a-switch",{staticStyle:{margin:"0 0 4px 5px"},attrs:{checked:!!n.enableSubscription,size:"small"},on:{change:function(t){return e.onChange(t,n)}}})],1)}}])})],1),a("div",{staticClass:"modal"},[a("a-modal",{attrs:{title:e.title,visible:e.visible},on:{cancel:e.cancel,ok:e.handelOk}},[a("div",{staticClass:"increase"},[a("GlobalForm",{ref:"increaseDom",attrs:{dataSource:e.getIncreaseForm,id:"increaseDom"}})],1)])],1)])])},i=[],o=(a("b0c0"),a("4795"),a("5530")),c=a("c0ad"),s=(a("d81d"),{getFormData:function(e){var t=e.data.map((function(e){return{label:e.name,value:e.id}})),a=[{type:"select",label:"学校名称",col:"12",id:"name",options:t||[],defaultValue:t[0]?t[0].value:"",layout:{labelCol:"100px"}},{type:"children",col:"12",name:"button"}];return a},getIncreaseForm:function(e){var t=[{type:"input",label:"学校名称",col:"20",id:"name",rules:[{required:!0,message:"学校名称不能为空"}],layout:{labelCol:"100px"}},{type:"input",label:"学校账号",col:"20",id:"loginId",rules:[{required:!0,message:"学校账号不能为空"}],layout:{labelCol:"100px"}},{type:"inputPassword",label:"密码",col:"20",id:"loginPwd",rules:[{required:!e.editInfo,min:7,message:"密码必须六位以上"}],layout:{labelCol:"100px"}},{type:"select",label:"导入模板类型",col:"20",id:"importType",options:[{label:"类同电力学院",value:1},{label:"类同电子信息职院",value:2},{label:"类同普陀业大",value:3}],layout:{labelCol:"100px"}}];return t}}),r=(a("d3b7"),a("caa4")),l={getSchoolForPage:function(e){return new Promise((function(t,a){Object(r["d"])(e).then((function(e){t(e||{})}))["catch"]((function(e){a(e)}))}))},getSchool:function(e){return new Promise((function(t,a){Object(r["b"])(e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},delSchool:function(e){return new Promise((function(t,a){Object(r["a"])(e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},saveSchool:function(e){return new Promise((function(t,a){Object(r["e"])(e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))},updateSchool:function(e){return new Promise((function(t,a){Object(r["f"])(e).then((function(e){t(e)}))["catch"]((function(e){a(e)}))}))}},u=[{title:"学校名称",dataIndex:"name",key:"name",ellipsis:!0},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],h={name:"Index",components:{GlobalForm:c["a"]},data:function(){return{columns:u,title:"新增学校",loading:!0,editInfo:null,visible:!1,searchData:{},data:[],pagination:{current:1,pageSize:20,total:0}}},computed:{getFormData:function(){return s.getFormData(this)},getIncreaseForm:function(){return s.getIncreaseForm(this)}},mounted:function(){this.getSchoolForPage({pageIndex:this.pagination.current,pageSize:this.pagination.pageSize})},methods:{changePage:function(e){this.pagination.current=e.current,this.getSchoolForPage(Object(o["a"])({pageIndex:e.current,pageSize:this.pagination.pageSize},this.searchData))},increase:function(){this.title="新增学校",this.visible=!0,this.editInfo=null},onEdit:function(e){var t=this,a=this._.cloneDeep(e);this.title="编辑学校",this.editInfo=e,this.visible=!0,delete a.id,this.$nextTick((function(){setTimeout((function(){t.$refs.increaseDom.setFieldsValue({name:a.name,loginId:a.loginId,importType:a.importType})}))}))},handelOk:function(){var e=this.$refs.increaseDom.handleSubmit();e&&(this.editInfo?this.updateSchool(Object(o["a"])(Object(o["a"])({},this.editInfo),e)):this.saveSchool(e))},cancel:function(){this.$refs.increaseDom.resetFields(),this.visible=!1},search:function(){var e=this.$refs.schoolSerch.getFieldsValue();this.searchData=e,this.pagination.current=1,this.getSchoolForPage(Object(o["a"])({pageIndex:1,pageSize:this.pagination.pageSize},e))},reset:function(){this.searchData={},this.$refs.schoolSerch.resetFields()},getSchoolForPage:function(e){var t=this;this.loading=!0,l.getSchoolForPage(e).then((function(e){t.data=e.records||[],t.pagination.total=e.total||0,t.loading=!1}))},saveSchool:function(e){var t=this;l.saveSchool(e).then((function(e){t.$notification.success({message:"新增成功"}),t.$store.dispatch("GetSchool"),t.cancel(),t.getSchoolForPage(Object(o["a"])({pageIndex:t.pagination.current,pageSize:t.pagination.pageSize},t.searchData))}))},updateSchool:function(e){var t=this;l.updateSchool(e).then((function(e){t.$notification.success({message:"更新成功"}),t.cancel(),t.$store.dispatch("GetSchool"),t.getSchoolForPage(Object(o["a"])({pageIndex:t.pagination.current,pageSize:t.pagination.pageSize},t.searchData))}))},delSchool:function(e){var t=this;l.delSchool({idList:[e.id]}).then((function(e){t.$notification.success({message:"删除成功"}),t.$store.dispatch("GetSchool"),t.getSchoolForPage(Object(o["a"])({pageIndex:t.pagination.current,pageSize:t.pagination.pageSize},t.searchData))}))},onChange:function(e,t){var a=this;l.updateSchool(Object(o["a"])(Object(o["a"])({},t),{},{enableSubscription:e?1:0})).then((function(e){a.$notification.success({message:"更新成功"}),a.$store.dispatch("GetSchool"),a.getSchoolForPage(Object(o["a"])({pageIndex:a.pagination.current,pageSize:a.pagination.pageSize},a.searchData))}))}}},d=h,p=(a("581a"),a("2877")),g=Object(p["a"])(d,n,i,!1,null,"02a44ce1",null);t["default"]=g.exports},"581a":function(e,t,a){"use strict";a("fd97")},fd97:function(e,t,a){}}]);