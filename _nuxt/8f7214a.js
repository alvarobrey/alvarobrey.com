(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{383:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({props:{title:{type:String,default:void 0}}}),r=n(34),c=n(36),l=n.n(c),f=n(384),d=n(385),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"10",lg:"8"}},[this._t("title",[this.title?e("h4",{staticClass:"text-h4 primary--text",domProps:{textContent:this._s(this.title)}}):this._e()]),this._v(" "),this._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})},384:function(t,e,n){"use strict";n(48),n(24),n(155),n(87),n(251),n(18),n(59),n(21),n(19),n(67),n(43),n(49),n(60),n(78);var o=n(2),r=(n(250),n(1)),c=n(79),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=h.reduce((function(t,e){return t["offset"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),m=h.reduce((function(t,e){return t["order"+Object(l.s)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(m)};function j(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),r)}})},385:function(t,e,n){"use strict";n(16),n(48),n(24),n(155),n(251),n(59),n(21),n(19),n(35),n(67),n(43),n(60),n(78);var o=n(2),r=(n(250),n(1)),c=n(79),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function y(t,e){return h.reduce((function(n,o){return n[t+Object(l.s)(o)]=e(),n}),{})}var m=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:m}})),j=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},x=y("justify",(function(){return{type:String,default:null,validator:j}})),w=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},_=y("alignContent",(function(){return{type:String,default:null,validator:w}})),S={align:Object.keys(O),justify:Object.keys(x),alignContent:Object.keys(_)},k={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var o=k[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var A=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},O),{},{justify:{type:String,default:null,validator:j}},x),{},{alignContent:{type:String,default:null,validator:w}},_),render:function(t,e){var n=e.props,data=e.data,r=e.children,l="";for(var f in n)l+=String(n[f]);var d=A.get(l);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var o=n[t],r=C(e,t,o);r&&d.push(r)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),A.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),r)}})},387:function(t,e,n){var content=n(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("97ea31c6",content,!0,{sourceMap:!1})},389:function(t,e,n){"use strict";n.r(e);n(19),n(43),n(252);var o=n(1).a.extend({props:{icon:{type:String,required:!0},translationKey:{type:String,required:!0},link:{type:String,required:!0}},computed:{formattedTooltip:function(){return this.link.replace("https://","").replace("mailto:","")}}}),r=(n(394),n(34)),c=n(36),l=n.n(c),f=n(384),d=n(141),h=n(31),v=n(5),y=n(7),m=Object(v.a)(d.a,h.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(y.c)("v-hover should only contain a single element",this),element)):(Object(y.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),O=n(189),j=(n(18),n(2)),x=(n(396),n(116)),w=n(20),_=n(145),S=n(241),k=n(195),C=n(0),A=Object(v.a)(w.a,d.a,_.a,S.a,k.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(C.f)(this.maxWidth),minWidth:Object(C.f)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(C.l)(this,"activator",!0)&&Object(y.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=x.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===C.n.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(j.a)(t,this.contentClass,!0),Object(j.a)(t,"menuable__content__active",this.isActive),Object(j.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),D=n(398),P=n.n(D),B=n(94),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",xs:"12",sm:"6",lg:"3",align:"center",justify:"center"}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("a",t._g({directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{display:"block"},attrs:{href:t.link,target:"_blank"}},o),[n("v-icon",{attrs:{size:"120",color:r?"primary":""}},[t._v("\n            "+t._s(t.icon)+"\n          ")]),t._v(" "),n("p",{staticClass:"text-subtitle-1"},[t._v("\n            "+t._s(t.$t("page.contact.item."+t.translationKey))+"\n          ")])],1)]}}],null,!0)})]}}])},[t._v(" "),n("span",[t._v(t._s(t.formattedTooltip))])])],1)}),[],!1,null,"e658a1ac",null);e.default=component.exports;l()(component,{VCol:f.a,VHover:m,VIcon:O.a,VTooltip:A}),P()(component,{Ripple:B.a})},394:function(t,e,n){"use strict";n(387)},395:function(t,e,n){(e=n(9)(!1)).push([t.i,"a[data-v-e658a1ac]{outline:none}a[data-v-e658a1ac]::-moz-focus-inner{border:0}",""]),t.exports=e},396:function(t,e,n){var content=n(397);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("dc0628f2",content,!0,{sourceMap:!1})},397:function(t,e,n){(e=n(9)(!1)).push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=e},398:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},430:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(383),c=n(389),l=[{key:"linkedIn",icon:"mdi-linkedin",link:"https://linkedin.com/in/alvarobrey"},{key:"gitHub",icon:"mdi-github",link:"https://github.com/alvarobrey"},{key:"twitter",icon:"mdi-twitter",link:"https://twitter.com/AlvaroBrey_"},{key:"mail",icon:"mdi-email",link:"mailto:alvaro.brv@gmail.com"}],f=o.a.extend({components:{ContactItemDisplay:c.default,BasicPage:r.default},data:function(){return{items:l}}}),d=n(34),h=n(36),v=n.n(h),y=n(385),component=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("BasicPage",{attrs:{title:this.$t("page.contact.title")}},[e("p",{staticClass:"text-body-1"},[this._v("\n    "+this._s(this.$t("page.contact.intro"))+"\n  ")]),this._v(" "),e("v-row",{attrs:{justify:"center",align:"center"}},this._l(this.items,(function(t){return e("ContactItemDisplay",{key:t.key,attrs:{"translation-key":t.key,link:t.link,icon:t.icon}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ContactItemDisplay:n(389).default,BasicPage:n(383).default}),v()(component,{VRow:y.a})}}]);