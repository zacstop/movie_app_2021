(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(13),c=n.n(i),r=(n(24),n(4)),o=n.n(r),l=n(14),m=n(15),u=n(16),d=n(19),j=n(18),v=n(17),h=n.n(v),b=(n(44),n(0));var p=function(e){var t=e.year,n=e.title,s=e.summary,a=e.poster,i=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:a,alt:n,title:n}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",children:n}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsxs)("p",{className:"movie__summary",children:[s.slice(0,145),"..."]}),Object(b.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(b.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})},g=(n(46),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoding:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoding:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,n=e.movies;return Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:n.map((function(e){return Object(b.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component)),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),_()}},[[47,1,2]]]);
//# sourceMappingURL=main.e6bc3e91.chunk.js.map