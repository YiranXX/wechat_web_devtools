'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('redux'),d=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:f}=require('react-redux'),g=3;class h extends a.Component{constructor(a){super(a),this.state={scopeList:this.formateScopeList(a.scopeList)}}componentWillReceiveProps(a){let b={};a.scopeList!=this.props.scopeList&&(b.scopeList=this.formateScopeList(a.scopeList)),this.setState(b)}formateScopeList(a){return a.map((a)=>{return a.checked=a.auth_state==g||a.auth_state==2,a})}_checkboxChange(a){var b=this.state.scopeList;return()=>{b[a].checked=!b[a].checked,this.setState({scopeList:b})}}handleOnAllow(){this.callback(!0)}handleOnCancel(){this.callback(!1)}callback(a){'function'==typeof this.props.callback&&this.props.callback(a,this.state.scopeList),this.props.setAuthorize(!1)}render(){let c=this.props,d=this.state.scopeList.map((b,c)=>{if(b.auth_state==g)return a.createElement('div',{key:b.scope,className:'weui-agree'},a.createElement('i',{className:'icon-dot'}),a.createElement('span',{className:'weui-agree__text'},b.desc,b.ext_desc));let d='authorize_checkbox'+c,e=!!b.checked;return a.createElement('label',{key:b.scope,className:'weui-agree',htmlFor:d},a.createElement('input',{id:d,type:'checkbox',className:'weui-agree__checkbox',checked:e,onChange:this._checkboxChange(c)}),a.createElement('span',{className:'weui-agree__text'},b.desc,b.ext_desc))});return a.createElement('div',{className:'auth-dialog',style:this.props.show?{}:b.displayNone},a.createElement('div',{className:'weui-mask'}),a.createElement('div',{className:'weui-dialog'},a.createElement('div',{className:'weui-dialog__hd'},a.createElement('strong',{className:'weui-dialog__title'},'\u5FAE\u4FE1\u6388\u6743')),a.createElement('div',{className:'weui-dialog__bd'},a.createElement('div',{className:'auth-dialog-content'},a.createElement('div',{className:'auth-dialog-logo'},a.createElement('img',{src:c.imageUrl,alt:''})),a.createElement('div',{className:'auth-dialog-title'},c.appName,'\u7533\u8BF7\u83B7\u5F97\u4EE5\u4E0B\u6743\u9650'),a.createElement('div',{className:'auth-dialog-list'},d))),a.createElement('div',{className:'weui-dialog__ft'},a.createElement('a',{className:'weui-dialog__btn weui-dialog__btn_primary auto_test_btn_primary',"data-type":'authorize',onClick:this.handleOnAllow.bind(this)},'\u5141\u8BB8'),a.createElement('a',{className:'weui-dialog__btn weui-dialog__btn_default auto_test_btn_default',"data-type":'authorize',onClick:this.handleOnCancel.bind(this)},'\u62D2\u7EDD'))))}}module.exports=f((a)=>{let b=a.simulator.authorize||{};return{show:b.show,callback:b.callback,scopeList:b.scopeList||[],imageUrl:b.imageUrl||'',appName:b.appName||''}},(a)=>{return{setAuthorize:e.bindActionCreators(d.setAuthorize,a)}})(h)}(require('lazyload'),require);