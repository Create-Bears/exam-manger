webpackJsonp([7],{1129:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(38),l=r(426),n=r(0),a=(r.n(n),r(1252)),i=(r.n(a),r(226)),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,r){return Object(o.b)(t,void 0,void 0,function(){var t;return Object(o.e)(this,function(o){switch(o.label){case 0:return e?[3,2]:(console.log(r),[4,this.props.user.login(r)]);case 1:t=o.sent(),console.log(t),1===t.code?(l.o.success(t.msg),this.props.history.push("/home")):l.o.error(t.msg),o.label=2;case 2:return[2]}})})})},t}return Object(o.d)(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props.form.getFieldDecorator;return n.createElement("div",{className:"login-page"},n.createElement("div",{className:"login"},n.createElement(l.e,{onSubmit:this.handleSubmit,className:"login-form"},n.createElement(l.e.Item,null,e("user_name",{validateTrigger:"onBlur",initialValue:this.props.user.account.user_name,rules:[{validator:function(e,t,r){console.log("value...",t),/[a-z]{5,20}/.test(t)?r():r("Please input valid username!")}}]})(n.createElement(l.g,{prefix:n.createElement(l.f,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),n.createElement(l.e.Item,null,e("user_pwd",{validateTrigger:"onBlur",initialValue:this.props.user.account.user_pwd,rules:[{validator:function(e,t,r){console.log("value...",t),/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(t)?r():r("Please input valid password!")}}]})(n.createElement(l.g,{prefix:n.createElement(l.f,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),n.createElement(l.e.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(n.createElement(l.b,null,"Remember me"))),n.createElement(l.e.Item,null,e("autoLogin",{valuePropName:"checked",initialValue:!0})(n.createElement(l.b,null,"Auto login in 7 days")),n.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),n.createElement(l.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.createElement("a",{href:""},"register now!")))))},t=Object(o.c)([Object(i.b)("user"),i.c],t)}(n.Component);t.default=l.e.create()(s)},1252:function(e,t,r){var o=r(1253);"string"===typeof o&&(o=[[e.i,o,""]]);var l={hmr:!1,transform:void 0};r(1128)(o,l);o.locals&&(e.exports=o.locals)},1253:function(e,t,r){(e.exports=r(1127)(!1)).push([e.i,'*{margin:0;padding:0;list-style:none}#root,.App,.login-page{width:100%;height:100%}.login-page{background-image:url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2078897288,2205081274&fm=26&gp=0.jpg");background-size:100% 100%}.login{width:400px;height:400px;position:absolute;top:50%;left:50%;margin-left:-200px;margin-top:-200px}.login-form{max-width:300px;margin:0 auto}.login-form-forgot{float:right}.login-form-button{width:100%}',""])}});