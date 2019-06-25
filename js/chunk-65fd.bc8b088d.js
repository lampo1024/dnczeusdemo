(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65fd"],{"838a":function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return d}),n.d(t,"a",function(){return p});var s=n("66df"),r=function(e){return s["a"].request({url:"rbac/role/list",method:"post",data:e})},i=function(e){return s["a"].request({url:"rbac/role/create",method:"post",data:e})},o=function(e){return s["a"].request({url:"rbac/role/edit/"+e.code,method:"get"})},a=function(e){return s["a"].request({url:"rbac/role/edit",method:"post",data:e})},l=function(e){return s["a"].request({url:"rbac/role/delete/"+e,method:"get"})},c=function(e){return s["a"].request({url:"rbac/role/batch",method:"get",params:e})},u=function(e){return s["a"].request({url:"rbac/role/find_list_by_user_guid/"+e,method:"get"})},d=function(){return s["a"].request({url:"rbac/role/find_simple_list",method:"get"})},p=function(e){return s["a"].request({url:"rbac/role/assign_permission",method:"post",data:e})}},a8ba:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"g",function(){return u});var s=n("66df"),r=function(e){return s["a"].request({url:"rbac/permission/list",method:"post",data:e})},i=function(e){return s["a"].request({url:"rbac/permission/create",method:"post",data:e})},o=function(e){return s["a"].request({url:"rbac/permission/edit/"+e.code,method:"get"})},a=function(e){return s["a"].request({url:"rbac/permission/edit",method:"post",data:e})},l=function(e){return s["a"].request({url:"rbac/permission/delete/"+e,method:"get"})},c=function(e){return s["a"].request({url:"rbac/permission/batch",method:"get",params:e})},u=function(e){return s["a"].request({url:"rbac/permission/permission_tree/"+e,method:"get"})}},b33e:function(e,t,n){},d7a6:function(e,t,n){"use strict";var s=n("b33e"),r=n.n(s);r.a},df67:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Card",[n("Row",{attrs:{gutter:15}},[n("Col",{attrs:{span:"4"}},[n("h3",{staticStyle:{"background-color":"#f3f3f3","margin-bottom":"0",padding:"5px 5px 5px 10px",position:"relative"}},[e._v("角色列表\n          "),n("span",{staticStyle:{display:"inline-block",position:"absolute",right:"6px",top:"4px"}},[n("Tooltip",{attrs:{content:"刷新角色列表"}},[n("Button",{attrs:{shape:"circle",size:"small",icon:"md-refresh"},on:{click:e.handleReloadRoleListClick}})],1)],1)]),n("ul",{staticClass:"role-list-box"},e._l(e.stores.role.data,function(t){return n("li",{class:{active:t.selected},on:{click:function(n){e.handleRoleClicked(t)}}},[e._v(e._s(t.name))])}))]),n("Col",{attrs:{span:"20"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("h3",{staticStyle:{"background-color":"#f3f3f3","margin-bottom":"0",padding:"5px 5px 5px 10px"}},[e._v("权限列表")]),n("span",{staticStyle:{display:"inline-block",position:"absolute",right:"0",top:"1px"}},[n("Button",{attrs:{icon:"md-checkmark-circle",type:"primary"},on:{click:e.handleSaveRolePermissions}},[e._v("保 存")])],1)]),n("Tree",{staticClass:"permission-tree-box",attrs:{data:e.stores.permissionTree.data,render:e.renderContent}})],1)],1)],1)],1)},r=[],i=(n("7f7f"),n("838a")),o=n("a8ba"),a={name:"rbac_role_permission_page",data:function(){return{selectedPermissions:[],currentRoleCode:"",stores:{role:{data:[]},permissionTree:{data:[]}},buttonProps:{type:"default",size:"small"}}},mounted:function(){this.loadRoles()},methods:{loadRoles:function(){var e=this;Object(i["i"])().then(function(t){for(var n=t.data.data,s=0,r=n.length;s<r;s++)n[s].selected=!1;e.stores.role.data=n})},loadRolePermissionTree:function(){var e=this;Object(o["g"])(this.currentRoleCode).then(function(t){var n=t.data.data;e.stores.permissionTree.data=n.tree,e.selectedPermissions=n.selectedPermissions})},handleRoleClicked:function(e){for(var t=0,n=this.stores.role.data.length;t<n;t++)this.stores.role.data[t].selected=!1;this.currentRoleCode=e.code,e.selected=!0,this.loadRolePermissionTree()},handleSaveRolePermissions:function(){var e=this,t={roleCode:this.currentRoleCode,permissions:this.selectedPermissions};Object(i["a"])(t).then(function(t){var n=t.data;200==n.code?e.$Message.success(n.message):e.$Message.warning(n.message)})},handleReloadRoleListClick:function(){this.currentRoleCode="",this.selectedPermissions=[],this.stores.permissionTree.data=[],this.loadRoles()},renderContent:function(e,t){var n=this,s=(t.root,t.node),r=t.data,i=!1;return r.permissions&&r.permissions.length>0&&(i=!0),e("span",{style:{display:"inline-block",width:"100%"},class:"permission-tree-node"},[e("span",[e("Icon",{props:{type:"ios-paper-outline"},style:{marginRight:"5px"}}),e("span",r.title)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[e("div",{style:{display:"inline-block",marginRight:"10px"}},[e("CheckboxGroup",{props:{value:this.selectedPermissions,style:{display:"inline-block"},class:"permission-box"},on:{"on-change":function(e){n.selectedPermissions=e}}},(r.permissions||[]).map(function(t){return e("Checkbox",{props:{label:t.code}},t.name)}))]),e("Checkbox",{props:{label:"全选",value:r.allAssigned},style:{marginLeft:"15px",color:"333",fontWeight:"600",visibility:i?"visible":"hidden"},class:"permission-check-all",on:{"on-change":function(e){n.checkNodePermission(e,r.permissions,s)}}},"全选")])])},checkNodePermission:function(e,t,n){if(n.allAssigned=e,t&&!(t.length<=0))if(e)for(var s=0,r=t.length;s<r;s++){var i=t[s],o=this.selectedPermissions.indexOf(i.code);-1==o&&this.selectedPermissions.push(i.code)}else for(var a=0,l=t.length;a<l;a++){i=t[a],o=this.selectedPermissions.indexOf(i.code);-1!==o&&this.selectedPermissions.splice(o,1)}}}},l=a,c=(n("d7a6"),n("2877")),u=Object(c["a"])(l,s,r,!1,null,null,null);u.options.__file="role-permission.vue";t["default"]=u.exports}}]);