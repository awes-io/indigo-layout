/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-02-04
 * Version: 0.0.8
 */

!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){var e=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=e)}),n=(e.version,t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),i=t(function(t){var i=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:e.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),r=0,o=Math.random(),s=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+o).toString(36))},a=t(function(t){var e=i("wks"),r=n.Symbol,o="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=o&&r[t]||(o?r:s)("Symbol."+t))}).store=e}),c=function(t){return"object"==typeof t?null!==t:"function"==typeof t},u=function(t){if(!c(t))throw TypeError(t+" is not an object!");return t},l=function(t){try{return!!t()}catch(t){return!0}},f=!l(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),p=n.document,d=c(p)&&c(p.createElement),h=function(t){return d?p.createElement(t):{}},v=!f&&!l(function(){return 7!=Object.defineProperty(h("div"),"a",{get:function(){return 7}}).a}),g=function(t,e){if(!c(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!c(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!c(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!c(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},m=Object.defineProperty,y={f:f?Object.defineProperty:function(t,e,n){if(u(t),e=g(e,!0),u(n),v)try{return m(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},w=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b=f?function(t,e,n){return y.f(t,e,w(1,n))}:function(t,e,n){return t[e]=n,t},S=a("unscopables"),k=Array.prototype;null==k[S]&&b(k,S,{});var O=function(t){k[S][t]=!0},j=function(t,e){return{value:e,done:!!t}},A={},E={}.toString,L=function(t){return E.call(t).slice(8,-1)},x=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==L(t)?t.split(""):Object(t)},F=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},T=function(t){return x(F(t))},C={}.hasOwnProperty,D=function(t,e){return C.call(t,e)},M=t(function(t){var i=s("src"),r=Function.toString,o=(""+r).split("toString");e.inspectSource=function(t){return r.call(t)},(t.exports=function(t,e,r,s){var a="function"==typeof r;a&&(D(r,"name")||b(r,"name",e)),t[e]!==r&&(a&&(D(r,i)||b(r,i,t[e]?""+t[e]:o.join(String(e)))),t===n?t[e]=r:s?t[e]?t[e]=r:b(t,e,r):(delete t[e],b(t,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[i]||r.call(this)})}),N=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}},V=function(t,i,r){var o,s,a,c,u=t&V.F,l=t&V.G,f=t&V.S,p=t&V.P,d=t&V.B,h=l?n:f?n[i]||(n[i]={}):(n[i]||{}).prototype,v=l?e:e[i]||(e[i]={}),g=v.prototype||(v.prototype={});for(o in l&&(r=i),r)a=((s=!u&&h&&void 0!==h[o])?h:r)[o],c=d&&s?N(a,n):p&&"function"==typeof a?N(Function.call,a):a,h&&M(h,o,a,t&V.U),v[o]!=a&&b(v,o,c),p&&g[o]!=a&&(g[o]=a)};n.core=e,V.F=1,V.G=2,V.S=4,V.P=8,V.B=16,V.W=32,V.U=64,V.R=128;var P=V,I=Math.ceil,$=Math.floor,R=function(t){return isNaN(t=+t)?0:(t>0?$:I)(t)},U=Math.min,B=Math.max,G=Math.min,q=function(t){return function(e,n,i){var r,o,s=T(e),a=(r=s.length)>0?U(R(r),9007199254740991):0,c=function(t,e){return(t=R(t))<0?B(t+e,0):G(t,e)}(i,a);if(t&&n!=n){for(;a>c;)if((o=s[c++])!=o)return!0}else for(;a>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}},H=i("keys"),W=function(t){return H[t]||(H[t]=s(t))},X=q(!1),z=W("IE_PROTO"),Y=function(t,e){var n,i=T(t),r=0,o=[];for(n in i)n!=z&&D(i,n)&&o.push(n);for(;e.length>r;)D(i,n=e[r++])&&(~X(o,n)||o.push(n));return o},K="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),J=Object.keys||function(t){return Y(t,K)},Q=f?Object.defineProperties:function(t,e){u(t);for(var n,i=J(e),r=i.length,o=0;r>o;)y.f(t,n=i[o++],e[n]);return t},Z=n.document,tt=Z&&Z.documentElement,et=W("IE_PROTO"),nt=function(){},it=function(){var t,e=h("iframe"),n=K.length;for(e.style.display="none",tt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),it=t.F;n--;)delete it.prototype[K[n]];return it()},rt=Object.create||function(t,e){var n;return null!==t?(nt.prototype=u(t),n=new nt,nt.prototype=null,n[et]=t):n=it(),void 0===e?n:Q(n,e)},ot=y.f,st=a("toStringTag"),at=function(t,e,n){t&&!D(t=n?t:t.prototype,st)&&ot(t,st,{configurable:!0,value:e})},ct={};b(ct,a("iterator"),function(){return this});var ut=function(t,e,n){t.prototype=rt(ct,{next:w(1,n)}),at(t,e+" Iterator")},lt=function(t){return Object(F(t))},ft=W("IE_PROTO"),pt=Object.prototype,dt=Object.getPrototypeOf||function(t){return t=lt(t),D(t,ft)?t[ft]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?pt:null},ht=a("iterator"),vt=!([].keys&&"next"in[].keys()),gt=function(){return this},mt=function(t,e,n,i,r,o,s){ut(n,e,i);var a,c,u,l=function(t){if(!vt&&t in h)return h[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",p="values"==r,d=!1,h=t.prototype,v=h[ht]||h["@@iterator"]||r&&h[r],g=v||l(r),m=r?p?l("entries"):g:void 0,y="Array"==e&&h.entries||v;if(y&&(u=dt(y.call(new t)))!==Object.prototype&&u.next&&(at(u,f,!0),"function"!=typeof u[ht]&&b(u,ht,gt)),p&&v&&"values"!==v.name&&(d=!0,g=function(){return v.call(this)}),(vt||d||!h[ht])&&b(h,ht,g),A[e]=g,A[f]=gt,r)if(a={values:p?g:l("values"),keys:o?g:l("keys"),entries:m},s)for(c in a)c in h||M(h,c,a[c]);else P(P.P+P.F*(vt||d),e,a);return a}(Array,"Array",function(t,e){this._t=T(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,j(1)):j(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");A.Arguments=A.Array,O("keys"),O("values"),O("entries");for(var yt=a("iterator"),_t=a("toStringTag"),wt=A.Array,bt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},St=J(bt),kt=0;kt<St.length;kt++){var Ot,jt=St[kt],At=bt[jt],Et=n[jt],Lt=Et&&Et.prototype;if(Lt&&(Lt[yt]||b(Lt,yt,wt),Lt[_t]||b(Lt,_t,jt),A[jt]=wt,At))for(Ot in mt)Lt[Ot]||M(Lt,Ot,mt[Ot],!0)}var xt={state:{},mutations:{setData:function(t,e){Vue.set(t,e.param,e.data)}}},Ft={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:e,title:e,text:t})}},watch:{showUserMenu:function(t){this.toggleBodyMobileFix(t)},showHelpers:function(t){this.toggleBodyMobileFix(t)}}},Tt={name:"content-wrapper",props:{data:{type:Object,default:null},storeData:{type:String,require:!0}},created:function(){this.$awesLayoutCrm.$store&&this.$awesLayoutCrm.$store.commit("setData",{param:this.storeData,data:this.data})},computed:{content:function(){return this.$awesLayoutCrm.$store&&this.$awesLayoutCrm.$store.state[this.storeData]}}};function Ct(t,e,n,i,r,o,s,a,c,u){"function"==typeof s&&(c=a,a=s,s=!1);const l="function"==typeof n?n.options:n;let f;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),i&&(l._scopeId=i),o?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=f):e&&(f=s?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),f)if(l.functional){const t=l.render;l.render=function(e,n){return f.call(n),t(e,n)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,f):[f]}return n}const Dt=Tt;Tt.__file="content-wrapper.vue";var Mt=Ct({render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default",null,{data:this.content})],2)},staticRenderFns:[]},void 0,Dt,void 0,!1,void 0,void 0,void 0),Nt=/"/g,Vt=function(t,e,n,i){var r=String(F(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(Nt,"&quot;")+'"'),o+">"+r+"</"+e+">"};!function(t,e){var n={};n[t]=e(Vt),P(P.P+P.F*l(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}("link",function(t){return function(e){return t(this,"a","href",e)}});var Pt=y.f,It=Function.prototype,$t=/^\s*function ([^ (]*)/;"name"in It||f&&Pt(It,"name",{configurable:!0,get:function(){try{return(""+this).match($t)[1]}catch(t){return""}}});var Rt={name:"frame-nav",props:{links:{type:Array,validator:function(t){var e=[];return t.forEach(function t(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(t):e.push(n))}),!e.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",e),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},methods:{itemActive:function(t){return this.active===t||this.links[t].active||this.expanded},toggleActive:function(t,e){t.stopPropagation(),t.preventDefault(),this.active===e?this.active=null:this.active=e}}};const Ut=Rt;Rt.__file="frame-nav.vue";var Bt=Ct({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame__aside-nav-wrap"},[t.links?n("ul",{staticClass:"frame__aside-links"},t._l(t.links,function(e,i){return n("li",{key:i,staticClass:"frame__aside-li"},[e.children?n("div",[n("a",{class:["frame__aside-link frame__aside-link_sub",{"frame__aside-link_active":t.itemActive(i)}],attrs:{href:e.link||""},on:{click:function(n){!e.link&&t.toggleActive(n,i)}}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),t.expanded?t._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(e){t.toggleActive(e,i)}}})]),t._v(" "),n("slide-up-down",{attrs:{show:t.itemActive(i)}},[n("ul",{staticClass:"frame__aside-hidden active"},t._l(e.children,function(e,i){return n("li",{key:i,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"frame__aside-inlink_active":e.active}],attrs:{href:e.link||""}},[n("span",{class:{"tf-strong":e.active}},[t._v(t._s(e.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":t.links[i].active}],attrs:{href:e.link||""}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])}),0):t._e(),t._v(" "),t._t("difnav")],2)},staticRenderFns:[]},void 0,Ut,void 0,!1,void 0,void 0,void 0),Gt={f:{}.propertyIsEnumerable},qt=Object.getOwnPropertyDescriptor,Ht={f:f?qt:function(t,e){if(t=T(t),e=g(e,!0),v)try{return qt(t,e)}catch(t){}if(D(t,e))return w(!Gt.f.call(t,e),t[e])}},Wt=function(t,e){if(u(t),!c(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},Xt={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=N(Function.call,Ht.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return Wt(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:Wt}.set,zt=K.concat("length","prototype"),Yt={f:Object.getOwnPropertyNames||function(t){return Y(t,zt)}},Kt="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Jt="["+Kt+"]",Qt=RegExp("^"+Jt+Jt+"*"),Zt=RegExp(Jt+Jt+"*$"),te=function(t,e,n){var i={},r=l(function(){return!!Kt[t]()||"​"!="​"[t]()}),o=i[t]=r?e(ee):Kt[t];n&&(i[n]=o),P(P.P+P.F*r,"String",i)},ee=te.trim=function(t,e){return t=String(F(t)),1&e&&(t=t.replace(Qt,"")),2&e&&(t=t.replace(Zt,"")),t},ne=te,ie=Yt.f,re=Ht.f,oe=y.f,se=ne.trim,ae=n.Number,ce=ae,ue=ae.prototype,le="Number"==L(rt(ue)),fe="trim"in String.prototype,pe=function(t){var e=g(t,!1);if("string"==typeof e&&e.length>2){var n,i,r,o=(e=fe?e.trim():se(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,a=e.slice(2),c=0,u=a.length;c<u;c++)if((s=a.charCodeAt(c))<48||s>r)return NaN;return parseInt(a,i)}}return+e};if(!ae(" 0o1")||!ae("0b1")||ae("+0x1")){ae=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof ae&&(le?l(function(){ue.valueOf.call(n)}):"Number"!=L(n))?function(t,e,n){var i,r=e.constructor;return r!==n&&"function"==typeof r&&(i=r.prototype)!==n.prototype&&c(i)&&Xt&&Xt(t,i),t}(new ce(pe(e)),n,ae):pe(e)};for(var de,he=f?ie(ce):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),ve=0;he.length>ve;ve++)D(ce,de=he[ve])&&!D(ae,de)&&oe(ae,de,re(ce,de));ae.prototype=ue,ue.constructor=ae,M(n,"Number",ae)}var ge={name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isAnimating:!1,isOpened:this.show}},watch:{show:function(t){this.isOpened=t}},methods:{slideDown:function(t,e){var n=this,i=t.offsetHeight,r=(new Date).getTime();t.style.height=0,t.style.opacity=0;this.__animDown=requestAnimationFrame(function o(){var s=(new Date).getTime()-r;if(s<n.slideDownDuration){var a=function(t,e){return(t=t/e-1)*t*t+1}(s,n.slideDownDuration);t.style.height="".concat(Math.round(a*i),"px"),t.style.opacity=a.toFixed(1),n.__animDown=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(t,e){var n=this,i=t.offsetHeight,r=(new Date).getTime();this.__animUp=requestAnimationFrame(function o(){var s=(new Date).getTime()-r;if(s<n.slideUpDuration){var a=1-function(t,e){return(t/=e/2)<1?t*t*t/2:((t-=2)*t*t+2)/2}(s,n.slideUpDuration);t.style.height="".concat(Math.round(a*i),"px"),t.style.opacity=a.toFixed(1),n.__animUp=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopUp:function(t){cancelAnimationFrame(this.__animUp),t.style.height=null,t.style.opacity=null},close:function(){this.isOpened=!1},open:function(){this.isOpened=!0},toggle:function(){this.isOpened=!this.isOpened}},render:function(t){return t("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[t(this.tag,{class:"slide-up-down",style:{overflow:"hidden"},directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}};const me=ge;ge.__file="slide-up-down.vue";var ye=Ct({},void 0,me,void 0,void 0,void 0,void 0,void 0);var _e={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(Ft),Vue.component("content-wrapper",Mt),Vue.component("frame-nav",Bt),Vue.component("slide-up-down",ye))}},we={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal"},be=q(!0);P(P.P,"Array",{includes:function(t){return be(this,t,arguments.length>1?arguments[1]:void 0)}}),O("includes");var Se={f:Object.getOwnPropertySymbols},ke=Object.assign,Oe=!ke||l(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=ke({},t)[n]||Object.keys(ke({},e)).join("")!=i})?function(t,e){for(var n=lt(t),i=arguments.length,r=1,o=Se.f,s=Gt.f;i>r;)for(var a,c=x(arguments[r++]),u=o?J(c).concat(o(c)):J(c),l=u.length,f=0;l>f;)s.call(c,a=u[f++])&&(n[a]=c[a]);return n}:ke;P(P.S+P.F,"Object",{assign:Oe});var je=["success","error"],Ae={type:"success",position:"bottom-right",duration:5e3},Ee=function(t){return function(e){var n=e.title,i=e.message,r='<i class="toasted__icon icon icon-'.concat(t,'"></i><div class="toasted__content">');return(r+=n?'<p class="toasted__title">'.concat(n,"</p>"):"")+i+"</div>"}};var Le={modules:{vue:{src:"https://unpkg.com/vue@2.5.21/dist/vue.js",cb:function(){Vue.use(_e),Vue.config.ignoredElements.push("content-wrapper","frame-nav","modal-window","slide-up-down")}},lodash:{src:"https://unpkg.com/lodash@4.17.11/lodash.min.js",deps:["vue"],cb:function(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex@2.5.0/dist/vuex.min.js",deps:["vue"],cb:function(){Vue.prototype.$awesLayoutCrm.$store=new Vuex.Store(xt)}},"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb:function(){Vue.use(VueShortkey)}},"vue-toasted":{src:"https://unpkg.com/vue-toasted",deps:["vue"],cb:function(){Vue.use(Toasted),Vue.toasted.register("awes_success",Ee("circle-check"),Ae),Vue.toasted.register("awes_error",Ee("circle-cross"),Object.assign({},Ae,{type:"error"})),AWES.notify=function(t){var e=t.status,n=void 0===e?"success":e,i=t.title,r=t.message;je.includes(n)&&Vue.prototype.$toasted.global["awes_".concat(n)]({title:i,message:r})}}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb:function(){Vue.use(VueTabs)}},highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/github-gist.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js"],deps:["highlight"],cb:function(){document.querySelectorAll('pre code[class*="language-"]').forEach(function(t){hljs.highlightBlock(t)})}}},install:function(){AWES.lang=we}};window&&"AWES"in window?AWES.use(Le):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(Le))}();
