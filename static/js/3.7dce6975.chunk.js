(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[3],{15:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e);var c=r(3),u=r(1),a=r(0),p={input:{marginRight:"1rem",border:"3px solid pink",boxShadow:"0px 0px 0px 1px black",borderRadius:"15px",padding:"10px",outline:"none",width:"250px",fontFamily:"Marck Script",fontSize:"20px"},button:{cursor:"pointer",border:"1px solid #000",borderRadius:"20px",color:"#000",fontFamily:"Fuggles",fontSize:"28px",fontWeight:"bold",backgroundColor:"#FADADD",padding:"5px",width:"100px",height:"50px"}};e.default=function(t){var e=t.onCreate,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Object(u.useState)(t),r=Object(c.a)(e,2),n=r[0],o=r[1];return{bind:{value:n,onChange:function(t){return o(t.target.value)}},clear:function(){return o("")},value:function(){return n}}}("");return Object(a.jsxs)("form",{style:{marginBottom:"1rem",maxWidth:"100%"},onSubmit:function(t){t.preventDefault(),r.value().trim()&&(e(r.value()),r.clear())},children:[Object(a.jsx)("input",i({placeholder:"What do you need to do...?",style:p.input},r.bind)),Object(a.jsx)("button",{style:p.button,type:"submit",children:"Add Todo"})]})}}}]);
//# sourceMappingURL=3.7dce6975.chunk.js.map