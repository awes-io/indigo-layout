/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-03-18 09:38:50
 * Version: 1.0.19
 */

!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),n=t(function(t){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)}),r=(n.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),i=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t},o=function(t){try{return!!t()}catch(t){return!0}},a=!o(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),s=e.document,c=r(s)&&r(s.createElement),u=function(t){return c?s.createElement(t):{}},l=!a&&!o(function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}),f=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},d=Object.defineProperty,p={f:a?Object.defineProperty:function(t,e,n){if(i(t),e=f(e,!0),i(n),l)try{return d(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v=a?function(t,e,n){return p.f(t,e,h(1,n))}:function(t,e,n){return t[e]=n,t},g={}.hasOwnProperty,m=function(t,e){return g.call(t,e)},y=0,b=Math.random(),w=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++y+b).toString(36))},S=t(function(t){var r=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),E=S("native-function-to-string",Function.toString),x=t(function(t){var r=w("src"),i=(""+E).split("toString");n.inspectSource=function(t){return E.call(t)},(t.exports=function(t,n,o,a){var s="function"==typeof o;s&&(m(o,"name")||v(o,"name",n)),t[n]!==o&&(s&&(m(o,r)||v(o,r,t[n]?""+t[n]:i.join(String(n)))),t===e?t[n]=o:a?t[n]?t[n]=o:v(t,n,o):(delete t[n],v(t,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||E.call(this)})}),A=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},O=function(t,e,n){if(A(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},k=function(t,r,i){var o,a,s,c,u=t&k.F,l=t&k.G,f=t&k.S,d=t&k.P,p=t&k.B,h=l?e:f?e[r]||(e[r]={}):(e[r]||{}).prototype,g=l?n:n[r]||(n[r]={}),m=g.prototype||(g.prototype={});for(o in l&&(i=r),i)s=((a=!u&&h&&void 0!==h[o])?h:i)[o],c=p&&a?O(s,e):d&&"function"==typeof s?O(Function.call,s):s,h&&x(h,o,s,t&k.U),g[o]!=s&&v(g,o,c),d&&m[o]!=s&&(m[o]=s)};e.core=n,k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128;var j=k,T={}.toString,C=function(t){return T.call(t).slice(8,-1)},I=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},F=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},L=function(t){return I(F(t))},P=Math.ceil,D=Math.floor,N=function(t){return isNaN(t=+t)?0:(t>0?D:P)(t)},M=Math.min,V=function(t){return t>0?M(N(t),9007199254740991):0},R=Math.max,W=Math.min,U=function(t){return function(e,n,r){var i,o=L(e),a=V(o.length),s=function(t,e){return(t=N(t))<0?R(t+e,0):W(t,e)}(r,a);if(t&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((t||s in o)&&o[s]===n)return t||s||0;return!t&&-1}},$=S("keys"),B=function(t){return $[t]||($[t]=w(t))},G=U(!1),q=B("IE_PROTO"),H=function(t,e){var n,r=L(t),i=0,o=[];for(n in r)n!=q&&m(r,n)&&o.push(n);for(;e.length>i;)m(r,n=e[i++])&&(~G(o,n)||o.push(n));return o},X="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Y=Object.keys||function(t){return H(t,X)},z={f:Object.getOwnPropertySymbols},K={f:{}.propertyIsEnumerable},J=function(t){return Object(F(t))},Q=Object.assign,Z=!Q||o(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=Q({},t)[n]||Object.keys(Q({},e)).join("")!=r})?function(t,e){for(var n=J(t),r=arguments.length,i=1,o=z.f,a=K.f;r>i;)for(var s,c=I(arguments[i++]),u=o?Y(c).concat(o(c)):Y(c),l=u.length,f=0;l>f;)a.call(c,s=u[f++])&&(n[s]=c[s]);return n}:Q;function tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}j(j.S+j.F,"Object",{assign:Z});var nt={state:{},mutations:{setData:function(t,e){Vue.set(t,e.param,e.data)}}},rt={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:e,title:e,text:t})}},watch:{showUserMenu:function(t){this.toggleBodyMobileFix(t)},showHelpers:function(t){this.toggleBodyMobileFix(t)}}};var it=function(t,e,n,r,i,o,a,s,c,u){"boolean"!=typeof a&&(c=s,s=a,a=!1);var l,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=l):e&&(l=a?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),l)if(f.functional){var d=f.render;f.render=function(t,e){return l.call(e),d(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return n};var ot=it({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component"},[this._t("default",null,null,this.content)],2)},staticRenderFns:[]},void 0,{name:"content-wrapper",props:{tag:{type:String,default:"div"},default:{type:Object,default:null},storeData:{type:String,required:!0}},computed:{content:function(){return AWES._store.state[this.storeData]}},watch:{default:{handler:function(t){t&&AWES._store.commit("setData",{param:this.storeData,data:t})},immediate:!0}}},void 0,!1,void 0,void 0,void 0),at=Array.isArray||function(t){return"Array"==C(t)},st=t(function(t){var n=S("wks"),r=e.Symbol,i="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=i&&r[t]||(i?r:w)("Symbol."+t))}).store=n}),ct=st("species"),ut=function(t,e){return new(function(t){var e;return at(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!at(e.prototype)||(e=void 0),r(e)&&null===(e=e[ct])&&(e=void 0)),void 0===e?Array:e}(t))(e)},lt=st("unscopables"),ft=Array.prototype;null==ft[lt]&&v(ft,lt,{});var dt,pt,ht,vt,gt,mt,yt,_t,bt,wt=function(t){ft[lt][t]=!0},St=(ht=1==(dt=6),vt=2==dt,gt=3==dt,mt=4==dt,yt=6==dt,_t=5==dt||yt,bt=pt||ut,function(t,e,n){for(var r,i,o=J(t),a=I(o),s=O(e,n,3),c=V(a.length),u=0,l=ht?bt(t,c):vt?bt(t,0):void 0;c>u;u++)if((_t||u in a)&&(i=s(r=a[u],u,o),dt))if(ht)l[u]=i;else if(i)switch(dt){case 3:return!0;case 5:return r;case 6:return u;case 2:l.push(r)}else if(mt)return!1;return yt?-1:gt||mt?mt:l}),Et="findIndex",xt=!0;Et in[]&&Array(1)[Et](function(){xt=!1}),j(j.P+j.F*xt,"Array",{findIndex:function(t){return St(this,t,arguments.length>1?arguments[1]:void 0)}}),wt(Et);var At=function(t,e){return{value:e,done:!!t}},Ot={},kt=a?Object.defineProperties:function(t,e){i(t);for(var n,r=Y(e),o=r.length,a=0;o>a;)p.f(t,n=r[a++],e[n]);return t},jt=e.document,Tt=jt&&jt.documentElement,Ct=B("IE_PROTO"),It=function(){},Ft=function(){var t,e=u("iframe"),n=X.length;for(e.style.display="none",Tt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Ft=t.F;n--;)delete Ft.prototype[X[n]];return Ft()},Lt=Object.create||function(t,e){var n;return null!==t?(It.prototype=i(t),n=new It,It.prototype=null,n[Ct]=t):n=Ft(),void 0===e?n:kt(n,e)},Pt=p.f,Dt=st("toStringTag"),Nt=function(t,e,n){t&&!m(t=n?t:t.prototype,Dt)&&Pt(t,Dt,{configurable:!0,value:e})},Mt={};v(Mt,st("iterator"),function(){return this});var Vt=function(t,e,n){t.prototype=Lt(Mt,{next:h(1,n)}),Nt(t,e+" Iterator")},Rt=B("IE_PROTO"),Wt=Object.prototype,Ut=Object.getPrototypeOf||function(t){return t=J(t),m(t,Rt)?t[Rt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Wt:null},$t=st("iterator"),Bt=!([].keys&&"next"in[].keys()),Gt=function(){return this},qt=function(t,e,n,r,i,o,a){Vt(n,e,r);var s,c,u,l=function(t){if(!Bt&&t in h)return h[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",d="values"==i,p=!1,h=t.prototype,g=h[$t]||h["@@iterator"]||i&&h[i],m=g||l(i),y=i?d?l("entries"):m:void 0,_="Array"==e&&h.entries||g;if(_&&(u=Ut(_.call(new t)))!==Object.prototype&&u.next&&(Nt(u,f,!0),"function"!=typeof u[$t]&&v(u,$t,Gt)),d&&g&&"values"!==g.name&&(p=!0,m=function(){return g.call(this)}),(Bt||p||!h[$t])&&v(h,$t,m),Ot[e]=m,Ot[f]=Gt,i)if(s={values:d?m:l("values"),keys:o?m:l("keys"),entries:y},a)for(c in s)c in h||x(h,c,s[c]);else j(j.P+j.F*(Bt||p),e,s);return s},Ht=qt(Array,"Array",function(t,e){this._t=L(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,At(1)):At(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");Ot.Arguments=Ot.Array,wt("keys"),wt("values"),wt("entries");for(var Xt=st("iterator"),Yt=st("toStringTag"),zt=Ot.Array,Kt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Jt=Y(Kt),Qt=0;Qt<Jt.length;Qt++){var Zt,te=Jt[Qt],ee=Kt[te],ne=e[te],re=ne&&ne.prototype;if(re&&(re[Xt]||v(re,Xt,zt),re[Yt]||v(re,Yt,te),Ot[te]=zt,ee))for(Zt in Ht)re[Zt]||x(re,Zt,Ht[Zt],!0)}var ie=/"/g,oe=function(t,e,n,r){var i=String(F(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(ie,"&quot;")+'"'),o+">"+i+"</"+e+">"};!function(t,e){var n={};n[t]=e(oe),j(j.P+j.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}("link",function(t){return function(e){return t(this,"a","href",e)}});var ae=p.f,se=Function.prototype,ce=/^\s*function ([^ (]*)/;"name"in se||a&&ae(se,"name",{configurable:!0,get:function(){try{return(""+this).match(ce)[1]}catch(t){return""}}});var ue=it({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame__aside-nav-wrap"},[t.links?n("ul",{staticClass:"frame__aside-links"},t._l(t.links,function(e,r){return n("li",{key:r,staticClass:"frame__aside-li"},[e.children?n("div",[n("a",{class:["frame__aside-link frame__aside-link_sub",{"frame__aside-link_active":t.active===r}],attrs:{href:e.link||""},on:{click:function(n){!e.link&&t.toggleActive(n,r)}}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),t.expanded?t._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(e){return t.toggleActive(e,r)}}})]),t._v(" "),n("slide-up-down",{attrs:{show:t.active===r||t.expanded}},[n("ul",{staticClass:"frame__aside-hidden active"},t._l(e.children,function(e,r){return n("li",{key:r,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"frame__aside-inlink_active":e.active}],attrs:{href:e.link||""}},[n("span",{class:{"tf-strong":e.active}},[t._v(t._s(e.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":t.active===r}],attrs:{href:e.link||""}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])}),0):t._e(),t._v(" "),t._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator:function(t){var e=[];return t.forEach(function t(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(t):e.push(n))}),!e.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",e),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},watch:{links:{handler:function(t){this.active=t.findIndex(function(t){return t.active||t.children&&t.children.some(function(t){return t.active})})},immediate:!0}},methods:{itemActive:function(t){return this.links[t].active||this.expanded||this.hasActiveChildren[t]},toggleActive:function(t,e){t.stopPropagation(),t.preventDefault(),this.active===e?this.active=null:this.active=e}}},void 0,!1,void 0,void 0,void 0),le=Object.getOwnPropertyDescriptor,fe={f:a?le:function(t,e){if(t=L(t),e=f(e,!0),l)try{return le(t,e)}catch(t){}if(m(t,e))return h(!K.f.call(t,e),t[e])}},de=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},pe={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=O(Function.call,fe.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return de(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:de}.set,he=X.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(t){return H(t,he)}},ge="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",me="["+ge+"]",ye=RegExp("^"+me+me+"*"),_e=RegExp(me+me+"*$"),be=function(t,e,n){var r={},i=o(function(){return!!ge[t]()||"​"!="​"[t]()}),a=r[t]=i?e(we):ge[t];n&&(r[n]=a),j(j.P+j.F*i,"String",r)},we=be.trim=function(t,e){return t=String(F(t)),1&e&&(t=t.replace(ye,"")),2&e&&(t=t.replace(_e,"")),t},Se=be,Ee=ve.f,xe=fe.f,Ae=p.f,Oe=Se.trim,ke=e.Number,je=ke,Te=ke.prototype,Ce="Number"==C(Lt(Te)),Ie="trim"in String.prototype,Fe=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=Ie?e.trim():Oe(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,s=e.slice(2),c=0,u=s.length;c<u;c++)if((a=s.charCodeAt(c))<48||a>i)return NaN;return parseInt(s,r)}}return+e};if(!ke(" 0o1")||!ke("0b1")||ke("+0x1")){ke=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof ke&&(Ce?o(function(){Te.valueOf.call(n)}):"Number"!=C(n))?function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&pe&&pe(t,i),t}(new je(Fe(e)),n,ke):Fe(e)};for(var Le,Pe=a?Ee(je):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),De=0;Pe.length>De;De++)m(je,Le=Pe[De])&&!m(ke,Le)&&Ae(ke,Le,xe(je,Le));ke.prototype=Te,Te.constructor=ke,x(e,"Number",ke)}var Ne=it({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isOpened:this.show}},watch:{show:function(t){this.isOpened=t}},methods:{slideDown:function(t,e){var n=this,r=t.offsetHeight,i=(new Date).getTime();t.style.height=0,t.style.opacity=0;this.__animDown=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideDownDuration){var s=function(t,e){return(t=t/e-1)*t*t+1}(a,n.slideDownDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animDown=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(t,e){var n=this,r=t.offsetHeight,i=(new Date).getTime();this.__animUp=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideUpDuration){var s=1-function(t,e){return(t/=e/2)<1?t*t*t/2:((t-=2)*t*t+2)/2}(a,n.slideUpDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animUp=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopUp:function(t){cancelAnimationFrame(this.__animUp),t.style.height=null,t.style.opacity=null},close:function(){this.isOpened=!1,this.$emit("update:show",!1)},open:function(){this.isOpened=!0,this.$emit("update:show",!0)},toggle:function(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)}},render:function(t){return t("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[t(this.tag,{class:"slide-up-down",style:{overflow:"hidden"},directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0);var Me={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(rt),Vue.component("content-wrapper",ot),Vue.component("content-placeholder",{functional:!0,render:function(t){return null}}),Vue.component("frame-nav",ue),Vue.component("slide-up-down",Ne))}},Ve={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard"},Re=U(!0);j(j.P,"Array",{includes:function(t){return Re(this,t,arguments.length>1?arguments[1]:void 0)}}),wt("includes");var We=["success","error"],Ue={type:"success",position:"bottom-right",duration:5e3},$e=function(t){return function(e){var n=e.title,r=e.message,i='<i class="toasted__icon icon icon-'.concat(t,'"></i><div class="toasted__content">');return(i+=n?'<p class="toasted__title">'.concat(n,"</p>"):"")+r+"</div>"}};var Be,Ge,qe=function(t){return function(e,n){var r,i,o=String(F(e)),a=N(n),s=o.length;return a<0||a>=s?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===s||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},He=qe(!0),Xe=function(t,e,n){return e+(n?He(t,e).length:1)},Ye=st("toStringTag"),ze="Arguments"==C(function(){return arguments}()),Ke=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Ye))?n:ze?C(e):"Object"==(r=C(e))&&"function"==typeof e.callee?"Arguments":r},Je=RegExp.prototype.exec,Qe=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==Ke(t))throw new TypeError("RegExp#exec called on incompatible receiver");return Je.call(t,e)},Ze=RegExp.prototype.exec,tn=String.prototype.replace,en=Ze,nn=(Be=/a/,Ge=/b*/g,Ze.call(Be,"a"),Ze.call(Ge,"a"),0!==Be.lastIndex||0!==Ge.lastIndex),rn=void 0!==/()??/.exec("")[1];(nn||rn)&&(en=function(t){var e,n,r,o,a=this;return rn&&(n=new RegExp("^"+a.source+"$(?!\\s)",function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}.call(a))),nn&&(e=a.lastIndex),r=Ze.call(a,t),nn&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),rn&&r&&r.length>1&&tn.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var on=en;j({target:"RegExp",proto:!0,forced:on!==/./.exec},{exec:on});var an=st("species"),sn=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),cn=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),un=function(t,e,n){var r=st(t),i=!o(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)}),a=i?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[an]=function(){return n}),n[r](""),!e}):void 0;if(!i||!a||"replace"===t&&!sn||"split"===t&&!cn){var s=/./[r],c=n(F,r,""[t],function(t,e,n,r,o){return e.exec===on?i&&!o?{done:!0,value:s.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),u=c[0],l=c[1];x(String.prototype,t,u),v(RegExp.prototype,r,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)})}};un("match",1,function(t,e,n,r){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var o=i(t),a=String(this);if(!o.global)return Qe(o,a);var s=o.unicode;o.lastIndex=0;for(var c,u=[],l=0;null!==(c=Qe(o,a));){var f=String(c[0]);u[l]=f,""===f&&(o.lastIndex=Xe(a,V(o.lastIndex),s)),l++}return 0===l?null:u}]});var ln=st("match"),fn=st("species"),dn=Math.min,pn=[].push,hn=!o(function(){});un("split",2,function(t,e,n,o){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i,o,a=String(this);if(void 0===t&&0===e)return[];if(!r(i=t)||(void 0!==(o=i[ln])?!o:"RegExp"!=C(i)))return n.call(a,t,e);for(var s,c,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,p=void 0===e?4294967295:e>>>0,h=new RegExp(t.source,f+"g");(s=on.call(h,a))&&!((c=h.lastIndex)>d&&(l.push(a.slice(d,s.index)),s.length>1&&s.index<a.length&&pn.apply(l,s.slice(1)),u=s[0].length,d=c,l.length>=p));)h.lastIndex===s.index&&h.lastIndex++;return d===a.length?!u&&h.test("")||l.push(""):l.push(a.slice(d)),l.length>p?l.slice(0,p):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):a.call(String(i),n,r)},function(t,e){var r=o(a,t,this,e,a!==n);if(r.done)return r.value;var s=i(t),c=String(this),u=function(t,e){var n,r=i(t).constructor;return void 0===r||null==(n=i(r)[fn])?e:A(n)}(s,RegExp),l=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(hn?"y":"g"),d=new u(hn?s:"^(?:"+s.source+")",f),p=void 0===e?4294967295:e>>>0;if(0===p)return[];if(0===c.length)return null===Qe(d,c)?[c]:[];for(var h=0,v=0,g=[];v<c.length;){d.lastIndex=hn?v:0;var m,y=Qe(d,hn?c:c.slice(v));if(null===y||(m=dn(V(d.lastIndex+(hn?0:v)),c.length))===h)v=Xe(c,v,l);else{if(g.push(c.slice(h,v)),g.length===p)return g;for(var _=1;_<=y.length-1;_++)if(g.push(y[_]),g.length===p)return g;v=h=m}}return g.push(c.slice(h)),g}]});var vn={highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb:function(){AWES.once("core:inited",function(){hljs.initHighlighting();var t=document.querySelectorAll(".hljs");t&&t.forEach(function(t){var e=t.parentNode;hljs.lineNumbersBlock(t);var n=t.className.match(/language-([a-z]*)/);n&&e.setAttribute("data-language",n[1]);var r=document.createElement("BUTTON");r.className="hljs-copy",r.innerText=AWES.lang.CODE_COPY,r.addEventListener("click",function(){(function(t){var e=document,n=document.createElement("TEXTAREA");n.id="copy-text",n.style.height=0,n.position="fixed",e.body.appendChild(n);try{return n.value=t.innerText.split("\n").filter(function(t){return""!==t&&"\t"!==t}).join("\n"),n.select(),e.execCommand("copy"),!0}catch(t){return!1}finally{e.body.removeChild(n)}})(t)&&AWES.notify({message:AWES.lang.CODE_COPIED_MSG})},!1),e.insertBefore(r,t)})})}}},gn=qe(!0);qt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=gn(e,n),this._i+=t.length,{value:t,done:!1})});var mn=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}},yn=st("iterator"),_n=Array.prototype,bn=function(t,e,n){e in t?p.f(t,e,h(0,n)):t[e]=n},wn=st("iterator"),Sn=n.getIteratorMethod=function(t){if(null!=t)return t[wn]||t["@@iterator"]||Ot[Ke(t)]},En=st("iterator"),xn=!1;try{[7][En]().return=function(){xn=!0}}catch(t){}j(j.S+j.F*!function(t,e){if(!e&&!xn)return!1;var n=!1;try{var r=[7],i=r[En]();i.next=function(){return{done:n=!0}},r[En]=function(){return i},t(r)}catch(t){}return n}(function(t){}),"Array",{from:function(t){var e,n,r,i,o,a=J(t),s="function"==typeof this?this:Array,c=arguments.length,u=c>1?arguments[1]:void 0,l=void 0!==u,f=0,d=Sn(a);if(l&&(u=O(u,c>2?arguments[2]:void 0,2)),null!=d&&(s!=Array||(void 0===(o=d)||Ot.Array!==o&&_n[yn]!==o)))for(i=d.call(a),n=new s;!(r=i.next()).done;f++)bn(n,f,l?mn(i,u,[r.value,f],!0):r.value);else for(n=new s(e=V(a.length));e>f;f++)bn(n,f,l?u(a[f],f):a[f]);return n.length=f,n}});var An=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.addElements(),this.initObserver(e))}var e,n,r;return e=t,r=[{key:"showWave",value:function(e){var n=this;if(e.target===e.currentTarget){var r=this.__AWES_WAVE__,i=r.wave;r.active||(this.__AWES_WAVE__.active=!0,this._tm&&(clearTimeout(this._tm),t.hideWave(this)),i.style.cssText="\n            transition: transform ".concat(1e3,"ms ease, opacity ").concat(1e3,"ms ease;\n            opacity: 0;\n            transform: translate(-50%, -50%) scale(2);\n            top: ").concat(e.offsetY,"px;\n            left: ").concat(e.offsetX,"px\n        "),this._tm=setTimeout(function(){n.__AWES_WAVE__.active=!1,t.hideWave(n)},1e3))}}},{key:"hideWave",value:function(t){t.__AWES_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete t._tm}}],(n=[{key:"addElements",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=e.querySelectorAll(n.selector),this._elements&&Array.from(this._elements).forEach(function(e){if(e.classList.contains("has-wave")||e.classList.add("has-wave"),!e.__AWES_WAVE__){var n=e.querySelector("span.wave");n||((n=document.createElement("span")).classList.add("wave"),e.appendChild(n)),e.__AWES_WAVE__={wave:n,active:!1},t.hideWave(e),("touchstart"in window?["touchstart","click"]:["click"]).map(function(n){e.addEventListener(n,t.showWave,!1)})}})}},{key:"initObserver",value:function(t){var e=this;this._mObserver=new MutationObserver(function(t){clearTimeout(e.__tm),e.__tm=setTimeout(e.addElements,300)}),this._mObserver.observe(t,{childList:!0,subtree:!0})}}])&&tt(e.prototype,n),r&&tt(e,r),t}(),On={modules:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){et(t,e,n[e])})}return t}({vue:{src:"https://unpkg.com/vue/dist/vue.min.js",cb:function(){Vue.use(Me)}},lodash:{src:"https://unpkg.com/lodash/lodash.min.js",deps:["vue"],cb:function(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex/dist/vuex.min.js",deps:["vue"],cb:function(){AWES._store=AWES._store||new Vuex.Store(nt)}},"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb:function(){Vue.use(VueShortkey)}},"vue-toasted":{src:"https://unpkg.com/vue-toasted",deps:["vue"],cb:function(){Vue.use(Toasted),Vue.toasted.register("awes_success",$e("circle-check"),Ue),Vue.toasted.register("awes_error",$e("circle-cross"),Object.assign({},Ue,{type:"error"})),AWES.notify=function(t){var e=t.status,n=void 0===e?"success":e,r=t.title,i=t.message;We.includes(n)&&Vue.prototype.$toasted.global["awes_".concat(n)]({title:r,message:i})}}},"v-tooltip":{src:"https://unpkg.com/v-tooltip/dist/v-tooltip.min.js",deps:["vue"],cb:function(){VTooltip.default.options.popover=Object.assign(VTooltip.default.options.popover,{defaultPlacement:"right",defaultAutoHide:!1,defaultTrigger:"manual",defaultPopperOptions:{modifiers:{flip:{behavior:["right","top"]}}}})}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb:function(){Vue.use(VueTabs)}}},vn),install:function(t){t.lang=Ve,t.once("core:inited",function(){t.Waves=new An(t._vueRoot.$el)})}};window&&"AWES"in window?AWES.use(On):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(On))}();
