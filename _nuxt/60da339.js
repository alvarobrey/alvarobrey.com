(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(19),n(58);function r(){var t=localStorage.getItem("alvarobrey.com.darkTheme");return t?"true"===t:!(!window.matchMedia||!window.matchMedia("(prefers-color-scheme: dark)").matches)}function o(t){localStorage.setItem("alvarobrey.com.darkTheme",t.toString())}},156:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({props:{title:{type:String,default:void 0}}}),o=n(25),c=n(24),l=n.n(c),d=n(341),f=n(342),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"10",lg:"8"}},[this._t("title",[this.title?e("h4",{staticClass:"text-h4 primary--text",domProps:{textContent:this._s(this.title)}}):this._e()]),this._v(" "),this._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VRow:f.a})},195:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(97),c=r.a.extend({props:{value:{type:Boolean,default:!1}},computed:{isOpen:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},items:function(){return o.b}}}),l=n(25),d=n(24),f=n.n(d),v=n(343),m=n(192),h=n(116),_=n(60),x=n(351),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title primary--text"},[t._v("\n        Álvaro Brey\n      ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",nuxt:"",to:t.localePath({name:e.routeName})}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(t.$t("nav."+e.translationKey))+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VDivider:v.a,VList:m.a,VListItem:h.a,VListItemContent:_.a,VListItemTitle:_.b,VNavigationDrawer:x.a})},196:function(t,e,n){"use strict";n.r(e);n(30);var r=n(1),o=n(197),c=n(97),l=n(198),d=n(199),f=r.a.extend({name:"Header",components:{DarkModeSwitcher:l.default,HeaderNav:o.default,LocaleSelector:d.default},computed:{shouldShowNav:function(){return!Object(c.a)(this.$nuxt.$route.name)},isMobile:function(){return this.$nuxt.$vuetify.breakpoint.smAndDown}}}),v=(n(323),n(25)),m=n(24),h=n.n(m),_=n(352),x=n(345),y=n(346),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"main-app-bar",attrs:{flat:!t.isMobile,app:""}},[t.shouldShowNav?[t.isMobile?n("v-app-bar-nav-icon",{on:{click:function(e){return t.$emit("toggle-sidebar",!0)}}}):n("HeaderNav")]:t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"right-controls d-flex align-center"},[n("DarkModeSwitcher"),t._v(" "),n("LocaleSelector")],1)],2)],1)}),[],!1,null,"bcf9f13a",null);e.default=component.exports;h()(component,{HeaderNav:n(197).default,DarkModeSwitcher:n(198).default,LocaleSelector:n(199).default}),h()(component,{VAppBar:_.a,VAppBarNavIcon:x.a,VSpacer:y.a})},197:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(97),c=r.a.extend({name:"HeaderNav",computed:{pages:function(){return o.b}}}),l=n(25),d=n(24),f=n.n(d),v=n(344),m=n(350),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{optional:"",centered:""}},t._l(t.pages,(function(e){return n("v-tab",{key:e.routeName,attrs:{nuxt:"",to:t.localePath({name:e.routeName})},domProps:{textContent:t._s(t.$t("nav."+e.translationKey))}})})),1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VTab:v.a,VTabs:m.a})},198:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(114),c=n(153),l=r.a.extend({name:"DarkModeSwitcher",data:function(){return{icons:{mdiWhiteBalanceSunny:o.h,mdiMoonWaningCrescent:o.f}}},computed:{isDark:{get:function(){return this.$vuetify.theme.dark},set:function(t){this.setValue(t)}}},methods:{setValue:function(t){this.$vuetify.theme.dark=t,Object(c.b)(t)}}}),d=n(25),f=n(24),v=n.n(f),m=n(349),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-switch",{staticClass:"ma-0",attrs:{"hide-details":"","aria-label":t.$t("aria.darkMode"),"prepend-icon":t.icons.mdiWhiteBalanceSunny,"append-icon":t.icons.mdiMoonWaningCrescent,color:"primary"},model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VSwitch:m.a})},199:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(114),c=r.a.extend({name:"LanguageSelector",data:function(){return{menuOpen:!1,icons:{mdiChevronDown:o.a}}},computed:{availableLocales:function(){return this.$i18n.availableLocales},currentLocale:function(){return this.$i18n.locale}},methods:{switchLocale:function(t){this.$router.push(this.switchLocalePath(t))}}}),l=(n(321),n(25)),d=n(24),f=n.n(d),v=n(118),m=n(193),h=n(192),_=n(116),x=n(60),y=n(353),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{id:"locale-btn",elevation:"0",color:"transparent"}},r),[n("span",{domProps:{textContent:t._s(t.currentLocale.toUpperCase())}}),t._v(" "),n("v-icon",{class:{flipped:t.menuOpen},attrs:{right:""}},[t._v("\n        "+t._s(t.icons.mdiChevronDown)+"\n      ")])],1)]}}]),model:{value:t.menuOpen,callback:function(e){t.menuOpen=e},expression:"menuOpen"}},[t._v(" "),n("v-list",{staticClass:"py-0"},t._l(t.availableLocales,(function(e){return n("v-list-item",{key:e,on:{click:function(n){return t.switchLocale(e)}}},[n("v-list-item-title",{domProps:{textContent:t._s(e.toUpperCase())}})],1)})),1)],1)}),[],!1,null,"036cfdff",null);e.default=component.exports;f()(component,{VBtn:v.a,VIcon:m.a,VList:h.a,VListItem:_.a,VListItemTitle:x.b,VMenu:y.a})},243:function(t,e,n){},245:function(t,e,n){},250:function(t,e,n){"use strict";var r=n(195),o=n(153),c=n(196),l={components:{SidebarNav:r.default,Header:c.default},data:function(){return{sidebarOpen:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.$nextTick((function(){t.$vuetify.theme.dark=Object(o.a)()}))}))},methods:{toggleSidebar:function(){this.sidebarOpen=!this.sidebarOpen}}},d=n(25),f=n(24),v=n.n(f),m=n(347),h=n(354),_=n(348),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app"},[n("Header",{on:{"toggle-sidebar":t.toggleSidebar}}),t._v(" "),n("SidebarNav",{model:{value:t.sidebarOpen,callback:function(e){t.sidebarOpen=e},expression:"sidebarOpen"}}),t._v(" "),n("v-main",{staticClass:"text-body-1"},[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{Header:n(196).default,SidebarNav:n(195).default}),v()(component,{VApp:m.a,VContainer:h.a,VMain:_.a})},254:function(t,e,n){n(255),t.exports=n(256)},298:function(t,e,n){},299:function(t,e,n){},321:function(t,e,n){"use strict";n(243)},323:function(t,e,n){"use strict";n(245)},81:function(t,e,n){"use strict";var r=n(156),o={components:{BasicPage:r.default},props:{error:{type:Object,default:null}},computed:{title:function(){return 404===this.error.statusCode?this.$tc("error.404.title"):this.$tc("error.other.title")},description:function(){return 404===this.error.statusCode?this.$tc("error.404.description"):this.$tc("error.other.description")}},head:function(){return{title:this.title}}},c=n(25),l=n(24),d=n.n(l),f=n(118),v=n(342),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BasicPage",{attrs:{title:t.title}},[n("p",{staticClass:"text-subtitle-2 mb-8"},[t._v(t._s(t.description))]),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{color:"primary",to:t.localePath({name:"home"}),nuxt:""}},[t._v("\n      "+t._s(t.$t("nav.home"))+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{BasicPage:n(156).default}),d()(component,{VBtn:f.a,VRow:v.a})},97:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(191),n(47);var r=Object.freeze([{translationKey:"home",routeName:"index"},{translationKey:"me",routeName:"me"},{translationKey:"cv",routeName:"cv"},{translationKey:"contact",routeName:"contact"},{translationKey:"about",routeName:"about"}]);function o(t){return null==t?void 0:t.startsWith("index")}}},[[254,7,1,8]]]);