(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),c=a.n(r),i=(a(26),a(3)),o=a(5),l=a(6),h=a(14),u=a(15),m=a(18),S=a(16),b=a(19),p=a(1),d=a(17),v=a.n(d),f=(a(46),"react"),y=function(e){var t=e.onClick,a=e.className,n=void 0===a?"":a,r=e.children;return s.a.createElement("button",{onClick:t,className:n,type:"button"},r)},g=function(e){var t=e.value,a=e.onChange,n=e.onSubmit,r=e.children;return s.a.createElement("form",{onSubmit:n},s.a.createElement("input",{type:"text",value:t,onChange:a}),s.a.createElement("button",{type:"submit"},r))},j=function(e){var t=e.list,a=e.onDismiss;return s.a.createElement("div",{className:"table"},t.map(function(e){return s.a.createElement("div",{key:e.objectID,className:"table-row"},s.a.createElement("span",{style:{width:"55%"}},s.a.createElement("a",{href:e.url},e.title)),s.a.createElement("span",{style:{width:"20%"}},e.created_at),s.a.createElement("span",{style:{width:"10%"}},e.author),s.a.createElement("span",{style:{width:"5%"}},e.num_comments),s.a.createElement("span",{style:{width:"5%"}},e.points),s.a.createElement("span",{style:{width:"5%"}},s.a.createElement(y,{onClick:function(){return a(e.objectID)},className:"button-inline"},"Dismiss")),s.a.createElement("hr",null))}))},E=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(S.a)(t).call(this,e)))._isMounted=!1,a.state={message:"Welcome to the Road to learn React!!",results:null,searchKey:"",searchTerm:f,error:null},a.needsToSearchTopStories=a.needsToSearchTopStories.bind(Object(p.a)(Object(p.a)(a))),a.setSearchTopStories=a.setSearchTopStories.bind(Object(p.a)(Object(p.a)(a))),a.fetchSearchTopStories=a.fetchSearchTopStories.bind(Object(p.a)(Object(p.a)(a))),a.onSearchChange=a.onSearchChange.bind(Object(p.a)(Object(p.a)(a))),a.onSearchSubmit=a.onSearchSubmit.bind(Object(p.a)(Object(p.a)(a))),a.onDismiss=a.onDismiss.bind(Object(p.a)(Object(p.a)(a))),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"componentWillMount",value:function(){this._isMounted=!1}},{key:"needsToSearchTopStories",value:function(e){return!this.state.results[e]}},{key:"setSearchTopStories",value:function(e){var t=e.hits,a=e.page,n=this.state,s=n.searchKey,r=n.results,c=r&&r[s]?r[s].hits:[],h=[].concat(Object(l.a)(c),Object(l.a)(t));this.setState({results:Object(o.a)({},r,Object(i.a)({},s,{hits:h,page:a}))})}},{key:"fetchSearchTopStories",value:function(e){var t=this,a="https://hn.algolia.com/api/v1/search_by_date?query="+e+"&tags=(story,poll)&page="+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+"&hitsPerPage=25";console.log(a),v()(a).then(function(e){return t._isMounted&&t.setSearchTopStories(e.data)}).catch(function(e){return t._isMounted&&t.setState({error:e})})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.needsToSearchTopStories(t)&&this.fetchSearchTopStories(t),e.preventDefault()}},{key:"onDismiss",value:function(e){var t=this.state,a=t.searchKey,n=t.results,s=n[a],r=s.hits,c=s.page,l=r.filter(function(t){return t.objectID!==e});this.setState({results:Object(o.a)({},n,Object(i.a)({},a,{hits:l,page:c}))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchTerm,n=t.message,r=t.results,c=t.searchKey,i=t.error,o=r&&r[c]&&r[c].page||0,l=r&&r[c]&&r[c].hits||[];return s.a.createElement("div",{className:"page"},s.a.createElement("h2",null,n),s.a.createElement("div",{className:"interactions"},s.a.createElement(g,{value:a,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"Search")),i?s.a.createElement("div",{className:"interactions"},s.a.createElement("p",null,"Something went wrong!")):s.a.createElement(j,{list:l,onDismiss:this.onDismiss}),s.a.createElement("div",{className:"interactions"},s.a.createElement(y,{onClick:function(){return e.fetchSearchTopStories(c,o+1)}},"More ...")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.d00c8009.chunk.js.map