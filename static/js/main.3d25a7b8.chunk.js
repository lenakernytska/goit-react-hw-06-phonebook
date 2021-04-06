(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"ContactList_list__2z69M",item:"ContactList_item__1Dt1A",button:"ContactList_button__XgDPf"}},16:function(t,e,n){t.exports={input:"Filter_input__fyRfu",label:"Filter_label__172_H"}},50:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=n(18),s=n(19),u=n(27),b=n(25),l=n(17),j=n(3),d=n(6),m=n.n(d),O=n(4),f=n(22),p=n.n(f),h=Object(O.b)("contacts/add",(function(t,e){return{payload:{id:p.a.generate(),name:t,number:e}}})),_=Object(O.b)("contacts/delete"),x=Object(O.b)("contacts/changeFilter"),v=n(1);function C(){var t=Object(a.useState)(""),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),i=o[0],s=o[1],u=Object(j.b)();return Object(v.jsxs)("form",{className:m.a.form,onSubmit:function(t){t.preventDefault(),u(h(n,i)),c(""),s("")},children:[Object(v.jsxs)("label",{className:m.a.label,children:["Name",Object(v.jsx)("input",{className:m.a.input,type:"text",name:"name",value:n,autoComplete:"off",onChange:function(t){c(t.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(v.jsxs)("label",{className:m.a.label,children:["Number",Object(v.jsx)("input",{className:m.a.input,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,autoComplete:"off",onChange:function(t){s(t.target.value)}})]}),Object(v.jsx)("button",{className:m.a.button,type:"submit",children:"Add contact"})]})}var g=n(11),y=n.n(g),N=function(t){return t.contacts.filter},k=function(t){var e=function(t){return t.contacts.items}(t),n=N(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))};function A(){var t=Object(j.c)(k),e=Object(j.b)();return Object(v.jsx)("ul",{className:y.a.list,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(v.jsxs)("li",{className:y.a.item,children:[a,": ",c,Object(v.jsx)("button",{className:y.a.button,type:"button",onClick:function(){return function(t){return e(_(t))}(n)},children:"Delete"})]},n)}))})}var F=n(16),w=n.n(F);function z(){var t=Object(j.c)(N),e=Object(j.b)();return Object(v.jsxs)("label",{className:w.a.label,children:["Find contacts by Name",Object(v.jsx)("input",{className:w.a.input,type:"text",value:t,onChange:function(t){return e(x(t.target.value))}})]})}var L,S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(C,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(z,{}),Object(v.jsx)(A,{})]})}}]),n}(a.Component),D=(n(49),n(50),n(5)),q=n(23),J=n.n(q),M=n(12),P=n(26),Z=n(2),B=Object(O.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(L={},Object(M.a)(L,h,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(M.a)(L,_,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),L)),E=Object(O.c)("",Object(M.a)({},x,(function(t,e){return e.payload}))),H=Object(Z.c)({items:B,filter:E}),R={key:"contacts",storage:J.a,blacklist:["filter"]},X=Object(O.a)({reducer:{contacts:Object(D.g)(R,H)},devTools:!1,middleware:Object(O.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})}),I=Object(D.h)(X),K=n(24);o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(j.a,{store:X,children:Object(v.jsx)(K.a,{loading:Object(v.jsx)("h1",{children:"Loading..."}),persistor:I,children:Object(v.jsx)(S,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={label:"ContactForm_label__3z7X9",form:"ContactForm_form__yPs7t",input:"ContactForm_input__1a3oq",button:"ContactForm_button__1OmLY"}}},[[53,1,2]]]);
//# sourceMappingURL=main.3d25a7b8.chunk.js.map