/**
 * Bundle of AWES indigo-layout
 * Generated: 2019-03-13 17:07:06
 * Version: 1.0.9
 */

!function(){"use strict";var e={state:{},mutations:{setData(e,t){Vue.set(e,t.param,t.data)}}};var t={data:()=>({togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}),methods:{toggleBodyFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-usermenu")},openNav(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify(e,t="success",s="bottom-right"){this.$notify({group:"bottom-right",type:t,title:t,text:e})}},watch:{showUserMenu(e){this.toggleBodyMobileFix(e)},showHelpers(e){this.toggleBodyMobileFix(e)}}};var s=function(e,t,s,i,n,a,o,l,r,c){"boolean"!=typeof o&&(r=l,l=o,o=!1);var d,h="function"==typeof s?s.options:s;if(e&&e.render&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0,n&&(h.functional=!0)),i&&(h._scopeId=i),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},h._ssrRegister=d):t&&(d=o?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),d)if(h.functional){var u=h.render;h.render=function(e,t){return d.call(t),u(e,t)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,d):[d]}return s};var i=s({render:function(){var e=this.$createElement;return(this._self._c||e)(this.tag,{tag:"component"},[this._t("default",null,null,this.content)],2)},staticRenderFns:[]},void 0,{name:"content-wrapper",props:{tag:{type:String,default:"div"},default:{type:Object,default:null},storeData:{type:String,required:!0}},computed:{content(){return AWES._store.state[this.storeData]}},watch:{default:{handler(e){e&&AWES._store.commit("setData",{param:this.storeData,data:e})},immediate:!0}}},void 0,!1,void 0,void 0,void 0);var n=s({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frame__aside-nav-wrap"},[e.links?s("ul",{staticClass:"frame__aside-links"},e._l(e.links,function(t,i){return s("li",{key:i,staticClass:"frame__aside-li"},[t.children?s("div",[s("a",{class:["frame__aside-link frame__aside-link_sub",{"frame__aside-link_active":e.active===i}],attrs:{href:t.link||""},on:{click:function(s){!t.link&&e.toggleActive(s,i)}}},[t.icon?s("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),s("span",[e._v(e._s(t.name))]),e._v(" "),e.expanded?e._e():s("i",{staticClass:"icon icon-angle-bottom",on:{click:function(t){return e.toggleActive(t,i)}}})]),e._v(" "),s("slide-up-down",{attrs:{show:e.active===i||e.expanded}},[s("ul",{staticClass:"frame__aside-hidden active"},e._l(t.children,function(t,i){return s("li",{key:i,staticClass:"frame__aside-inlist"},[s("a",{class:["frame__aside-inlink",{"frame__aside-inlink_active":t.active}],attrs:{href:t.link||""}},[s("span",{class:{"tf-strong":t.active}},[e._v(e._s(t.name))])])])}),0)])],1):s("a",{class:["frame__aside-link",{"frame__aside-link_active":e.active===i}],attrs:{href:t.link||""}},[t.icon?s("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),s("span",[e._v(e._s(t.name))])])])}),0):e._e(),e._v(" "),e._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator(e){let t=[];return e.forEach(function e(s){s.name&&s.link||(s.name&&s.children&&Array.isArray(s.children)?s.children.forEach(e):t.push(s))}),!t.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",t),!1)}},expanded:{type:Boolean,default:!1}},data:()=>({active:null}),watch:{links:{handler(e){this.active=e.findIndex(e=>e.active||e.children&&e.children.some(e=>e.active))},immediate:!0}},methods:{itemActive(e){return this.links[e].active||this.expanded||this.hasActiveChildren[e]},toggleActive(e,t){e.stopPropagation(),e.preventDefault(),this.active===t?this.active=null:this.active=t}}},void 0,!1,void 0,void 0,void 0);var a=s({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data(){return{isOpened:this.show}},watch:{show(e){this.isOpened=e}},methods:{slideDown(e,t){const s=e.offsetHeight,i=(new Date).getTime();e.style.height=0,e.style.opacity=0;const n=()=>{let a=(new Date).getTime()-i;if(a<this.slideDownDuration){let t=function(e,t){return(e=e/t-1)*e*e+1}(a,this.slideDownDuration);e.style.height=`${Math.round(t*s)}px`,e.style.opacity=t.toFixed(1),this.__animDown=requestAnimationFrame(n)}else e.style.height=null,e.style.opacity=null,t()};this.__animDown=requestAnimationFrame(n)},stopDown(){cancelAnimationFrame(this.__animDown)},slideUp(e,t){const s=e.offsetHeight,i=(new Date).getTime(),n=()=>{let a=(new Date).getTime()-i;if(a<this.slideUpDuration){let t=1-function(e,t){return(e/=t/2)<1?e*e*e/2:((e-=2)*e*e+2)/2}(a,this.slideUpDuration);e.style.height=`${Math.round(t*s)}px`,e.style.opacity=t.toFixed(1),this.__animUp=requestAnimationFrame(n)}else e.style.height=null,e.style.opacity=null,t()};this.__animUp=requestAnimationFrame(n)},stopUp(e){cancelAnimationFrame(this.__animUp),e.style.height=null,e.style.opacity=null},close(){this.isOpened=!1,this.$emit("update:show",!1)},open(){this.isOpened=!0,this.$emit("update:show",!0)},toggle(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)}},render(e){return e("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[e(this.tag,{class:"slide-up-down",style:{overflow:"hidden"},directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0);const o={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(t),Vue.component("content-wrapper",i),Vue.component("content-placeholder",{functional:!0,render:e=>null}),Vue.component("frame-nav",n),Vue.component("slide-up-down",a))}};var l={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard"};const r=["success","error"],c={type:"success",position:"bottom-right",duration:5e3},d=e=>({title:t,message:s})=>{let i=`<i class="toasted__icon icon icon-${e}"></i><div class="toasted__content">`;return(i+=t?`<p class="toasted__title">${t}</p>`:"")+s+"</div>"};const h=1e3;class u{constructor(){this.addElements(),this.initObserver()}addElements(e=document){let t=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=e.querySelectorAll(t.selector),this._elements&&Array.from(this._elements).forEach(e=>{if(e.classList.contains("has-wave")||e.classList.add("has-wave"),e.__AWES_WAVE__)return;let t=e.querySelector("span.wave");t||((t=document.createElement("span")).classList.add("wave"),e.appendChild(t)),e.__AWES_WAVE__=t,u.hideWave(e),e.addEventListener("click",u.showWave,!1)})}initObserver(){this._mObserver=new MutationObserver(e=>{clearTimeout(this.__tm),this.__tm=setTimeout(this.addElements,300)}),this._mObserver.observe(document.getElementById("awes-app"),{childList:!0,subtree:!0})}static showWave(e){if(e.target!==e.currentTarget)return;let t=this.__AWES_WAVE__;this._tm&&(clearTimeout(this._tm),u.hideWave(this)),t.style.cssText=`\n            transition: transform ${h}ms ease, opacity ${h}ms ease;\n            opacity: 0;\n            transform: translate(-50%, -50%) scale(2);\n            top: ${e.offsetY}px;\n            left: ${e.offsetX}px\n        `,this._tm=setTimeout(()=>u.hideWave(this),h)}static hideWave(e){e.__AWES_WAVE__.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete e._tm}}const m={modules:{vue:{src:"https://unpkg.com/vue/dist/vue.min.js",cb(){Vue.use(o)}},lodash:{src:"https://unpkg.com/lodash/lodash.min.js",deps:["vue"],cb(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex/dist/vuex.min.js",deps:["vue"],cb(){AWES._store=AWES._store||new Vuex.Store(e)}},"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb(){Vue.use(VueShortkey)}},"vue-toasted":{src:"https://unpkg.com/vue-toasted",deps:["vue"],cb:function(){Vue.use(Toasted),Vue.toasted.register("awes_success",d("circle-check"),c),Vue.toasted.register("awes_error",d("circle-cross"),Object.assign({},c,{type:"error"})),AWES.notify=function({status:e="success",title:t,message:s}){r.includes(e)&&Vue.prototype.$toasted.global[`awes_${e}`]({title:t,message:s})}}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb(){Vue.use(VueTabs)}},...{highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb(){AWES.once("core:inited",function(){hljs.initHighlighting();let e=document.querySelectorAll(".hljs");e&&e.forEach(e=>{let t=e.parentNode;hljs.lineNumbersBlock(e);let s=e.className.match(/language-([a-z]*)/);s&&t.setAttribute("data-language",s[1]);let i=document.createElement("BUTTON");i.className="hljs-copy",i.innerText=AWES.lang.CODE_COPY,i.addEventListener("click",function(){(function(e){let t=document,s=document.createElement("TEXTAREA");s.id="copy-text",s.style.height=0,s.position="fixed",t.body.appendChild(s);try{return s.value=e.innerText.split("\n").filter(e=>""!==e&&"\t"!==e).join("\n"),s.select(),t.execCommand("copy"),!0}catch(e){return!1}finally{t.body.removeChild(s)}})(e)&&AWES.notify({message:AWES.lang.CODE_COPIED_MSG})},!1),t.insertBefore(i,e)})})}}}},install(e){e.lang=l,e.once("core:inited",()=>{e.Waves=new u})}};window&&"AWES"in window?AWES.use(m):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(m))}();
