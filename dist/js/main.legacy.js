/**
 * Bundle of AWES indigo-layout transpiled and polyfilled
 * Generated: 2019-06-28 16:16:38
 * Version: 1.10.3
 */

!function(){"use strict";var t={data:function(){return{togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}},methods:{toggleBodyFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix:function(t){document.documentElement.classList[t?"add":"remove"]("body-overflow-usermenu")},openNav:function(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick:function(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$notify({group:"bottom-right",type:e,title:e,text:t})}},watch:{showUserMenu:function(t){this.toggleBodyMobileFix(t)},showHelpers:function(t){this.toggleBodyMobileFix(t)}}};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),r=e(function(t){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)}),i=(r.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),o=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t},a=function(t){try{return!!t()}catch(t){return!0}},s=!a(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),c=n.document,l=i(c)&&i(c.createElement),u=function(t){return l?c.createElement(t):{}},f=!s&&!a(function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}),h=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},d=Object.defineProperty,p={f:s?Object.defineProperty:function(t,e,n){if(o(t),e=h(e,!0),o(n),f)try{return d(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},v=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},g=s?function(t,e,n){return p.f(t,e,v(1,n))}:function(t,e,n){return t[e]=n,t},y={}.hasOwnProperty,m=function(t,e){return y.call(t,e)},_=0,w=Math.random(),b=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++_+w).toString(36))},E=e(function(t){var e=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),x=E("native-function-to-string",Function.toString),O=e(function(t){var e=b("src"),i=(""+x).split("toString");r.inspectSource=function(t){return x.call(t)},(t.exports=function(t,r,o,a){var s="function"==typeof o;s&&(m(o,"name")||g(o,"name",r)),t[r]!==o&&(s&&(m(o,e)||g(o,e,t[r]?""+t[r]:i.join(String(r)))),t===n?t[r]=o:a?t[r]?t[r]=o:g(t,r,o):(delete t[r],g(t,r,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||x.call(this)})}),A=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},S=function(t,e,n){if(A(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},k=function(t,e,i){var o,a,s,c,l=t&k.F,u=t&k.G,f=t&k.S,h=t&k.P,d=t&k.B,p=u?n:f?n[e]||(n[e]={}):(n[e]||{}).prototype,v=u?r:r[e]||(r[e]={}),y=v.prototype||(v.prototype={});for(o in u&&(i=e),i)s=((a=!l&&p&&void 0!==p[o])?p:i)[o],c=d&&a?S(s,n):h&&"function"==typeof s?S(Function.call,s):s,p&&O(p,o,s,t&k.U),v[o]!=s&&g(v,o,c),h&&y[o]!=s&&(y[o]=s)};n.core=r,k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128;var j=k,C={}.toString,I=function(t){return C.call(t).slice(8,-1)},T=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==I(t)?t.split(""):Object(t)},N=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},F=function(t){return Object(N(t))},M=Math.ceil,R=Math.floor,D=function(t){return isNaN(t=+t)?0:(t>0?R:M)(t)},P=Math.min,W=function(t){return t>0?P(D(t),9007199254740991):0},L=Array.isArray||function(t){return"Array"==I(t)},$=e(function(t){var e=E("wks"),r=n.Symbol,i="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=i&&r[t]||(i?r:b)("Symbol."+t))}).store=e}),U=$("species"),V=function(t,e){return new(function(t){var e;return L(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!L(e.prototype)||(e=void 0),i(e)&&null===(e=e[U])&&(e=void 0)),void 0===e?Array:e}(t))(e)},B=$("unscopables"),H=Array.prototype;null==H[B]&&g(H,B,{});var q,G,X,Y,z,K,J,Q,Z,tt=(X=1==(q=6),Y=2==q,z=3==q,K=4==q,J=6==q,Q=5==q||J,Z=G||V,function(t,e,n){for(var r,i,o=F(t),a=T(o),s=S(e,n,3),c=W(a.length),l=0,u=X?Z(t,c):Y?Z(t,0):void 0;c>l;l++)if((Q||l in a)&&(i=s(r=a[l],l,o),q))if(X)u[l]=i;else if(i)switch(q){case 3:return!0;case 5:return r;case 6:return l;case 2:u.push(r)}else if(K)return!1;return J?-1:z||K?K:u}),et="findIndex",nt=!0;et in[]&&Array(1)[et](function(){nt=!1}),j(j.P+j.F*nt,"Array",{findIndex:function(t){return tt(this,t,arguments.length>1?arguments[1]:void 0)}}),function(t){H[B][t]=!0}(et);var rt=/"/g,it=function(t,e,n,r){var i=String(N(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(r).replace(rt,"&quot;")+'"'),o+">"+i+"</"+e+">"};!function(t,e){var n={};n[t]=e(it),j(j.P+j.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}("link",function(t){return function(e){return t(this,"a","href",e)}});var ot=p.f,at=Function.prototype,st=/^\s*function ([^ (]*)/;"name"in at||s&&ot(at,"name",{configurable:!0,get:function(){try{return(""+this).match(st)[1]}catch(t){return""}}});var ct=function(t,e,n,r,i,o,a,s,c,l){"boolean"!=typeof a&&(c=s,s=a,a=!1);var u,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),r&&(f._scopeId=r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=u):e&&(u=a?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),u)if(f.functional){var h=f.render;f.render=function(t,e){return u.call(e),h(t,e)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,u):[u]}return n};var lt,ut=ct({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame__aside-nav-wrap",class:{"is-expanded":t.expanded}},[t.links?n("ul",{staticClass:"frame__aside-links"},t._l(t.links,function(e,r){return n("li",{key:r,staticClass:"frame__aside-li"},[e.children?n("div",[n(t.expanded&&!e.link?"span":"a",{tag:"component",class:["frame__aside-link frame__aside-link_sub",{"is-active":t.active===r,"no-hover":t.expanded&&!e.link}],attrs:{href:t.expanded&&e.link||""},on:{click:function(n){!e.link&&t.toggleActive(n,r)}}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),t.expanded?t._e():n("i",{staticClass:"icon icon-angle-bottom",on:{click:function(e){return t.toggleActive(e,r)}}})]),t._v(" "),n("slide-up-down",{attrs:{show:t.active===r||t.expanded}},[n("ul",{staticClass:"frame__aside-hidden",class:{"has-background":!t.expanded||t.active===r}},t._l(e.children,function(e,r){return n("li",{key:r,staticClass:"frame__aside-inlist"},[n("a",{class:["frame__aside-inlink",{"is-active":e.active}],attrs:{href:e.link||""}},[n("span",{class:{"text-strong":e.active}},[t._v(t._s(e.name))])])])}),0)])],1):n("a",{class:["frame__aside-link",{"frame__aside-link_active":t.active===r}],attrs:{href:e.link||""}},[e.icon?n("i",{class:"icon icon-"+e.icon}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])}),0):t._e(),t._v(" "),t._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator:function(t){var e=[];return t.forEach(function t(n){n.name&&n.link||(n.name&&n.children&&Array.isArray(n.children)?n.children.forEach(t):e.push(n))}),!e.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",e),!1)}},expanded:{type:Boolean,default:!1}},data:function(){return{active:null}},watch:{links:{handler:function(t){this.active=t.findIndex(function(t){return t.active||t.children&&t.children.some(function(t){return t.active})})},immediate:!0}},methods:{itemActive:function(t){return this.links[t].active||this.expanded||this.hasActiveChildren[t]},toggleActive:function(t,e){t.stopPropagation(),t.preventDefault(),this.expanded||(this.active===e?this.active=null:this.active=e)}}},void 0,!1,void 0,void 0,void 0),ft={f:{}.propertyIsEnumerable},ht=function(t){return T(N(t))},dt=Object.getOwnPropertyDescriptor,pt={f:s?dt:function(t,e){if(t=ht(t),e=h(e,!0),f)try{return dt(t,e)}catch(t){}if(m(t,e))return v(!ft.f.call(t,e),t[e])}},vt=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},gt={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=S(Function.call,pt.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return vt(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:vt}.set,yt=Math.max,mt=Math.min,_t=E("keys"),wt=function(t){return _t[t]||(_t[t]=b(t))},bt=(lt=!1,function(t,e,n){var r,i=ht(t),o=W(i.length),a=function(t,e){return(t=D(t))<0?yt(t+e,0):mt(t,e)}(n,o);if(lt&&e!=e){for(;o>a;)if((r=i[a++])!=r)return!0}else for(;o>a;a++)if((lt||a in i)&&i[a]===e)return lt||a||0;return!lt&&-1}),Et=wt("IE_PROTO"),xt=function(t,e){var n,r=ht(t),i=0,o=[];for(n in r)n!=Et&&m(r,n)&&o.push(n);for(;e.length>i;)m(r,n=e[i++])&&(~bt(o,n)||o.push(n));return o},Ot="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),At=Ot.concat("length","prototype"),St={f:Object.getOwnPropertyNames||function(t){return xt(t,At)}},kt="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",jt="["+kt+"]",Ct=RegExp("^"+jt+jt+"*"),It=RegExp(jt+jt+"*$"),Tt=function(t,e,n){var r={},i=a(function(){return!!kt[t]()||"​"!="​"[t]()}),o=r[t]=i?e(Nt):kt[t];n&&(r[n]=o),j(j.P+j.F*i,"String",r)},Nt=Tt.trim=function(t,e){return t=String(N(t)),1&e&&(t=t.replace(Ct,"")),2&e&&(t=t.replace(It,"")),t},Ft=Tt,Mt=Object.keys||function(t){return xt(t,Ot)},Rt=s?Object.defineProperties:function(t,e){o(t);for(var n,r=Mt(e),i=r.length,a=0;i>a;)p.f(t,n=r[a++],e[n]);return t},Dt=n.document,Pt=Dt&&Dt.documentElement,Wt=wt("IE_PROTO"),Lt=function(){},$t=function(){var t,e=u("iframe"),n=Ot.length;for(e.style.display="none",Pt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),$t=t.F;n--;)delete $t.prototype[Ot[n]];return $t()},Ut=Object.create||function(t,e){var n;return null!==t?(Lt.prototype=o(t),n=new Lt,Lt.prototype=null,n[Wt]=t):n=$t(),void 0===e?n:Rt(n,e)},Vt=St.f,Bt=pt.f,Ht=p.f,qt=Ft.trim,Gt=n.Number,Xt=Gt,Yt=Gt.prototype,zt="Number"==I(Ut(Yt)),Kt="trim"in String.prototype,Jt=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=Kt?e.trim():qt(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,s=e.slice(2),c=0,l=s.length;c<l;c++)if((a=s.charCodeAt(c))<48||a>i)return NaN;return parseInt(s,r)}}return+e};if(!Gt(" 0o1")||!Gt("0b1")||Gt("+0x1")){Gt=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof Gt&&(zt?a(function(){Yt.valueOf.call(n)}):"Number"!=I(n))?function(t,e,n){var r,o=e.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&i(r)&&gt&&gt(t,r),t}(new Xt(Jt(e)),n,Gt):Jt(e)};for(var Qt,Zt=s?Vt(Xt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),te=0;Zt.length>te;te++)m(Xt,Qt=Zt[te])&&!m(Gt,Qt)&&Ht(Gt,Qt,Bt(Xt,Qt));Gt.prototype=Yt,Yt.constructor=Gt,O(n,"Number",Gt)}var ee,ne,re=ct({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data:function(){return{isOpened:this.show}},watch:{show:function(t){this.isOpened=t}},methods:{slideDown:function(t,e){var n=this,r=this._getHeight(t),i=(new Date).getTime();t.style.overflow="hidden",t.style.height=0,t.style.opacity=0;this.__animDown=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideDownDuration){var s=function(t,e){return(t=t/e-1)*t*t+1}(a,n.slideDownDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animDown=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,t.style.overflow=null,e()})},stopDown:function(){cancelAnimationFrame(this.__animDown)},slideUp:function(t,e){var n=this,r=this._getHeight(t);t.style.overflow="hidden";var i=(new Date).getTime();this.__animUp=requestAnimationFrame(function o(){var a=(new Date).getTime()-i;if(a<n.slideUpDuration){var s=1-function(t,e){return(t/=e/2)<1?t*t*t/2:((t-=2)*t*t+2)/2}(a,n.slideUpDuration);t.style.height="".concat(Math.round(s*r),"px"),t.style.opacity=s.toFixed(1),n.__animUp=requestAnimationFrame(o)}else t.style.height=null,t.style.opacity=null,t.style.overflow=null,e()})},stopUp:function(t){cancelAnimationFrame(this.__animUp),t.style.height=null,t.style.opacity=null,t.style.overflow=null},close:function(){this.isOpened=!1,this.$emit("update:show",!1)},open:function(){this.isOpened=!0,this.$emit("update:show",!0)},toggle:function(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)},_getHeight:function(t){if(t.children){for(var e=0,n=t.children,r=0;r<n.length;r++){var i=getComputedStyle(n[r]);e+=n[r].clientHeight+parseInt(i.marginTop)+parseInt(i.marginBottom)}return e}return t.offsetHeight}},render:function(t){return t("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[t(this.tag,{class:"slide-up-down",directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0),ie=$("match"),oe=$("species"),ae=function(t){return function(e,n){var r,i,o=String(N(e)),a=D(n),s=o.length;return a<0||a>=s?t?"":void 0:(r=o.charCodeAt(a))<55296||r>56319||a+1===s||(i=o.charCodeAt(a+1))<56320||i>57343?t?o.charAt(a):r:t?o.slice(a,a+2):i-56320+(r-55296<<10)+65536}},se=ae(!0),ce=function(t,e,n){return e+(n?se(t,e).length:1)},le=$("toStringTag"),ue="Arguments"==I(function(){return arguments}()),fe=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),le))?n:ue?I(e):"Object"==(r=I(e))&&"function"==typeof e.callee?"Arguments":r},he=RegExp.prototype.exec,de=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==fe(t))throw new TypeError("RegExp#exec called on incompatible receiver");return he.call(t,e)},pe=RegExp.prototype.exec,ve=String.prototype.replace,ge=pe,ye=(ee=/a/,ne=/b*/g,pe.call(ee,"a"),pe.call(ne,"a"),0!==ee.lastIndex||0!==ne.lastIndex),me=void 0!==/()??/.exec("")[1];(ye||me)&&(ge=function(t){var e,n,r,i,a=this;return me&&(n=new RegExp("^"+a.source+"$(?!\\s)",function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}.call(a))),ye&&(e=a.lastIndex),r=pe.call(a,t),ye&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),me&&r&&r.length>1&&ve.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r});var _e=ge;j({target:"RegExp",proto:!0,forced:_e!==/./.exec},{exec:_e});var we=$("species"),be=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),Ee=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),xe=function(t,e,n){var r=$(t),i=!a(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)}),o=i?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[we]=function(){return n}),n[r](""),!e}):void 0;if(!i||!o||"replace"===t&&!be||"split"===t&&!Ee){var s=/./[r],c=n(N,r,""[t],function(t,e,n,r,o){return e.exec===_e?i&&!o?{done:!0,value:s.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),l=c[0],u=c[1];O(String.prototype,t,l),g(RegExp.prototype,r,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)})}},Oe=Math.min,Ae=[].push,Se=!a(function(){});xe("split",2,function(t,e,n,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r,o,a=String(this);if(void 0===t&&0===e)return[];if(!i(r=t)||(void 0!==(o=r[ie])?!o:"RegExp"!=I(r)))return n.call(a,t,e);for(var s,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?4294967295:e>>>0,p=new RegExp(t.source,f+"g");(s=_e.call(p,a))&&!((c=p.lastIndex)>h&&(u.push(a.slice(h,s.index)),s.length>1&&s.index<a.length&&Ae.apply(u,s.slice(1)),l=s[0].length,h=c,u.length>=d));)p.lastIndex===s.index&&p.lastIndex++;return h===a.length?!l&&p.test("")||u.push(""):u.push(a.slice(h)),u.length>d?u.slice(0,d):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,r):a.call(String(i),n,r)},function(t,e){var i=r(a,t,this,e,a!==n);if(i.done)return i.value;var s=o(t),c=String(this),l=function(t,e){var n,r=o(t).constructor;return void 0===r||null==(n=o(r)[oe])?e:A(n)}(s,RegExp),u=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(Se?"y":"g"),h=new l(Se?s:"^(?:"+s.source+")",f),d=void 0===e?4294967295:e>>>0;if(0===d)return[];if(0===c.length)return null===de(h,c)?[c]:[];for(var p=0,v=0,g=[];v<c.length;){h.lastIndex=Se?v:0;var y,m=de(h,Se?c:c.slice(v));if(null===m||(y=Oe(W(h.lastIndex+(Se?0:v)),c.length))===p)v=ce(c,v,u);else{if(g.push(c.slice(p,v)),g.length===d)return g;for(var _=1;_<=m.length-1;_++)if(g.push(m[_]),g.length===d)return g;v=p=y}}return g.push(c.slice(p)),g}]});var ke=ct({render:function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{attrs:{"data-language":this.language}},[e("button",{staticClass:"hljs-copy has-wave",on:{click:this.copy}},[this._v(this._s(this.$lang.CODE_COPY)),e("span",{staticClass:"wave"})]),e("code",{pre:!0},[this._t("default")],2)])},staticRenderFns:[]},void 0,{name:"code-block",props:{language:String},methods:{copy:function(){var t=document,e=t.createElement("TEXTAREA"),n=this.$el.querySelector("code");e.id="copy-text",e.style.height=0,e.position="fixed",t.body.appendChild(e);try{e.value=n.innerText.split("\n").filter(function(t){return""!==t&&"\t"!==t}).join("\n"),e.select(),t.execCommand("copy"),AWES.notify({message:AWES.lang.CODE_COPIED_MSG})}catch(t){AWES.notify({status:"error",message:t.message})}finally{t.body.removeChild(e)}},loadHighlight:function(t){AWES.utils.loadModules({highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb:t}})},initHighlight:function(){var t=this.$el.querySelector("code");t.className="".concat(this.language),hljs.highlightBlock(t),hljs.lineNumbersBlock(t)}},mounted:function(){var t=this;this.$nextTick(function(){t.loadHighlight(t.initHighlight)})}},void 0,!1,void 0,void 0,void 0);var je={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(t),Vue.component("content-placeholder",{functional:!0,render:function(t){return null}}),Vue.component("frame-nav",ut),Vue.component("slide-up-down",re),Vue.component("code-block",ke))}},Ce={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard",CONTENT_EMPTY:"No data",CONTENT_ERROR:"Error",CONTENT_LOADING:"Loading..."};function Ie(){var t=document.querySelectorAll('pre > code[class^="language"]');t&&t.forEach(function(t){var e=t.parentElement,n=e.parentElement,r=t.className.match(/language-([a-z]*)/),i=document.createElement("code-block");i.setAttribute("language",r[1]),i.innerHTML="<template v-pre>"+t.innerHTML+"</template>",n.replaceChild(i,e),e=null,n=null,i=null})}xe("match",1,function(t,e,n,r){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var i=o(t),a=String(this);if(!i.global)return de(i,a);var s=i.unicode;i.lastIndex=0;for(var c,l=[],u=0;null!==(c=de(i,a));){var f=String(c[0]);l[u]=f,""===f&&(i.lastIndex=ce(a,W(i.lastIndex),s)),u++}return 0===u?null:l}]});var Te={},Ne=p.f,Fe=$("toStringTag"),Me=function(t,e,n){t&&!m(t=n?t:t.prototype,Fe)&&Ne(t,Fe,{configurable:!0,value:e})},Re={};g(Re,$("iterator"),function(){return this});var De=function(t,e,n){t.prototype=Ut(Re,{next:v(1,n)}),Me(t,e+" Iterator")},Pe=wt("IE_PROTO"),We=Object.prototype,Le=Object.getPrototypeOf||function(t){return t=F(t),m(t,Pe)?t[Pe]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?We:null},$e=$("iterator"),Ue=!([].keys&&"next"in[].keys()),Ve=function(){return this},Be=ae(!0);!function(t,e,n,r,i,o,a){De(n,e,r);var s,c,l,u=function(t){if(!Ue&&t in p)return p[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",h="values"==i,d=!1,p=t.prototype,v=p[$e]||p["@@iterator"]||i&&p[i],y=v||u(i),m=i?h?u("entries"):y:void 0,_="Array"==e&&p.entries||v;if(_&&(l=Le(_.call(new t)))!==Object.prototype&&l.next&&(Me(l,f,!0),"function"!=typeof l[$e]&&g(l,$e,Ve)),h&&v&&"values"!==v.name&&(d=!0,y=function(){return v.call(this)}),(Ue||d||!p[$e])&&g(p,$e,y),Te[e]=y,Te[f]=Ve,i)if(s={values:h?y:u("values"),keys:o?y:u("keys"),entries:m},a)for(c in s)c in p||O(p,c,s[c]);else j(j.P+j.F*(Ue||d),e,s)}(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=Be(e,n),this._i+=t.length,{value:t,done:!1})});var He=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}},qe=$("iterator"),Ge=Array.prototype,Xe=function(t,e,n){e in t?p.f(t,e,v(0,n)):t[e]=n},Ye=$("iterator"),ze=r.getIteratorMethod=function(t){if(null!=t)return t[Ye]||t["@@iterator"]||Te[fe(t)]},Ke=$("iterator"),Je=!1;try{[7][Ke]().return=function(){Je=!0}}catch(t){}j(j.S+j.F*!function(t,e){if(!e&&!Je)return!1;var n=!1;try{var r=[7],i=r[Ke]();i.next=function(){return{done:n=!0}},r[Ke]=function(){return i},t(r)}catch(t){}return n}(function(t){}),"Array",{from:function(t){var e,n,r,i,o,a=F(t),s="function"==typeof this?this:Array,c=arguments.length,l=c>1?arguments[1]:void 0,u=void 0!==l,f=0,h=ze(a);if(u&&(l=S(l,c>2?arguments[2]:void 0,2)),null!=h&&(s!=Array||(void 0===(o=h)||Te.Array!==o&&Ge[qe]!==o)))for(i=h.call(a),n=new s;!(r=i.next()).done;f++)Xe(n,f,u?He(i,l,[r.value,f],!0):r.value);else for(n=new s(e=W(a.length));e>f;f++)Xe(n,f,u?l(a[f],f):a[f]);return n.length=f,n}});var Qe={f:Object.getOwnPropertySymbols},Ze=Object.assign,tn=!Ze||a(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=Ze({},t)[n]||Object.keys(Ze({},e)).join("")!=r})?function(t,e){for(var n=F(t),r=arguments.length,i=1,o=Qe.f,a=ft.f;r>i;)for(var c,l=T(arguments[i++]),u=o?Mt(l).concat(o(l)):Mt(l),f=u.length,h=0;f>h;)c=u[h++],s&&!a.call(l,c)||(n[c]=l[c]);return n}:Ze;function en(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}j(j.S+j.F,"Object",{assign:tn});var nn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e&&(this.initElObserver(),this.addElements(),this.initRootObserver(e))}var e,n,r;return e=t,r=[{key:"showWave",value:function(e){var n=this.__AWES_WAVE__,r=n.wave;n.active?(clearTimeout(this._tm),t.resetWave(this)):this.__AWES_WAVE__.active=!0,r.style.cssText="\n            transition: transform ".concat(600,"ms ease, opacity ").concat(600,"ms ease;\n            opacity: 0.5;\n            transform: translate(-50%, -50%) scale(2);\n            top: ").concat(e.offsetY,"px;\n            left: ").concat(e.offsetX,"px\n        ")}},{key:"hideWave",value:function(e){var n=this;this.__AWES_WAVE__.wave.style.opacity="0",this._tm=setTimeout(function(){n.__AWES_WAVE__.active=!1,t.resetWave(n)},400)}},{key:"resetWave",value:function(t){t.__AWES_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete t._tm}}],(n=[{key:"addElements",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=t.querySelectorAll(e.selector),this._elements&&Array.from(this._elements).forEach(this.addElement,this)}},{key:"addElement",value:function(e){if(!e.__AWES_WAVE__){e.classList.contains("has-wave")||e.classList.add("has-wave"),this._elObserver.observe(e,{attributes:!0,attributeFilter:["class"]});var n=e.querySelector("span.wave");n||((n=document.createElement("span")).classList.add("wave"),e.appendChild(n)),e.__AWES_WAVE__={wave:n,active:!1},t.resetWave(e),e.addEventListener("mousedown",t.showWave,!1),e.addEventListener("mouseup",t.hideWave,!1)}}},{key:"initElObserver",value:function(){this._elObserver=new MutationObserver(function(t){t.forEach(function(t){var e=t.target,n=e.className;/has-wave/.test(n)||(e.className=n?n+" has-wave":"has-wave")})})}},{key:"initRootObserver",value:function(t){var e=this;this._rootObserver=new MutationObserver(function(t){clearTimeout(e.__tm),e.__tm=setTimeout(e.addElements.bind(e),300)}),this._rootObserver.observe(t,{childList:!0,subtree:!0})}}])&&en(e.prototype,n),r&&en(e,r),t}(),rn={name:"indigo-layout",version:"1.10.3",install:function(t){t.lang=Ce,Ie(),t.on("core:popstate",Ie),t._watchedNames.push("code-block"),Vue.use(je),t.once("core:inited",function(){t.Waves=new nn(document.body)})}};window&&"AWES"in window?AWES.use(rn):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(rn))}();
