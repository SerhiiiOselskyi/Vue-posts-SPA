(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c480acd"],{"158a":function(t,s,e){},"487a":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post__list"},[e("PostList",{attrs:{posts:t.postsWithUsers}})],1)},r=[],o=(e("7db0"),e("d81d"),e("96cf"),e("1da1")),a=e("5530"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"posts"},[e("ul",{staticClass:"post__list"},t._l(t.posts,(function(t){return e("PostItem",{key:t.id,attrs:{post:t}})})),1)])},c=[],u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"post__item"},[e("router-link",{staticClass:"router__link",attrs:{to:"/Vue-posts-SPA/post/"+t.post.id}},[t._v(t._s(t.post.title))]),e("p",[t._v(t._s(t.post.body))]),e("router-link",{staticClass:"router__link",attrs:{to:"/Vue-posts-SPA/user/"+t.post.user.id}},[t._v(t._s(t.post.user.name))])],1)},p=[],l={props:["post"]},d=l,m=(e("773b"),e("d9a1"),e("2877")),f=Object(m["a"])(d,u,p,!1,null,null,null),b=f.exports,_={props:["posts"],components:{PostItem:b}},h=_,v=(e("b441"),Object(m["a"])(h,i,c,!1,null,"ddce9b5e",null)),g=v.exports,P=e("2f62"),j={name:"HomePage",data:function(){return{postsWithUsers:[]}},computed:Object(a["a"])({},Object(P["c"])(["getPosts","getUsers"])),methods:Object(a["a"])(Object(a["a"])({},Object(P["b"])(["getPostFromApi","getCommentsFromApi"])),{},{getPostWithUsers:function(){var t=this;this.postsWithUsers=this.getPosts.map((function(s){return Object(a["a"])(Object(a["a"])({},s),{},{user:t.getUsers.find((function(t){return t.id===s.userId}))})}))}}),mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.getPostFromApi(),t.getCommentsFromApi(),t.getPostWithUsers();case 3:case"end":return s.stop()}}),s)})))()},components:{PostList:g}},O=j,k=Object(m["a"])(O,n,r,!1,null,null,null);s["default"]=k.exports},"72a4":function(t,s,e){},"773b":function(t,s,e){"use strict";var n=e("158a"),r=e.n(n);r.a},b441:function(t,s,e){"use strict";var n=e("72a4"),r=e.n(n);r.a},bdc3:function(t,s,e){},d81d:function(t,s,e){"use strict";var n=e("23e7"),r=e("b727").map,o=e("1dde"),a=e("ae40"),i=o("map"),c=a("map");n({target:"Array",proto:!0,forced:!i||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d9a1:function(t,s,e){"use strict";var n=e("bdc3"),r=e.n(n);r.a}}]);
//# sourceMappingURL=chunk-1c480acd.4af4b026.js.map