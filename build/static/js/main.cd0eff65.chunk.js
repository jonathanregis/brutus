(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(8),r=a.n(s),i=(a(15),a(16),a(1)),c=a(2),o=a(5),u=a(4),m=a(3),d=a(6),h="imjonathan.r@gmail.com",p="reacttest",f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loggedIn:!1,failedip:{email:null,ip:null,failcount:0},locked:!1},a.login=a.login.bind(Object(m.a)(a)),a.passwordField=n.a.createRef(),a.emailField=n.a.createRef(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"login",value:function(e){var t=this;e.preventDefault();var a=this.state.failedip.failcount,l=this.passwordField.current.value,n=this.emailField.current.value;if(l==p&&n==h)console.log("loggedin successfully"),this.setState({loggedIn:!0});else{var s=this.emailField.current.value,r=this.passwordField.current.value;fetch("https://jsonip.com/").then(function(e){return e.json()}).then(function(e){console.log(e.ip),a>1&&t.setState({locked:!0}),t.setState({failedip:{email:s,ip:e.ip,failcount:a+1}})}),console.log("login failed for : email "+s+"and password "+r+" count = "+this.state.failedip.failcount)}}},{key:"render",value:function(){var e=this;return this.state.loggedIn?n.a.createElement("p",null,"Welcome, user"):this.state.locked?n.a.createElement("p",null,"You have been locked out, please wait 5 mins"):n.a.createElement("form",{className:"login-form"},n.a.createElement("input",{className:"textfield",placeholder:"your email",ref:this.emailField}),n.a.createElement("input",{className:"textfield",ref:this.passwordField,type:"password",placeholder:"your passwprd"}),n.a.createElement("button",{className:"submit",onClick:function(t){return e.login(t)}},"Login"))}}]),t}(n.a.Component),v=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",{className:"error-list"},this.props.list.map(function(e){return n.a.createElement("li",{className:"error-item"},e)}))}}]),t}(n.a.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={success:!1,message:null},a.nameField=n.a.createRef(),a.emailField=n.a.createRef(),a.passwordField=n.a.createRef(),a.confirmField=n.a.createRef(),a.register=a.register.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"register",value:function(e){e.preventDefault();var t=this.nameField.current.value,a=this.emailField.current.value,l=this.passwordField.current.value,s=this.confirmField.current.value,r=this.validate({name:t,email:a,password:l,confirm:s});r.length>0?this.setState({message:n.a.createElement(v,{list:r})}):this.setState({success:!0})}},{key:"validate",value:function(e){var t=e.password,a=[],l=t.match(/^[A-Z]{2,}/),n=t.match(/[a-z]/g),s=t.match(/[0-9]{3,}/),r=t.length>=16,i=t.match(/[^\w]{2,}/),c=e.email.match("@");return null===l&&a.push("Password should start with two capital letters"),null===n&&a.push("Password should have at least one lowercase character"),null===s&&a.push("Password should have at least 3 numbers"),null===i&&a.push("Password should have at least 2 special characters"),r||a.push("Password be at least 16 characters long"),null===c&&a.push("Email does not contain @"),e.password!=e.confirm&&a.push("Passwords do not match"),""==e.name&&a.push("Name field is empty"),a}},{key:"render",value:function(){var e=this;return this.state.success?n.a.createElement("p",null,"Thanks for registering."):n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"error-box"},n.a.createElement("p",null,this.state.message)),n.a.createElement("form",{className:"login-form"},n.a.createElement("input",{className:"textfield",placeholder:"Full name",ref:this.nameField}),n.a.createElement("input",{className:"textfield",placeholder:"Email",ref:this.emailField}),n.a.createElement("input",{className:"textfield",ref:this.passwordField,type:"password",placeholder:"your password"}),n.a.createElement("input",{className:"textfield",ref:this.confirmField,type:"password",placeholder:"retype password"}),n.a.createElement("button",{className:"submit",onClick:function(t){return e.register(t)}},"Register")))}}]),t}(n.a.Component);var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"main-wrapper"},n.a.createElement("div",{className:"tabs"},n.a.createElement("div",{class:"tab"},n.a.createElement("input",{type:"radio",id:"tab-1",name:"tab-group-1",checked:!0}),n.a.createElement("label",{for:"tab-1"},"Login"),n.a.createElement("div",{class:"content"},n.a.createElement(f,null))),n.a.createElement("div",{class:"tab"},n.a.createElement("input",{type:"radio",id:"tab-2",name:"tab-group-1"}),n.a.createElement("label",{for:"tab-2"},"Register"),n.a.createElement("div",{class:"content"},n.a.createElement(g,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(w,{action:"register"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.cd0eff65.chunk.js.map