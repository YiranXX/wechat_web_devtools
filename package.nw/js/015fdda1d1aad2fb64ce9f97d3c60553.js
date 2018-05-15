'use strict';!function(require,directRequire){const a=require('./0db6515f85d6f6210c2d50722041eb1f.js'),b=require('./b22d389f507598d040002f99ddfae35d.js');class c{constructor(b,c={},d={}){this._onRequestErrorOccurred=(a)=>{if('function'==typeof this.onRequestErrorOccurred)return this.onRequestErrorOccurred(a)},this._onRequestBeforeSendHeaders=(a)=>{if('function'==typeof this.onRequestBeforeSendHeaders)return this.onRequestBeforeSendHeaders(a)},this._onRequestCompleted=(a)=>{if('function'==typeof this.onRequestCompleted)return this.onRequestCompleted(a)},this._onBeforeRequest=(a)=>{if('function'==typeof this.onBeforeRequest)return this.onBeforeRequest(a)},this._onRequestHeadersReceived=(a)=>{if('function'==typeof this.onRequestHeadersReceived)return this.onRequestHeadersReceived(a)},this.onLoadCommit=(b)=>{!b.isTopLevel||this.debuggee||this.debuggerStarting||1!==this.needDebugger||(a.start(this._webview,{device:{width:this.deviceInfo.width,height:this.deviceInfo.height,dpr:this.deviceInfo.dpr},onEventCall:(a,b,c={})=>{'function'==typeof this.onDebuggeeEvent&&this.onDebuggeeEvent(a,b,c)},onDetachCall:(a,b)=>{'function'==typeof this.onDebuggeeDetach&&this.onDebuggeeDetach(a,b),this.detaching&&(this.assigned=!1,this.attached=!1,this.debuggee=void 0,this.debuggerStarting=!1,this.detaching=!1)}}).then((b)=>{this.attached&&(this.debuggee=b,'function'==typeof this.onDebuggeeAttach&&this.onDebuggeeAttach(b),'undefined'!=typeof this.debuggerTouchMode&&a.setEmulationTouch(this.debuggee,this.debuggerTouchMode),this.needUpdateDevice&&a.setEmulationDeviceMetricsOverride(this.debuggee,this.deviceInfo)),this.debuggerStarting=!1}),this.debuggerStarting=!0)},this.onContextMenusShow=(a)=>{a.preventDefault()},this.onNewWindow=(a)=>{'new_window'===a.windowOpenDisposition&&(this._webview.src=a.targetUrl)},this.onPermissionRequest=(a)=>{'media'===a.permission&&a.request.allow()},this.type=b,this.deviceInfo=c,this.events={},this.ts=Date.now(),this._webview=document.createElement('webview'),this.originUserAgent=this._webview.getUserAgent(),this._webview.setAttribute('partition',`persist:${b}`),this.onDefaultEvent(),this.resetStatus()}onDefaultEvent(){global.appConfig.isDev||global.appConfig.isGamma||this._webview.contextMenus.onShow.addListener(this.onContextMenusShow),'gamesimulator'===this.type&&this._webview.contextMenus.onShow.addListener(this.onContextMenusShow),this._webview.addEventListener('newwindow',this.onNewWindow),this._webview.addEventListener('loadcommit',this.onLoadCommit),this._webview.addEventListener('permissionrequest',this.onPermissionRequest);let a=this._webview.request;a.onErrorOccurred.addListener(this._onRequestErrorOccurred,{urls:['<all_urls>']}),a.onBeforeRequest.addListener(this._onBeforeRequest,{urls:['<all_urls>']},['blocking']),a.onBeforeSendHeaders.addListener(this._onRequestBeforeSendHeaders,{urls:['<all_urls>']},['blocking','requestHeaders']),a.onCompleted.addListener(this._onRequestCompleted,{urls:['<all_urls>']},['responseHeaders']),a.onHeadersReceived.addListener(this._onRequestHeadersReceived,{urls:['<all_urls>']},['blocking','responseHeaders'])}offDefaultEvent(){this._webview.removeEventListener('newwindow',this.onNewWindow),this._webview.removeEventListener('loadcommit',this.onLoadCommit),this._webview.removeEventListener('permissionrequest',this.onPermissionRequest)}resetStatus(){this.needDebugger=void 0,this.debuggerTouchMode=void 0,this.onDebuggeeEvent=void 0,this.onDebuggeeDetach=void 0,this.onDebuggeeAttach=void 0,this.onRequestCompleted=void 0,this.onRequestErrorOccurred=void 0,this.onRequestBeforeSendHeaders=void 0,this.onBeforeRequest=void 0}checkCouldResetAttach(){this.debuggee||this.debuggerStarting?this.detaching=!0:(this.assigned=!1,this.detaching=!1,this.attached=!1,this.debuggerStarting=!1,this.debuggee=void 0)}checkAvailable(){return!this.assigned&&!this.attached&&!this.detaching}attach(a){a&&(this._webview.style.display='',a.appendChild(this._webview),this.attached=!0,this.ts=Date.now())}on(a,b){this.events[a]||(this.events[a]=[]),this.events[a].push(b),this._webview.addEventListener(a,b)}off(a,b){this.events[a]&&(this.events[a]=this.events[a].filter((a)=>{return a!==b})),this._webview.removeEventListener(a,b)}offAll(){for(let a in this.events)this.events[a].forEach((b)=>{this._webview.removeEventListener(a,b)});this.events={}}showDevTools(){this._webview&&this._webview.showDevTools.apply(this._webview,arguments)}reload(){this._webview&&this._webview.reload()}canGoBack(){if(this._webview)return this._webview.canGoBack()}forward(){this._webview&&this._webview.forward()}back(){this._webview&&this._webview.back()}get src(){return this._webview.src}set src(a){this._webview.src=a}get className(){return this._webview.className}set className(a){this._webview.className=a}setEmulationTouch(b){this.debuggerTouchMode=b,this.debuggee&&a.setEmulationTouch(this.debuggee,b)}executeScript(a,b=()=>{}){this._webview.executeScript(a,b)}captureVisibleRegion(a={},b=()=>{}){this._webview.captureVisibleRegion(a,b)}setUserAgentOverride(a){this._webview.setUserAgentOverride(a)}getUserAgent(){return this._webview.getUserAgent()}setAttribute(a,b){this._webview.setAttribute(a,b)}setOffset(b={}){this.deviceInfo={width:b.width,height:b.height,dpr:b.dpr},this.debuggee?a.setEmulationDeviceMetricsOverride(this.debuggee,{width:b.width,height:b.height,dpr:b.dpr}):this.needUpdateDevice=!0}detach(){this.offAll(),this.resetStatus(),this.checkCouldResetAttach(),this._webview&&(this._webview.style.display='none',this._webview.parentElement&&this._webview.parentElement.removeChild(this._webview))}distroy(){this.offAll(),this.resetStatus(),this.checkCouldResetAttach(),this.offDefaultEvent(),this._webview&&(this._webview.style.display='none',this._webview.parentElement&&this._webview.parentElement.removeChild(this._webview)),this._webview=void 0}clearData(a,b,c){this._webview&&this._webview.clearData(a,b,c)}}module.exports=c}(require('lazyload'),require);