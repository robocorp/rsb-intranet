(this["webpackJsonprsb-intranet"]=this["webpackJsonprsb-intranet"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(5),s=a.n(l),o=(a(13),a(14),a(7)),c=a(2),u=a.n(c),m=a(3),i=a(1),d=a(6),f=a.n(d),E=function(e){var t=e.error;return n.a.createElement("div",{className:"container error"},n.a.createElement("div",{className:"alert alert-danger",role:"alert"},t),n.a.createElement("div",null,n.a.createElement("img",{src:f.a,alt:"Error"})))},p=function(e){return Math.floor(Math.random()*Math.floor(e))},v=function(){if(7===p(50))throw new Error("Have you tried turning it off and on again?");return new Promise((function(e){return setTimeout(e,p(3e3))}))},b=function(e,t){return v().then((function(){return"maria"===e&&"thoushallnotpass"===t?{username:e.toString()}:null}))},h=n.a.createContext();function g(e){var t=e.children,a=n.a.useState({status:null,error:null,user:window.localStorage.getItem("rsbUser")}),r=Object(i.a)(a,2),l=r[0],s=r[1],o={state:l,login:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(t,a);case 3:(r=e.sent)?(window.localStorage.setItem("rsbUser",JSON.stringify(r)),s({status:"success",error:null,user:r})):s({status:"login-failed",error:"Invalid username or password.",user:null}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({status:"error",error:e.t0.message,user:null});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),logout:function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v().then((function(){return window.localStorage.removeItem("rsbUser")}));case 3:s({status:"success",error:null,user:null}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s({status:"error",error:e.t0.message,user:null});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()};return n.a.createElement(h.Provider,{value:o},"error"===l.status?n.a.createElement(E,{error:l.error}):t)}function w(){var e=n.a.useContext(h),t=e.login,a=e.logout,r=e.state,l="error"===r.status,s="success"===r.status,c=r.user&&s;return Object(o.a)({},r,{isError:l,isSuccess:s,isAuthenticated:c,login:t,logout:a})}var A=function(){return n.a.createElement("footer",{className:"fixed-bottom"},"Copyright \xa9 2020 Robocorp Technologies, Inc.")};var N=function(){var e=w(),t=e.logout;return e.user?n.a.createElement("button",{onClick:t,id:"logout",type:"button",className:"btn btn-secondary"},"Log out"):null},y=function(){return n.a.createElement("header",{className:"header-container"},n.a.createElement("div",{className:"container"},n.a.createElement(N,null),n.a.createElement("h1",null,n.a.createElement("span",{role:"img","aria-label":"emoticon robot"},"\ud83e\udd16"),n.a.createElement("span",{role:"img","aria-label":"emoticon gear"},"\u2699\ufe0f")," ","RobotSpareBin Industries Inc."," "),n.a.createElement("h5",null,"The leader in refurbished and dubious quality spare parts for robots, since 1982!")))},S=function(e){return(new Intl.NumberFormat).format(e)};function q(e){var t=e.salesEntry,a=t.salesTarget,r=t.salesResult;return n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"4"},n.a.createElement("span",{className:"performance"},function(e,t){var a=t/e;return a>10?"Holy macaroni!":a>5?"Magnificent!":a>=1?"A positive result. Well done!":a>.75?"Hmm. Did not quite make it.":a>.5?"Well. It was a nice attempt. I guess?":a>.25?"Oh dear.":"The boss wants to see you..."}(a,r))))}function j(e){var t=e.salesEntries,a=t.length,r=t.reduce((function(e,t){return e+parseInt(t.salesResult)}),0),l=t.reduce((function(e,t){return e+parseInt(t.salesTarget)}),0);return n.a.createElement("div",{className:"alert alert-dark sales-summary",role:"alert"},n.a.createElement("div",null,n.a.createElement("span",null,"Active sales people:"),n.a.createElement("span",null,a)),n.a.createElement("div",null,n.a.createElement("span",null,"Expected sales:"),n.a.createElement("span",null,"$",S(l))),n.a.createElement("div",null,n.a.createElement("span",null,"Actual sales:"),n.a.createElement("span",null,"$",S(r))),n.a.createElement("div",null,n.a.createElement("span",null,"Difference:"),n.a.createElement("span",null,"$",S(r-l))))}function O(e){var t=e.handleSubmit,a=e.showPerformance?"Hide performance":"Show performance";return n.a.createElement("button",{onClick:t,type:"submit",className:"btn btn-secondary"},a)}function z(e){var t=e.onClick;return n.a.createElement("button",{onClick:t,type:"submit",className:"btn btn-secondary"},"Delete all sales entries")}var J=function(e){var t=e.salesEntries,a=e.onDeleteAllSalesEntries,l=Object(r.useState)(!1),s=Object(i.a)(l,2),o=s[0],c=s[1],u=null;return t.length>0?(u=t.map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",{key:e.lastName},n.a.createElement("td",null,e.firstName," ",e.lastName),n.a.createElement("td",null,"$",S(e.salesTarget)),n.a.createElement("td",null,"$",S(e.salesResult)),n.a.createElement("td",null,"$",S(e.salesResult-e.salesTarget))),o&&n.a.createElement(q,{salesEntry:e}))})),n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{salesEntries:t}),n.a.createElement("table",{id:"sales-results",className:"table table-dark table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{width:"250",scope:"col"},"Name"),n.a.createElement("th",{width:"250",scope:"col"},"Target"),n.a.createElement("th",{width:"250",scope:"col"},"Result"),n.a.createElement("th",{width:"250",scope:"col"},"Difference"))),n.a.createElement("tbody",null,u)),n.a.createElement(O,{handleSubmit:function(e){return c(!o)},showPerformance:o}),"\xa0",n.a.createElement(z,{onClick:a}))):null},x=function(){var e=window.localStorage.getItem("rsbSalesEntries");return e?JSON.parse(e):[]};function I(){for(var e=[],t=5e3;t<=1e5;t+=5e3)e.push(n.a.createElement("option",{value:t,key:t},"$",S(t)));return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"salestarget"},"Sales target ($)"),n.a.createElement("select",{id:"salestarget",required:!0,className:"custom-select"},e))}var C=function(){var e=Object(r.useState)(x()),t=Object(i.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("form",{id:"sales-form",onSubmit:function(e){var t=e.target.elements,r=t.firstname,n=t.lastname,s=t.salestarget,o=t.salesresult;a.push({firstName:r.value,lastName:n.value,salesTarget:s.value,salesResult:o.value}),window.localStorage.setItem("rsbSalesEntries",JSON.stringify(a)),l(a)}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"firstname"},"First name"),n.a.createElement("input",{type:"text",id:"firstname",name:"firstname",required:!0,className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastname"},"Last name"),n.a.createElement("input",{type:"text",id:"lastname",name:"lastname",required:!0,className:"form-control"})),n.a.createElement(I,null),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"salesresult"},"Sales result ($)"),n.a.createElement("input",{type:"number",id:"salesresult",name:"salesresult",required:!0,className:"form-control"})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),n.a.createElement("div",{className:"col-sm"},n.a.createElement(J,{salesEntries:a,onDeleteAllSalesEntries:function(e){window.localStorage.removeItem("rsbSalesEntries"),l(x())}}))))};var P=function(){return n.a.createElement(C,null)};function k(){return"login-failed"===w().status?n.a.createElement("div",{className:"alert alert-warning",role:"alert"},"Invalid username or password."):null}var K=function(){var e=w().login;return n.a.createElement("div",{className:"container"},n.a.createElement(k,null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("form",{onSubmit:function(t){return function(e,t){e.preventDefault();var a=e.target.elements,r=a.username,n=a.password;t(r.value,n.value)}(t,e)}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",id:"username",required:!0,className:"form-control"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",id:"password",required:!0,className:"form-control"})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Log in"))),n.a.createElement("div",{className:"col-sm"})))};a(16);function F(){return w().user?n.a.createElement(P,null):n.a.createElement(K,null)}var M=function(){return n.a.createElement(g,null,n.a.createElement(y,null),n.a.createElement("div",{className:"container main-container"},n.a.createElement(F,null)),n.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t){e.exports="data:image/gif;base64,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"},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.9e70f77b.chunk.js.map