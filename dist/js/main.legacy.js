/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-02-06
 * Version: 0.0.8
 */

!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){var e=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=e)}),n=(e.version,t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),r=t(function(t){var r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:e.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),i=0,o=Math.random(),s=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+o).toString(36))},a=t(function(t){var e=r("wks"),i=n.Symbol,o="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=o&&i[t]||(o?i:s)("Symbol."+t))}).store=e}),c=function(t){return"object"==typeof t?null!==t:"function"==typeof t},u=function(t){if(!c(t))throw TypeError(t+" is not an object!");return t},l=function(t){try{return!!t()}catch(t){return!0}},f=!l(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),p=n.document,d=c(p)&&c(p.createElement),h=function(t){return d?p.createElement(t):{}},v=!f&&!l(function(){return 7!=Object.defineProperty(h("div"),"a",{get:function(){return 7}}).a}),g=function(t,e){if(!c(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!c(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!c(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!c(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m=Object.defineProperty,y={f:f?Object.defineProperty:function(t,e,n){if(u(t),e=g(e,!0),u(n),v)try{return m(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},w=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b=f?function(t,e,n){return y.f(t,e,w(1,n))}:function(t,e,n){return t[e]=n,t},S=a("unscopables"),k=Array.prototype;null==k[S]&&b(k,S,{});var O=function(t){k[S][t]=!0},j=function(t,e){return{value:e,done:!!t}},A={},E={}.toString,L=function(t){return E.call(t).slice(8,-1)},x=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==L(t)?t.split(""):Object(t)},F=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},T=function(t){return x(F(t))},C={}.hasOwnProperty,D=function(t,e){return C.call(t,e)},M=t(function(t){var r=s("src"),i=Function.toString,o=(""+i).split("toString");e.inspectSource=function(t){return i.call(t)},(t.exports=function(t,e,i,s){var a="function"==typeof i;a&&(D(i,"name")||b(i,"name",e)),t[e]!==i&&(a&&(D(i,r)||b(i,r,t[e]?""+t[e]:o.join(String(e)))),t===n?t[e]=i:s?t[e]?t[e]=i:b(t,e,i):(delete t[e],b(t,e,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||i.call(this)})}),N=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},V=function(t,r,i){var o,s,a,c,u=t&V.F,l=t&V.G,f=t&V.S,p=t&V.P,d=t&V.B,h=l?n:f?n[r]||(n[r]={}):(n[r]||{}).prototype,v=l?e:e[r]||(e[r]={}),g=v.prototype||(v.prototype={});for(o in l&&(i=r),i)a=((s=!u&&h&&void 0!==h[o])?h:i)[o],c=d&&s?N(a,n):p&&"function"==typeof a?N(Function.call,a):a,h&&M(h,o,a,t&V.U),v[o]!=a&&b(v,o,c),p&&g[o]!=a&&(g[o]=a)};n.core=e,V.F=1,V.G=2,V.S=4,V.P=8,V.B=16,V.W=32,V.U=64,V.R=128;var P=V,I=Math.ceil,$=Math.floor,R=function(t){return isNaN(t=+t)?0:(t>0?$:I)(t)},U=Math.min,B=Math.max,G=Math.min,q=function(t){return function(e,n,r){var i,o,s=T(e),a=(i=s.length)>0?U(R(i),9007199254740991):0,c=function(t,e){return(t=R(t))<0?B(t+e,0):G(t,e)}(r,a);if(t&&n!=n){for(;a>c;)if((o=s[c++])!=o)return!0}else for(;a>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}},H=r("keys"),W=function(t){return H[t]||(H[t]=s(t))},X=q(!1),z=W("IE_PROTO"),Y=function(t,e){var n,r=T(t),i=0,o=[];for(n in r)n!=z&&D(r,n)&&o.push(n);for(;e.length>i;)D(r,n=e[i++])&&(~X(o,n)||o.push(n));return o},K="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),J=Object.keys||function(t){return Y(t,K)},Q=f?Object.defineProperties:function(t,e){u(t);for(var n,r=J(e),i=r.length,o=0;i>o;)y.f(t,n=r[o++],e[n]);return t},Z=n.document,tt=Z&&Z.documentElement,et=W("IE_PROTO"),nt=function(){},rt=function(){var t,e=h("iframe"),n=K.length;for(e.style.display="none",tt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),rt=t.F;n--;)delete rt.prototype[K[n]];return rt()},it=Object.create||function(t,e){var n;return null!==t?(nt.prototype=u(t),n=new nt,nt.prototype=null,n[et]=t):n=rt(),void 0===e?n:Q(n,e)},ot=y.f,st=a("toStringTag"),at=function(t,e,n){t&&!D(t=n?t:t.prototype,st)&&ot(t,st,{configurable:!0,value:e})},ct={};b(ct,a("iterator"),function(){return this});var ut=function(t,e,n){t.prototype=it(ct,{next:w(1,n)}),at(t,e+" Iterator")},lt=function(t){return Object(F(t))},ft=W("IE_PROTO"),pt=Object.prototype,dt=Object.getPrototypeOf||function(t){return t=lt(t),D(t,ft)?t[ft]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?pt:null},ht=a("iterator"),vt=!([].keys&&"next"in[].keys()),gt=function(){return this},mt=function(t,e,n,r,i,o,s){ut(n,e,r);var a,c,u,l=function(t){if(!vt&&t in h)return h[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",p="values"==i,d=!1,h=t.prototype,v=h[ht]||h["@@iterator"]||i&&h[i],g=v||l(i),m=i?p?l("entries"):g:void 0,y="Array"==e&&h.entries||v;if(y&&(u=dt(y.call(new t)))!==Object.prototype&&u.next&&(at(u,f,!0),"function"!=typeof u[ht]&&b(u,ht,gt)),p&&v&&"values"!==v.name&&(d=!0,g=function(){return v.call(this)}),(vt||d||!h[ht])&&b(h,ht,g),A[e]=g,A[f]=gt,i)if(a={values:p?g:l("values"),keys:o?g:l("keys"),entries:m},s)for(c in a)c in h||M(h,c,a[c]);else P(P.P+P.F*(vt||d),e,a);return a}(Array,"Array",function(t,e){this._t=T(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,j(1)):j(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");A.Arguments=A.Array,O("keys"),O("values"),O("entries");for(var yt=a("iterator"),_t=a("toStringTag"),wt=A.Array,bt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},St=J(bt),kt=0;kt<St.length;kt++){var Ot,jt=St[kt],At=bt[jt],Et=n[jt],Lt=Et&&Et.prototype;if(Lt&&(Lt[yt]||b(Lt,yt,wt),Lt[_t]||b(Lt,_t,jt),A[jt]=wt,At))for(Ot in mt)Lt[Ot]||M(Lt,Ot,mt[Ot],!0)}var xt={state:{},mutations:{setData:function(t,e){Vue.set(t,e.param,e.data)}}},Ft={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:e,title:e,text:t})}},watch:{showUserMenu:function(t){this.toggleBodyMobileFix(t)},showHelpers:function(t){this.toggleBodyMobileFix(t)}}};var Tt=function(t,e,n,r,i,o,s,a,c,u){"boolean"!=typeof s&&(c=a,a=s,s=!1);var l,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=l):e&&(l=s?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(f.functional){var p=f.render;f.render=function(t,e){return l.call(e),p(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return n};var Ct=Tt({render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default",null,{data:this.content})],2)},staticRenderFns:[]},void 0,{name:"content-wrapper",props:{data:{type:Object,default:null},storeData:{type:String,require:!0}},created:function(){this.$awesLayoutCrm.$store&&this.$awesLayoutCrm.$store.commit("setData",{param:this.storeData,data:this.data})},computed:{content:function(){return this.$awesLayoutCrm.$store&&this.$awesLayoutCrm.$store.state[this.storeData]}}},void 0,!1,void 0,void 0,void 0),Dt=/"/g,Mt=function(t,e,n,r){var i=String(F(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(Dt,"&quot;")+'"'),o+">"+i+"</"+e+">"};!function(t,e){var n={};n[t]=e(Mt),P(P.P+P.F*l(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}("link",function(t){return function(e){return t(this,"a","href",e)}});var Nt=y.f,Vt=Function.prototype,Pt=/^\s*function ([^ (]*)/;"name"in Vt||f&&Nt(Vt,"name",{configurable:!0,get:function(){try{return(""+this).match(Pt)[1]}catch(t){return""}}});var It=Tt({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame__aside-nav-wrap"},[t.links?n("ul",{staticClass:"frame__aside-links"},t._l(t.links,function(e,r){return n("li",{key:r,staticClass:"frame__aside-li"},[e.children?n("div",[n("a",{class:["frame__aside-link frame__aside-link_sub",{"frame__aside-link_active":t.itemActive(r)}],attrs:{href:e.link||""},on:{click:function(n){!e.link&&t.toggleActive(n,r)}}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),t.expanded?t._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(e){return t.toggleActive(e,r)}}})]),t._v(" "),n("slide-up-down",{attrs:{show:t.itemActive(r)}},[n("ul",{staticClass:"frame__aside-hidden active"},t._l(e.children,function(e,r){return n("li",{key:r,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"frame__aside-inlink_active":e.active}],attrs:{href:e.link||""}},[n("span",{class:{"tf-strong":e.active}},[t._v(t._s(e.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":t.links[r].active}],attrs:{href:e.link||""}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])}),0):t._e(),t._v(" "),t._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator:function(t){var e=[];return t.forEach(function t(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(t):e.push(n))}),!e.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",e),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},methods:{itemActive:function(t){return this.active===t||this.links[t].active||this.expanded},toggleActive:function(t,e){t.stopPropagation(),t.preventDefault(),this.active===e?this.active=null:this.active=e}}},void 0,!1,void 0,void 0,void 0),$t={f:{}.propertyIsEnumerable},Rt=Object.getOwnPropertyDescriptor,Ut={f:f?Rt:function(t,e){if(t=T(t),e=g(e,!0),v)try{return Rt(t,e)}catch(t){}if(D(t,e))return w(!$t.f.call(t,e),t[e])}},Bt=function(t,e){if(u(t),!c(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},Gt={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=N(Function.call,Ut.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return Bt(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:Bt}.set,qt=K.concat("length","prototype"),Ht={f:Object.getOwnPropertyNames||function(t){return Y(t,qt)}},Wt="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Xt="["+Wt+"]",zt=RegExp("^"+Xt+Xt+"*"),Yt=RegExp(Xt+Xt+"*$"),Kt=function(t,e,n){var r={},i=l(function(){return!!Wt[t]()||"​"!="​"[t]()}),o=r[t]=i?e(Jt):Wt[t];n&&(r[n]=o),P(P.P+P.F*i,"String",r)},Jt=Kt.trim=function(t,e){return t=String(F(t)),1&e&&(t=t.replace(zt,"")),2&e&&(t=t.replace(Yt,"")),t},Qt=Kt,Zt=Ht.f,te=Ut.f,ee=y.f,ne=Qt.trim,re=n.Number,ie=re,oe=re.prototype,se="Number"==L(it(oe)),ae="trim"in String.prototype,ce=function(t){var e=g(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=ae?e.trim():ne(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var s,a=e.slice(2),c=0,u=a.length;c<u;c++)if((s=a.charCodeAt(c))<48||s>i)return NaN;return parseInt(a,r)}}return+e};if(!re(" 0o1")||!re("0b1")||re("+0x1")){re=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof re&&(se?l(function(){oe.valueOf.call(n)}):"Number"!=L(n))?function(t,e,n){var r,i=e.constructor;return i!==n&&"function"==typeof i&&(r=i.prototype)!==n.prototype&&c(r)&&Gt&&Gt(t,r),t}(new ie(ce(e)),n,re):ce(e)};for(var ue,le=f?Zt(ie):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),fe=0;le.length>fe;fe++)D(ie,ue=le[fe])&&!D(re,ue)&&ee(re,ue,te(ie,ue));re.prototype=oe,oe.constructor=re,M(n,"Number",re)}var pe=Tt({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isAnimating:!1,isOpened:this.show}},watch:{show:function(t){this.isOpened=t}},methods:{slideDown:function(t,e){var n=this,r=t.offsetHeight,i=(new Date).getTime();t.style.height=0,t.style.opacity=0;this.__animDown=requestAnimationFrame(function o(){var s=(new Date).getTime()-i;if(s<n.slideDownDuration){var a=function(t,e){return(t=t/e-1)*t*t+1}(s,n.slideDownDuration);t.style.height="".concat(Math.round(a*r),"px"),t.style.opacity=a.toFixed(1),n.__animDown=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(t,e){var n=this,r=t.offsetHeight,i=(new Date).getTime();this.__animUp=requestAnimationFrame(function o(){var s=(new Date).getTime()-i;if(s<n.slideUpDuration){var a=1-function(t,e){return(t/=e/2)<1?t*t*t/2:((t-=2)*t*t+2)/2}(s,n.slideUpDuration);t.style.height="".concat(Math.round(a*r),"px"),t.style.opacity=a.toFixed(1),n.__animUp=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopUp:function(t){cancelAnimationFrame(this.__animUp),t.style.height=null,t.style.opacity=null},close:function(){this.isOpened=!1},open:function(){this.isOpened=!0},toggle:function(){this.isOpened=!this.isOpened}},render:function(t){return t("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[t(this.tag,{class:"slide-up-down",style:{overflow:"hidden"},directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0);var de={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(Ft),Vue.component("content-wrapper",Ct),Vue.component("frame-nav",It),Vue.component("slide-up-down",pe))}},he={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal"},ve=q(!0);P(P.P,"Array",{includes:function(t){return ve(this,t,arguments.length>1?arguments[1]:void 0)}}),O("includes");var ge={f:Object.getOwnPropertySymbols},me=Object.assign,ye=!me||l(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=me({},t)[n]||Object.keys(me({},e)).join("")!=r})?function(t,e){for(var n=lt(t),r=arguments.length,i=1,o=ge.f,s=$t.f;r>i;)for(var a,c=x(arguments[i++]),u=o?J(c).concat(o(c)):J(c),l=u.length,f=0;l>f;)s.call(c,a=u[f++])&&(n[a]=c[a]);return n}:me;P(P.S+P.F,"Object",{assign:ye});var _e=["success","error"],we={type:"success",position:"bottom-right",duration:5e3},be=function(t){return function(e){var n=e.title,r=e.message,i='<i class="toasted__icon icon icon-'.concat(t,'"></i><div class="toasted__content">');return(i+=n?'<p class="toasted__title">'.concat(n,"</p>"):"")+r+"</div>"}};var Se={modules:{vue:{src:"https://unpkg.com/vue@2.5.21/dist/vue.js",cb:function(){Vue.use(de),Vue.config.ignoredElements.push("content-wrapper","frame-nav","modal-window","slide-up-down")}},lodash:{src:"https://unpkg.com/lodash@4.17.11/lodash.min.js",deps:["vue"],cb:function(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex@2.5.0/dist/vuex.min.js",deps:["vue"],cb:function(){Vue.prototype.$awesLayoutCrm.$store=new Vuex.Store(xt)}},"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb:function(){Vue.use(VueShortkey)}},"vue-toasted":{src:"https://unpkg.com/vue-toasted",deps:["vue"],cb:function(){Vue.use(Toasted),Vue.toasted.register("awes_success",be("circle-check"),we),Vue.toasted.register("awes_error",be("circle-cross"),Object.assign({},we,{type:"error"})),AWES.notify=function(t){var e=t.status,n=void 0===e?"success":e,r=t.title,i=t.message;_e.includes(n)&&Vue.prototype.$toasted.global["awes_".concat(n)]({title:r,message:i})}}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb:function(){Vue.use(VueTabs)}},highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/github-gist.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js"],deps:["highlight"],cb:function(){document.querySelectorAll('pre code[class*="language-"]').forEach(function(t){hljs.highlightBlock(t)})}}},install:function(){AWES.lang=he}};window&&"AWES"in window?AWES.use(Se):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(Se))}();
