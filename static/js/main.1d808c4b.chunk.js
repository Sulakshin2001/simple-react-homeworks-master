(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__PQzdP",errorInput:"SuperInputText_errorInput__2ABsO",error:"SuperInputText_error__6gGVs"}},function(e,t,a){e.exports={blue:"HW4_blue__31hkY",column:"HW4_column__2KypM",testSpanError:"HW4_testSpanError__H0mP2"}},function(e,t,a){e.exports={default:"SuperButton_default__1IK5f",red:"SuperButton_red__30Wy7"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__3QwDt",spanClassName:"SuperCheckbox_spanClassName__2CV93"}},,,function(e,t,a){e.exports={App:"App_App__2ZzsL"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__3Flve",error:"Greeting_error__9ohEV",inputClass:"Greeting_inputClass__2vM33"}},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(19),a(11)),u=a.n(o);var s=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar}),e.name,e.time,e.message)},i="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",d="some text",h="22:00";var p=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(s,{avatar:i,name:m,message:d,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},E=a(1);var f=function(e){return r.a.createElement("div",null,"// show some text",r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var b=function(e){var t=e.data.map((function(t){return r.a.createElement(f,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},_=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(n.useState)(_),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(E.a)(c,2),u=o[0],s=o[1],i=function(e,t){return"all"===t?e:"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):[]}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(b,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!=t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=a(13),v=a(12),g=a.n(v),N=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=g.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:""===t?o:""}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},w=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(E.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(E.a)(s,2),m=i[0],d=(i[1],t.length);return r.a.createElement(N,{name:o,setNameCallback:function(e){u(e.target.value)},addUser:function(){alert(o),""!==o?a(o):alert("\u043f\u0443\u0441\u0442\u043e\u0435 \u0438\u043c\u044f")},error:m,totalUsers:d})},O=a(22);var j=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(w,{users:a,addUserCallback:function(e){var t={_id:Object(O.a)(),name:e};l([].concat(Object(k.a)(a),[t]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=a(2),y=a(5),S=a.n(y),A=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],I=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(x.a)(e,A),i="".concat(S.a.error," ").concat(u||""),m="".concat(S.a.errorInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},T=a(6),F=a.n(T),W=a(7),P=a.n(W),B=["red","className"],H=function(e){var t=e.red,a=e.className,n=Object(x.a)(e,B),l="".concat(t?P.a.red:P.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},U=a(8),G=a.n(U),K=["type","onChange","onChangeChecked","className","spanClassName","children"],M=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,a=(e.spanClassName,e.children),n=Object(x.a)(e,K),l="".concat(G.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){},className:l},n)),a&&r.a.createElement("span",{className:G.a.spanClassName},a))};var J=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(E.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:F.a.column},r.a.createElement(I,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(I,{className:F.a.blue}),r.a.createElement(H,null,"default"),r.a.createElement(H,{red:!0,onClick:o},"delete "),r.a.createElement(H,{disabled:!0},"disabled"),r.a.createElement(M,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(M,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(p,null),r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.1d808c4b.chunk.js.map