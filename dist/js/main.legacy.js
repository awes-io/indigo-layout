/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-04-26 23:20:44
 * Version: 1.7.2
 */

!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),n=t(function(t){var e=t.exports={version:"2.6.4"};"number"==typeof __e&&(__e=e)}),r=(n.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),i=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t},o=function(t){try{return!!t()}catch(t){return!0}},a=!o(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),s=e.document,c=r(s)&&r(s.createElement),l=function(t){return c?s.createElement(t):{}},u=!a&&!o(function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a}),f=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},h=Object.defineProperty,d={f:a?Object.defineProperty:function(t,e,n){if(i(t),e=f(e,!0),i(n),u)try{return h(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v=a?function(t,e,n){return d.f(t,e,p(1,n))}:function(t,e,n){return t[e]=n,t},g={}.hasOwnProperty,m=function(t,e){return g.call(t,e)},y=0,_=Math.random(),b=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++y+_).toString(36))},w=t(function(t){var r=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),E=w("native-function-to-string",Function.toString),x=t(function(t){var r=b("src"),i=(""+E).split("toString");n.inspectSource=function(t){return E.call(t)},(t.exports=function(t,n,o,a){var s="function"==typeof o;s&&(m(o,"name")||v(o,"name",n)),t[n]!==o&&(s&&(m(o,r)||v(o,r,t[n]?""+t[n]:i.join(String(n)))),t===e?t[n]=o:a?t[n]?t[n]=o:v(t,n,o):(delete t[n],v(t,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||E.call(this)})}),S=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},A=function(t,e,n){if(S(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},O=function(t,r,i){var o,a,s,c,l=t&O.F,u=t&O.G,f=t&O.S,h=t&O.P,d=t&O.B,p=u?e:f?e[r]||(e[r]={}):(e[r]||{}).prototype,g=u?n:n[r]||(n[r]={}),m=g.prototype||(g.prototype={});for(o in u&&(i=r),i)s=((a=!l&&p&&void 0!==p[o])?p:i)[o],c=d&&a?A(s,e):h&&"function"==typeof s?A(Function.call,s):s,p&&x(p,o,s,t&O.U),g[o]!=s&&v(g,o,c),h&&m[o]!=s&&(m[o]=s)};e.core=n,O.F=1,O.G=2,O.S=4,O.P=8,O.B=16,O.W=32,O.U=64,O.R=128;var k,T=O,j={}.toString,C=function(t){return j.call(t).slice(8,-1)},I=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},L=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},N=function(t){return I(L(t))},M=Math.ceil,F=Math.floor,P=function(t){return isNaN(t=+t)?0:(t>0?F:M)(t)},R=Math.min,D=function(t){return t>0?R(P(t),9007199254740991):0},V=Math.max,W=Math.min,$=w("keys"),U=function(t){return $[t]||($[t]=b(t))},H=(k=!1,function(t,e,n){var r,i=N(t),o=D(i.length),a=function(t,e){return(t=P(t))<0?V(t+e,0):W(t,e)}(n,o);if(k&&e!=e){for(;o>a;)if((r=i[a++])!=r)return!0}else for(;o>a;a++)if((k||a in i)&&i[a]===e)return k||a||0;return!k&&-1}),G=U("IE_PROTO"),B=function(t,e){var n,r=N(t),i=0,o=[];for(n in r)n!=G&&m(r,n)&&o.push(n);for(;e.length>i;)m(r,n=e[i++])&&(~H(o,n)||o.push(n));return o},q="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),X=Object.keys||function(t){return B(t,q)},Y={f:Object.getOwnPropertySymbols},z={f:{}.propertyIsEnumerable},K=function(t){return Object(L(t))},J=Object.assign,Q=!J||o(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=J({},t)[n]||Object.keys(J({},e)).join("")!=r})?function(t,e){for(var n=K(t),r=arguments.length,i=1,o=Y.f,a=z.f;r>i;)for(var s,c=I(arguments[i++]),l=o?X(c).concat(o(c)):X(c),u=l.length,f=0;u>f;)a.call(c,s=l[f++])&&(n[s]=c[s]);return n}:J;T(T.S+T.F,"Object",{assign:Q});var Z={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:e,title:e,text:t})}},watch:{showUserMenu:function(t){this.toggleBodyMobileFix(t)},showHelpers:function(t){this.toggleBodyMobileFix(t)}}},tt=Array.isArray||function(t){return"Array"==C(t)},et=t(function(t){var n=w("wks"),r=e.Symbol,i="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=i&&r[t]||(i?r:b)("Symbol."+t))}).store=n}),nt=et("species"),rt=function(t,e){return new(function(t){var e;return tt(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!tt(e.prototype)||(e=void 0),r(e)&&null===(e=e[nt])&&(e=void 0)),void 0===e?Array:e}(t))(e)},it=et("unscopables"),ot=Array.prototype;null==ot[it]&&v(ot,it,{});var at,st,ct,lt,ut,ft,ht,dt,pt,vt=function(t){ot[it][t]=!0},gt=(ct=1==(at=6),lt=2==at,ut=3==at,ft=4==at,ht=6==at,dt=5==at||ht,pt=st||rt,function(t,e,n){for(var r,i,o=K(t),a=I(o),s=A(e,n,3),c=D(a.length),l=0,u=ct?pt(t,c):lt?pt(t,0):void 0;c>l;l++)if((dt||l in a)&&(i=s(r=a[l],l,o),at))if(ct)u[l]=i;else if(i)switch(at){case 3:return!0;case 5:return r;case 6:return l;case 2:u.push(r)}else if(ft)return!1;return ht?-1:ut||ft?ft:u}),mt="findIndex",yt=!0;mt in[]&&Array(1)[mt](function(){yt=!1}),T(T.P+T.F*yt,"Array",{findIndex:function(t){return gt(this,t,arguments.length>1?arguments[1]:void 0)}}),vt(mt);var _t=function(t,e){return{value:e,done:!!t}},bt={},wt=a?Object.defineProperties:function(t,e){i(t);for(var n,r=X(e),o=r.length,a=0;o>a;)d.f(t,n=r[a++],e[n]);return t},Et=e.document,xt=Et&&Et.documentElement,St=U("IE_PROTO"),At=function(){},Ot=function(){var t,e=l("iframe"),n=q.length;for(e.style.display="none",xt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Ot=t.F;n--;)delete Ot.prototype[q[n]];return Ot()},kt=Object.create||function(t,e){var n;return null!==t?(At.prototype=i(t),n=new At,At.prototype=null,n[St]=t):n=Ot(),void 0===e?n:wt(n,e)},Tt=d.f,jt=et("toStringTag"),Ct=function(t,e,n){t&&!m(t=n?t:t.prototype,jt)&&Tt(t,jt,{configurable:!0,value:e})},It={};v(It,et("iterator"),function(){return this});var Lt=function(t,e,n){t.prototype=kt(It,{next:p(1,n)}),Ct(t,e+" Iterator")},Nt=U("IE_PROTO"),Mt=Object.prototype,Ft=Object.getPrototypeOf||function(t){return t=K(t),m(t,Nt)?t[Nt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Mt:null},Pt=et("iterator"),Rt=!([].keys&&"next"in[].keys()),Dt=function(){return this},Vt=function(t,e,n,r,i,o,a){Lt(n,e,r);var s,c,l,u=function(t){if(!Rt&&t in p)return p[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",h="values"==i,d=!1,p=t.prototype,g=p[Pt]||p["@@iterator"]||i&&p[i],m=g||u(i),y=i?h?u("entries"):m:void 0,_="Array"==e&&p.entries||g;if(_&&(l=Ft(_.call(new t)))!==Object.prototype&&l.next&&(Ct(l,f,!0),"function"!=typeof l[Pt]&&v(l,Pt,Dt)),h&&g&&"values"!==g.name&&(d=!0,m=function(){return g.call(this)}),(Rt||d||!p[Pt])&&v(p,Pt,m),bt[e]=m,bt[f]=Dt,i)if(s={values:h?m:u("values"),keys:o?m:u("keys"),entries:y},a)for(c in s)c in p||x(p,c,s[c]);else T(T.P+T.F*(Rt||d),e,s);return s},Wt=Vt(Array,"Array",function(t,e){this._t=N(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,_t(1)):_t(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");bt.Arguments=bt.Array,vt("keys"),vt("values"),vt("entries");for(var $t=et("iterator"),Ut=et("toStringTag"),Ht=bt.Array,Gt={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Bt=X(Gt),qt=0;qt<Bt.length;qt++){var Xt,Yt=Bt[qt],zt=Gt[Yt],Kt=e[Yt],Jt=Kt&&Kt.prototype;if(Jt&&(Jt[$t]||v(Jt,$t,Ht),Jt[Ut]||v(Jt,Ut,Yt),bt[Yt]=Ht,zt))for(Xt in Wt)Jt[Xt]||x(Jt,Xt,Wt[Xt],!0)}var Qt=/"/g,Zt=function(t,e,n,r){var i=String(L(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(Qt,"&quot;")+'"'),o+">"+i+"</"+e+">"};!function(t,e){var n={};n[t]=e(Zt),T(T.P+T.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}("link",function(t){return function(e){return t(this,"a","href",e)}});var te=d.f,ee=Function.prototype,ne=/^\s*function ([^ (]*)/;"name"in ee||a&&te(ee,"name",{configurable:!0,get:function(){try{return(""+this).match(ne)[1]}catch(t){return""}}});var re=function(t,e,n,r,i,o,a,s,c,l){"boolean"!=typeof a&&(c=s,s=a,a=!1);var u,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=u):e&&(u=a?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),u)if(f.functional){var h=f.render;f.render=function(t,e){return u.call(e),h(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,u):[u]}return n};var ie=re({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame__aside-nav-wrap",class:{"is-expanded":t.expanded}},[t.links?n("ul",{staticClass:"frame__aside-links"},t._l(t.links,function(e,r){return n("li",{key:r,staticClass:"frame__aside-li"},[e.children?n("div",[n(t.expanded&&!e.link?"span":"a",{tag:"component",class:["frame__aside-link frame__aside-link_sub",{"is-active":t.active===r,"no-hover":t.expanded&&!e.link}],attrs:{href:t.expanded&&e.link||""},on:{click:function(n){!e.link&&t.toggleActive(n,r)}}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),t.expanded?t._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(e){return t.toggleActive(e,r)}}})]),t._v(" "),n("slide-up-down",{attrs:{show:t.active===r||t.expanded}},[n("ul",{staticClass:"frame__aside-hidden",class:{"has-background":!t.expanded||t.active===r}},t._l(e.children,function(e,r){return n("li",{key:r,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"is-active":e.active}],attrs:{href:e.link||""}},[n("span",{class:{"text-strong":e.active}},[t._v(t._s(e.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":t.active===r}],attrs:{href:e.link||""}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])}),0):t._e(),t._v(" "),t._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator:function(t){var e=[];return t.forEach(function t(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(t):e.push(n))}),!e.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",e),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},watch:{links:{handler:function(t){this.active=t.findIndex(function(t){return t.active||t.children&&t.children.some(function(t){return t.active})})},immediate:!0}},methods:{itemActive:function(t){return this.links[t].active||this.expanded||this.hasActiveChildren[t]},toggleActive:function(t,e){t.stopPropagation(),t.preventDefault(),this.expanded||(this.active===e?this.active=null:this.active=e)}}},void 0,!1,void 0,void 0,void 0),oe=Object.getOwnPropertyDescriptor,ae={f:a?oe:function(t,e){if(t=N(t),e=f(e,!0),u)try{return oe(t,e)}catch(t){}if(m(t,e))return p(!z.f.call(t,e),t[e])}},se=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},ce={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=A(Function.call,ae.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return se(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:se}.set,le=q.concat("length","prototype"),ue={f:Object.getOwnPropertyNames||function(t){return B(t,le)}},fe="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",he="["+fe+"]",de=RegExp("^"+he+he+"*"),pe=RegExp(he+he+"*$"),ve=function(t,e,n){var r={},i=o(function(){return!!fe[t]()||"​"!="​"[t]()}),a=r[t]=i?e(ge):fe[t];n&&(r[n]=a),T(T.P+T.F*i,"String",r)},ge=ve.trim=function(t,e){return t=String(L(t)),1&e&&(t=t.replace(de,"")),2&e&&(t=t.replace(pe,"")),t},me=ve,ye=ue.f,_e=ae.f,be=d.f,we=me.trim,Ee=e.Number,xe=Ee,Se=Ee.prototype,Ae="Number"==C(kt(Se)),Oe="trim"in String.prototype,ke=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=Oe?e.trim():we(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,s=e.slice(2),c=0,l=s.length;c<l;c++)if((a=s.charCodeAt(c))<48||a>i)return NaN;return parseInt(s,r)}}return+e};if(!Ee(" 0o1")||!Ee("0b1")||Ee("+0x1")){Ee=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof Ee&&(Ae?o(function(){Se.valueOf.call(n)}):"Number"!=C(n))?function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&ce&&ce(t,i),t}(new xe(ke(e)),n,Ee):ke(e)};for(var Te,je=a?ye(xe):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Ce=0;je.length>Ce;Ce++)m(xe,Te=je[Ce])&&!m(Ee,Te)&&be(Ee,Te,_e(xe,Te));Ee.prototype=Se,Se.constructor=Ee,x(e,"Number",Ee)}var Ie,Le,Ne=re({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isOpened:this.show}},watch:{show:function(t){this.isOpened=t}},methods:{slideDown:function(t,e){var n=this,r=this._getHeight(t),i=(new Date).getTime();t.style.overflow="hidden",t.style.height=0,t.style.opacity=0;this.__animDown=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideDownDuration){var s=function(t,e){return(t=t/e-1)*t*t+1}(a,n.slideDownDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animDown=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,t.style.overflow=null,e()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(t,e){var n=this,r=this._getHeight(t);t.style.overflow="hidden";var i=(new Date).getTime();this.__animUp=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideUpDuration){var s=1-function(t,e){return(t/=e/2)<1?t*t*t/2:((t-=2)*t*t+2)/2}(a,n.slideUpDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animUp=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,t.style.overflow=null,e()})},stopUp:function(t){cancelAnimationFrame(this.__animUp),t.style.height=null,t.style.opacity=null,t.style.overflow=null},close:function(){this.isOpened=!1,this.$emit("update:show",!1)},open:function(){this.isOpened=!0,this.$emit("update:show",!0)},toggle:function(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)},_getHeight:function(t){if(t.children){for(var e=0,n=t.children,r=0;r<n.length;r++){var i=getComputedStyle(n[r]);e+=n[r].clientHeight+parseInt(i.marginTop)+parseInt(i.marginBottom)}return e}return t.offsetHeight}},render:function(t){return t("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[t(this.tag,{class:"slide-up-down",directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0),Me=function(t){return function(e,n){var r,i,o=String(L(e)),a=P(n),s=o.length;return a<0||a>=s?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===s||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},Fe=Me(!0),Pe=function(t,e,n){return e+(n?Fe(t,e).length:1)},Re=et("toStringTag"),De="Arguments"==C(function(){return arguments}()),Ve=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Re))?n:De?C(e):"Object"==(r=C(e))&&"function"==typeof e.callee?"Arguments":r},We=RegExp.prototype.exec,$e=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==Ve(t))throw new TypeError("RegExp#exec called on incompatible receiver");return We.call(t,e)},Ue=RegExp.prototype.exec,He=String.prototype.replace,Ge=Ue,Be=(Ie=/a/,Le=/b*/g,Ue.call(Ie,"a"),Ue.call(Le,"a"),0!==Ie.lastIndex||0!==Le.lastIndex),qe=void 0!==/()??/.exec("")[1];(Be||qe)&&(Ge=function(t){var e,n,r,o,a=this;return qe&&(n=new RegExp("^"+a.source+"$(?!\\s)",function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}.call(a))),Be&&(e=a.lastIndex),r=Ue.call(a,t),Be&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),qe&&r&&r.length>1&&He.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var Xe=Ge;T({target:"RegExp",proto:!0,forced:Xe!==/./.exec},{exec:Xe});var Ye=et("species"),ze=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),Ke=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),Je=function(t,e,n){var r=et(t),i=!o(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)}),a=i?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[Ye]=function(){return n}),n[r](""),!e}):void 0;if(!i||!a||"replace"===t&&!ze||"split"===t&&!Ke){var s=/./[r],c=n(L,r,""[t],function(t,e,n,r,o){return e.exec===Xe?i&&!o?{done:!0,value:s.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),l=c[0],u=c[1];x(String.prototype,t,l),v(RegExp.prototype,r,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)})}},Qe=Math.max,Ze=Math.min,tn=Math.floor,en=/\$([$&`']|\d\d?|<[^>]*>)/g,nn=/\$([$&`']|\d\d?)/g;Je("replace",2,function(t,e,n,r){return[function(r,i){var o=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},function(t,e){var a=r(n,t,this,e);if(a.done)return a.value;var s=i(t),c=String(this),l="function"==typeof e;l||(e=String(e));var u=s.global;if(u){var f=s.unicode;s.lastIndex=0}for(var h=[];;){var d=$e(s,c);if(null===d)break;if(h.push(d),!u)break;""===String(d[0])&&(s.lastIndex=Pe(c,D(s.lastIndex),f))}for(var p,v="",g=0,m=0;m<h.length;m++){d=h[m];for(var y=String(d[0]),_=Qe(Ze(P(d.index),c.length),0),b=[],w=1;w<d.length;w++)b.push(void 0===(p=d[w])?p:String(p));var E=d.groups;if(l){var x=[y].concat(b,_,c);void 0!==E&&x.push(E);var S=String(e.apply(void 0,x))}else S=o(y,c,_,b,E,e);_>=g&&(v+=c.slice(g,_)+S,g=_+y.length)}return v+c.slice(g)}];function o(t,e,r,i,o,a){var s=r+t.length,c=i.length,l=nn;return void 0!==o&&(o=K(o),l=en),n.call(a,l,function(n,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(s);case"<":l=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>c){var f=tn(u/10);return 0===f?n:f<=c?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):n}l=i[u-1]}return void 0===l?"":l})}});var rn=et("match"),on=et("species"),an=Math.min,sn=[].push,cn=!o(function(){});Je("split",2,function(t,e,n,o){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i,o,a=String(this);if(void 0===t&&0===e)return[];if(!r(i=t)||(void 0!==(o=i[rn])?!o:"RegExp"!=C(i)))return n.call(a,t,e);for(var s,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,p=new RegExp(t.source,f+"g");(s=Xe.call(p,a))&&!((c=p.lastIndex)>h&&(u.push(a.slice(h,s.index)),s.length>1&&s.index<a.length&&sn.apply(u,s.slice(1)),l=s[0].length,h=c,u.length>=d));)p.lastIndex===s.index&&p.lastIndex++;return h===a.length?!l&&p.test("")||u.push(""):u.push(a.slice(h)),u.length>d?u.slice(0,d):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):a.call(String(i),n,r)},function(t,e){var r=o(a,t,this,e,a!==n);if(r.done)return r.value;var s=i(t),c=String(this),l=function(t,e){var n,r=i(t).constructor;return void 0===r||null==(n=i(r)[on])?e:S(n)}(s,RegExp),u=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(cn?"y":"g"),h=new l(cn?s:"^(?:"+s.source+")",f),d=void 0===e?4294967295:e>>>0;if(0===d)return[];if(0===c.length)return null===$e(h,c)?[c]:[];for(var p=0,v=0,g=[];v<c.length;){h.lastIndex=cn?v:0;var m,y=$e(h,cn?c:c.slice(v));if(null===y||(m=an(D(h.lastIndex+(cn?0:v)),c.length))===p)v=Pe(c,v,u);else{if(g.push(c.slice(p,v)),g.length===d)return g;for(var _=1;_<=y.length-1;_++)if(g.push(y[_]),g.length===d)return g;v=p=m}}return g.push(c.slice(p)),g}]});var ln=re({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{attrs:{"data-language":t.language}},[n("button",{staticClass:"hljs-copy has-wave",on:{click:function(e){return t.copy(t.$refs.code)}}},[t._v(t._s(t.$lang.CODE_COPY)),n("span",{staticClass:"wave"})]),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement;return(this._self._c||t)("code",{ref:"code",class:this.language+" language-"+this.language},[this._t("default")],2)}]},void 0,{name:"code-block",props:{language:String},methods:{copy:function(t){var e=document,n=e.createElement("TEXTAREA");n.id="copy-text",n.style.height=0,n.position="fixed",e.body.appendChild(n);try{n.value=t.innerText.split("\n").filter(function(t){return""!==t&&"\t"!==t}).join("\n"),n.select(),e.execCommand("copy"),AWES.notify({message:AWES.lang.CODE_COPIED_MSG})}catch(t){AWES.notify({status:"error",message:t.message})}finally{e.body.removeChild(n)}},escapeHTML:function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},loadHighlight:function(t){AWES.utils.loadModules({highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb:t}})},initHighlight:function(){var t=this.$refs.code,e=this.escapeHTML(t.innerText);this.$refs.code.innerHTML=hljs.lineNumbersValue(e),hljs.highlightBlock(t)}},mounted:function(){var t=this;this.$nextTick(function(){t.loadHighlight(t.initHighlight)})}},void 0,!1,void 0,void 0,void 0);var un={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(Z),Vue.component("content-placeholder",{functional:!0,render:function(t){return null}}),Vue.component("frame-nav",ie),Vue.component("slide-up-down",Ne),Vue.component("code-block",ln))}},fn={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard",CONTENT_EMPTY:"No data",CONTENT_ERROR:"Error",CONTENT_LOADING:"Loading..."};function hn(){var t=document.querySelectorAll('pre > code[class^="language"]');t&&t.forEach(function(t){var e=t.parentElement,n=e.parentElement,r=t.className.match(/language-([a-z]*)/),i=document.createElement("code-block");i.setAttribute("language",r[1]),i.innerText=t.innerText,n.replaceChild(i,e),e=null,n=null,i=null})}Je("match",1,function(t,e,n,r){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var o=i(t),a=String(this);if(!o.global)return $e(o,a);var s=o.unicode;o.lastIndex=0;for(var c,l=[],u=0;null!==(c=$e(o,a));){var f=String(c[0]);l[u]=f,""===f&&(o.lastIndex=Pe(a,D(o.lastIndex),s)),u++}return 0===u?null:l}]});var dn=Me(!0);Vt(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=dn(e,n),this._i+=t.length,{value:t,done:!1})});var pn=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}},vn=et("iterator"),gn=Array.prototype,mn=function(t,e,n){e in t?d.f(t,e,p(0,n)):t[e]=n},yn=et("iterator"),_n=n.getIteratorMethod=function(t){if(null!=t)return t[yn]||t["@@iterator"]||bt[Ve(t)]},bn=et("iterator"),wn=!1;try{[7][bn]().return=function(){wn=!0}}catch(t){}function En(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}T(T.S+T.F*!function(t,e){if(!e&&!wn)return!1;var n=!1;try{var r=[7],i=r[bn]();i.next=function(){return{done:n=!0}},r[bn]=function(){return i},t(r)}catch(t){}return n}(function(t){}),"Array",{from:function(t){var e,n,r,i,o,a=K(t),s="function"==typeof this?this:Array,c=arguments.length,l=c>1?arguments[1]:void 0,u=void 0!==l,f=0,h=_n(a);if(u&&(l=A(l,c>2?arguments[2]:void 0,2)),null!=h&&(s!=Array||(void 0===(o=h)||bt.Array!==o&&gn[vn]!==o)))for(i=h.call(a),n=new s;!(r=i.next()).done;f++)mn(n,f,u?pn(i,l,[r.value,f],!0):r.value);else for(n=new s(e=D(a.length));e>f;f++)mn(n,f,u?l(a[f],f):a[f]);return n.length=f,n}});var xn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.initElObserver(),this.addElements(),this.initRootObserver(e))}var e,n,r;return e=t,r=[{key:"showWave",value:function(e){var n=this.__AWES_WAVE__,r=n.wave;n.active?(clearTimeout(this._tm),t.resetWave(this)):this.__AWES_WAVE__.active=!0,r.style.cssText="\n            transition: transform ".concat(600,"ms ease, opacity ").concat(600,"ms ease;\n            opacity: 0.5;\n            transform: translate(-50%, -50%) scale(2);\n            top: ").concat(e.offsetY,"px;\n            left: ").concat(e.offsetX,"px\n        ")}},{key:"hideWave",value:function(e){var n=this;this.__AWES_WAVE__.wave.style.opacity="0",this._tm=setTimeout(function(){n.__AWES_WAVE__.active=!1,t.resetWave(n)},400)}},{key:"resetWave",value:function(t){t.__AWES_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete t._tm}}],(n=[{key:"addElements",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=t.querySelectorAll(e.selector),this._elements&&Array.from(this._elements).forEach(this.addElement,this)}},{key:"addElement",value:function(e){if(!e.__AWES_WAVE__){e.classList.contains("has-wave")||e.classList.add("has-wave"),this._elObserver.observe(e,{attributes:!0,attributeFilter:["class"]});var n=e.querySelector("span.wave");n||((n=document.createElement("span")).classList.add("wave"),e.appendChild(n)),e.__AWES_WAVE__={wave:n,active:!1},t.resetWave(e),e.addEventListener("mousedown",t.showWave,!1),e.addEventListener("mouseup",t.hideWave,!1)}}},{key:"initElObserver",value:function(){this._elObserver=new MutationObserver(function(t){t.forEach(function(t){var e=t.target,n=e.className;/has-wave/.test(n)||(e.className=n?n+" has-wave":"has-wave")})})}},{key:"initRootObserver",value:function(t){var e=this;this._rootObserver=new MutationObserver(function(t){clearTimeout(e.__tm),e.__tm=setTimeout(e.addElements.bind(e),300)}),this._rootObserver.observe(t,{childList:!0,subtree:!0})}}])&&En(e.prototype,n),r&&En(e,r),t}(),Sn={name:"indigo-layout",version:"1.7.2",modules:{"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb:function(){Vue.use(VueShortkey)}},"v-tooltip":{src:"https://unpkg.com/v-tooltip/dist/v-tooltip.min.js",deps:["vue"],cb:function(){VTooltip.default.options.defaultClass="theme-default",VTooltip.default.options.popover=Object.assign(VTooltip.default.options.popover,{defaultPlacement:"right",defaultAutoHide:!1,defaultTrigger:"manual",defaultPopperOptions:{modifiers:{flip:{behavior:["right","top"]}}}})}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb:function(){Vue.use(VueTabs)}}},install:function(t){t.lang=fn,hn(),t.on("core:popstate",hn),t._watchedNames.push("code-block"),Vue.use(un),t.once("core:inited",function(){t.Waves=new xn(document.body)})}};window&&"AWES"in window?AWES.use(Sn):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(Sn))}();
