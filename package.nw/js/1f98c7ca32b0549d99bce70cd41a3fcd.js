'use strict';!function(require,directRequire){const a=require('react'),b=require('./aa9fff323e28f4dcd42f368a90ea14e6.js'),c=require('./fc137838572a83604db39acff8e909e0.js'),d=require('./eadce02c750c875a10680bcfedadec88.js'),e=require('redux'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./7c2dbbb98877b7bbfb1d9a8ea6b5c77c.js'),{connect:h}=require('react-redux'),i=[{name:'100%',value:1},{name:'85%',value:0.85},{name:'75%',value:0.75},{name:'50%',value:0.5}];class j extends a.Component{constructor(a){super(a)}render(){return a.createElement(b,{show:this.props.show,currentWording:this.props.currentWording,onShowClick:this.props.onShowClick,dropdown:g})}}module.exports=h((a)=>{let b=a.toolbar.deviceScale,c=-1;return i.forEach((a,d)=>{a.value==b&&(c=d)}),{show:a.toolbar.clickKey==d.DEVICESCALE,list:i,currentWording:`${100*b}%`,current:c,width:120,left:109,top:27}},(a)=>{return{onShowClick:()=>{a(c.toggleClickKey(d.DEVICESCALE))},onSelectClick:(b)=>{a(c.setDeviceScale(i[b].value)),a(c.toggleClickKey(d.NONE))}}})(j)}(require('lazyload'),require);