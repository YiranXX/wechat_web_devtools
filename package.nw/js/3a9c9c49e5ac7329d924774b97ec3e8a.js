'use strict';!function(require,directRequire){const a=require('path'),b=require('./d28a711224425b00101635efe1034c99.js'),c=require('babel-code-frame'),d=require('babel-core'),e=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),f=require('./45368a4f5c9761935178081387ad6a7c.js'),g=require('./be8599cf60139a20dca47b3e43647454.js'),h=require('./87c0ac209c25d8bb448550638bb17663.js'),i=require('./d91180fcab2f484fb84a83a404a2b678.js'),j=require('./201ace05546fc16e3d5cf71cb558f2c4.js'),k=require('./aad21dcccf13014aad2c69c95e9c8152.js'),l=require('./334bc661e13bd1837a230f0835d0a1ee.js'),m=require('./5d3b2444c61491ce6f88523a60ba3f37.js'),n=require('./3e4c71c2a2cc438e1b3afc3fb10bd4b6.js'),{devtoolsConfigPlaceholder:o,wxConfigPlaceholder:p,wxmlXCJSPlaceholder:q,wxappcodePlaceholder:r,plugincodePlaceholder:s}=require('./ebfcad0a5e72b6e693634486564b1394.js');module.exports={generate:async function(a,b){if(a.isOnline)return await k(a,b);let c=await j(a,b),d=await f(a),e=g(),h=await n(a,{app:!0,cut:!0}),i=await l(a),t=await m(a);return c=c.split(r).join(`<script>${i}</script>`),c=c.split(q).join(`<script>${h.code}</script>`),c=c.split(p).join(`<script>var __wxConfig=${JSON.stringify(d)}</script>`),c=c.split(o).join(`<script>var __devtoolsConfig=${JSON.stringify(e)}</script>`),c=c.split(s).join(`${t}`),c},getJSFile:h,getJSMapFile:i}}(require('lazyload'),require);