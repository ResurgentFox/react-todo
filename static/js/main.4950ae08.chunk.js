(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),c=n(4),r=n.n(c),l=(n(11),n(3)),s=i.a.createContext(),a=n(0),d={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #000",borderRadius:"5px",backgroundColor:"#FADADD",marginBottom:".5rem",fontFamily:"Marck Script",fontSize:"24px"},input:{marginRight:"1rem"},strong:{fontFamily:"Fuggles",fontSize:"26px"},btnRemove:{backgroundColor:"#6c6c6c",border:"1px solid #6c6c6c",color:"pink",borderRadius:"5px",boxShadow:"0px 0px 2px 1px #6c6c6c, 0px 0px 2px 1px #6c6c6c",fontWeight:"bold",fontSize:"18px",cursor:"pointer"}};var u=function(e){var t=e.todo,n=e.index,i=e.onChange,c=Object(o.useContext)(s).removeTodo,r=[];return t.completed&&r.push("done"),Object(a.jsxs)("li",{style:d.li,children:[Object(a.jsxs)("span",{className:r.join(" "),children:[Object(a.jsx)("input",{type:"checkbox",checked:Boolean(t.completed),style:d.input,onChange:function(){return i(t.id)}}),Object(a.jsx)("strong",{style:d.strong,children:n+1}),". \xa0",t.title]}),Object(a.jsx)("button",{style:d.btnRemove,onClick:function(){return c(t.id)},children:"\xd7"})]})},p={ul:{listStyle:"none",margin:"0",padding:"0"}};function x(e){return Object(a.jsx)("ul",{style:p.ul,children:e.todos.map((function(t,n){return Object(a.jsx)(u,{todo:t,index:n,onChange:e.onToggle},t.id)}))})}var j=function(){return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"3rem"},children:Object(a.jsx)("div",{className:"lds-heart",children:Object(a.jsx)("div",{})})})},b=n(5),f=n(6),g="TODOS_KEY",h=function(){function e(){Object(b.a)(this,e)}return Object(f.a)(e,null,[{key:"getTodos",value:function(){var e=localStorage.getItem(g);return e?JSON.parse(e):[{id:1,title:"Buy cookies"},{id:2,title:"Buy chocolate"},{id:3,title:"Buy tea"},{id:4,title:"Cleaning"},{id:5,title:"Coding"}]}},{key:"setTodos",value:function(e){localStorage.setItem(g,JSON.stringify(e))}}]),e}();var m={h1:{fontFamily:"Fuggles",textAlign:"center",fontSize:"60px"},p:{textAlign:"center",fontWeight:"bold",fontSize:"40px",fontFamily:"Fuggles",boxShadow:"1px 0px 15px 10px #FADADD, 1px 0px 25px 20px #FADADD",backgroundColor:"#FADADD",borderRadius:"15px"}},O=i.a.lazy((function(){return new Promise((function(e){setTimeout((function(){e(n.e(3).then(n.bind(null,15)))}),5e3)}))}));function y(){var e=i.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=i.a.useState(!0),d=Object(l.a)(r,2),u=d[0],p=d[1];function b(e){c(e),h.setTodos(e)}return Object(o.useEffect)((function(){var e=h.getTodos();setTimeout((function(){c(e),p(!1)}),5e3)}),[]),Object(a.jsx)(s.Provider,{value:{removeTodo:function(e){b(n.filter((function(t){return t.id!==e})))}},children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)("h1",{style:m.h1,children:"ToDo List \ud83d\udd8c"}),Object(a.jsx)(i.a.Suspense,{fallback:Object(a.jsx)("p",{style:{fontFamily:"Marck Script",fontSize:"34px"},children:"Loading..."}),children:Object(a.jsx)(O,{onCreate:function(e){b(n.concat([{title:e,id:Date.now(),completed:!1}]))}})}),u&&Object(a.jsx)(j,{}),n.length?Object(a.jsx)(x,{todos:n,onToggle:function(e){b(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):u?null:Object(a.jsxs)("p",{style:m.p,children:[" ","\u2661 Great! All tasks have been completed! Good job :3 \u2661"]})]})})}var v=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.4950ae08.chunk.js.map