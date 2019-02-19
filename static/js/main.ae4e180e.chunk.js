(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(59)},34:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(25),o=n.n(s),i=(n(34),n(6)),c=n(7),l=n(9),u=n(8),h=n(10),m=n(2),S=n(11),b=n(16),v=n(17),d=n(26),p=n.n(d),f=(n(53),"react"),y=n(28),E=n(4),O=function(e){var t=e.onClick,n=e.className,a=e.children;return r.a.createElement("button",{onClick:t,className:n,type:"button"},a)};O.defaultProps={className:""};var j,g=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(E.a,{icon:"spinner"})))},T=(j=O,function(e){var t=e.isLoading,n=Object(y.a)(e,["isLoading"]);return t?r.a.createElement(g,null):r.a.createElement(j,n)}),w=O,k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.onChange,s=t.onSubmit,o=t.children;return r.a.createElement("form",{onSubmit:s},r.a.createElement("input",{type:"text",value:n,onChange:a,ref:function(t){return e.input=t}}),r.a.createElement("button",{type:"submit"},o))}}]),t}(a.Component),N=n(13),K=n(27),C=n.n(K),D={NONE:function(e){return e},TITLE:function(e){return Object(N.sortBy)(e,"title")},AUTHOR:function(e){return Object(N.sortBy)(e,"author")},COMMENTS:function(e){return Object(N.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(N.sortBy)(e,"points").reverse()}},M=function(e){var t=e.sortKey,n=e.activeSortKey,a=e.isSortReverse,s=e.onSort,o=e.children,i=C()("button-inline",{"button-active":t===n}),c=t===n?a?r.a.createElement(E.a,{icon:"angle-down"}):r.a.createElement(E.a,{icon:"angle-up"}):"";return r.a.createElement(w,{onClick:function(){return s(t)},className:i},c," ",o)},R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={sortKey:"NONE",isSortReverse:!1},n.onSort=n.onSort.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.onDismiss,a=this.state,s=a.sortKey,o=a.isSortReverse,i=D[s](t),c=o?i.reverse():i;return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("span",{style:{width:"55%"}},r.a.createElement(M,{sortKey:"TITLE",onSort:this.onSort,isSortReverse:o,activeSortKey:s},"Title")),r.a.createElement("span",{style:{width:"15%"}},r.a.createElement(M,{sortKey:"AUTHOR",onSort:this.onSort,isSortReverse:o,activeSortKey:s},"Author")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(M,{sortKey:"COMMENTS",onSort:this.onSort,isSortReverse:o,activeSortKey:s},"Comments")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(M,{sortKey:"POINTS",onSort:this.onSort,isSortReverse:o,activeSortKey:s},"Points")),r.a.createElement("span",{style:{width:"10%"}},"Archive")),c.map(function(e){return r.a.createElement("div",{key:e.objectID,className:"table-row"},r.a.createElement("span",{style:{width:"55%"}},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("span",{style:{width:"15%"}},e.author),r.a.createElement("span",{style:{width:"10%"}},e.num_comments),r.a.createElement("span",{style:{width:"10%"}},e.points),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(w,{onClick:function(){return n(e.objectID)},className:"button-inline"},"Dismiss")),r.a.createElement("hr",null))}))}}]),t}(a.Component),L=n(12),_=n(14);L.b.add(_.c,_.d,_.b,_.a);var I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,n.state={message:"Start to Search for the Latest Hacker News Now!!!",results:null,searchKey:"",searchTerm:f,error:null,isLoading:!1},n.needsToSearchTopStories=n.needsToSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.setSearchTopStories=n.setSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.fetchSearchTopStories=n.fetchSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.onSearchChange=n.onSearchChange.bind(Object(m.a)(Object(m.a)(n))),n.onSearchSubmit=n.onSearchSubmit.bind(Object(m.a)(Object(m.a)(n))),n.onDismiss=n.onDismiss.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"componentWillMount",value:function(){this._isMounted=!1}},{key:"needsToSearchTopStories",value:function(e){return!this.state.results[e]}},{key:"setSearchTopStories",value:function(e){var t=e.hits,n=e.page;this.setState(function(e,t){return function(n){var a=n.searchKey,r=n.results,s=r&&r[a]?r[a].hits:[],o=[].concat(Object(v.a)(s),Object(v.a)(e));return{results:Object(b.a)({},r,Object(S.a)({},a,{hits:o,page:t})),isLoading:!1}}}(t,n))}},{key:"fetchSearchTopStories",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.setState({isLoading:!0});var a="https://hn.algolia.com/api/v1/search_by_date?query="+e+"&tags=story&page="+n+"&hitsPerPage=25";p()(a).then(function(e){return t._isMounted&&t.setSearchTopStories(e.data)}).catch(function(e){return t._isMounted&&t.setState({error:e})})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.needsToSearchTopStories(t)&&this.fetchSearchTopStories(t),e.preventDefault()}},{key:"onDismiss",value:function(e){var t=this.state,n=t.searchKey,a=t.results,r=a[n],s=r.hits,o=r.page,i=s.filter(function(t){return t.objectID!==e});this.setState({results:Object(b.a)({},a,Object(S.a)({},n,{hits:i,page:o}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTerm,a=t.message,s=t.results,o=t.searchKey,i=t.error,c=t.isLoading,l=s&&s[o]&&s[o].page||0,u=s&&s[o]&&s[o].hits||[];return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"div"},r.a.createElement("h2",null,a)),r.a.createElement("div",{className:"interactions"},r.a.createElement(k,{value:n,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},r.a.createElement(E.a,{icon:"search"})," Search")),i?r.a.createElement("div",{className:"interactions"},r.a.createElement("p",null,"Something went wrong!")):r.a.createElement(R,{list:u,onDismiss:this.onDismiss}),r.a.createElement("div",{className:"interactions"},r.a.createElement(T,{isLoading:c,onClick:function(){return e.fetchSearchTopStories(o,l+1)}},"More ...")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.ae4e180e.chunk.js.map