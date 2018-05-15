'use strict';!function(require,directRequire){const a=require('react'),b=require('./e40e098fcb2111ba9f21e79c183fec7e.js'),c=require('./a1dd553cc059d528bb0ef56afed53968.js'),d=require('./4762f28cad4425c4fc55dec009c87a7e.js'),e=require('./a78e6d6a87de1708226375ca4c320d76.js'),f=require('./034f7e1a1500d5bdfa70fa5d36d9ef07.js'),g=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),h=require('./3c55dff3626a3ee184d599f076158345.js'),i=require('./3bfffbe88b3d923921f851c0697974fe.js');class j extends a.Component{constructor(a){super(a),this.state={devtoolsShow:!1,contextMenuLeft:0,contextMenuTop:0},this.devtoolsInited=!1}componentDidMount(){this.initWebview(),this._onMessage=this.onMessage.bind(this),b.register(this._onMessage)}componentWillReceiveProps(a){if(a.device!=this.props.device&&setTimeout(()=>{this.setWebviewInfo()}),a.act!=this.props.act){let b=this.props.act,c=a.act;setTimeout(()=>{this.doActions(c,b)})}this.props.nosupport||a.jssdkCallbackInfo==this.props.jssdkCallbackInfo||b.send({command:'WEBDEBUGGER_INVOKE_CALLBACK',data:a.jssdkCallbackInfo}),a.url!=this.props.url&&this.showDevTools(a.url),a.shareInfoShow!=this.props.shareInfoShow&&a.shareInfoShow&&this.webview.executeScript({code:`alert('GET_WEBVIEW_SCROLL_Y' + window.scrollY);window.scrollTo(0,0);`},()=>{this.webview.captureVisibleRegion({format:'png'},(a)=>{this.props.simulatorActions.setShareDataURI(this.props.webviewID,a),this.webview.executeScript({code:`window.scrollTo(0,${this.webviewScrollY})`},()=>{this.webviewScrollY=void 0})})})}componentWillUnmount(){this.webview&&this.webview.detach(),this.devtoolsview&&this.devtoolsview.detach(),b.unRegister(this._onMessage)}onMessage(a){let{command:d,data:e,webviewID:f,runtimeID:g}=a;if(f==this.webviewID)if('WEBDEBUGGER_INVOKE'==d){let{api:a,args:d,callbackID:f}=e;'invokeMiniProgramAPI'===a?(c.triggerOnEvent({eventName:'onWebInvokeAppService',data:{name:d.name,arg:d.arg,bitset:this.props.project&&this.props.project.attr&&this.props.project.attr.permissionBitset||''},webviewID:this.props.webviewID}),b.directSend({command:'WEBDEBUGGER_INVOKE_CALLBACK',data:{callbackID:f,res:{errMsg:'invokeMiniProgramAPI:ok'}}},g)):this.props.jssdkActions.exec(e,g)}else'WEBDEBUGGER_GET_TITLE_RES'==d&&this.props.updateHtmlWebview({webviewID:this.props.webviewID,htmlId:this.props.htmlId,documentTitle:e.title})}doActions(a,b){let c=this.webview;return c?a.reload==b.reload?a.forward==b.forward?a.back==b.back?a.blank==b.blank?void 0:void(c.src='html/about.html'):void(c.canGoBack()&&c.back()):void c.forward():void c.reload():void 0}initWebview(){const a=this.props;let b=e.get('htmlwebview',{width:a.width,height:a.height,dpr:a.dpr});this.webview&&this.webview.detach(),this.webview=b,b.className=`simulator-bd-webview_body webviewbody htmlwebview${this.props.webviewID}`,this.setWebviewInfo(),this.initEvent();let c=e.get('devtools',{width:a.width,height:a.height,dpr:a.dpr}),d=`${c.originUserAgent} devtoolsview port/${global.messageCenterPort}`;c.setUserAgentOverride(d),this.devtoolsview&&this.devtoolsview.detach(),this.devtoolsview=c,this.devtoolsInited=!1,this.props.url&&this.showDevTools(this.props.url)}showDevTools(a){if(!this.webview||!this.devtoolsview||!a)return;let b=this.devtoolsview,c=this.webview;if(this.devtoolsInited)return void(c.src=a);const d=()=>{b.off('loadcommit',d);const e=()=>{c.off('loadcommit',e),c._webview.showDevTools(!0,b._webview),this.devtoolsInited=!0};c.on('loadcommit',e),c.src=a},e=()=>{b.off('contentload',e),this.setWebviewInfo()};b.on('loadcommit',d),b.on('contentload',e),b.src='about:blank',this.state.devtoolsShow?(b.setAttribute('style','height:100%;width:100%;display:block;'),b.attach(this.popupcontainer)):(b.setAttribute('style','height:1px;width:1px;display:block;'),b.attach(this.container)),c.attach(this.container)}initEvent(){let a=this.webview;this.props.nosupport||(a.onBeforeRequest=(a)=>{let{url:b,type:c}=a;if('main_frame'!==c&&'sub_frame'!==c)return{};if(/^chrome-extension:\/\//.test(b)||/^file:\/\//.test(b)||/favicon\.ico$/.test(b))return{};if(this.props.lastGetA8KeyUrl==b)return{};let d=/\#wechat_redirect$/.test(b);return this.props.debuggerActions.getWeappA8Key({url:b,isSync:d,from:'webviewrequest',htmlId:this.props.htmlId,webviewID:this.props.webviewID,redirectFromUrl:this.props.originUrl,appid:i.getProjectAppID()}),{cancel:d}}),a.on('loadstart',(a)=>{a.isTopLevel&&this.upWebviewStatus({loading:'start'})}),a.on('loadcommit',(a)=>{a.isTopLevel&&this.upWebviewStatus({type:'loadcommit'})}),a.on('loadstop',()=>{this.upWebviewStatus({loading:'stop'}),b.send({command:'WEBDEBUGGER_GET_TITLE'})}),a.on('dialog',(a)=>{let b=a.messageType||'',c=a.messageText,d=a.dialog;if('alert'===b)0==c.indexOf('GET_WEBVIEW_SCROLL_Y')?this.webviewScrollY=c.replace('GET_WEBVIEW_SCROLL_Y',''):this.props.infoActions.setConfirmInfo({show:!0,showCancel:!1,content:c});else if('confirm'===b)a.preventDefault(),this.props.infoActions.setConfirmInfo({show:!0,showCancel:!0,content:c,callback:(a)=>{a?d.ok():d.cancel()}});else if('prompt'===b){let a=prompt(c);null===a?d.cancel():d.ok(a)}}),a.on('mouseleave',()=>{d.send({command:'SET_TOUCH_MODE',data:!1})}),a.on('mouseenter',()=>{d.send({command:'SET_TOUCH_MODE',data:!0})});try{a._webview.contextMenus.removeAll(),a._webview.contextMenus.create({title:'\u8C03\u8BD5',onclick:()=>{this.setState({devtoolsShow:!0,contextMenuShow:!1},()=>{this.initWebview()})}})}catch(a){}}setWebviewInfo(){const a=this.props;let b=this.webview,c=a.height/a.deviceScale,e=a.width/a.deviceScale;this.webviewID=`${a.htmlId}_${a.webviewID}`;let f=a.ua.replace('{{webviewID}}',this.webviewID);a.nosupport?(b.setUserAgentOverride(`${f} webdebugger port/${global.messageCenterPort}`),b.setAttribute('style',`position:absolute;height:${c}px;width:${e}px`),b.reload()):(b.setUserAgentOverride(`${f} webdebugger miniprogram port/${global.messageCenterPort}`),b.setAttribute('style',`position:absolute;height:${c}px;width:${e}px`),b.reload()),d.send({command:'SET_DEVICE',data:{width:0,height:0,deviceScaleFactor:parseFloat(a.dpr),mobile:!0,fitWindow:!1,scale:1,screenHeight:parseInt(a.height),screenWidth:parseInt(a.width),positionX:0,positionY:0,screenOrientation:{angle:0,type:'portraitPrimary'}}})}upWebviewStatus(){let a=this.webview.canGoBack();this.props.cangoback!=a&&this.props.updateHtmlWebview({webviewID:this.props.webviewID,htmlId:this.props.htmlId,cangoback:a}),this.webview.src!=this.props.url&&this.props.debuggerActions.setUrl(this.webview.src)}onDevtoolsWindowClose(){this.setState({devtoolsShow:!1},()=>{this.initWebview()})}onSelectClick(a){0!=a||this.setState({devtoolsShow:!0,contextMenuShow:!1},()=>{this.initWebview()})}render(){let b={width:this.props.width/this.props.deviceScale,height:this.props.height/this.props.deviceScale,left:this.props.left,top:this.props.top,position:'absolute',zIndex:1};return a.createElement('div',{className:'webview',ref:(a)=>this.container=a,style:b},a.createElement(h,{show:this.state.contextMenuShow,left:this.state.contextMenuLeft,top:this.state.contextMenuTop,list:['\u8C03\u8BD5'],onSelectClick:this.onSelectClick.bind(this)}),this.state.devtoolsShow?a.createElement(g,{title:'\u8C03\u8BD5\u5668',width:800,height:800,fullscreen:!1,always_on_top:!0,devtools:!0,onWindowClose:this.onDevtoolsWindowClose.bind(this),ref:(a)=>this.popupcontainer=a}):null)}}module.exports=j}(require('lazyload'),require);