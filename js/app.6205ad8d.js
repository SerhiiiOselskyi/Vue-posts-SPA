(function(t){function e(e){for(var r,o,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},s=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1c480acd":"4af4b026","chunk-3c6c591d":"e6076457","chunk-42da05c0":"6a02cd77"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-1c480acd":1,"chunk-3c6c591d":1,"chunk-42da05c0":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1c480acd":"4c3e0e4c","chunk-3c6c591d":"0408b5fd","chunk-42da05c0":"29cff2bf"}[t]+".css",a=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],d.parentNode.removeChild(d),n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var p=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Vue-posts-SPA/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ea5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("2f62"),a=(n("96cf"),n("1da1")),s=n("bc3a"),i=n.n(s),u={actions:{getPostsFromApi:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,i.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){n("updatePosts",t.data)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},mutations:{updatePosts:function(t,e){t.posts=e}},state:{posts:[]},getters:{getPosts:function(t){return t.posts}}},c=(n("7db0"),n("45fc"),{actions:{getUsersFromApi:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,i.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){n("setUsers",t.data)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},mutations:{setUsers:function(t,e){t.users=e},loginUser:function(t,e){t.userId=t.users.find((function(t){return t.email===e})).id},userCheck:function(t,e){t.userValidation=t.users.some((function(t){return t.email===e}))},logoutValidation:function(t){t.userValidation=!1}},state:{users:[],userId:0,userValidation:!1},getters:{getUsers:function(t){return t.users},getLoggedId:function(t){return t.userId},getUserValidation:function(t){return t.userValidation}}}),l={actions:{getCommentsFromApi:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,i.a.get("https://jsonplaceholder.typicode.com/comments").then((function(t){n("updateComments",t.data)})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},mutations:{updateComments:function(t,e){t.comments=e}},state:{comments:[]},getters:{getComments:function(t){return t.comments}}};r["a"].use(o["a"]);var p=new o["a"].Store({modules:{users:c,posts:u,comments:l}}),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[this.getUserValidation?n("div",[n("NavBar"),n("router-view")],1):t._e(),this.getUserValidation?t._e():n("div",{staticClass:"login"},[n("form",{staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEmail,expression:"inputEmail"}],attrs:{required:"",type:"email",placeholder:"Email"},domProps:{value:t.inputEmail},on:{input:function(e){e.target.composing||(t.inputEmail=e.target.value)}}}),t.error?n("span",[t._v(" Wrong Email ")]):t._e(),n("button",{staticClass:"login__button",attrs:{type:"submit"}},[t._v("Login")])])])])},m=[],f=n("5530"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",{staticClass:"navbar__list"},[n("li",{staticClass:"navbar__item"},[n("router-link",{staticClass:"navbar__link",attrs:{to:"/Vue-posts-SPA/home"}},[t._v("Posts")])],1),n("li",{staticClass:"navbar__item"},[n("router-link",{staticClass:"navbar__link",attrs:{to:"/Vue-posts-SPA/user/"+t.id}},[t._v("User")])],1),n("li",{staticClass:"navbar__item"},[n("router-link",{staticClass:"navbar__link",attrs:{to:"/Vue-posts-SPA/"},nativeOn:{click:function(e){return t.logoutHandler(e)}}},[t._v("Logout")])],1)])])},g=[],v={data:function(){return{id:""}},computed:Object(f["a"])({},Object(o["c"])(["getLoggedId"])),methods:Object(f["a"])(Object(f["a"])({},Object(o["d"])(["logoutValidation"])),{},{logoutHandler:function(){this.logoutValidation()}}),created:function(){this.id=this.getLoggedId}},b=v,_=(n("63a7"),n("2877")),k=Object(_["a"])(b,h,g,!1,null,"58e2a349",null),y=k.exports,j={name:"App",data:function(){return{inputEmail:"",error:!1,userValidation:!0}},components:{NavBar:y},computed:Object(f["a"])({},Object(o["c"])(["getUsers","getUserValidation"])),methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},Object(o["b"])(["getUsersFromApi","getCommentsFromApi","getPostsFromApi"])),Object(o["d"])(["loginUser","userCheck"])),{},{login:function(){this.userCheck(this.inputEmail),this.getUserValidation?(this.loginUser(this.inputEmail),this.userValidation=!0,this.error=!1,this.$router.push("./home")):this.error=!0}}),mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getPostsFromApi(),t.getCommentsFromApi(),t.getUsersFromApi();case 3:case"end":return e.stop()}}),e)})))()}},w=j,O=(n("f77c"),Object(_["a"])(w,d,m,!1,null,"6ccc8f57",null)),C=O.exports,P=(n("d3b7"),n("8c4f"));r["a"].use(P["a"]);var A=new P["a"]({mode:"history",routes:[{path:"/",component:C},{path:"/Vue-posts-SPA/home",component:function(){return n.e("chunk-1c480acd").then(n.bind(null,"487a"))}},{path:"/Vue-posts-SPA/user",component:function(){return n.e("chunk-42da05c0").then(n.bind(null,"80c6"))}},{path:"/Vue-posts-SPA/post/:id",component:function(){return n.e("chunk-3c6c591d").then(n.bind(null,"e840"))}},{path:"/Vue-posts-SPA/user/:id",component:function(){return n.e("chunk-42da05c0").then(n.bind(null,"80c6"))}}]});r["a"].config.productionTip=!1,r["a"].prototype.$http=i.a;var V=localStorage.getItem("token");V&&(r["a"].prototype.$http.defaults.headers.common["Authorization"]=V),new r["a"]({store:p,router:A,render:function(t){return t(C)}}).$mount("#app")},"63a7":function(t,e,n){"use strict";var r=n("eb1d"),o=n.n(r);o.a},eb1d:function(t,e,n){},f77c:function(t,e,n){"use strict";var r=n("0ea5"),o=n.n(r);o.a}});
//# sourceMappingURL=app.6205ad8d.js.map