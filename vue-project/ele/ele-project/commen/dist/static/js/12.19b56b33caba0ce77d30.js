webpackJsonp([12],{"26dS":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("T4f3"),n=a.n(s),i=a("7lhG"),r=a("XgRp"),c={data:function(){return{list:null}},created:function(){this.$store.dispatch("get_user_info"),this.list=i.a},computed:n()({},Object(r.b)(["userInfo"])),methods:{clicks:function(t){this.$router.replace(t)},backSubmit:function(){this.$store.dispatch("login_out"),this.$router.replace("/login")}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Row",{attrs:{type:"flex"}},[a("i-col",{staticClass:"layout-menu-left",attrs:{span:"5"}},[a("Menu",{attrs:{"active-key":"1-2",theme:"dark",width:"auto","open-keys":["1"]},on:{"on-select":t.clicks}},[a("div",{staticClass:"layout-logo-left"}),t._v(" "),t._l(t.list,function(e,s){return a("Submenu",{key:s,attrs:{name:s}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                        "+t._s(e.meta.title)+"\n                    ")],1),t._v(" "),t._l(e.children,function(e,s){return a("Menu-item",{key:s,attrs:{name:e.path}},[t._v("\n                        "+t._s(e.meta.title)+"\n                    ")])})],2)})],2)],1),t._v(" "),a("i-col",{attrs:{span:"19"}},[a("div",{staticClass:"layout-header"},[a("span",{on:{click:t.backSubmit}},[t._v("退出登录")]),a("span",[t._v(t._s(t.userInfo.name))])]),t._v(" "),a("div",{staticClass:"layout-breadcrumb"},[a("Breadcrumb",[a("Breadcrumb-item",{attrs:{href:"#"}},[t._v("首页")]),t._v(" "),a("Breadcrumb-item",{attrs:{href:"#"}},[t._v("应用中心")]),t._v(" "),a("Breadcrumb-item",[t._v("某应用")])],1)],1),t._v(" "),a("div",{staticClass:"layout-content"},[a("div",{staticClass:"layout-content-main"},[a("router-view")],1)]),t._v(" "),a("div",{staticClass:"layout-copy"},[t._v("\n                2011-2016 © TalkingData\n            ")])])],1)],1)},staticRenderFns:[]};var o=a("/4AN")(c,l,!1,function(t){a("6LGR")},"data-v-0376f6a0",null);e.default=o.exports},"6LGR":function(t,e){}});
//# sourceMappingURL=12.19b56b33caba0ce77d30.js.map