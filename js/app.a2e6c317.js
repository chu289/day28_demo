(function(e){function t(t){for(var a,r,l=t[0],c=t[1],o=t[2],u=0,b=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&b.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,l=1;l<s.length;l++){var c=s[l];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/day28_demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"0c1f":function(e,t,s){},"149e":function(e,t,s){},"15ac":function(e,t,s){"use strict";s("7595")},"1cb4":function(e,t,s){},"1f64":function(e,t,s){"use strict";s("1cb4")},"22b2":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="4678"},"51b6":function(e,t,s){e.exports=s.p+"img/gingerbread.9764631b.png"},"56d7":function(e,t,s){"use strict";s.r(t);var a={};s.r(a),s.d(a,"addMessage",(function(){return Ue})),s.d(a,"deleteMessage",(function(){return Ze})),s.d(a,"editeMessage",(function(){return qe})),s.d(a,"initMessages",(function(){return Ve})),s.d(a,"getNow",(function(){return Qe})),s.d(a,"toggleMark",(function(){return Xe})),s.d(a,"toggleShowAddDialog",(function(){return Ye})),s.d(a,"clearInput",(function(){return et}));var n={};s.r(n),s.d(n,"DATE",(function(){return st})),s.d(n,"MESSAGES",(function(){return at}));var i={};s.r(i),s.d(i,"ADD_MESSAGE",(function(){return it})),s.d(i,"DELETE_MESSAGE",(function(){return rt})),s.d(i,"EDDIT_MESSAGE",(function(){return lt})),s.d(i,"SET_MESSAGES",(function(){return ct})),s.d(i,"GET_NOW",(function(){return ot})),s.d(i,"TOOGLE_MARK",(function(){return dt})),s.d(i,"TOGGLE_SHOW_ADDDIALOG",(function(){return ut})),s.d(i,"CLEAR_INPUT",(function(){return bt}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var r,l,c,o,d=s("2b0e"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("MainHeader"),s("MainMenu"),s("transition",{attrs:{name:"slide",apper:""}},[s("router-view")],1)],1)},b=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-header"},[e._m(0),s("div",{staticClass:"right"},[s("button",{on:{click:e.toggleShowAddDialog}},[s("i",[e._v("+")])]),e._m(1)])])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"left"},[s("h2",[e._v("GINGERBREAD HOUSE")]),s("form",[s("input",{attrs:{type:"search",name:"",id:""}}),s("button",[s("i",{staticClass:"bx bx-search-alt"})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:s("51b6")}})]),a("h2",[e._v(" Admin ")])])}],g=s("5530"),v=s("2f62"),p={methods:Object(g["a"])({},Object(v["b"])(["toggleShowAddDialog"]))},h=p,C=(s("6b46"),s("2877")),j=Object(C["a"])(h,f,m,!1,null,null,null),_=j.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-menu"},[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"link",attrs:{to:"/"}},[s("i",{staticClass:"bx bxs-home"})]),s("router-link",{staticClass:"link",attrs:{to:"/stock"}},[s("i",{staticClass:"bx bxs-package"})]),s("router-link",{staticClass:"link",attrs:{to:"/sale"}},[s("i",{staticClass:"bx bx-line-chart"})])],1)])},x=[],M={},S=M,E=(s("614d"),Object(C["a"])(S,k,x,!1,null,null,null)),O=E.exports,y={name:"Home",components:{MainHeader:_,MainMenu:O}},A=y,w=(s("034f"),Object(C["a"])(A,u,b,!1,null,null,null)),D=w.exports,G=s("8c4f"),T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("Popup",{staticClass:"addDialog",attrs:{showDialog:e.showAddDialog,cancel:e.cancel,confirm:e.handleAddConfirm,cnacelTxt:"Cancel",confirmTxt:"Confirm"}},[s("div",{staticClass:"content"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.inputMessage.name,expression:"inputMessage.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Leave your name"},domProps:{value:e.inputMessage.name},on:{input:function(t){t.target.composing||e.$set(e.inputMessage,"name",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.inputMessage.content,expression:"inputMessage.content",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Leave messages..."},domProps:{value:e.inputMessage.content},on:{input:function(t){t.target.composing||e.$set(e.inputMessage,"content",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),s("transition",{attrs:{name:"slide",apper:""}},[s("router-view")],1)],1)},z=[],P=(s("b0c0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"popup"},[s("transition",{attrs:{name:"fade",apper:""}},[e.showDialog?s("div",{staticClass:"dialog-overlay",on:{click:e.cancel}}):e._e()]),s("transition",{attrs:{name:"slide",apper:""}},[e.showDialog?s("div",{staticClass:"dialog"},[e._t("default"),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"confirm",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.confirm.apply(null,arguments)}}},[s("h6",{domProps:{textContent:e._s(e.confirmTxt)}})]),s("button",{staticClass:"cancel",on:{click:e.cancel}},[s("h6",{domProps:{textContent:e._s(e.cnacelTxt)}})])])],2):e._e()])],1)}),F=[],N={name:"Popup",props:["showDialog","cancel","confirm","cnacelTxt","confirmTxt"]},L=N,R=(s("8ec6"),Object(C["a"])(L,P,F,!1,null,null,null)),$=R.exports,H=s("8dee"),I=s.n(H),K={name:"Home",components:{Popup:$},mounted:function(){this.initMessages(),this.getNow()},computed:Object(g["a"])(Object(g["a"])({},Object(v["d"])(["inputMessage","showAddDialog"])),Object(v["c"])(["DATE"])),methods:Object(g["a"])(Object(g["a"])({},Object(v["b"])(["toggleShowAddDialog","addMessage","clearInput","initMessages","getNow"])),{},{handleAddConfirm:function(){this.inputMessage.name&&this.inputMessage.content?(this.inputMessage.date=this.DATE,this.inputMessage.id=I.a.generate({salts:5,interval:1e3}),this.addMessage(this.inputMessage),this.toggleShowAddDialog(),this.initMessages(),this.clearInput()):alert("Please enter your name and message in full!")},cancel:function(){this.toggleShowAddDialog()}})},W=K,B=(s("cccb"),Object(C["a"])(W,T,z,!1,null,null,null)),J=B.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stock"},[s("StockContent")],1)},Z=[],q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stock-content"},[s("div",{staticClass:"container glass"},[e._m(0),e._l(e.results,(function(t){return s("div",{staticClass:"kind"},[s("div",{staticClass:"kind-title"},[e._v(" "+e._s(t.name)+" ")]),s("div",[s("doughnut-chart",{attrs:{data:t.trends,name:t.name,backgroundColor:t.backgroundColor}})],1)])}))],2)])},V=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("h2",[e._v("Stock")])])}],Q=s("1fca"),X={extends:Q["b"],props:["backgroundColor","name","data"],mounted:function(){this.renderChart({labels:["Remaining","Used"],datasets:[{borderWidth:0,label:this.name,backgroundColor:this.backgroundColor,data:this.data}]},{legend:{display:!0,labels:{fontColor:"#F1F6F9",fontSize:14}},cutoutPercentage:80,responsive:!0,maintainAspectRatio:!1})}},Y=X,ee=Object(C["a"])(Y,r,l,!1,null,null,null),te=ee.exports,se={components:{DoughnutChart:te},data:function(){return{results:[{name:"Butter",trends:[80,20],backgroundColor:["rgba(168, 230, 207, .8)","rgba(54, 162, 235, 0.2)"]},{name:"White sugar",trends:[60,40],backgroundColor:["rgba(220, 237, 193, .8)","rgba(54, 162, 235, 0.2)"]},{name:"Eggs",trends:[90,10],backgroundColor:["rgba(255, 211, 182, .8)","rgba(54, 162, 235, 0.2)"]},{name:"Baking powder",trends:[70,30],backgroundColor:["rgba(255, 255, 255, .8)","rgba(54, 162, 235, 0.2)"]},{name:"Vanilla extract",trends:[50,50],backgroundColor:["rgba(203, 240, 120, .8)","rgba(54, 162, 235, 0.2)"]},{name:"All-purpose flour",trends:[20,80],backgroundColor:["rgba(248, 243, 152, .8)","rgba(54, 162, 235, 0.2)"]},{name:"Colored sugar",trends:[90,10],backgroundColor:["rgba(241, 185, 99, .8)","rgba(54, 162, 235, 0.2)"]},{name:"Whipping cream",trends:[60,40],backgroundColor:["rgba(228, 97, 97, .8)","rgba(54, 162, 235, 0.2)"]}]}}},ae=se,ne=(s("c8b0"),Object(C["a"])(ae,q,V,!1,null,null,null)),ie=ne.exports,re={name:"Stock",components:{StockContent:ie}},le=re,ce=(s("1f64"),Object(C["a"])(le,U,Z,!1,null,null,null)),oe=ce.exports,de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sale"},[s("SaleContent")],1)},ue=[],be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sale-content"},[s("div",{staticClass:"container glass"},[e._m(0),s("div",{staticClass:"func"},[s("select",{on:{change:e.select}},[s("option",{attrs:{value:"0",hidden:"",selected:""}},[e._v(" Please Select ")]),e._l(e.options,(function(e,t){return s("option",{key:t,attrs:{label:e.label},domProps:{value:e.value}})}))],2)]),s("div",{staticClass:"chart"},[s("bar-chart",{attrs:{data:e.trends,name:e.name}})],1)])])},fe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("h2",[e._v("Sale")])])}],me={extends:Q["a"],props:["name","data"],data:function(){return{chartData:{labels:["2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11","2021-12"],datasets:[{borderWidth:0,label:this.name,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],data:this.data}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"#F1F6F9"},gridLines:{display:!1}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"#F1F6F9"},gridLines:{display:!1}}]},legend:{display:!0,labels:{fontColor:"#F1F6F9",fontSize:35}},responsive:!0,maintainAspectRatio:!1}}},watch:{name:function(){this.renderChart({labels:["2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11","2021-12"],datasets:[{borderWidth:0,label:this.name,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],data:this.data}]},{scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"#F1F6F9"},gridLines:{display:!1}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"#F1F6F9"},gridLines:{display:!1}}]},legend:{display:!0,labels:{fontColor:"#F1F6F9",fontSize:35}},responsive:!0,maintainAspectRatio:!1})}},mounted:function(){this.renderChart(this.chartData,this.options)}},ge=me,ve=Object(C["a"])(ge,c,o,!1,null,null,null),pe=ve.exports,he={components:{BarChart:pe},data:function(){return{results:[{name:"Gingerbread House",trends:[80,55,75,80,90,60,75,90,60,78,90,85]},{name:"Pepperidge Farm Milano",trends:[70,62,35,2,90,60,10,90,70,80,20,4]},{name:"Serena Egg Roll",trends:[69,92,62,80,90,60,10,90,36,80,90,10]},{name:"Kenji Saltine Cracker",trends:[33,65,40,80,85,60,10,90,57,80,90,75]},{name:"Kenji Cheese Crackers",trends:[39,62,40,12,25,60,10,90,70,80,90,38]},{name:"Mariani Raisins",trends:[95,50,24,17,90,45,10,90,70,93,90,10]},{name:"Oreo Sandwich Cookies",trends:[40,30,40,25,36,60,78,90,70,80,90,95]},{name:"Nissin Butter Crackers",trends:[75,82,40,80,78,60,10,24,70,80,90,15]},{name:"Dried Guava",trends:[96,62,40,80,90,98,85,90,70,78,86,10]},{name:"La Mere Poulard Cookie Assortment",trends:[19,50,40,80,90,60,10,90,70,76,45,10]}],options:[{label:"Gingerbread House",value:0},{label:"Pepperidge Farm Milano",value:1},{label:"Serena Egg Roll",value:2},{label:"Kenji Saltine Cracker",value:3},{label:"Kenji Cheese Crackers",value:4},{label:"Mariani Raisins",value:5},{label:"Oreo Sandwich Cookies",value:6},{label:"Nissin Butter Crackers",value:7},{label:"Dried Guava",value:8},{label:"La Mere Poulard Cookie Assortment",value:9}],name:"",trends:[]}},computed:{},mounted:function(){this.name=this.results[0].name,this.trends=this.results[0].trends},methods:{select:function(e){this.name=this.results[e.target.value].name,this.trends=this.results[e.target.value].trends}}},Ce=he,je=(s("f756"),Object(C["a"])(Ce,be,fe,!1,null,null,null)),_e=je.exports,ke={name:"Sale",components:{SaleContent:_e}},xe=ke,Me=(s("ee84"),Object(C["a"])(xe,de,ue,!1,null,null,null)),Se=Me.exports,Ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home-content"},[s("MainContent")],1)},Oe=[],ye=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-content"},[e._m(0),s("div",{staticClass:"right glass"},[s("MainMessage")],1)])},Ae=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"center glass"},[s("div",{staticClass:"header"},[s("h2",{staticClass:"title"},[e._v("Orders")]),s("div",{staticClass:"group"},[s("h2",[e._v(" 25 "),s("small",[e._v(" In Progress "),s("i",{staticClass:"bx bxs-circle green"})])]),s("h2",[e._v(" 12 "),s("small",[e._v(" Upcoming "),s("i",{staticClass:"bx bxs-circle red"})])]),s("h2",[e._v(" 37 "),s("small",[e._v(" Total Orders "),s("i",{staticClass:"bx bxs-circle blue"})])])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"box one"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/23")]),s("h2",{staticClass:"name"},[e._v("William D. Worley")]),s("h2",{staticClass:"phone"},[e._v("919-951-1299")]),s("ol",{staticClass:"list"},[s("li",[e._v("Pepperidge Farm Milano")]),s("li",[e._v("Gingerbread House")])])])])]),s("div",{staticClass:"box two"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/20")]),s("h2",{staticClass:"name"},[e._v("Joshua B. McKay")]),s("h2",{staticClass:"phone"},[e._v("509-569-8423")]),s("ol",{staticClass:"list"},[s("li",[e._v("Serena Egg Roll")]),s("li",[e._v("Kenji Saltine Cracker")]),s("li",[e._v("Kenji Cheese Crackers ")])])])])]),s("div",{staticClass:"box three"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/27")]),s("h2",{staticClass:"name"},[e._v("Mark L. Moore")]),s("h2",{staticClass:"phone"},[e._v("760-404-7504")]),s("ol",{staticClass:"list"},[s("li",[e._v("Gingerbread House")])])])])]),s("div",{staticClass:"box four"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/27")]),s("h2",{staticClass:"name"},[e._v("Jessie A. Leblanc")]),s("h2",{staticClass:"phone"},[e._v("973-894-9448")]),s("ol",{staticClass:"list"},[s("li",[e._v("Mariani Raisins")])])])])]),s("div",{staticClass:"box five"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/22")]),s("h2",{staticClass:"name"},[e._v("Warren B. Dixon")]),s("h2",{staticClass:"phone"},[e._v("315-842-7023")]),s("ol",{staticClass:"list"},[s("li",[e._v("Pepperidge Farm Milano")]),s("li",[e._v("Gingerbread House")])])])])]),s("div",{staticClass:"box six"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/25")]),s("h2",{staticClass:"name"},[e._v("Nicholas N. McCrae")]),s("h2",{staticClass:"phone"},[e._v("770-545-1275")]),s("ol",{staticClass:"list"},[s("li",[e._v("Oreo Sandwich Cookies")]),s("li",[e._v("Kenji Saltine Cracker")]),s("li",[e._v("Mariani Raisins")])])])])]),s("div",{staticClass:"box seven"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/28")]),s("h2",{staticClass:"name"},[e._v("Sheila R. Gomez")]),s("h2",{staticClass:"phone"},[e._v("931-773-4665")]),s("ol",{staticClass:"list"},[s("li",[e._v("Kenji Cheese Crackers")]),s("li",[e._v("Nissin Butter Crackers")]),s("li",[e._v("Dried Guava")]),s("li",[e._v("Gingerbread House")])])])])]),s("div",{staticClass:"box eight"},[s("div",{staticClass:"pinned"},[s("i",{staticClass:"bx bx-pin"})]),s("div",{staticClass:"note"},[s("div",{staticClass:"text"},[s("h2",{staticClass:"date"},[e._v("2021/9/28")]),s("h2",{staticClass:"name"},[e._v("Salvador C. Schmit")]),s("h2",{staticClass:"phone"},[e._v("856-827-3270")]),s("ol",{staticClass:"list"},[s("li",[e._v("La Mere Poulard Cookie Assortment ")]),s("li",[e._v("Gingerbread House")])])])])])])])}],we=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-message"},[s("div",{staticClass:"title"},[s("h2",[e._v("Leave Comments")]),s("i",{staticClass:"fas fa-star isMark",class:{mark:e.isMark},on:{click:e.toggleMark}})]),s("div",{staticClass:"content-box"},[e._l(e.MESSAGES,(function(t){return!1===e.isMark?s("ul",{staticClass:"content"},[s("li",{staticClass:"name"},[e._v(" "+e._s(t.name)+" ")]),s("li",{staticClass:"select"},[s("select",{on:{change:function(s){return e.select(s,t)}}},[s("option",{attrs:{value:"null",hidden:"",selected:""}},[e._v("ACTIONS")]),s("option",{attrs:{value:"1"}},[e._v("MARK")]),s("option",{attrs:{value:"2"}},[e._v("TRASH")])])]),s("li",{staticClass:"text"},[e._v(" "+e._s(t.content)+" ")]),s("li",{staticClass:"date"},[e._v(" "+e._s(t.date)+" ")])]):e._e()})),e._l(e.MESSAGES,(function(t){return!0===e.isMark?s("ul",{staticClass:"content"},[s("li",{staticClass:"name"},[e._v(" "+e._s(t.name)+" ")]),s("li",{staticClass:"select"},[s("select",{on:{change:function(s){return e.select(s,t)}}},[s("option",{attrs:{value:"null",hidden:"",selected:""}},[e._v("ACTIONS")]),s("option",{attrs:{value:"1"}},[e._v("DISMARK")]),s("option",{attrs:{value:"2"}},[e._v("TRASH")])])]),s("li",{staticClass:"text"},[e._v(" "+e._s(t.content)+" ")]),s("li",{staticClass:"date"},[e._v(" "+e._s(t.date)+" ")])]):e._e()}))],2)])},De=[],Ge=(s("99af"),{computed:Object(g["a"])(Object(g["a"])({},Object(v["d"])(["isMark"])),Object(v["c"])(["MESSAGES"])),methods:Object(g["a"])(Object(g["a"])({},Object(v["b"])(["deleteMessage","editeMessage","toggleMark"])),{},{destroyHandler:function(e){confirm('Would you delete the message "'.concat(e.content,'" from ').concat(e.name,"?"))&&this.deleteMessage(e.id)},markHandler:function(e){e.mark=!e.mark;var t=[e.name,e.content,e.date,e.mark,e.id];this.editeMessage(t)},select:function(e,t){"1"===e.target.value?(this.markHandler(t),e.target.value=null):"2"===e.target.value&&(this.destroyHandler(t),e.target.value=null)}})}),Te=Ge,ze=(s("7a39"),Object(C["a"])(Te,we,De,!1,null,null,null)),Pe=ze.exports,Fe={components:{MainMessage:Pe}},Ne=Fe,Le=(s("15ac"),Object(C["a"])(Ne,ye,Ae,!1,null,null,null)),Re=Le.exports,$e={components:{MainContent:Re}},He=$e,Ie=Object(C["a"])(He,Ee,Oe,!1,null,null,null),Ke=Ie.exports;d["a"].use(G["a"]);var We=[{path:"/",name:"Home",component:J,children:[{path:"/",component:Ke},{path:"/stock",component:oe},{path:"/sale",component:Se}]}],Be=new G["a"]({routes:We}),Je=Be,Ue=function(e,t){var s=e.commit;s("ADD_MESSAGE",t)},Ze=function(e,t){var s=e.commit;s("DELETE_MESSAGE",t)},qe=function(e,t){var s=e.commit;s("EDDIT_MESSAGE",t)},Ve=function(e){var t=e.commit;t("SET_MESSAGES")},Qe=function(e){var t=e.commit;t("GET_NOW")},Xe=function(e){var t=e.commit;t("TOOGLE_MARK")},Ye=function(e){var t=e.commit;t("TOGGLE_SHOW_ADDDIALOG")},et=function(e){var t=e.commit;t("CLEAR_INPUT")},tt=(s("4de4"),{messages:[],messagesEmpty:!1,timeNow:{month:"",day:""},isMark:!1,inputMessage:{id:"",name:"",content:"",date:"",mark:!1},showAddDialog:!1}),st=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e[tt.timeNow.month]+", "+tt.timeNow.day},at=function(){return!0===tt.isMark?tt.messages.filter((function(e){return e.mark})):!1===tt.isMark?tt.messages.filter((function(e){return!e.mark})):void 0},nt=(s("a434"),{load:function(){return JSON.parse(localStorage.getItem("messages")||"[]")},save:function(e){localStorage.setItem("messages",JSON.stringify(e))}}),it=function(e,t){e.messages.push(t),nt.save(e.messages)},rt=function(e,t){for(var s=0;s<e.messages.length;s++)e.messages[s].id===t&&(e.messages.splice(s,1),nt.save(e.messages))},lt=function(e,t){for(var s=0;s<e.messages.length;s++)e.messages[s].id===t[4]&&(e.messages[s].name=t[0],e.messages[s].content=t[1],e.messages[s].date=t[2],e.messages[s].mark=t[3],nt.save(e.messages))},ct=function(e){var t=nt.load();0===t.length?e.messages=[{id:"1",name:"Default",content:"DefaultLorem",date:"Sep, 28",mark:!1},{id:"2",name:"DefaultMark",content:"DefaultLorem",date:"Sep, 28",mark:!0}]:e.messages=t},ot=function(e){var t=new Date;e.timeNow.month=t.getMonth(),e.timeNow.day=t.getDate()},dt=function(e){e.isMark=!e.isMark},ut=function(e){e.showAddDialog=!e.showAddDialog},bt=function(e){e.inputMessage.id="",e.inputMessage.name="",e.inputMessage.content="",e.inputMessage.date="",e.inputMessage.mark=!1};d["a"].use(v["a"]);var ft=new v["a"].Store({actions:a,getters:n,mutations:i,state:tt,modules:{}});d["a"].config.productionTip=!1,new d["a"]({router:Je,store:ft,render:function(e){return e(D)}}).$mount("#app")},"5ced":function(e,t,s){},"614d":function(e,t,s){"use strict";s("f61b")},"6b46":function(e,t,s){"use strict";s("ae76")},"6eea":function(e,t,s){},7595:function(e,t,s){},"7a39":function(e,t,s){"use strict";s("d074")},"85ec":function(e,t,s){},"8ec6":function(e,t,s){"use strict";s("0c1f")},ae76:function(e,t,s){},c8b0:function(e,t,s){"use strict";s("149e")},cccb:function(e,t,s){"use strict";s("5ced")},d074:function(e,t,s){},ee84:function(e,t,s){"use strict";s("22b2")},f61b:function(e,t,s){},f756:function(e,t,s){"use strict";s("6eea")}});
//# sourceMappingURL=app.a2e6c317.js.map