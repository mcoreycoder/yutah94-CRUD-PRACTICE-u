(this["webpackJsonptodo-list-ui"]=this["webpackJsonptodo-list-ui"]||[]).push([[0],{17:function(e,t){e.exports.uriBase="https://yuta-todo.herokuapp.com"},37:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),s=a(15),r=a.n(s),i=a(8),c=a(9),l=a(10),u=a(11),d=a(12),m=a(71),h=a(72),p=a(73),f=a(83),b=a(81),v=a(16),g=a.n(v),E=a(80),k=a(17),O=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).submitHandler=n.submitHandler.bind(Object(d.a)(n)),n.updateList=n.updateList.bind(Object(d.a)(n)),n.state={todolists:[]},n}return Object(c.a)(a,[{key:"submitHandler",value:function(e){var t=this;g.a.delete("".concat(k.uriBase,"/api/todos/").concat(e)).then((function(a){t.setState((function(t){return{todolists:t.todolists.filter((function(t){return t._id!==e}))}}))})).catch((function(e){console.log(e),alert("Not Working")}))}},{key:"componentDidMount",value:function(){this.updateList()}},{key:"updateList",value:function(e){var t=this;g.a.get("".concat(k.uriBase,"/api/todos"),{useNewUrlParser:!0,useUnifiedTopology:!0}).then((function(e){t.setState({todolists:e.data})})).catch((function(e){alert("Not working")}))}},{key:"render",value:function(){var e=this,t=this.state.todolists;return o.a.createElement(m.a,null,o.a.createElement(h.a,null,o.a.createElement(f.a,{className:"audiobook-list"},t.map((function(t){var a=t._id,n=t.todos,s=t.responsible;return o.a.createElement(b.a,{key:a,timeout:500,className:"fade"},o.a.createElement(p.a,null,o.a.createElement(E.a,{hellojello:a,className:"remove-btn",variant:"danger",size:"sm",onClick:function(t){return e.submitHandler(a)}},"\xd7"),n," - ",s))})))))}}]),a}(n.Component),j=a(74),y=a(75),N=a(76),w=a(82),C=a(77),T=a(78),A=a(79),B=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},o.a.createElement(m.a,null,o.a.createElement(y.a,{href:"/"},"Task List"),o.a.createElement(N.a,{onClick:this.toggle}),o.a.createElement(w.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(C.a,{className:"ml-auto",navbar:!0},o.a.createElement(T.a,null,o.a.createElement(A.a,{href:"https://github.com/yutah94"},"GitHub")))))))}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t={};t[e.target.getAttribute("name")]=e.target.value,n.setState(t)},n.addTodos=n.addTodos.bind(Object(d.a)(n)),n.todosAdd=o.a.createRef(),n.state={todos:"",responsible:""},n}return Object(c.a)(a,[{key:"addTodos",value:function(e){var t=this;e.preventDefault();var a={todos:this.state.todos,responsible:this.state.responsible};g.a.post("".concat(k.uriBase,"/api/todos/"),a).then((function(e){console.log(e)})).then((function(e){t.props.list.current.updateList()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.addTodos,className:"container"},o.a.createElement("label",{className:"form-inline"},o.a.createElement("h4",{className:"gimmespace"},"Task:"),o.a.createElement("input",{type:"text",className:"form-control",name:"todos",onChange:this.handleChange}),o.a.createElement("h4",{className:"gimmespace"},"Responsible:"),o.a.createElement("input",{type:"text",className:"form-control",name:"responsible",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",className:"form-control btn btn-warning f",value:"Add Todos",onClick:this.addTodos})))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,null),o.a.createElement(L,{list:this.todosAdd}),o.a.createElement(O,{ref:this.todosAdd}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b2375e20.chunk.js.map