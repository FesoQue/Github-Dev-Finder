(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},19:function(e){e.exports=JSON.parse("{}")},20:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(8),n=a.n(r),i=(a(14),a(9)),j=a(3),l=a.n(j),d=a(6),o=a(2),b=a(7),u=a(4),h=a.n(u),O=a(0),x=function(e){var t=e.repos,a=e.following,c=e.followers,s=e.lastUpdate;return Object(O.jsxs)("div",{className:"cards container",children:[Object(O.jsxs)("div",{className:"card repos",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-folder fa-2x","aria-hidden":"true"})}),Object(O.jsx)("h3",{children:"Repository"}),Object(O.jsx)("p",{children:t})]}),Object(O.jsxs)("div",{className:"card following",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-users fa-2x","aria-hidden":"true"})}),Object(O.jsx)("h3",{children:"Following"}),Object(O.jsx)("p",{children:a})]}),Object(O.jsxs)("div",{className:"card followers",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fa fa-user-plus fa-2x","aria-hidden":"true"})}),Object(O.jsx)("h3",{children:"Followers"}),Object(O.jsx)("p",{children:c})]}),Object(O.jsxs)("div",{className:"card likes",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-edit fa-2x","aria-hidden":"true"})}),Object(O.jsx)("h3",{children:"Last Update"}),Object(O.jsx)("p",{children:Object(O.jsx)(h.a,{date:s,format:"DD MMM Y"})})]})]})},f=function(e){var t=e.location,a=e.twitter,c=(e.update,e.created);return Object(O.jsxs)("div",{className:"about container",children:[Object(O.jsxs)("div",{className:"desc",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-map-marker-alt fa-2x","aria-hidden":"true"})}),Object(O.jsx)("div",{className:"location",children:t||"Not Available"})]}),Object(O.jsxs)("div",{className:"desc",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fab fa-twitter fa-2x","aria-hidden":"true"})}),Object(O.jsx)("div",{className:"twitter",children:a||"Not Available"})]}),Object(O.jsxs)("div",{className:"desc",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"far fa-calendar-alt fa-2x","aria-hidden":"true"})}),Object(O.jsx)("div",{className:"created",children:Object(O.jsx)("p",{children:Object(O.jsx)(h.a,{date:c,format:"DD MMM Y"})})})]})]})},m=function(e){var t=e.avatar_url,a=e.login,c=e.name,s=e.bio,r=e.created_at,n=e.public_repos,i=e.followers,j=e.following,l=e.location,d=(e.url,e.twitter_username),u=e.updated_at,h=e.html_url,m=Object(b.useState)(!1),p=Object(o.a)(m,2),v=(p[0],p[1]),N=Object(b.useState)("about"),w=Object(o.a)(N,2),g=w[0],k=w[1],S=function(e){switch(e){case"timeline":v(!0),k("timeline");break;case"about":v(!0),k("about")}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"basic-info",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("img",{src:t,alt:"person",className:"avatar"}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("p",{className:"name",children:c}),Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:h,children:["\ud83d\udd17 @",a]})}),Object(O.jsx)("p",{children:s})]}),Object(O.jsxs)("div",{className:"btn-container",children:[Object(O.jsxs)("button",{className:"timeline"===g?"btn active":"btn",onClick:function(){return S("timeline")},children:[Object(O.jsx)("i",{className:"far fa-eye"})," Timeline"]}),Object(O.jsxs)("button",{className:"about"===g?"btn active":"btn",onClick:function(){return S("about")},children:[Object(O.jsx)("i",{className:"fas fa-user"})," About"]})]})]})}),Object(O.jsx)("div",{className:"timeline"===g?"overview active":"overview",children:Object(O.jsx)(x,{repos:n,followers:i,following:j,lastUpdate:u})}),Object(O.jsx)("div",{className:"about"===g?"overview active":"overview",children:Object(O.jsx)(f,{location:l,twitter:d,update:u,created:r})})]})},p=(a.p,a.p,a.p+"static/media/icon-search.318dad3b.svg"),v=a.p+"static/media/loader.bfa0c48e.gif";a(19);var N=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),n=Object(o.a)(r,2),j=n[0],b=n[1],u=Object(c.useState)(!1),h=Object(o.a)(u,2),x=h[0],f=h[1],N=Object(c.useState)(!0),w=Object(o.a)(N,2),g=w[0],k=w[1],S=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/fesoque");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,b([a]),k(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){S()}),[]);var y=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,b([c]),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("main",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("h1",{children:Object(O.jsx)("a",{href:"#",children:"GitDevs"})})})}),Object(O.jsx)("form",{id:"form",onSubmit:function(e){e.preventDefault(),a?(y(),s(""),f(!1)):f(!0)},children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:x?"form-group error":"form-group",children:[Object(O.jsx)("input",{type:"text",value:a,onChange:function(e){var t=e.target.value.split(" ").join("");s(t)},placeholder:"Search Github Username"}),Object(O.jsx)("button",{type:"submit",className:"submit-btn",children:Object(O.jsx)("img",{src:p,alt:"search_icon"})})]})})}),g?Object(O.jsx)("div",{className:"loading",children:Object(O.jsx)("img",{src:v,alt:"loading"})}):Object(O.jsx)("article",{className:"user-profile",children:Object(O.jsx)("div",{className:"user",children:j.map((function(e,t){return Object(O.jsx)(m,Object(i.a)({},e),t)}))})})]})})};n.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e3e949c8.chunk.js.map