/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-04-02 15:21:01
 * Version: 1.1.2
 */

!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),n=t(function(t){var e=t.exports={version:"2.6.4"};"number"==typeof __e&&(__e=e)}),r=(n.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),i=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t},o=function(t){try{return!!t()}catch(t){return!0}},a=!o(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),s=e.document,c=r(s)&&r(s.createElement),u=function(t){return c?s.createElement(t):{}},l=!a&&!o(function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}),f=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},h=Object.defineProperty,d={f:a?Object.defineProperty:function(t,e,n){if(i(t),e=f(e,!0),i(n),l)try{return h(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v=a?function(t,e,n){return d.f(t,e,p(1,n))}:function(t,e,n){return t[e]=n,t},g={}.hasOwnProperty,m=function(t,e){return g.call(t,e)},y=0,_=Math.random(),b=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++y+_).toString(36))},E=t(function(t){var r=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),w=E("native-function-to-string",Function.toString),S=t(function(t){var r=b("src"),i=(""+w).split("toString");n.inspectSource=function(t){return w.call(t)},(t.exports=function(t,n,o,a){var s="function"==typeof o;s&&(m(o,"name")||v(o,"name",n)),t[n]!==o&&(s&&(m(o,r)||v(o,r,t[n]?""+t[n]:i.join(String(n)))),t===e?t[n]=o:a?t[n]?t[n]=o:v(t,n,o):(delete t[n],v(t,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||w.call(this)})}),O=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},A=function(t,e,n){if(O(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},x=function(t,r,i){var o,a,s,c,u=t&x.F,l=t&x.G,f=t&x.S,h=t&x.P,d=t&x.B,p=l?e:f?e[r]||(e[r]={}):(e[r]||{}).prototype,g=l?n:n[r]||(n[r]={}),m=g.prototype||(g.prototype={});for(o in l&&(i=r),i)s=((a=!u&&p&&void 0!==p[o])?p:i)[o],c=d&&a?A(s,e):h&&"function"==typeof s?A(Function.call,s):s,p&&S(p,o,s,t&x.U),g[o]!=s&&v(g,o,c),h&&m[o]!=s&&(m[o]=s)};e.core=n,x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128;var T,j=x,k={}.toString,C=function(t){return k.call(t).slice(8,-1)},N=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},L=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},I=function(t){return N(L(t))},D=Math.ceil,F=Math.floor,P=function(t){return isNaN(t=+t)?0:(t>0?F:D)(t)},M=Math.min,R=function(t){return t>0?M(P(t),9007199254740991):0},W=Math.max,V=Math.min,$=E("keys"),U=function(t){return $[t]||($[t]=b(t))},G=(T=!1,function(t,e,n){var r,i=I(t),o=R(i.length),a=function(t,e){return(t=P(t))<0?W(t+e,0):V(t,e)}(n,o);if(T&&e!=e){for(;o>a;)if((r=i[a++])!=r)return!0}else for(;o>a;a++)if((T||a in i)&&i[a]===e)return T||a||0;return!T&&-1}),B=U("IE_PROTO"),q=function(t,e){var n,r=I(t),i=0,o=[];for(n in r)n!=B&&m(r,n)&&o.push(n);for(;e.length>i;)m(r,n=e[i++])&&(~G(o,n)||o.push(n));return o},H="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Y=Object.keys||function(t){return q(t,H)},X={f:Object.getOwnPropertySymbols},z={f:{}.propertyIsEnumerable},K=function(t){return Object(L(t))},J=Object.assign,Q=!J||o(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=J({},t)[n]||Object.keys(J({},e)).join("")!=r})?function(t,e){for(var n=K(t),r=arguments.length,i=1,o=X.f,a=z.f;r>i;)for(var s,c=N(arguments[i++]),u=o?Y(c).concat(o(c)):Y(c),l=u.length,f=0;l>f;)a.call(c,s=u[f++])&&(n[s]=c[s]);return n}:J;function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}j(j.S+j.F,"Object",{assign:Q});var nt={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:e,title:e,text:t})}},watch:{showUserMenu:function(t){this.toggleBodyMobileFix(t)},showHelpers:function(t){this.toggleBodyMobileFix(t)}}};var rt=function(t,e,n,r,i,o,a,s,c,u){"boolean"!=typeof a&&(c=s,s=a,a=!1);var l,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=l):e&&(l=a?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),l)if(f.functional){var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,l):[l]}return n};var it=rt({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component"},[!t.isEmpty||t.hasError||t.isLoading?t._e():t._t("empty",[t._v(t._s(t.$lang.CONTENT_EMPTY))]),t._v(" "),t.isLoading?t._t("loading",[t._v(t._s(t.$lang.CONTENT_LOADING))]):t._e(),t._v(" "),t.hasError&&!t.isLoading?t._t("error",[n("span",{staticStyle:{color:"red"}},[t._v(t._s(t.$lang.CONTENT_ERROR))])]):t._e(),t._v(" "),t.isEmpty||t.isLoading||t.hasError?t._e():t._t("default",null,null,t.content)],2)},staticRenderFns:[]},void 0,{name:"content-wrapper",props:{tag:{type:String,default:"div"},default:{default:null},storeData:{type:String,required:!0},url:String,method:{type:String,default:"GET"}},data:function(){return{hasError:!1}},computed:{loadingName:function(){return this.storeData+"_loading"},isLoading:function(){return this.$store.state[this.loadingName]},isEmpty:function(){return this.AWES.utils.object.isEmpty(this.data)},data:function(){return this.$store.state[this.storeData]},content:function(){return"object"===Z(this.data)?this.data:{data:this.data}}},watch:{url:function(){this.fetchData()},hasError:function(t){this.$emit("error",t)},isLoading:function(t){this.$emit("loading",t)}},methods:{setLoader:function(t){AWES._store.commit("setData",{param:this.loadingName,data:t.detail})},fetchData:function(){var t=this;AWES.on("core:ajax",this.setLoader),AWES.ajax({},this.url,this.method).then(function(e){AWES.off("core:ajax",t.setLoader),e.success?(AWES._store.commit("setData",{param:t.storeData,data:e.data}),t.hasError=!1):t.hasError=!0})}},created:function(){this.default?AWES._store.commit("setData",{param:this.storeData,data:this.default}):this.url&&this.fetchData()},errorCaptured:function(t,e,n){this.hasError=!0,AWES.notify({status:"error",message:t.message}),AWES_CONFIG.dev&&console.log(t,e,n)}},void 0,!1,void 0,void 0,void 0),ot=Array.isArray||function(t){return"Array"==C(t)},at=t(function(t){var n=E("wks"),r=e.Symbol,i="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=i&&r[t]||(i?r:b)("Symbol."+t))}).store=n}),st=at("species"),ct=function(t,e){return new(function(t){var e;return ot(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!ot(e.prototype)||(e=void 0),r(e)&&null===(e=e[st])&&(e=void 0)),void 0===e?Array:e}(t))(e)},ut=at("unscopables"),lt=Array.prototype;null==lt[ut]&&v(lt,ut,{});var ft,ht,dt,pt,vt,gt,mt,yt,_t,bt=function(t){lt[ut][t]=!0},Et=(dt=1==(ft=6),pt=2==ft,vt=3==ft,gt=4==ft,mt=6==ft,yt=5==ft||mt,_t=ht||ct,function(t,e,n){for(var r,i,o=K(t),a=N(o),s=A(e,n,3),c=R(a.length),u=0,l=dt?_t(t,c):pt?_t(t,0):void 0;c>u;u++)if((yt||u in a)&&(i=s(r=a[u],u,o),ft))if(dt)l[u]=i;else if(i)switch(ft){case 3:return!0;case 5:return r;case 6:return u;case 2:l.push(r)}else if(gt)return!1;return mt?-1:vt||gt?gt:l}),wt="findIndex",St=!0;wt in[]&&Array(1)[wt](function(){St=!1}),j(j.P+j.F*St,"Array",{findIndex:function(t){return Et(this,t,arguments.length>1?arguments[1]:void 0)}}),bt(wt);var Ot=function(t,e){return{value:e,done:!!t}},At={},xt=a?Object.defineProperties:function(t,e){i(t);for(var n,r=Y(e),o=r.length,a=0;o>a;)d.f(t,n=r[a++],e[n]);return t},Tt=e.document,jt=Tt&&Tt.documentElement,kt=U("IE_PROTO"),Ct=function(){},Nt=function(){var t,e=u("iframe"),n=H.length;for(e.style.display="none",jt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Nt=t.F;n--;)delete Nt.prototype[H[n]];return Nt()},Lt=Object.create||function(t,e){var n;return null!==t?(Ct.prototype=i(t),n=new Ct,Ct.prototype=null,n[kt]=t):n=Nt(),void 0===e?n:xt(n,e)},It=d.f,Dt=at("toStringTag"),Ft=function(t,e,n){t&&!m(t=n?t:t.prototype,Dt)&&It(t,Dt,{configurable:!0,value:e})},Pt={};v(Pt,at("iterator"),function(){return this});var Mt=function(t,e,n){t.prototype=Lt(Pt,{next:p(1,n)}),Ft(t,e+" Iterator")},Rt=U("IE_PROTO"),Wt=Object.prototype,Vt=Object.getPrototypeOf||function(t){return t=K(t),m(t,Rt)?t[Rt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Wt:null},$t=at("iterator"),Ut=!([].keys&&"next"in[].keys()),Gt=function(){return this},Bt=function(t,e,n,r,i,o,a){Mt(n,e,r);var s,c,u,l=function(t){if(!Ut&&t in p)return p[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",h="values"==i,d=!1,p=t.prototype,g=p[$t]||p["@@iterator"]||i&&p[i],m=g||l(i),y=i?h?l("entries"):m:void 0,_="Array"==e&&p.entries||g;if(_&&(u=Vt(_.call(new t)))!==Object.prototype&&u.next&&(Ft(u,f,!0),"function"!=typeof u[$t]&&v(u,$t,Gt)),h&&g&&"values"!==g.name&&(d=!0,m=function(){return g.call(this)}),(Ut||d||!p[$t])&&v(p,$t,m),At[e]=m,At[f]=Gt,i)if(s={values:h?m:l("values"),keys:o?m:l("keys"),entries:y},a)for(c in s)c in p||S(p,c,s[c]);else j(j.P+j.F*(Ut||d),e,s);return s},qt=Bt(Array,"Array",function(t,e){this._t=I(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,Ot(1)):Ot(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");At.Arguments=At.Array,bt("keys"),bt("values"),bt("entries");for(var Ht=at("iterator"),Yt=at("toStringTag"),Xt=At.Array,zt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Kt=Y(zt),Jt=0;Jt<Kt.length;Jt++){var Qt,Zt=Kt[Jt],te=zt[Zt],ee=e[Zt],ne=ee&&ee.prototype;if(ne&&(ne[Ht]||v(ne,Ht,Xt),ne[Yt]||v(ne,Yt,Zt),At[Zt]=Xt,te))for(Qt in qt)ne[Qt]||S(ne,Qt,qt[Qt],!0)}var re=/"/g,ie=function(t,e,n,r){var i=String(L(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(re,"&quot;")+'"'),o+">"+i+"</"+e+">"};!function(t,e){var n={};n[t]=e(ie),j(j.P+j.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}("link",function(t){return function(e){return t(this,"a","href",e)}});var oe=d.f,ae=Function.prototype,se=/^\s*function ([^ (]*)/;"name"in ae||a&&oe(ae,"name",{configurable:!0,get:function(){try{return(""+this).match(se)[1]}catch(t){return""}}});var ce=rt({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame__aside-nav-wrap"},[t.links?n("ul",{staticClass:"frame__aside-links"},t._l(t.links,function(e,r){return n("li",{key:r,staticClass:"frame__aside-li"},[e.children?n("div",[n("a",{class:["frame__aside-link frame__aside-link_sub",{"frame__aside-link_active":t.active===r}],attrs:{href:e.link||""},on:{click:function(n){!e.link&&t.toggleActive(n,r)}}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),t.expanded?t._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(e){return t.toggleActive(e,r)}}})]),t._v(" "),n("slide-up-down",{attrs:{show:t.active===r||t.expanded}},[n("ul",{staticClass:"frame__aside-hidden active"},t._l(e.children,function(e,r){return n("li",{key:r,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"frame__aside-inlink_active":e.active}],attrs:{href:e.link||""}},[n("span",{class:{"tf-strong":e.active}},[t._v(t._s(e.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":t.active===r}],attrs:{href:e.link||""}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])}),0):t._e(),t._v(" "),t._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator:function(t){var e=[];return t.forEach(function t(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(t):e.push(n))}),!e.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",e),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},watch:{links:{handler:function(t){this.active=t.findIndex(function(t){return t.active||t.children&&t.children.some(function(t){return t.active})})},immediate:!0}},methods:{itemActive:function(t){return this.links[t].active||this.expanded||this.hasActiveChildren[t]},toggleActive:function(t,e){t.stopPropagation(),t.preventDefault(),this.active===e?this.active=null:this.active=e}}},void 0,!1,void 0,void 0,void 0),ue=Object.getOwnPropertyDescriptor,le={f:a?ue:function(t,e){if(t=I(t),e=f(e,!0),l)try{return ue(t,e)}catch(t){}if(m(t,e))return p(!z.f.call(t,e),t[e])}},fe=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},he={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=A(Function.call,le.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return fe(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:fe}.set,de=H.concat("length","prototype"),pe={f:Object.getOwnPropertyNames||function(t){return q(t,de)}},ve="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",ge="["+ve+"]",me=RegExp("^"+ge+ge+"*"),ye=RegExp(ge+ge+"*$"),_e=function(t,e,n){var r={},i=o(function(){return!!ve[t]()||"​"!="​"[t]()}),a=r[t]=i?e(be):ve[t];n&&(r[n]=a),j(j.P+j.F*i,"String",r)},be=_e.trim=function(t,e){return t=String(L(t)),1&e&&(t=t.replace(me,"")),2&e&&(t=t.replace(ye,"")),t},Ee=_e,we=pe.f,Se=le.f,Oe=d.f,Ae=Ee.trim,xe=e.Number,Te=xe,je=xe.prototype,ke="Number"==C(Lt(je)),Ce="trim"in String.prototype,Ne=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=Ce?e.trim():Ae(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,s=e.slice(2),c=0,u=s.length;c<u;c++)if((a=s.charCodeAt(c))<48||a>i)return NaN;return parseInt(s,r)}}return+e};if(!xe(" 0o1")||!xe("0b1")||xe("+0x1")){xe=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof xe&&(ke?o(function(){je.valueOf.call(n)}):"Number"!=C(n))?function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&he&&he(t,i),t}(new Te(Ne(e)),n,xe):Ne(e)};for(var Le,Ie=a?we(Te):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),De=0;Ie.length>De;De++)m(Te,Le=Ie[De])&&!m(xe,Le)&&Oe(xe,Le,Se(Te,Le));xe.prototype=je,je.constructor=xe,S(e,"Number",xe)}var Fe=rt({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isOpened:this.show}},watch:{show:function(t){this.isOpened=t}},methods:{slideDown:function(t,e){var n=this,r=t.offsetHeight,i=(new Date).getTime();t.style.height=0,t.style.opacity=0;this.__animDown=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideDownDuration){var s=function(t,e){return(t=t/e-1)*t*t+1}(a,n.slideDownDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animDown=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(t,e){var n=this,r=t.offsetHeight,i=(new Date).getTime();this.__animUp=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideUpDuration){var s=1-function(t,e){return(t/=e/2)<1?t*t*t/2:((t-=2)*t*t+2)/2}(a,n.slideUpDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animUp=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,e()})},stopUp:function(t){cancelAnimationFrame(this.__animUp),t.style.height=null,t.style.opacity=null},close:function(){this.isOpened=!1,this.$emit("update:show",!1)},open:function(){this.isOpened=!0,this.$emit("update:show",!0)},toggle:function(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)}},render:function(t){return t("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[t(this.tag,{class:"slide-up-down",style:{overflow:"hidden"},directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0);var Pe,Me,Re={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(nt),Vue.component("content-wrapper",it),Vue.component("content-placeholder",{functional:!0,render:function(t){return null}}),Vue.component("frame-nav",ce),Vue.component("slide-up-down",Fe))}},We={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard",CONTENT_EMPTY:"No data",CONTENT_ERROR:"Error",CONTENT_LOADING:"Loading..."},Ve=function(t){return function(e,n){var r,i,o=String(L(e)),a=P(n),s=o.length;return a<0||a>=s?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===s||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},$e=Ve(!0),Ue=function(t,e,n){return e+(n?$e(t,e).length:1)},Ge=at("toStringTag"),Be="Arguments"==C(function(){return arguments}()),qe=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Ge))?n:Be?C(e):"Object"==(r=C(e))&&"function"==typeof e.callee?"Arguments":r},He=RegExp.prototype.exec,Ye=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==qe(t))throw new TypeError("RegExp#exec called on incompatible receiver");return He.call(t,e)},Xe=RegExp.prototype.exec,ze=String.prototype.replace,Ke=Xe,Je=(Pe=/a/,Me=/b*/g,Xe.call(Pe,"a"),Xe.call(Me,"a"),0!==Pe.lastIndex||0!==Me.lastIndex),Qe=void 0!==/()??/.exec("")[1];(Je||Qe)&&(Ke=function(t){var e,n,r,o,a=this;return Qe&&(n=new RegExp("^"+a.source+"$(?!\\s)",function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}.call(a))),Je&&(e=a.lastIndex),r=Xe.call(a,t),Je&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),Qe&&r&&r.length>1&&ze.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var Ze=Ke;j({target:"RegExp",proto:!0,forced:Ze!==/./.exec},{exec:Ze});var tn=at("species"),en=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),nn=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),rn=function(t,e,n){var r=at(t),i=!o(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)}),a=i?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[tn]=function(){return n}),n[r](""),!e}):void 0;if(!i||!a||"replace"===t&&!en||"split"===t&&!nn){var s=/./[r],c=n(L,r,""[t],function(t,e,n,r,o){return e.exec===Ze?i&&!o?{done:!0,value:s.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),u=c[0],l=c[1];S(String.prototype,t,u),v(RegExp.prototype,r,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)})}};rn("match",1,function(t,e,n,r){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var o=i(t),a=String(this);if(!o.global)return Ye(o,a);var s=o.unicode;o.lastIndex=0;for(var c,u=[],l=0;null!==(c=Ye(o,a));){var f=String(c[0]);u[l]=f,""===f&&(o.lastIndex=Ue(a,R(o.lastIndex),s)),l++}return 0===l?null:u}]});var on=at("match"),an=at("species"),sn=Math.min,cn=[].push,un=!o(function(){});rn("split",2,function(t,e,n,o){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i,o,a=String(this);if(void 0===t&&0===e)return[];if(!r(i=t)||(void 0!==(o=i[on])?!o:"RegExp"!=C(i)))return n.call(a,t,e);for(var s,c,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,p=new RegExp(t.source,f+"g");(s=Ze.call(p,a))&&!((c=p.lastIndex)>h&&(l.push(a.slice(h,s.index)),s.length>1&&s.index<a.length&&cn.apply(l,s.slice(1)),u=s[0].length,h=c,l.length>=d));)p.lastIndex===s.index&&p.lastIndex++;return h===a.length?!u&&p.test("")||l.push(""):l.push(a.slice(h)),l.length>d?l.slice(0,d):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):a.call(String(i),n,r)},function(t,e){var r=o(a,t,this,e,a!==n);if(r.done)return r.value;var s=i(t),c=String(this),u=function(t,e){var n,r=i(t).constructor;return void 0===r||null==(n=i(r)[an])?e:O(n)}(s,RegExp),l=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(un?"y":"g"),h=new u(un?s:"^(?:"+s.source+")",f),d=void 0===e?4294967295:e>>>0;if(0===d)return[];if(0===c.length)return null===Ye(h,c)?[c]:[];for(var p=0,v=0,g=[];v<c.length;){h.lastIndex=un?v:0;var m,y=Ye(h,un?c:c.slice(v));if(null===y||(m=sn(R(h.lastIndex+(un?0:v)),c.length))===p)v=Ue(c,v,l);else{if(g.push(c.slice(p,v)),g.length===d)return g;for(var _=1;_<=y.length-1;_++)if(g.push(y[_]),g.length===d)return g;v=p=m}}return g.push(c.slice(p)),g}]});var ln={highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb:function(){AWES.once("core:inited",function(){hljs.initHighlighting();var t=document.querySelectorAll(".hljs");t&&t.forEach(function(t){var e=t.parentNode;hljs.lineNumbersBlock(t);var n=t.className.match(/language-([a-z]*)/);n&&e.setAttribute("data-language",n[1]);var r=document.createElement("BUTTON");r.className="hljs-copy",r.innerText=AWES.lang.CODE_COPY,r.addEventListener("click",function(){(function(t){var e=document,n=document.createElement("TEXTAREA");n.id="copy-text",n.style.height=0,n.position="fixed",e.body.appendChild(n);try{return n.value=t.innerText.split("\n").filter(function(t){return""!==t&&"\t"!==t}).join("\n"),n.select(),e.execCommand("copy"),!0}catch(t){return!1}finally{e.body.removeChild(n)}})(t)&&AWES.notify({message:AWES.lang.CODE_COPIED_MSG})},!1),e.insertBefore(r,t)})})}}},fn=Ve(!0);Bt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=fn(e,n),this._i+=t.length,{value:t,done:!1})});var hn=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}},dn=at("iterator"),pn=Array.prototype,vn=function(t,e,n){e in t?d.f(t,e,p(0,n)):t[e]=n},gn=at("iterator"),mn=n.getIteratorMethod=function(t){if(null!=t)return t[gn]||t["@@iterator"]||At[qe(t)]},yn=at("iterator"),_n=!1;try{[7][yn]().return=function(){_n=!0}}catch(t){}j(j.S+j.F*!function(t,e){if(!e&&!_n)return!1;var n=!1;try{var r=[7],i=r[yn]();i.next=function(){return{done:n=!0}},r[yn]=function(){return i},t(r)}catch(t){}return n}(function(t){}),"Array",{from:function(t){var e,n,r,i,o,a=K(t),s="function"==typeof this?this:Array,c=arguments.length,u=c>1?arguments[1]:void 0,l=void 0!==u,f=0,h=mn(a);if(l&&(u=A(u,c>2?arguments[2]:void 0,2)),null!=h&&(s!=Array||(void 0===(o=h)||At.Array!==o&&pn[dn]!==o)))for(i=h.call(a),n=new s;!(r=i.next()).done;f++)vn(n,f,l?hn(i,u,[r.value,f],!0):r.value);else for(n=new s(e=R(a.length));e>f;f++)vn(n,f,l?u(a[f],f):a[f]);return n.length=f,n}});var bn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.initElObserver(),this.addElements(),this.initRootObserver(e))}var e,n,r;return e=t,r=[{key:"showWave",value:function(e){var n=this.__AWES_WAVE__,r=n.wave;n.active?(clearTimeout(this._tm),t.resetWave(this)):this.__AWES_WAVE__.active=!0,r.style.cssText="\n            transition: transform ".concat(600,"ms ease, opacity ").concat(600,"ms ease;\n            opacity: 0.5;\n            transform: translate(-50%, -50%) scale(2);\n            top: ").concat(e.offsetY,"px;\n            left: ").concat(e.offsetX,"px\n        ")}},{key:"hideWave",value:function(e){var n=this;this.__AWES_WAVE__.wave.style.opacity="0",this._tm=setTimeout(function(){n.__AWES_WAVE__.active=!1,t.resetWave(n)},400)}},{key:"resetWave",value:function(t){t.__AWES_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete t._tm}}],(n=[{key:"addElements",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=t.querySelectorAll(e.selector),this._elements&&Array.from(this._elements).forEach(this.addElement,this)}},{key:"addElement",value:function(e){if(!e.__AWES_WAVE__){e.classList.contains("has-wave")||e.classList.add("has-wave"),this._elObserver.observe(e,{attributes:!0,attributeFilter:["class"]});var n=e.querySelector("span.wave");n||((n=document.createElement("span")).classList.add("wave"),e.appendChild(n)),e.__AWES_WAVE__={wave:n,active:!1},t.resetWave(e),e.addEventListener("mousedown",t.showWave,!1),e.addEventListener("mouseup",t.hideWave,!1)}}},{key:"initElObserver",value:function(){this._elObserver=new MutationObserver(function(t){t.forEach(function(t){var e=t.target,n=e.className;/has-wave/.test(n)||(e.className=n?n+" has-wave":"has-wave")})})}},{key:"initRootObserver",value:function(t){var e=this;this._rootObserver=new MutationObserver(function(t){clearTimeout(e.__tm),e.__tm=setTimeout(e.addElements.bind(e),300)}),this._rootObserver.observe(t,{childList:!0,subtree:!0})}}])&&tt(e.prototype,n),r&&tt(e,r),t}(),En={name:"indigo-layout",version:"1.1.2",modules:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){et(t,e,n[e])})}return t}({"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb:function(){Vue.use(VueShortkey)}},"v-tooltip":{src:"https://unpkg.com/v-tooltip/dist/v-tooltip.min.js",deps:["vue"],cb:function(){VTooltip.default.options.defaultClass="theme-default",VTooltip.default.options.popover=Object.assign(VTooltip.default.options.popover,{defaultPlacement:"right",defaultAutoHide:!1,defaultTrigger:"manual",defaultPopperOptions:{modifiers:{flip:{behavior:["right","top"]}}}})}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb:function(){Vue.use(VueTabs)}}},ln),install:function(t){Vue.use(Re),t.lang=We,t.once("core:inited",function(){t.Waves=new bn(t._vueRoot.$el)})}};window&&"AWES"in window?AWES.use(En):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(En))}();
