'use strict';!function(require,directRequire){const a=require('react'),b=require('./875171e7b864aa58d026d4fa0999fbd1.js');class c extends a.Component{constructor(a){super(a),this.state={biasTop:0}}componentDidMount(){}componentWillUnmout(){}onClose(){this.props.end&&this.props.onClose()}getTipsNodes(){return this.props.tips?this.props.tips.map((b)=>{return a.createElement('p',{key:b},b)}):null}onAnimationOut(){}render(){return a.createElement(b,{style:{width:420,marginLeft:-210},show:this.props.show,inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},'\u4E0A\u4F20\u7D20\u6750')),a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'material-dialog'},a.createElement('p',{className:'material-dialog-title'},this.props.progress),a.createElement('div',{className:'ui-progress'}),a.createElement('div',{className:'material-dialog-detail'},this.getTipsNodes()))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onClose.bind(this),disabled:!this.props.end},'\u5B8C\u6210'))))}}module.exports=c}(require('lazyload'),require);