(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{zdcz:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a("dRSK"),a("91GP");var n=a("q1tI"),l=a.n(n),o=a("dsAS"),r=a("vOnD"),u=Object(r.d)(o.I).withConfig({displayName:"toastr__SelectStyled",componentId:"sc-1wvxz28-0"})(["margin-bottom:1rem;"]);function c(){var e=Object(n.useState)(1),t=e[0],a=e[1],r=Object(n.useState)("HI there!"),c=r[0],i=r[1],s=Object(n.useState)("cool toaster"),m=s[0],d=s[1],p=Object(n.useState)({position:"topEnd",status:"Primary",duration:2e3,hasIcon:!0,destroyByClick:!0,preventDuplicates:!1}),f=p[0],h=p[1],v=Object(n.useRef)(null),b=function(e,t){var a=Object.assign({},f);a[e]=t,h(a)},E=[{value:"topRight",label:"Top-Right"},{value:"topLeft",label:"Top-Left"},{value:"bottomRight",label:"Bottom-Right"},{value:"bottomLeft",label:"Bottom-Left"},{value:"topStart",label:"Top-Start"},{value:"topEnd",label:"Top-End"},{value:"bottomStart",label:"Bottom-Start"},{value:"bottomEnd",label:"Bottom-End"}],g=[{value:"Info",label:"Info"},{value:"Success",label:"Success"},{value:"Danger",label:"Danger"},{value:"Primary",label:"Primary"},{value:"Warning",label:"Warning"},{value:"Default",label:"Default"}];return l.a.createElement(o.G,null,l.a.createElement(o.m,{breakPoint:{xs:12}},l.a.createElement(o.O,{ref:v}),l.a.createElement(o.g,null,l.a.createElement("header",null,"Toaster configuration"),l.a.createElement(o.h,null,l.a.createElement(o.G,null,l.a.createElement(o.m,{breakPoint:{xs:12,md:6}},l.a.createElement(u,{fullWidth:!0,placeholder:"Place to show toast",options:E,value:E.find((function(e){return e.value===f.position})),onChange:function(e){return b("position",e.value)}}),l.a.createElement(o.r,{fullWidth:!0},l.a.createElement("input",{type:"text",placeholder:"Title",value:c,onChange:function(e){return i(e.target.value)}})),l.a.createElement(o.r,{fullWidth:!0},l.a.createElement("input",{type:"text",placeholder:"Message",value:m,onChange:function(e){return d(e.target.value)}})),l.a.createElement(o.r,{fullWidth:!0},l.a.createElement("input",{placeholder:"Time to hide toast, ms. 0 to persistent toast",type:"number",value:f.duration,onChange:function(e){return b("duration",e.target.valueAsNumber)}}))),l.a.createElement(o.m,{breakPoint:{xs:12,md:6}},l.a.createElement(u,{fullWidth:!0,placeholder:"Toast Status",options:g,value:g.find((function(e){return e.value===f.status})),onChange:function(e){return b("status",e.value)}}),l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(o.l,{checked:f.destroyByClick,onChange:function(e){return b("destroyByClick",e)}},"Hide on click"),l.a.createElement(o.l,{checked:f.preventDuplicates,onChange:function(e){return b("preventDuplicates",e)}},"Prevent arising of duplicate toast"),l.a.createElement(o.l,{checked:f.hasIcon,onChange:function(e){return b("hasIcon",e)}},"Show toast with icon"))))),l.a.createElement("footer",null,l.a.createElement(o.e,{onClick:function(){var e;a(t+1),null===(e=v.current)||void 0===e||e.add(m,c+t,Object.assign({},f))}},"Show Toastr")))))}}}]);
//# sourceMappingURL=component---src-pages-modal-overlays-toastr-tsx-c116cef070e9a5e1f94a.js.map