(this.webpackJsonphome_work=this.webpackJsonphome_work||[]).push([[0],[,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__fcDMA",nameTask:"Affairs_nameTask__3QziN",low:"Affairs_low__2QfAc",middle:"Affairs_middle__jLDII",high:"Affairs_high__c76M8",lowButton:"Affairs_lowButton__27H3L",middleButton:"Affairs_middleButton__LpI2J",highButton:"Affairs_highButton__nghFN",allButton:"Affairs_allButton__3gw5j",buttonStyle:"Affairs_buttonStyle__1Xpib",x:"Affairs_x__380HW"}},,,function(e,t,n){e.exports={bodyComponent:"Header_bodyComponent__1sezZ",commander:"Header_commander__3edN6",wrapper:"Header_wrapper__22vOq",button:"Header_button__7Bb3w",buttonLine:"Header_buttonLine__6p38I",menu:"Header_menu__3KDPm",menuList:"Header_menuList__1tCLK",menuListItem:"Header_menuListItem__1ovXd",menuListAnimate:"Header_menuListAnimate__3jyTy",drop:"Header_drop__2eNRT"}},,function(e,t,n){e.exports={formGroup:"Greeting_formGroup__2ajjj",formInput:"Greeting_formInput__3KkOX",formLabel:"Greeting_formLabel__v_Hfm",buttonStyle:"Greeting_buttonStyle__1C4Dv",disabledButton:"Greeting_disabledButton__M6pie",error:"Greeting_error__2EWcx",errorClass:"Greeting_errorClass__1nhvv",totalUserStyle:"Greeting_totalUserStyle__1Dzzf"}},function(e,t,n){e.exports={message:"Message_message__2TCGF",avatar:"Message_avatar__1dOTE",angle:"Message_angle__xiKgu",wrapper:"Message_wrapper__3jVeo",name:"Message_name__3_kF_",text:"Message_text__3Lcc-",time:"Message_time__1fFLg"}},,,function(e,t,n){e.exports={body:"superRadio_body__3Mcis",radLabel:"superRadio_radLabel__2RQK7",radInput:"superRadio_radInput__YEXa_",radDesign:"superRadio_radDesign__1L7f4",radText:"superRadio_radText__3U6n5"}},,,,,function(e,t,n){e.exports={blue:"HW4_blue__2uSPK",column:"HW4_column__3aij1",testSpanError:"HW4_testSpanError__pNtvL"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__KdeMZ",errorInput:"SuperInputText_errorInput__28HKT",error:"SuperInputText_error__mSn2N"}},function(e,t,n){e.exports={default:"SuperButton_default__uNBYJ",red:"SuperButton_red__fiyvS"}},function(e,t,n){e.exports={spanClassName:"SuperCheckbox_spanClassName__1PNdo",checkbox:"SuperCheckbox_checkbox__3rHyo"}},,,function(e,t,n){e.exports={App:"App_App__1KpRc"}},function(e,t,n){e.exports={beautifulSpan:"superEditableSpanStyle_beautifulSpan__1OeKN"}},function(e,t,n){e.exports={box:"superSelect_box__3PI0u"}},function(e,t,n){e.exports={item:"nw8_item__3Vgl4"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(16),s=n.n(r),i=(n(34),n(25)),o=n.n(i),j=n(3),l=n(7),u=n.n(l),b=n(11),d=n(2),O=n(10),h=n.n(O),m=n(0);var x=function(e){return Object(m.jsxs)("div",{className:h.a.message,children:[Object(m.jsx)("img",{className:h.a.avatar,src:e.avatar,alt:"avatar"}),Object(m.jsx)("div",{className:h.a.angle}),Object(m.jsxs)("div",{className:h.a.wrapper,children:[Object(m.jsx)("div",{className:h.a.name,children:e.name}),Object(m.jsx)("div",{className:h.a.text,children:e.message}),Object(m.jsx)("div",{className:h.a.time,children:e.time})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="some text",v="22:00";var g=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),Object(m.jsx)("h2",{children:"homeworks 1"}),Object(m.jsx)(x,{avatar:p,name:_,message:f,time:v}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},N=n(4),C=n.n(N);var k=function(e){var t;return Object(m.jsxs)("div",{className:C.a.someClass,children:[Object(m.jsx)("div",{className:C.a.nameTaskContainer,children:Object(m.jsx)("span",{className:C.a.nameTask,children:e.affair.name})}),Object(m.jsx)("div",{className:C.a.changeColorContainer,children:Object(m.jsxs)("span",{className:(t=e.affair.priority,"high"===t?C.a.nameTask+" "+C.a.high:"middle"===t?C.a.nameTask+" "+C.a.middle:"low"===t?C.a.nameTask+" "+C.a.low:C.a.nameTask),children:[" ",e.affair.priority," "]})}),Object(m.jsx)("div",{className:C.a.deleteContainer,children:Object(m.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:C.a.x,children:"X"})})]})};var y=function(e){var t=e.data.map((function(t){return Object(m.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(m.jsxs)("div",{children:[t,Object(m.jsx)("button",{className:"all"===e.filter?C.a.allButton:C.a.buttonStyle,onClick:function(){e.setFilter("all")},children:"All"}),Object(m.jsx)("button",{className:"high"===e.filter?C.a.highButton:C.a.buttonStyle,onClick:function(){e.setFilter("high")},children:"High"}),Object(m.jsx)("button",{className:"middle"===e.filter?C.a.middleButton:C.a.buttonStyle,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(m.jsx)("button",{className:"low"===e.filter?C.a.lowButton:C.a.buttonStyle,onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(a.useState)(S),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(j.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),Object(m.jsx)("h2",{children:"homeworks 2"}),Object(m.jsx)(y,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},L=n(17),T=n(9),I=n.n(T),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onKeyPressHandler,i=e.disabled,o=c?"".concat(I.a.formInput," + ").concat(I.a.error):I.a.formInput,j=c||"";return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:I.a.formGroup,children:[Object(m.jsx)("input",{type:"text",value:t,placeholder:"Name",onChange:n,onKeyPress:s,className:o}),Object(m.jsx)("label",{className:I.a.formLabel,children:"Name"}),Object(m.jsx)("span",{className:I.a.errorClass,children:j})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:c?"".concat(I.a.buttonStyle," + ").concat(I.a.disabledButton):I.a.buttonStyle,onClick:a,disabled:i,children:"Set"})}),Object(m.jsx)("div",{className:I.a.totalUserStyle,children:r})]})},B=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],d=Object(a.useState)(!1),O=Object(j.a)(d,2),h=O[0],x=O[1],p=function(){""!==s.trim()?(alert("Hello "+s.trim()+"!"),n(s),i("")):(b("Name is required"),x(!0))},_=t.length;return Object(m.jsx)(A,{name:s,setNameCallback:function(e){i(e.currentTarget.value),x(!1)},addUser:p,error:u,totalUsers:_,onKeyPressHandler:function(e){b(null),13===e.charCode&&p()},disabled:h})},H=n(44);var E=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 3",Object(m.jsx)(B,{users:n,addUserCallback:function(e){c([{_id:Object(H.a)(),name:e}].concat(Object(L.a)(n)))}}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},G=n(5),D=n(8),F=n(20),K=n.n(F),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(K.a.error," ").concat(i||""),l="".concat(K.a.superInput," ").concat(s||""," ");return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",Object(G.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(m.jsx)("span",{className:j,children:r})]})},P=n(18),J=n.n(P),U=n(21),R=n.n(U),W=function(e){var t=e.red,n=e.className,a=Object(D.a)(e,["red","className"]),c="".concat(t?R.a.red:R.a.default," ").concat(n);return Object(m.jsx)("button",Object(G.a)({className:c},a))},X=n(22),z=n.n(X),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(D.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(a||"");return Object(m.jsxs)("label",{children:[Object(m.jsx)("input",Object(G.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(m.jsx)("span",{className:z.a.spanClassName,children:c})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 4",Object(m.jsxs)("div",{className:J.a.column,children:[Object(m.jsx)(M,{value:n,onChangeText:c,onEnter:s,error:r,spanClassName:J.a.testSpanError}),Object(m.jsx)(M,{className:J.a.blue}),Object(m.jsx)(W,{children:"default"}),Object(m.jsx)(W,{red:!0,onClick:s,children:"delete "}),Object(m.jsx)(W,{disabled:!0,children:"disabled"}),Object(m.jsx)(q,{checked:l,onChangeChecked:u,children:"some text "}),Object(m.jsx)(q,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},Y=n(26),Z=n.n(Y),V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(D.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=c||{},b=u.children,d=u.onDoubleClick,O=u.className,h=Object(D.a)(u,["children","onDoubleClick","className"]),x="".concat(Z.a.beautifulSpan," ").concat(O);return Object(m.jsx)(m.Fragment,{children:o?Object(m.jsx)(M,Object(G.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{className:"fas fa-pen-nib"}),Object(m.jsx)("span",Object(G.a)(Object(G.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},h),{},{children:b||r.value}))]})})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 6",Object(m.jsx)("div",{children:Object(m.jsx)(V,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(m.jsx)(W,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(m.jsx)(W,{onClick:function(){var e=ee("editable-span-value",n);c(e)},children:"restore"}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})};var ne=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{}),Object(m.jsx)(w,{}),Object(m.jsx)(E,{}),Object(m.jsx)(Q,{}),Object(m.jsx)(te,{})]})};var ae=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"404"}),Object(m.jsx)("div",{children:"Page not found!"}),Object(m.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ce=n(27),re=n.n(ce),se=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(D.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(m.jsx)("div",{className:re.a.box,children:Object(m.jsx)("select",Object(G.a)(Object(G.a)({onChange:function(e){a&&a(e.currentTarget.value),n&&n(e)}},c),{},{children:r}))})},ie=n(13),oe=n.n(ie),je=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(D.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e.currentTarget.value),c&&c(e)}),i=n?n.map((function(e,n){return Object(m.jsxs)("label",{className:oe.a.radLabel,children:[Object(m.jsx)("input",{className:oe.a.radInput,type:"radio",onChange:s,value:e,name:t,checked:e===a}),Object(m.jsx)("div",{className:oe.a.radDesign}),Object(m.jsx)("div",{className:oe.a.radText,children:e})]},t+"-"+n)})):[];return Object(m.jsx)("div",{className:oe.a.body,children:i})},le=["x","y","z"];var ue=function(){var e=Object(a.useState)(le[1]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 7",Object(m.jsx)("div",{children:Object(m.jsx)(se,{options:le,value:n,onChangeOption:c})}),Object(m.jsx)("div",{children:Object(m.jsx)(je,{name:"radio",options:le,value:n,onChangeOption:c})}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},be=function(e,t){switch(t.type){case"sort":var n=Object(L.a)(e).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return"up"===t.payload?n:n.reverse();case"check":return 18===t.payload?e.filter((function(e){return e.age>=18})):e;default:return e}},de=n(28),Oe=n.n(de),he=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(a.useState)(he),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(m.jsxs)("div",{className:Oe.a.item,children:[Object(m.jsxs)("span",{children:[" ",e.name," "]}),Object(m.jsxs)("span",{children:[" ",e.age," "]})]},e._id)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 8",r,Object(m.jsx)("span",{children:Object(m.jsx)(W,{onClick:function(){return c(be(he,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(m.jsx)("span",{children:Object(m.jsx)(W,{onClick:function(){return c(be(he,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(m.jsx)("span",{children:Object(m.jsx)(W,{onClick:function(){return c(be(he,{type:"check",payload:18}))},children:"check 18"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})};var xe=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(j.a)(l,2),b=u[0],d=u[1],O=function(){clearTimeout(n)},h=i.toLocaleTimeString()?i.toLocaleTimeString():Object(m.jsx)("br",{}),x=i.toDateString()?i.toDateString():Object(m.jsx)("br",{});return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),b?Object(m.jsx)("div",{children:x}):Object(m.jsx)("br",{}),Object(m.jsx)(W,{onClick:function(){O();var e=+setInterval((function(){var e=new Date;o(e)}),1e3);c(e)},children:"start"}),Object(m.jsx)(W,{onClick:O,children:"stop"})]})};var pe=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 9",Object(m.jsx)(xe,{}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})},_e=n(15),fe={loading:!1},ve=function(e){return{type:"TOGGLE_LOADING",value:e}};var ge=function(){var e=Object(_e.b)(),t=Object(_e.c)((function(e){return e.loading.loading}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),"homeworks 10",t?Object(m.jsx)("div",{children:"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."}):Object(m.jsx)("div",{children:Object(m.jsx)(W,{onClick:function(){e(ve(!0)),setTimeout((function(){e(ve(!1))}),2e3),console.log("loading...")},children:"set loading..."})}),Object(m.jsx)("hr",{}),Object(m.jsx)("hr",{})]})};var Ne=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(ue,{}),Object(m.jsx)(me,{}),Object(m.jsx)(pe,{}),Object(m.jsx)(ge,{})]})};var Ce=function(){return Object(m.jsx)("div",{})},ke="/pre-junior",ye="/junior",Se="/junior-plus";var we=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/",element:function(){return Object(m.jsx)(d.a,{to:ke})}}),Object(m.jsx)(d.b,{path:ke,element:Object(m.jsx)(ne,{})}),Object(m.jsx)(d.b,{path:ye,element:Object(m.jsx)(Ne,{})}),Object(m.jsx)(d.b,{path:Se,element:Object(m.jsx)(Ce,{})}),Object(m.jsx)(d.b,{path:"*",element:Object(m.jsx)(ae,{})})]})})},Le=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)("div",{className:u.a.bodyComponent,children:[Object(m.jsx)("p",{className:u.a.commander,children:"\u041a\u043b\u0438\u043a\u043d\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443!"}),Object(m.jsxs)("div",{className:u.a.wrapper,children:[Object(m.jsx)("div",{className:n?u.a.menuListAnimate:u.a.menuList,children:Object(m.jsxs)("ul",{className:u.a.menuList,children:[Object(m.jsx)("li",{className:u.a.menuListItem,children:Object(m.jsx)(b.b,{to:ke,children:"Pre Junior"})}),Object(m.jsx)("li",{className:u.a.menuListItem,children:Object(m.jsx)(b.b,{to:ye,children:" Junior"})}),Object(m.jsx)("li",{className:u.a.menuListItem,children:Object(m.jsx)(b.b,{to:Se,children:"Junior plus"})})]})}),Object(m.jsxs)("div",{className:u.a.button,onClick:function(){c(!n)},children:[Object(m.jsx)("span",{className:u.a.buttonLine}),Object(m.jsx)("span",{className:u.a.buttonLine}),Object(m.jsx)("span",{className:u.a.buttonLine})]})]})]})};var Te=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(Le,{})})};var Ie=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(Te,{}),Object(m.jsx)(we,{})]})})};var Ae=function(){return Object(m.jsxs)("div",{className:o.a.App,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"react homeworks:"})}),Object(m.jsx)(Ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(24),He=Object(Be.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING":return Object(G.a)(Object(G.a)({},e),{},{loading:t.value});default:return e}}}),Ee=Object(Be.b)(He),Ge=Ee;window.store=Ee,s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_e.a,{store:Ge,children:Object(m.jsx)(Ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.ce3a512d.chunk.js.map