/**
 * Bundle of AWES indigo-layout
 * Generated: 2019-03-27 15:31:37
 * Version: 1.0.29
 */

!function(){"use strict";var e={state:{},mutations:{setData(e,t){Vue.set(e,t.param,t.data)}}};var t={data:()=>({togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}),methods:{toggleBodyFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-usermenu")},openNav(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify(e,t="success",s="bottom-right"){this.$notify({group:"bottom-right",type:t,title:t,text:e})}},watch:{showUserMenu(e){this.toggleBodyMobileFix(e)},showHelpers(e){this.toggleBodyMobileFix(e)}}};var s=function(e,t,s,i,a,n,o,r,l,d){"boolean"!=typeof o&&(l=r,r=o,o=!1);var c,h="function"==typeof s?s.options:s;if(e&&e.render&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns,h._compiled=!0,a&&(h.functional=!0)),i&&(h._scopeId=i),n?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},h._ssrRegister=c):t&&(c=o?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),c)if(h.functional){var u=h.render;h.render=function(e,t){return c.call(t),u(e,t)}}else{var _=h.beforeCreate;h.beforeCreate=_?[].concat(_,c):[c]}return s};var i=s({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s(e.tag,{tag:"component"},[!e.isEmpty||e.hasError||e.isLoading?e._e():e._t("empty",[e._v(e._s(e.$lang.CONTENT_EMPTY))]),e._v(" "),e.isLoading?e._t("loading",[e._v(e._s(e.$lang.CONTENT_LOADING))]):e._e(),e._v(" "),e.hasError&&!e.isLoading?e._t("error",[s("span",{staticStyle:{color:"red"}},[e._v(e._s(e.$lang.CONTENT_ERROR))])]):e._e(),e._v(" "),e.isEmpty||e.isLoading||e.hasError?e._e():e._t("default",null,null,e.content)],2)},staticRenderFns:[]},void 0,{name:"content-wrapper",props:{tag:{type:String,default:"div"},default:{default:null},storeData:{type:String,required:!0},url:String,method:{type:String,default:"GET"}},data:()=>({hasError:!1}),computed:{loadingName(){return this.storeData+"_loading"},isLoading(){return this.$store.state[this.loadingName]},isEmpty(){return this.AWES.utils.object.isEmpty(this.data)},data(){return this.$store.state[this.storeData]},content(){return"object"==typeof this.data?this.data:{data:this.data}}},watch:{url(){this.fetchData()},hasError(e){this.$emit("error",e)},isLoading(e){this.$emit("loading",e)}},methods:{setLoader(e){AWES._store.commit("setData",{param:this.loadingName,data:e.detail})},fetchData(){AWES.on("core:ajax",this.setLoader),AWES.ajax({},this.url,this.method).then(e=>{AWES.off("core:ajax",this.setLoader),e.success?(AWES._store.commit("setData",{param:this.storeData,data:e.data}),this.hasError=!1):this.hasError=!0})}},created(){this.default?AWES._store.commit("setData",{param:this.storeData,data:this.default}):this.url&&this.fetchData()},errorCaptured(e,t,s){this.hasError=!0,AWES.notify({status:"error",message:e.message}),AWES_CONFIG.dev&&console.log(e,t,s)}},void 0,!1,void 0,void 0,void 0);var a=s({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frame__aside-nav-wrap"},[e.links?s("ul",{staticClass:"frame__aside-links"},e._l(e.links,function(t,i){return s("li",{key:i,staticClass:"frame__aside-li"},[t.children?s("div",[s("a",{class:["frame__aside-link frame__aside-link_sub",{"frame__aside-link_active":e.active===i}],attrs:{href:t.link||""},on:{click:function(s){!t.link&&e.toggleActive(s,i)}}},[t.icon?s("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),s("span",[e._v(e._s(t.name))]),e._v(" "),e.expanded?e._e():s("i",{staticClass:"icon icon-angle-bottom",on:{click:function(t){return e.toggleActive(t,i)}}})]),e._v(" "),s("slide-up-down",{attrs:{show:e.active===i||e.expanded}},[s("ul",{staticClass:"frame__aside-hidden active"},e._l(t.children,function(t,i){return s("li",{key:i,staticClass:"frame__aside-inlist"},[s("a",{class:["frame__aside-inlink",{"frame__aside-inlink_active":t.active}],attrs:{href:t.link||""}},[s("span",{class:{"tf-strong":t.active}},[e._v(e._s(t.name))])])])}),0)])],1):s("a",{class:["frame__aside-link",{"frame__aside-link_active":e.active===i}],attrs:{href:t.link||""}},[t.icon?s("i",{class:"icon icon-"+t.icon}):e._e(),e._v(" "),s("span",[e._v(e._s(t.name))])])])}),0):e._e(),e._v(" "),e._t("difnav")],2)},staticRenderFns:[]},void 0,{name:"frame-nav",props:{links:{type:Array,validator(e){let t=[];return e.forEach(function e(s){s.name&&s.link||(s.name&&s.children&&Array.isArray(s.children)?s.children.forEach(e):t.push(s))}),!t.length||(console.error("frame-nav: prop `links` must have name and a link or children:"),console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>'),console.error("frame-nav: invalid items - ",t),!1)}},expanded:{type:Boolean,default:!1}},data:()=>({active:null}),watch:{links:{handler(e){this.active=e.findIndex(e=>e.active||e.children&&e.children.some(e=>e.active))},immediate:!0}},methods:{itemActive(e){return this.links[e].active||this.expanded||this.hasActiveChildren[e]},toggleActive(e,t){e.stopPropagation(),e.preventDefault(),this.active===t?this.active=null:this.active=t}}},void 0,!1,void 0,void 0,void 0);var n=s({},void 0,{name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data(){return{isOpened:this.show}},watch:{show(e){this.isOpened=e}},methods:{slideDown(e,t){const s=e.offsetHeight,i=(new Date).getTime();e.style.height=0,e.style.opacity=0;const a=()=>{let n=(new Date).getTime()-i;if(n<this.slideDownDuration){let t=function(e,t){return(e=e/t-1)*e*e+1}(n,this.slideDownDuration);e.style.height=`${Math.round(t*s)}px`,e.style.opacity=t.toFixed(1),this.__animDown=requestAnimationFrame(a)}else e.style.height=null,e.style.opacity=null,t()};this.__animDown=requestAnimationFrame(a)},stopDown(){cancelAnimationFrame(this.__animDown)},slideUp(e,t){const s=e.offsetHeight,i=(new Date).getTime(),a=()=>{let n=(new Date).getTime()-i;if(n<this.slideUpDuration){let t=1-function(e,t){return(e/=t/2)<1?e*e*e/2:((e-=2)*e*e+2)/2}(n,this.slideUpDuration);e.style.height=`${Math.round(t*s)}px`,e.style.opacity=t.toFixed(1),this.__animUp=requestAnimationFrame(a)}else e.style.height=null,e.style.opacity=null,t()};this.__animUp=requestAnimationFrame(a)},stopUp(e){cancelAnimationFrame(this.__animUp),e.style.height=null,e.style.opacity=null},close(){this.isOpened=!1,this.$emit("update:show",!1)},open(){this.isOpened=!0,this.$emit("update:show",!0)},toggle(){this.isOpened=!this.isOpened,this.$emit("update:show",this.isOpened)}},render(e){return e("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[e(this.tag,{class:"slide-up-down",style:{overflow:"hidden"},directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}},void 0,void 0,void 0,void 0,void 0);const o={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(t),Vue.component("content-wrapper",i),Vue.component("content-placeholder",{functional:!0,render:e=>null}),Vue.component("frame-nav",a),Vue.component("slide-up-down",n))}};var r={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal",CODE_COPY:"copy",CODE_COPIED_MSG:"Text copied to clipboard",CONTENT_EMPTY:"No data",CONTENT_ERROR:"Error",CONTENT_LOADING:"Loading..."};const l=["success","error"],d={type:"success",position:"bottom-right",duration:5e3},c=e=>({title:t,message:s})=>{let i=`<i class="toasted__icon icon icon-${e}"></i><div class="toasted__content">`;return(i+=t?`<p class="toasted__title">${t}</p>`:"")+s+"</div>"};const h=1e3;class u{constructor(e){e&&(this.initElObserver(),this.addElements(),this.initRootObserver(e))}addElements(e=document){let t=Object.assign({selector:".btn, .frame__header-add, .hljs-copy"},AWES_CONFIG.waves);this._elements=e.querySelectorAll(t.selector),this._elements&&Array.from(this._elements).forEach(this.addElement,this)}addElement(e){if(e.__AWES_WAVE__)return;e.classList.contains("has-wave")||e.classList.add("has-wave"),this._elObserver.observe(e,{attributes:!0,attributeFilter:["class"]});let t=e.querySelector("span.wave");t||((t=document.createElement("span")).classList.add("wave"),e.appendChild(t)),e.__AWES_WAVE__={wave:t,active:!1},u.resetWave(e),e.addEventListener("mousedown",u.showWave,!1),e.addEventListener("mouseup",u.hideWave,!1)}initElObserver(){this._elObserver=new MutationObserver(e=>{e.forEach(e=>{let t=e.target,s=t.className;/has-wave/.test(s)||(t.className=s?s+" has-wave":"has-wave")})})}initRootObserver(e){this._rootObserver=new MutationObserver(e=>{clearTimeout(this.__tm),this.__tm=setTimeout(this.addElements.bind(this),300)}),this._rootObserver.observe(e,{childList:!0,subtree:!0})}static showWave(e){let{wave:t,active:s}=this.__AWES_WAVE__;s?(clearTimeout(this._tm),u.resetWave(this)):this.__AWES_WAVE__.active=!0,t.style.cssText=`\n            transition: transform ${.6*h}ms ease, opacity ${.6*h}ms ease;\n            opacity: 0.5;\n            transform: translate(-50%, -50%) scale(2);\n            top: ${e.offsetY}px;\n            left: ${e.offsetX}px\n        `}static hideWave(e){this.__AWES_WAVE__.wave.style.opacity="0",this._tm=setTimeout(()=>{this.__AWES_WAVE__.active=!1,u.resetWave(this)},.4*h)}static resetWave(e){e.__AWES_WAVE__.wave.style.cssText="\n            transform: translate(-50%, -50%) scale(0);\n            transition: none;\n            opacity: 1;\n        ",delete e._tm}}const m={modules:{vue:{src:"https://unpkg.com/vue/dist/vue.min.js",cb(){Vue.use(o)}},lodash:{src:"https://unpkg.com/lodash/lodash.min.js",deps:["vue"],cb(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex/dist/vuex.min.js",deps:["vue"],cb(){AWES._store=AWES._store||new Vuex.Store(e)}},"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb(){Vue.use(VueShortkey)}},"vue-toasted":{src:"https://unpkg.com/vue-toasted",deps:["vue"],cb:function(){Vue.use(Toasted),Vue.toasted.register("awes_success",c("circle-check"),d),Vue.toasted.register("awes_error",c("circle-cross"),Object.assign({},d,{type:"error"})),AWES.notify=function({status:e="success",title:t,message:s}){l.includes(e)&&Vue.prototype.$toasted.global[`awes_${e}`]({title:t,message:s})}}},"v-tooltip":{src:"https://unpkg.com/v-tooltip/dist/v-tooltip.min.js",deps:["vue"],cb(){VTooltip.default.options.defaultClass="theme-default",VTooltip.default.options.popover=Object.assign(VTooltip.default.options.popover,{defaultPlacement:"right",defaultAutoHide:!1,defaultTrigger:"manual",defaultPopperOptions:{modifiers:{flip:{behavior:["right","top"]}}}})}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb(){Vue.use(VueTabs)}},...{highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css"]},highlight_langs:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js","https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js"],deps:["highlight"],cb(){AWES.once("core:inited",function(){hljs.initHighlighting();let e=document.querySelectorAll(".hljs");e&&e.forEach(e=>{let t=e.parentNode;hljs.lineNumbersBlock(e);let s=e.className.match(/language-([a-z]*)/);s&&t.setAttribute("data-language",s[1]);let i=document.createElement("BUTTON");i.className="hljs-copy",i.innerText=AWES.lang.CODE_COPY,i.addEventListener("click",function(){(function(e){let t=document,s=document.createElement("TEXTAREA");s.id="copy-text",s.style.height=0,s.position="fixed",t.body.appendChild(s);try{return s.value=e.innerText.split("\n").filter(e=>""!==e&&"\t"!==e).join("\n"),s.select(),t.execCommand("copy"),!0}catch(e){return!1}finally{t.body.removeChild(s)}})(e)&&AWES.notify({message:AWES.lang.CODE_COPIED_MSG})},!1),t.insertBefore(i,e)})})}}}},install(e){e.lang=r,e.once("core:inited",()=>{e.Waves=new u(e._vueRoot.$el)})}};window&&"AWES"in window?AWES.use(m):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(m))}();
