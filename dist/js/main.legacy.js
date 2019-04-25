/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-04-25 13:05:55
 * Version: 1.6.4
 */

!function(){"use strict";var e=require("./_export");e(e.S+e.F,"Object",{assign:require("./_object-assign")});var t={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:t,title:t,text:e})}},watch:{showUserMenu:function(e){this.toggleBodyMobileFix(e)},showHelpers:function(e){this.toggleBodyMobileFix(e)}}},n=require("./_export"),i=require("./_array-methods")(6),r="findIndex",a=!0;r in[]&&Array(1)[r](function(){a=!1}),n(n.P+n.F*a,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),require("./_add-to-unscopables")(r),require("./_string-html")("link",function(e){return function(t){return e(this,"a","href",t)}});var s=require("./_object-dp").f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||require("./_descriptors")&&s(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}});var c=function(e,t,n,i,r,a,s,o,l,c){"boolean"!=typeof s&&(l=o,o=s,s=!1);var u,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,r&&(d.functional=!0)),i&&(d._scopeId=i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):t&&(u=s?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),u)if(d.functional){var h=d.render;d.render=function(e,t){return u.call(t),h(e,t)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,u):[u]}return n};var u=c({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frame__aside-nav-wrap",class:{"is-expanded":e.expanded}},[e.links?n("ul",{staticClass:"frame__aside-links"},e._l(e.links,function(t,i){return n("li",{key:i,staticClass:"frame__aside-li"},[t.children?n("div",[n(e.expanded&&!t.link?"span":"a",{tag:"component",class:["frame__aside-link frame__aside-link_sub",{"is-active":e.active===i,"no-hover":e.expanded&&!t.link}],attrs:{href:e.expanded&&t.link||""},on:{click:function(n){!t.link&&e.toggleActive(n,i)}}},[t.icon?n("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),n("span",[e._v(e._s(t.name))]),e._v(" "),e.expanded?e._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(t){return e.toggleActive(t,i)}}})]),e._v(" "),n("slide-up-down",{attrs:{show:e.active===i||e.expanded}},[n("ul",{staticClass:"frame__aside-hidden",class:{"has-background":!e.expanded||e.active===i}},e._l(t.children,function(t,i){return n("li",{key:i,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"is-active":t.active}],attrs:{href:t.link||""}},[n("span",{class:{"text-strong":t.active}},[e._v(e._s(t.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":e.active===i}],attrs:{href:t.link||""}},[t.icon?n("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),n("span",[e._v(e._s(t.name))])])])}),0):e._e(),e._v(" "),e._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator:function(e){var t=[];return e.forEach(function e(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(e):t.push(n))}),!t.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",t),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},watch:{links:{handler:function(e){this.active=e.findIndex(function(e){return e.active||e.children&&e.children.some(function(e){return e.active})})},immediate:!0}},methods:{itemActive:function(e){return this.links[e].active||this.expanded||this.hasActiveChildren[e]},toggleActive:function(e,t){e.stopPropagation(),e.preventDefault(),this.expanded||(this.active===t?this.active=null:this.active=t)}}},void 0,!1,void 0,void 0,void 0),d=require("./_global"),h=require("./_has"),v=require("./_cof"),f=require("./_inherit-if-required"),p=require("./_to-primitive"),g=require("./_fails"),_=require("./_object-gopn").f,m=require("./_object-gopd").f,y=require("./_object-dp").f,b=require("./_string-trim").trim,w=d.Number,x=w,E=w.prototype,A="Number"==v(require("./_object-create")(E)),k="trim"in String.prototype,q=function(e){var t=p(e,!1);if("string"==typeof t&&t.length>2){var n,i,r,a=(t=k?t.trim():b(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+t}for(var s,o=t.slice(2),l=0,c=o.length;l<c;l++)if((s=o.charCodeAt(l))<48||s>r)return NaN;return parseInt(o,i)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(A?g(function(){E.valueOf.call(n)}):"Number"!=v(n))?f(new x(q(t)),n,w):q(t)};for(var S,C=require("./_descriptors")?_(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;C.length>O;O++)h(x,S=C[O])&&!h(w,S)&&y(w,S,m(x,S));w.prototype=E,E.constructor=w,require("./_redefine")(d,"Number",w)}var T=c({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isOpened:this.show}},watch:{show:function(e){this.isOpened=e}},methods:{slideDown:function(e,t){var n=this,i=this._getHeight(e),r=(new Date).getTime();e.style.overflow="hidden",e.style.height=0,e.style.opacity=0;this.__animDown=requestAnimationFrame(function a(){var s=(new Date).getTime()-r;if(s<n.slideDownDuration){var o=function(e,t){return(e=e/t-1)*e*e+1}(s,n.slideDownDuration);e.style.height="".concat(Math.round(o*i),"px"),e.style.opacity=o.toFixed(1),n.__animDown=requestAnimationFrame(a)}else e.style.height=null,e.style.opacity=null,e.style.overflow=null,t()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(e,t){var n=this,i=this._getHeight(e);e.style.overflow="hidden";var r=(new Date).getTime();this.__animUp=requestAnimationFrame(function a(){var s=(new Date).getTime()-r;if(s<n.slideUpDuration){var o=1-function(e,t){return(e/=t/2)<1?e*e*e/2:((e-=2)*e*e+2)/2}(s,n.slideUpDuration);e.style.height="".concat(Math.round(o*i),"px"),e.style.opacity=o.toFixed(1),n.__animUp=requestAnimationFrame(a)}else e.style.height=null,e.style.opacity=null,e.style.overflow=null,t()})},stopUp:function(e){cancelAnimationFrame(this.__animUp),e.style.height=null,e.style.opacity=null,e.style.overflow=null},close:function(){this.isOpened=!1,this.$emit("update:show",!1)},open:function(){this.isOpened=!0,this.$emit("update:show",!0)},toggle:function(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)},_getHeight:function(e){if(e.children){for(var t=0,n=e.children,i=0;i<n.length;i++){var r=getComputedStyle(n[i]);t+=n[i].clientHeight+parseInt(r.marginTop)+parseInt(r.marginBottom)}return t}return e.offsetHeight}},render:function(e){return e("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[e(this.tag,{class:"slide-up-down",directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0),N=require("./_an-object"),I=require("./_to-object"),j=require("./_to-length"),F=require("./_to-integer"),D=require("./_advance-string-index"),W=require("./_regexp-exec-abstract"),V=Math.max,M=Math.min,$=Math.floor,L=/\$([$&`']|\d\d?|<[^>]*>)/g,R=/\$([$&`']|\d\d?)/g;require("./_fix-re-wks")("replace",2,function(e,t,n,i){return[function(i,r){var a=e(this),s=null==i?void 0:i[t];return void 0!==s?s.call(i,a,r):n.call(String(a),i,r)},function(e,t){var a=i(n,e,this,t);if(a.done)return a.value;var s=N(e),o=String(this),l="function"==typeof t;l||(t=String(t));var c=s.global;if(c){var u=s.unicode;s.lastIndex=0}for(var d=[];;){var h=W(s,o);if(null===h)break;if(d.push(h),!c)break;""===String(h[0])&&(s.lastIndex=D(o,j(s.lastIndex),u))}for(var v,f="",p=0,g=0;g<d.length;g++){h=d[g];for(var _=String(h[0]),m=V(M(F(h.index),o.length),0),y=[],b=1;b<h.length;b++)y.push(void 0===(v=h[b])?v:String(v));var w=h.groups;if(l){var x=[_].concat(y,m,o);void 0!==w&&x.push(w);var E=String(t.apply(void 0,x))}else E=r(_,o,m,y,w,t);m>=p&&(f+=o.slice(p,m)+E,p=m+_.length)}return f+o.slice(p)}];function r(e,t,i,r,a,s){var o=i+e.length,l=r.length,c=R;return void 0!==a&&(a=I(a),c=L),n.call(s,c,function(n,s){var c;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(o);case"<":c=a[s.slice(1,-1)];break;default:var u=+s;if(0===u)return n;if(u>l){var d=$(u/10);return 0===d?n:d<=l?void 0===r[d-1]?s.charAt(1):r[d-1]+s.charAt(1):n}c=r[u-1]}return void 0===c?"":c})}});var U=require("./_is-regexp"),H=require("./_an-object"),B=require("./_species-constructor"),P=require("./_advance-string-index"),G=require("./_to-length"),X=require("./_regexp-exec-abstract"),Y=require("./_regexp-exec"),z=require("./_fails"),K=Math.min,J=[].push,Q=!z(function(){});require("./_fix-re-wks")("split",2,function(e,t,n,i){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!U(e))return n.call(i,e,t);for(var r,a,s,o=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),c=0,u=void 0===t?4294967295:t>>>0,d=new RegExp(e.source,l+"g");(r=Y.call(d,i))&&!((a=d.lastIndex)>c&&(o.push(i.slice(c,r.index)),r.length>1&&r.index<i.length&&J.apply(o,r.slice(1)),s=r[0].length,c=a,o.length>=u));)d.lastIndex===r.index&&d.lastIndex++;return c===i.length?!s&&d.test("")||o.push(""):o.push(i.slice(c)),o.length>u?o.slice(0,u):o}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var a=e(this),s=null==n?void 0:n[t];return void 0!==s?s.call(n,a,i):r.call(String(a),n,i)},function(e,t){var a=i(r,e,this,t,r!==n);if(a.done)return a.value;var s=H(e),o=String(this),l=B(s,RegExp),c=s.unicode,u=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(Q?"y":"g"),d=new l(Q?s:"^(?:"+s.source+")",u),h=void 0===t?4294967295:t>>>0;if(0===h)return[];if(0===o.length)return null===X(d,o)?[o]:[];for(var v=0,f=0,p=[];f<o.length;){d.lastIndex=Q?f:0;var g,_=X(d,Q?o:o.slice(f));if(null===_||(g=K(G(d.lastIndex+(Q?0:f)),o.length))===v)f=P(o,f,c);else{if(p.push(o.slice(v,f)),p.length===h)return p;for(var m=1;m<=_.length-1;m++)if(p.push(_[m]),p.length===h)return p;f=v=g}}return p.push(o.slice(v)),p}]});var Z=c({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{attrs:{"data-language":e.language}},[n("button",{staticClass:"hljs-copy has-wave",on:{click:function(t){return e.copy(e.$refs.code)}}},[e._v(e._s(e.$lang.CODE_COPY)),n("span",{staticClass:"wave"})]),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement;return(this._self._c||e)("code",{ref:"code",class:this.language+" language-"+this.language},[this._t("default")],2)}]},void 0,{name:"code-block",props:{language:String},methods:{copy:function(e){var t=document,n=t.createElement("TEXTAREA");n.id="copy-text",n.style.height=0,n.position="fixed",t.body.appendChild(n);try{n.value=e.innerText.split("\n").filter(function(e){return""!==e&&"\t"!==e}).join("\n"),n.select(),t.execCommand("copy"),AWES.notify({message:AWES.lang.CODE_COPIED_MSG})}catch(e){AWES.notify({status:"error",message:e.message})}finally{t.body.removeChild(n)}},escapeHTML:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},loadHighlight:function(e){AWES.utils.loadModules({highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb:e}})},initHighlight:function(){var e=this.$refs.code,t=this.escapeHTML(e.innerText);this.$refs.code.innerHTML=hljs.lineNumbersValue(t),hljs.highlightBlock(e)}},mounted:function(){var e=this;this.$nextTick(function(){e.loadHighlight(e.initHighlight)})}},void 0,!1,void 0,void 0,void 0);var ee={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(t),Vue.component("content-placeholder",{functional:!0,render:function(e){return null}}),Vue.component("frame-nav",u),Vue.component("slide-up-down",T),Vue.component("code-block",Z))}},te={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard",CONTENT_EMPTY:"No data",CONTENT_ERROR:"Error",CONTENT_LOADING:"Loading..."},ne=require("./_an-object"),ie=require("./_to-length"),re=require("./_advance-string-index"),ae=require("./_regexp-exec-abstract");function se(){var e=document.querySelectorAll('pre > code[class^="language"]');e&&e.forEach(function(e){var t=e.parentElement,n=t.parentElement,i=e.className.match(/language-([a-z]*)/),r=document.createElement("code-block");r.setAttribute("language",i[1]),r.innerText=e.innerText,n.replaceChild(r,t),t=null,n=null,r=null})}require("./_fix-re-wks")("match",1,function(e,t,n,i){return[function(n){var i=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,i):new RegExp(n)[t](String(i))},function(e){var t=i(n,e,this);if(t.done)return t.value;var r=ne(e),a=String(this);if(!r.global)return ae(r,a);var s=r.unicode;r.lastIndex=0;for(var o,l=[],c=0;null!==(o=ae(r,a));){var u=String(o[0]);l[c]=u,""===u&&(r.lastIndex=re(a,ie(r.lastIndex),s)),c++}return 0===c?null:l}]});var oe=require("./_string-at")(!0);require("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=oe(t,n),this._i+=e.length,{value:e,done:!1})});var le=require("./_ctx"),ce=require("./_export"),ue=require("./_to-object"),de=require("./_iter-call"),he=require("./_is-array-iter"),ve=require("./_to-length"),fe=require("./_create-property"),pe=require("./core.get-iterator-method");function ge(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}ce(ce.S+ce.F*!require("./_iter-detect")(function(e){}),"Array",{from:function(e){var t,n,i,r,a=ue(e),s="function"==typeof this?this:Array,o=arguments.length,l=o>1?arguments[1]:void 0,c=void 0!==l,u=0,d=pe(a);if(c&&(l=le(l,o>2?arguments[2]:void 0,2)),null==d||s==Array&&he(d))for(n=new s(t=ve(a.length));t>u;u++)fe(n,u,c?l(a[u],u):a[u]);else for(r=d.call(a),n=new s;!(i=r.next()).done;u++)fe(n,u,c?de(r,l,[i.value,u],!0):i.value);return n.length=u,n}});var _e=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&(this.initElObserver(),this.addElements(),this.initRootObserver(t))}var t,n,i;return t=e,i=[{key:"showWave",value:function(t){var n=this.__AWES_WAVE__,i=n.wave;n.active?(clearTimeout(this._tm),e.resetWave(this)):this.__AWES_WAVE__.active=!0,i.style.cssText="\n            transition: transform ".concat(600,"ms ease, opacity ").concat(600,"ms ease;\n            opacity: 0.5;\n            transform: translate(-50%, -50%) scale(2);\n            top: ").concat(t.offsetY,"px;\n            left: ").concat(t.offsetX,"px\n        ")}},{key:"hideWave",value:function(t){var n=this;this.__AWES_WAVE__.wave.style.opacity="0",this._tm=setTimeout(function(){n.__AWES_WAVE__.active=!1,e.resetWave(n)},400)}},{key:"resetWave",value:function(e){e.__AWES_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete e._tm}}],(n=[{key:"addElements",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=e.querySelectorAll(t.selector),this._elements&&Array.from(this._elements).forEach(this.addElement,this)}},{key:"addElement",value:function(t){if(!t.__AWES_WAVE__){t.classList.contains("has-wave")||t.classList.add("has-wave"),this._elObserver.observe(t,{attributes:!0,attributeFilter:["class"]});var n=t.querySelector("span.wave");n||((n=document.createElement("span")).classList.add("wave"),t.appendChild(n)),t.__AWES_WAVE__={wave:n,active:!1},e.resetWave(t),t.addEventListener("mousedown",e.showWave,!1),t.addEventListener("mouseup",e.hideWave,!1)}}},{key:"initElObserver",value:function(){this._elObserver=new MutationObserver(function(e){e.forEach(function(e){var t=e.target,n=t.className;/has-wave/.test(n)||(t.className=n?n+" has-wave":"has-wave")})})}},{key:"initRootObserver",value:function(e){var t=this;this._rootObserver=new MutationObserver(function(e){clearTimeout(t.__tm),t.__tm=setTimeout(t.addElements.bind(t),300)}),this._rootObserver.observe(e,{childList:!0,subtree:!0})}}])&&ge(t.prototype,n),i&&ge(t,i),e}(),me={name:"indigo-layout",version:"1.6.4",modules:{"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb:function(){Vue.use(VueShortkey)}},"v-tooltip":{src:"https://unpkg.com/v-tooltip/dist/v-tooltip.min.js",deps:["vue"],cb:function(){VTooltip.default.options.defaultClass="theme-default",VTooltip.default.options.popover=Object.assign(VTooltip.default.options.popover,{defaultPlacement:"right",defaultAutoHide:!1,defaultTrigger:"manual",defaultPopperOptions:{modifiers:{flip:{behavior:["right","top"]}}}})}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb:function(){Vue.use(VueTabs)}}},install:function(e){e.lang=te,se(),e.on("core:popstate",se),e._watchedNames.push("code-block"),Vue.use(ee),e.once("core:inited",function(){e.Waves=new _e(document.body)})}};window&&"AWES"in window?AWES.use(me):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(me))}();
