/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-06-14 18:57:45
 * Version: 1.9.4
 */

!function(){"use strict";var e=require("./_export");e(e.S+e.F,"Object",{assign:require("./_object-assign")});var t={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:t,title:t,text:e})}},watch:{showUserMenu:function(e){this.toggleBodyMobileFix(e)},showHelpers:function(e){this.toggleBodyMobileFix(e)}}},n=require("./_export"),i=require("./_array-methods")(6),r="findIndex",s=!0;r in[]&&Array(1)[r](function(){s=!1}),n(n.P+n.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),require("./_add-to-unscopables")(r),require("./_string-html")("link",function(e){return function(t){return e(this,"a","href",t)}});var a=require("./_object-dp").f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||require("./_descriptors")&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}});var c=function(e,t,n,i,r,s,a,o,l,c){"boolean"!=typeof a&&(l=o,o=a,a=!1);var u,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,r&&(d.functional=!0)),i&&(d._scopeId=i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):t&&(u=a?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),u)if(d.functional){var h=d.render;d.render=function(e,t){return u.call(t),h(e,t)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,u):[u]}return n};var u=c({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frame__aside-nav-wrap",class:{"is-expanded":e.expanded}},[e.links?n("ul",{staticClass:"frame__aside-links"},e._l(e.links,function(t,i){return n("li",{key:i,staticClass:"frame__aside-li"},[t.children?n("div",[n(e.expanded&&!t.link?"span":"a",{tag:"component",class:["frame__aside-link frame__aside-link_sub",{"is-active":e.active===i,"no-hover":e.expanded&&!t.link}],attrs:{href:e.expanded&&t.link||""},on:{click:function(n){!t.link&&e.toggleActive(n,i)}}},[t.icon?n("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),n("span",[e._v(e._s(t.name))]),e._v(" "),e.expanded?e._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(t){return e.toggleActive(t,i)}}})]),e._v(" "),n("slide-up-down",{attrs:{show:e.active===i||e.expanded}},[n("ul",{staticClass:"frame__aside-hidden",class:{"has-background":!e.expanded||e.active===i}},e._l(t.children,function(t,i){return n("li",{key:i,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"is-active":t.active}],attrs:{href:t.link||""}},[n("span",{class:{"text-strong":t.active}},[e._v(e._s(t.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":e.active===i}],attrs:{href:t.link||""}},[t.icon?n("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),n("span",[e._v(e._s(t.name))])])])}),0):e._e(),e._v(" "),e._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator:function(e){var t=[];return e.forEach(function e(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(e):t.push(n))}),!t.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",t),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},watch:{links:{handler:function(e){this.active=e.findIndex(function(e){return e.active||e.children&&e.children.some(function(e){return e.active})})},immediate:!0}},methods:{itemActive:function(e){return this.links[e].active||this.expanded||this.hasActiveChildren[e]},toggleActive:function(e,t){e.stopPropagation(),e.preventDefault(),this.expanded||(this.active===t?this.active=null:this.active=t)}}},void 0,!1,void 0,void 0,void 0),d=require("./_global"),h=require("./_has"),v=require("./_cof"),f=require("./_inherit-if-required"),p=require("./_to-primitive"),_=require("./_fails"),g=require("./_object-gopn").f,m=require("./_object-gopd").f,y=require("./_object-dp").f,b=require("./_string-trim").trim,w=d.Number,E=w,x=w.prototype,A="Number"==v(require("./_object-create")(x)),k="trim"in String.prototype,q=function(e){var t=p(e,!1);if("string"==typeof t&&t.length>2){var n,i,r,s=(t=k?t.trim():b(t,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+t}for(var a,o=t.slice(2),l=0,c=o.length;l<c;l++)if((a=o.charCodeAt(l))<48||a>r)return NaN;return parseInt(o,i)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(A?_(function(){x.valueOf.call(n)}):"Number"!=v(n))?f(new E(q(t)),n,w):q(t)};for(var S,C=require("./_descriptors")?g(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;C.length>O;O++)h(E,S=C[O])&&!h(w,S)&&y(w,S,m(E,S));w.prototype=x,x.constructor=w,require("./_redefine")(d,"Number",w)}var N=c({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isOpened:this.show}},watch:{show:function(e){this.isOpened=e}},methods:{slideDown:function(e,t){var n=this,i=this._getHeight(e),r=(new Date).getTime();e.style.overflow="hidden",e.style.height=0,e.style.opacity=0;this.__animDown=requestAnimationFrame(function s(){var a=(new Date).getTime()-r;if(a<n.slideDownDuration){var o=function(e,t){return(e=e/t-1)*e*e+1}(a,n.slideDownDuration);e.style.height="".concat(Math.round(o*i),"px"),e.style.opacity=o.toFixed(1),n.__animDown=requestAnimationFrame(s)}else e.style.height=null,e.style.opacity=null,e.style.overflow=null,t()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(e,t){var n=this,i=this._getHeight(e);e.style.overflow="hidden";var r=(new Date).getTime();this.__animUp=requestAnimationFrame(function s(){var a=(new Date).getTime()-r;if(a<n.slideUpDuration){var o=1-function(e,t){return(e/=t/2)<1?e*e*e/2:((e-=2)*e*e+2)/2}(a,n.slideUpDuration);e.style.height="".concat(Math.round(o*i),"px"),e.style.opacity=o.toFixed(1),n.__animUp=requestAnimationFrame(s)}else e.style.height=null,e.style.opacity=null,e.style.overflow=null,t()})},stopUp:function(e){cancelAnimationFrame(this.__animUp),e.style.height=null,e.style.opacity=null,e.style.overflow=null},close:function(){this.isOpened=!1,this.$emit("update:show",!1)},open:function(){this.isOpened=!0,this.$emit("update:show",!0)},toggle:function(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)},_getHeight:function(e){if(e.children){for(var t=0,n=e.children,i=0;i<n.length;i++){var r=getComputedStyle(n[i]);t+=n[i].clientHeight+parseInt(r.marginTop)+parseInt(r.marginBottom)}return t}return e.offsetHeight}},render:function(e){return e("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[e(this.tag,{class:"slide-up-down",directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0),T=require("./_is-regexp"),I=require("./_an-object"),j=require("./_species-constructor"),F=require("./_advance-string-index"),D=require("./_to-length"),W=require("./_regexp-exec-abstract"),V=require("./_regexp-exec"),M=require("./_fails"),L=Math.min,R=[].push,$=!M(function(){});require("./_fix-re-wks")("split",2,function(e,t,n,i){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!T(e))return n.call(i,e,t);for(var r,s,a,o=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=void 0===t?4294967295:t>>>0,d=new RegExp(e.source,l+"g");(r=V.call(d,i))&&!((s=d.lastIndex)>c&&(o.push(i.slice(c,r.index)),r.length>1&&r.index<i.length&&R.apply(o,r.slice(1)),a=r[0].length,c=s,o.length>=u));)d.lastIndex===r.index&&d.lastIndex++;return c===i.length?!a&&d.test("")||o.push(""):o.push(i.slice(c)),o.length>u?o.slice(0,u):o}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var s=e(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,s,i):r.call(String(s),n,i)},function(e,t){var s=i(r,e,this,t,r!==n);if(s.done)return s.value;var a=I(e),o=String(this),l=j(a,RegExp),c=a.unicode,u=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+($?"y":"g"),d=new l($?a:"^(?:"+a.source+")",u),h=void 0===t?4294967295:t>>>0;if(0===h)return[];if(0===o.length)return null===W(d,o)?[o]:[];for(var v=0,f=0,p=[];f<o.length;){d.lastIndex=$?f:0;var _,g=W(d,$?o:o.slice(f));if(null===g||(_=L(D(d.lastIndex+($?0:f)),o.length))===v)f=F(o,f,c);else{if(p.push(o.slice(v,f)),p.length===h)return p;for(var m=1;m<=g.length-1;m++)if(p.push(g[m]),p.length===h)return p;f=v=_}}return p.push(o.slice(v)),p}]});var U=c({render:function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{attrs:{"data-language":this.language}},[t("button",{staticClass:"hljs-copy has-wave",on:{click:this.copy}},[this._v(this._s(this.$lang.CODE_COPY)),t("span",{staticClass:"wave"})]),t("code",{pre:!0},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"code-block",props:{language:String},methods:{copy:function(){var e=document,t=e.createElement("TEXTAREA"),n=this.$el.querySelector("code");t.id="copy-text",t.style.height=0,t.position="fixed",e.body.appendChild(t);try{t.value=n.innerText.split("\n").filter(function(e){return""!==e&&"\t"!==e}).join("\n"),t.select(),e.execCommand("copy"),AWES.notify({message:AWES.lang.CODE_COPIED_MSG})}catch(e){AWES.notify({status:"error",message:e.message})}finally{e.body.removeChild(t)}},loadHighlight:function(e){AWES.utils.loadModules({highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb:e}})},initHighlight:function(){var e=this.$el.querySelector("code");e.className="".concat(this.language),hljs.highlightBlock(e),hljs.lineNumbersBlock(e)}},mounted:function(){var e=this;this.$nextTick(function(){e.loadHighlight(e.initHighlight)})}},void 0,!1,void 0,void 0,void 0);var H={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(t),Vue.component("content-placeholder",{functional:!0,render:function(e){return null}}),Vue.component("frame-nav",u),Vue.component("slide-up-down",N),Vue.component("code-block",U))}},B={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard",CONTENT_EMPTY:"No data",CONTENT_ERROR:"Error",CONTENT_LOADING:"Loading..."},P=require("./_an-object"),G=require("./_to-length"),X=require("./_advance-string-index"),Y=require("./_regexp-exec-abstract");function z(){var e=document.querySelectorAll('pre > code[class^="language"]');e&&e.forEach(function(e){var t=e.parentElement,n=t.parentElement,i=e.className.match(/language-([a-z]*)/),r=document.createElement("code-block");r.setAttribute("language",i[1]),r.innerHTML="<template v-pre>"+e.innerHTML+"</template>",n.replaceChild(r,t),t=null,n=null,r=null})}require("./_fix-re-wks")("match",1,function(e,t,n,i){return[function(n){var i=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,i):new RegExp(n)[t](String(i))},function(e){var t=i(n,e,this);if(t.done)return t.value;var r=P(e),s=String(this);if(!r.global)return Y(r,s);var a=r.unicode;r.lastIndex=0;for(var o,l=[],c=0;null!==(o=Y(r,s));){var u=String(o[0]);l[c]=u,""===u&&(r.lastIndex=X(s,G(r.lastIndex),a)),c++}return 0===c?null:l}]});var K=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=K(t,n),this._i+=e.length,{value:e,done:!1})});var J=require("./_ctx"),Q=require("./_export"),Z=require("./_to-object"),ee=require("./_iter-call"),te=require("./_is-array-iter"),ne=require("./_to-length"),ie=require("./_create-property"),re=require("./core.get-iterator-method");function se(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Q(Q.S+Q.F*!require("./_iter-detect")(function(e){}),"Array",{from:function(e){var t,n,i,r,s=Z(e),a="function"==typeof this?this:Array,o=arguments.length,l=o>1?arguments[1]:void 0,c=void 0!==l,u=0,d=re(s);if(c&&(l=J(l,o>2?arguments[2]:void 0,2)),null==d||a==Array&&te(d))for(n=new a(t=ne(s.length));t>u;u++)ie(n,u,c?l(s[u],u):s[u]);else for(r=d.call(s),n=new a;!(i=r.next()).done;u++)ie(n,u,c?ee(r,l,[i.value,u],!0):i.value);return n.length=u,n}});var ae=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&(this.initElObserver(),this.addElements(),this.initRootObserver(t))}var t,n,i;return t=e,i=[{key:"showWave",value:function(t){var n=this.__AWES_WAVE__,i=n.wave;n.active?(clearTimeout(this._tm),e.resetWave(this)):this.__AWES_WAVE__.active=!0,i.style.cssText="\n            transition: transform ".concat(600,"ms ease, opacity ").concat(600,"ms ease;\n            opacity: 0.5;\n            transform: translate(-50%, -50%) scale(2);\n            top: ").concat(t.offsetY,"px;\n            left: ").concat(t.offsetX,"px\n        ")}},{key:"hideWave",value:function(t){var n=this;this.__AWES_WAVE__.wave.style.opacity="0",this._tm=setTimeout(function(){n.__AWES_WAVE__.active=!1,e.resetWave(n)},400)}},{key:"resetWave",value:function(e){e.__AWES_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete e._tm}}],(n=[{key:"addElements",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=e.querySelectorAll(t.selector),this._elements&&Array.from(this._elements).forEach(this.addElement,this)}},{key:"addElement",value:function(t){if(!t.__AWES_WAVE__){t.classList.contains("has-wave")||t.classList.add("has-wave"),this._elObserver.observe(t,{attributes:!0,attributeFilter:["class"]});var n=t.querySelector("span.wave");n||((n=document.createElement("span")).classList.add("wave"),t.appendChild(n)),t.__AWES_WAVE__={wave:n,active:!1},e.resetWave(t),t.addEventListener("mousedown",e.showWave,!1),t.addEventListener("mouseup",e.hideWave,!1)}}},{key:"initElObserver",value:function(){this._elObserver=new MutationObserver(function(e){e.forEach(function(e){var t=e.target,n=t.className;/has-wave/.test(n)||(t.className=n?n+" has-wave":"has-wave")})})}},{key:"initRootObserver",value:function(e){var t=this;this._rootObserver=new MutationObserver(function(e){clearTimeout(t.__tm),t.__tm=setTimeout(t.addElements.bind(t),300)}),this._rootObserver.observe(e,{childList:!0,subtree:!0})}}])&&se(t.prototype,n),i&&se(t,i),e}(),oe={name:"indigo-layout",version:"1.9.4",modules:{"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb:function(){Vue.use(VueShortkey)}},"v-tooltip":{src:"https://unpkg.com/v-tooltip@2/dist/v-tooltip.min.js",deps:["vue"],cb:function(){VTooltip.default.options.defaultClass="theme-default",VTooltip.default.options.popover=Object.assign(VTooltip.default.options.popover,{defaultPlacement:"right",defaultAutoHide:!1,defaultTrigger:"manual",defaultPopperOptions:{modifiers:{flip:{behavior:["right","top"]}}}})}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs@0/dist/vue-tabs.min.js",deps:["vue"],cb:function(){Vue.use(VueTabs)}}},install:function(e){e.lang=B,z(),e.on("core:popstate",z),e._watchedNames.push("code-block"),Vue.use(H),e.once("core:inited",function(){e.Waves=new ae(document.body)})}};window&&"AWES"in window?AWES.use(oe):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(oe))}();
