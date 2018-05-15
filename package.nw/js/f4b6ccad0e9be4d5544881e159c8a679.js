'use strict';!function(require,directRequire){const a=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),b=require('./c4190a2430506f3602ca550e1e75d620.js'),c=require('./3bfffbe88b3d923921f851c0697974fe.js'),{SIMULATOR_INSERT_HTMLWEBVIEW:d,SIMULATOR_UPDATE_HTMLWEBVIEW:e,SIMULATOR_REMOVE_HTMLWEBVIEW:f}=require('./0634ee2ebd3e560d9d4804ecc960160f.js');module.exports={insertHTMLWebView:async function(e,f,g){let{htmlId:h,position:i,src:j}=f.args;const k=a.getState(),l=k.simulator.webviewInfos[g];return l.htmlwebviewInfo?{errMsg:`${f.api}:fail could not insert two web-view`}:(j&&e(b.getWeappA8Key({url:j,isSync:!0,isFromSdkUpdate:!0,appid:c.getProjectAppID(),htmlId:h,webviewID:g})),e({type:d,data:{callbackID:f.callbackID,originUrl:j,webviewID:g,htmlId:h,position:i}}),{errMsg:`${f.api}:ok`})},updateHTMLWebView:async function(d,f,g){let{htmlId:h,position:i,src:j}=f.args;const k=a.getState(),l=k.simulator.webviewInfos[g];if(!l.htmlwebviewInfo||l.htmlwebviewInfo.htmlId!=h)return{errMsg:`${f.api}:fail not found`};let m={callbackID:f.callbackID,webviewID:g,htmlId:h};return j&&(d(b.getWeappA8Key({url:j,isSync:!0,isFromSdkUpdate:!0,from:'urlbar',appid:c.getProjectAppID(),htmlId:h,webviewID:g})),m.originUrl=j),i&&(m.position=i),d({type:e,data:m}),{errMsg:`${f.api}:ok`}},removeHTMLWebView:async function(b,c,d){let{htmlId:e,src:g}=c.args;const h=a.getState(),i=h.simulator.webviewInfos[d];return i.htmlwebviewInfo&&i.htmlwebviewInfo.htmlId==e?(b({type:f,data:{webviewID:d,htmlId:e}}),{errMsg:`${c.api}:ok`}):{errMsg:`${c.api}:fail not found`}}}}(require('lazyload'),require);