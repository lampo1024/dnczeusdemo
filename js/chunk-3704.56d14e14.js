(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3704"],{"4f02":function(e,t,s){"use strict";var o=s("82cb"),a=s.n(o);a.a},"82cb":function(e,t,s){},"838a":function(e,t,s){"use strict";s.d(t,"f",function(){return a}),s.d(t,"c",function(){return r}),s.d(t,"g",function(){return n}),s.d(t,"e",function(){return l}),s.d(t,"d",function(){return i}),s.d(t,"b",function(){return d}),s.d(t,"h",function(){return c}),s.d(t,"i",function(){return u}),s.d(t,"a",function(){return m});var o=s("66df"),a=function(e){return o["a"].request({url:"rbac/role/list",method:"post",data:e})},r=function(e){return o["a"].request({url:"rbac/role/create",method:"post",data:e})},n=function(e){return o["a"].request({url:"rbac/role/edit/"+e.code,method:"get"})},l=function(e){return o["a"].request({url:"rbac/role/edit",method:"post",data:e})},i=function(e){return o["a"].request({url:"rbac/role/delete/"+e,method:"get"})},d=function(e){return o["a"].request({url:"rbac/role/batch",method:"get",params:e})},c=function(e){return o["a"].request({url:"rbac/role/find_list_by_user_guid/"+e,method:"get"})},u=function(){return o["a"].request({url:"rbac/role/find_simple_list",method:"get"})},m=function(e){return o["a"].request({url:"rbac/role/assign_permission",method:"post",data:e})}},"8ddf":function(e,t,s){},b1e8:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Card",[s("dz-table",{attrs:{totalCount:e.stores.user.query.totalCount,pageSize:e.stores.user.query.pageSize},on:{"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged}},[s("div",{attrs:{slot:"searcher"},slot:"searcher"},[s("section",{staticClass:"dnc-toolbar-wrap"},[s("Row",{attrs:{gutter:16}},[s("Col",{attrs:{span:"16"}},[s("Form",{attrs:{inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[s("FormItem",[s("Input",{attrs:{type:"text",search:"",clearable:!0,placeholder:"输入关键字搜索..."},on:{"on-search":function(t){e.handleSearchUser()}},model:{value:e.stores.user.query.kw,callback:function(t){e.$set(e.stores.user.query,"kw",t)},expression:"stores.user.query.kw"}},[s("Select",{staticStyle:{width:"60px"},attrs:{slot:"prepend",placeholder:"删除状态"},on:{"on-change":e.handleSearchUser},slot:"prepend",model:{value:e.stores.user.query.isDeleted,callback:function(t){e.$set(e.stores.user.query,"isDeleted",t)},expression:"stores.user.query.isDeleted"}},e._l(e.stores.user.sources.isDeletedSources,function(t){return s("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])})),s("Select",{staticStyle:{width:"60px"},attrs:{slot:"prepend",placeholder:"用户状态"},on:{"on-change":e.handleSearchUser},slot:"prepend",model:{value:e.stores.user.query.status,callback:function(t){e.$set(e.stores.user.query,"status",t)},expression:"stores.user.query.status"}},e._l(e.stores.user.sources.statusSources,function(t){return s("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],1)],1)],1)],1),s("Col",{staticClass:"dnc-toolbar-btns",attrs:{span:"8"}},[s("ButtonGroup",{staticClass:"mr3"},[s("Button",{staticClass:"txt-danger",attrs:{icon:"md-trash",title:"删除"},on:{click:function(t){e.handleBatchCommand("delete")}}}),s("Button",{staticClass:"txt-success",attrs:{icon:"md-redo",title:"恢复"},on:{click:function(t){e.handleBatchCommand("recover")}}}),s("Button",{staticClass:"txt-danger",attrs:{icon:"md-hand",title:"禁用"},on:{click:function(t){e.handleBatchCommand("forbidden")}}}),s("Button",{staticClass:"txt-success",attrs:{icon:"md-checkmark",title:"启用"},on:{click:function(t){e.handleBatchCommand("normal")}}}),s("Button",{attrs:{icon:"md-refresh",title:"刷新"},on:{click:e.handleRefresh}})],1),s("Button",{directives:[{name:"can",rawName:"v-can",value:"create",expression:"'create'"}],attrs:{icon:"md-create",type:"primary",title:"新增用户"},on:{click:e.handleShowCreateWindow}},[e._v("新增用户")])],1)],1)],1)]),s("Table",{ref:"tables",attrs:{slot:"table",border:!1,size:"small","highlight-row":!0,data:e.stores.user.data,columns:e.stores.user.columns,"row-class-name":e.rowClsRender},on:{"on-select":e.handleSelect,"on-selection-change":e.handleSelectionChange,"on-refresh":e.handleRefresh,"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged,"on-sort-change":e.handleSortChange},slot:"table",scopedSlots:e._u([{key:"action",fn:function(t){var o=t.row;t.index;return[s("Poptip",{attrs:{confirm:"",transfer:!0,title:"确定要删除吗?"},on:{"on-ok":function(t){e.handleDelete(o)}}},[s("Tooltip",{attrs:{placement:"top",content:"删除",delay:1e3,transfer:!0}},[s("Button",{attrs:{type:"error",size:"small",shape:"circle",icon:"md-trash"}})],1)],1),s("Tooltip",{attrs:{placement:"top",content:"编辑",delay:1e3,transfer:!0}},[s("Button",{directives:[{name:"can",rawName:"v-can",value:"edit",expression:"'edit'"}],attrs:{type:"primary",size:"small",shape:"circle",icon:"md-create"},on:{click:function(t){e.handleEdit(o)}}})],1),s("Tooltip",{attrs:{placement:"top",content:"分配角色",delay:1e3,transfer:!0}},[s("Button",{attrs:{type:"success",size:"small",shape:"circle",icon:"md-contacts"},on:{click:function(t){e.handleAssignRole(o)}}})],1)]}}])})],1)],1),s("Drawer",{attrs:{title:e.formTitle,width:"600","mask-closable":!1,mask:!0,styles:e.styles},model:{value:e.formModel.opened,callback:function(t){e.$set(e.formModel,"opened",t)},expression:"formModel.opened"}},[s("Form",{ref:"formUser",attrs:{model:e.formModel.fields,rules:e.formModel.rules,"label-position":"top"}},[s("Row",{attrs:{gutter:16}},[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"登录名",prop:"loginName"}},[s("Input",{attrs:{placeholder:"请输入登录名"},model:{value:e.formModel.fields.loginName,callback:function(t){e.$set(e.formModel.fields,"loginName",t)},expression:"formModel.fields.loginName"}})],1)],1),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"显示名",prop:"displayName"}},[s("Input",{attrs:{placeholder:"请输入显示名"},model:{value:e.formModel.fields.displayName,callback:function(t){e.$set(e.formModel.fields,"displayName",t)},expression:"formModel.fields.displayName"}})],1)],1)],1),s("Row",{attrs:{gutter:16}},[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"密码",prop:"password"}},[s("Input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:e.formModel.fields.password,callback:function(t){e.$set(e.formModel.fields,"password",t)},expression:"formModel.fields.password"}})],1)],1),s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"用户类型"}},[s("Select",{model:{value:e.formModel.fields.userType,callback:function(t){e.$set(e.formModel.fields,"userType",t)},expression:"formModel.fields.userType"}},e._l(e.stores.user.sources.userTypes,function(t){return s("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],1)],1)],1),s("Row",{attrs:{gutter:16}},[s("Col",{attrs:{span:"12"}},[s("FormItem",{attrs:{label:"用户状态","label-position":"left"}},[s("i-switch",{attrs:{size:"large","true-value":1,"false-value":0},model:{value:e.formModel.fields.status,callback:function(t){e.$set(e.formModel.fields,"status",t)},expression:"formModel.fields.status"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("正常")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1)],1)],1),s("FormItem",{attrs:{label:"备注","label-position":"top"}},[s("Input",{attrs:{type:"textarea",rows:4,placeholder:"用户备注信息"},model:{value:e.formModel.fields.desc,callback:function(t){e.$set(e.formModel.fields,"desc",t)},expression:"formModel.fields.desc"}})],1)],1),s("div",{staticClass:"demo-drawer-footer"},[s("Button",{attrs:{icon:"md-checkmark-circle",type:"primary"},on:{click:e.handleSubmitUser}},[e._v("保 存")]),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"md-close"},on:{click:function(t){e.formModel.opened=!1}}},[e._v("取 消")])],1)],1),s("Drawer",{attrs:{title:"用户角色分配",width:"500","mask-closable":!0,mask:!0},model:{value:e.formAssignRole.opened,callback:function(t){e.$set(e.formAssignRole,"opened",t)},expression:"formAssignRole.opened"}},[s("Form",[s("FormItem",[s("Transfer",{attrs:{data:e.formAssignRole.roles,"target-keys":e.formAssignRole.ownedRoles,"render-format":e.renderOwnedRoles,titles:["未获得的角色","已获得的角色"]},on:{"on-change":e.handleChangeOwnedRolesChanged}})],1)],1),s("div",{staticClass:"demo-drawer-footer",staticStyle:{"margin-top":"15px"}},[s("Button",{attrs:{icon:"md-checkmark-circle",type:"primary"},on:{click:e.handleSaveUserRoles}},[e._v("保 存")]),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"md-close"},on:{click:function(t){e.formAssignRole.opened=!1}}},[e._v("取 消")])],1)],1)],1)},a=[],r=(s("55dd"),s("cadf"),s("551c"),s("097d"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dnc-table-wrap"},[e._t("searcher",[e.searchable&&"top"===e.searchPlace?s("div",{staticClass:"search-con search-con-top"},[s("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":e.handleClear},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),s("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[s("Icon",{attrs:{type:"search"}}),e._v("  搜索\n      ")],1)],1):e._e()]),e._t("table",[e._v("暂无数据")]),s("div",{staticStyle:{"margin-top":"15px"}},[e._t("pager",[s("Page",{attrs:{total:e.totalCount,"page-size":e.pageSize,size:"small","show-elevator":"","show-sizer":"","show-total":"","page-size-opts":e.pageSizeOpts},on:{"on-change":e.onPageChanged,"on-page-size-change":e.onPageSizeChanged}})])],2)],2)}),n=[],l=(s("c5f6"),{name:"DzTable",data:function(){return{searchValue:""}},props:{searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"},totalCount:{type:Number,default:0},pageSize:{type:Number,default:20},showRefreshButton:{type:Boolean,default:!1},pageSizeOpts:{type:Array,default:function(){return[5,10,20,30,40,50]}}},methods:{handleClear:function(){},handleSearch:function(){this.$emit("on-search")},onPageChanged:function(e){this.$emit("on-page-change",e)},onPageSizeChanged:function(e){this.$emit("on-page-size-change",e)}}}),i=l,d=(s("bc57"),s("2877")),c=Object(d["a"])(i,r,n,!1,null,null,null);c.options.__file="dz-table.vue";var u=c.exports,m=s("66df"),h=function(e){return m["a"].request({url:"rbac/user/list",method:"post",data:e})},f=function(e){return m["a"].request({url:"rbac/user/create",method:"post",data:e})},p=function(e){return m["a"].request({url:"rbac/user/edit/"+e.guid,method:"get"})},g=function(e){return m["a"].request({url:"rbac/user/edit",method:"post",data:e})},v=function(e){return m["a"].request({url:"rbac/user/delete/"+e,method:"get"})},w=function(e){return m["a"].request({url:"rbac/user/batch",method:"get",params:e})},y=function(e){return m["a"].request({url:"rbac/user/save_roles",method:"post",data:e})},b=s("838a"),C={name:"rbac_user_page",components:{DzTable:u},data:function(){return{commands:{delete:{name:"delete",title:"删除"},recover:{name:"recover",title:"恢复"},forbidden:{name:"forbidden",title:"禁用"},normal:{name:"normal",title:"启用"}},formModel:{opened:!1,title:"创建用户",mode:"create",selection:[],fields:{guid:"",loginName:"",displayName:"",password:"",avatar:"",userType:0,isLocked:0,status:1,isDeleted:0,createdOn:null,createdByUserGuid:"",createdByUserName:"",modifiedOn:null,modifiedByUserGuid:"",modifiedByUserName:""},rules:{loginName:[{type:"string",required:!0,message:"请输入登录名",min:3}],displayName:[],password:[]}},formAssignRole:{userGuid:"",opened:!1,ownedRoles:[],inited:!1,roles:[]},stores:{user:{query:{totalCount:0,pageSize:20,currentPage:1,kw:"",isDeleted:0,status:-1,sort:[{direct:"DESC",field:"Guid"}]},sources:{userTypes:[{value:0,text:"超级管理员"},{value:1,text:"管理员"},{value:2,text:"普通用户"}],isDeletedSources:[{value:-1,text:"全部"},{value:0,text:"正常"},{value:1,text:"已删"}],statusSources:[{value:-1,text:"全部"},{value:0,text:"禁用"},{value:1,text:"正常"}],statusFormSources:[{value:0,text:"禁用"},{value:1,text:"正常"}]},columns:[{type:"selection",width:50,key:"handle"},{title:"登录名",key:"loginName",width:250,sortable:!0},{title:"显示名",key:"displayName",width:250},{title:"用户类型",key:"userType"},{title:"状态",key:"status",align:"center",width:120},{title:"创建时间",width:120,ellipsis:!0,tooltip:!0,key:"createdOn"},{title:"创建者",key:"createdByUserName"},{title:"操作",align:"center",width:150,className:"table-command-column",slot:"action"}],data:[]}},styles:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:"53px",position:"static"}}},computed:{formTitle:function(){return"create"===this.formModel.mode?"创建用户":"edit"===this.formModel.mode?"编辑用户":""},selectedRows:function(){return this.formModel.selection},selectedRowsId:function(){return this.formModel.selection.map(function(e){return e.guid})}},methods:{loadUserList:function(){var e=this;h(this.stores.user.query).then(function(t){e.stores.user.data=t.data.data,e.stores.user.query.totalCount=t.data.totalCount})},handleOpenFormWindow:function(){this.formModel.opened=!0},handleCloseFormWindow:function(){this.formModel.opened=!1},handleSwitchFormModeToCreate:function(){this.formModel.mode="create"},handleSwitchFormModeToEdit:function(){this.formModel.mode="edit",this.handleOpenFormWindow()},handleEdit:function(e){this.handleSwitchFormModeToEdit(),this.handleResetFormUser(),this.doLoadUser(e.guid)},handleSelect:function(e,t){},handleSelectionChange:function(e){this.formModel.selection=e},handleRefresh:function(){this.loadUserList()},handleShowCreateWindow:function(){this.handleSwitchFormModeToCreate(),this.handleOpenFormWindow(),this.handleResetFormUser()},handleSubmitUser:function(){var e=this.validateUserForm();e&&("create"===this.formModel.mode&&this.doCreateUser(),"edit"===this.formModel.mode&&this.doEditUser())},handleResetFormUser:function(){this.$refs["formUser"].resetFields()},doCreateUser:function(){var e=this;f(this.formModel.fields).then(function(t){200===t.data.code?(e.$Message.success(t.data.message),e.handleCloseFormWindow(),e.loadUserList()):e.$Message.warning(t.data.message)})},doEditUser:function(){var e=this;g(this.formModel.fields).then(function(t){200===t.data.code?(e.$Message.success(t.data.message),e.handleCloseFormWindow(),e.loadUserList()):e.$Message.warning(t.data.message)})},validateUserForm:function(){var e=this,t=!1;return this.$refs["formUser"].validate(function(s){s?t=!0:e.$Message.error("请完善表单信息")}),t},doLoadUser:function(e){var t=this;p({guid:e}).then(function(e){t.formModel.fields=e.data.data})},handleDelete:function(e){this.doDelete(e.guid)},doDelete:function(e){var t=this;e?v(e).then(function(e){200===e.data.code?(t.$Message.success(e.data.message),t.loadUserList(),t.formModel.selection=[]):t.$Message.warning(e.data.message)}):this.$Message.warning("请选择至少一条数据")},handleBatchCommand:function(e){var t=this;!this.selectedRowsId||this.selectedRowsId.length<=0?this.$Message.warning("请选择至少一条数据"):this.$Modal.confirm({title:"操作提示",content:"<p>确定要执行当前 ["+this.commands[e].title+"] 操作吗?</p>",loading:!0,onOk:function(){t.doBatchCommand(e)}})},doBatchCommand:function(e){var t=this;w({command:e,ids:this.selectedRowsId.join(",")}).then(function(e){200===e.data.code?(t.$Message.success(e.data.message),t.loadUserList(),t.formModel.selection=[]):t.$Message.warning(e.data.message),t.$Modal.remove()})},handleSearchUser:function(){this.loadUserList()},rowClsRender:function(e,t){return e.isDeleted?"table-row-disabled":""},handleSortChange:function(e){this.stores.user.query.sort.direction=e.order,this.stores.user.query.sort.field=e.key,this.loadPostList()},handlePageChanged:function(e){this.stores.user.query.currentPage=e,this.loadUserList()},handlePageSizeChanged:function(e){this.stores.user.query.pageSize=e,this.loadUserList()},renderOwnedRoles:function(e){return e.label},handleChangeOwnedRolesChanged:function(e,t,s){this.formAssignRole.ownedRoles=e},loadUserRoleList:function(e){var t=this;this.formAssignRole.roles=[],this.formAssignRole.ownedRoles=[],Object(b["h"])(e).then(function(e){var s=e.data.data;t.formAssignRole.roles=s.roles,t.formAssignRole.ownedRoles=s.assignedRoles})},handleAssignRole:function(e){this.formAssignRole.opened=!0,this.formAssignRole.userGuid=e.guid,this.loadUserRoleList(e.guid)},handleSaveUserRoles:function(){var e=this,t={userGuid:this.formAssignRole.userGuid,assignedRoles:this.formAssignRole.ownedRoles};y(t).then(function(t){e.formAssignRole.opened=!1,200===t.data.code?e.$Message.success(t.data.message):e.$Message.warning(t.data.message)})}},mounted:function(){this.loadUserList()}},M=C,k=(s("4f02"),Object(d["a"])(M,o,a,!1,null,null,null));k.options.__file="user.vue";t["default"]=k.exports},bc57:function(e,t,s){"use strict";var o=s("8ddf"),a=s.n(o);a.a}}]);