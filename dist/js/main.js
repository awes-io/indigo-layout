/**
 * Bundle of AWES layout-crm
 * Generated: 2019-01-18
 * Version: 0.0.5
 */

!function(){"use strict";var e={state:{},mutations:{setData(e,t){Vue.set(e,t.param,t.data)}}};var t={data:()=>({togglenav:!1,showSearch:!1,showUserMenu:!1,showHelpers:!1,stActive:!1}),methods:{toggleBodyFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-hidden")},toggleBodyMobileFix(e){document.documentElement.classList[e?"add":"remove"]("body-overflow-usermenu")},openNav(){1==this.togglenav?(this.togglenav=!1,this.toggleBodyFix(!1)):(this.togglenav=!0,this.toggleBodyFix(!0))},overlayClick(){this.showUserMenu=!1,this.togglenav=!1,this.toggleBodyFix(!1)},notify(e,t="success",s="bottom-right"){this.$notify({group:"bottom-right",type:t,title:t,text:e})}},watch:{showUserMenu(e){this.toggleBodyMobileFix(e)},showHelpers(e){this.toggleBodyMobileFix(e)}}},s={name:"content-wrapper",props:{data:{type:Object,default:null},storeData:{type:String,require:!0}},created(){this.$awesLayoutCrm.$store&&this.$awesLayoutCrm.$store.commit("setData",{param:this.storeData,data:this.data})},computed:{content(){return this.$awesLayoutCrm.$store&&this.$awesLayoutCrm.$store.state[this.storeData]}}};function i(e,t,s,i,n,o,a,l,r,d){"function"==typeof a&&(r=l,l=a,a=!1);const c="function"==typeof s?s.options:s;let u;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,n&&(c.functional=!0)),i&&(c._scopeId=i),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):t&&(u=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),u)if(c.functional){const e=c.render;c.render=function(t,s){return u.call(s),e(t,s)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,u):[u]}return s}const n=s;s.__file="content-wrapper.vue";var o=i({render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default",null,{data:this.content})],2)},staticRenderFns:[]},void 0,n,void 0,!1,void 0,void 0,void 0),a={name:"nav-item",props:{name:{type:String,required:!0},className:{type:String,default:"frame__aside-link"},icon:String,url:String,children:Array},data:()=>({isOpened:!1}),methods:{onClick(e){e.preventDefault(),this.isOpened=!this.isOpened}},render(e){const t=[this.name],s={class:this.className,domProps:{},on:{}};return this.icon&&t.unshift(e("i",{class:`icon icon-${this.icon}`})),this.url?s.domProps.href=this.url:this.children&&(s.domProps.href="",s.on.click=this.onClick),this.children&&this.children.length?(s.class+=" frame__aside-link_sub",e("div",[e("a",s,t),e("i",{class:"icon icon-angle-bottom",on:{click:this.onClick}}),e("slide-up-down",{props:{tag:"ul",show:this.isOpened}},[this.children.map(t=>e("li",{class:"frame__aside-inlist"},[e("nav-item",{props:{...t,className:"frame__aside-inlink"}})]))])])):e("a",s,t)}};const l=a;a.__file="_nav-item.vue";var r={name:"frame-nav",components:{navItem:i({},void 0,l,void 0,void 0,void 0,void 0,void 0)},props:{links:Array,expanded:{type:Boolean,default:!1}},data:()=>({toggle:!1,active:null,val:!1}),computed:{},methods:{setActive(e,t){this.val=!t,this.active=e}}};const d=r;r.__file="frame-nav.vue";var c=i({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"frame__aside-nav-wrap"},[e.links?s("ul",{staticClass:"frame__aside-links"},e._l(e.links,function(t,i){return s("li",{key:i,staticClass:"frame__aside-li"},[s("nav-item",e._b({},"nav-item",t,!1))],1)}),0):e._e(),e._v(" "),e._t("difnav")],2)},staticRenderFns:[]},void 0,d,void 0,!1,void 0,void 0,void 0);var u={name:"slide-up-down",props:{show:Boolean,tag:{type:String,default:"div"},slideUpDuration:{type:Number,default:250},slideDownDuration:{type:Number,default:300}},data(){return{isAnimating:!1,isOpened:this.show}},watch:{show(e){this.isOpened=e}},methods:{slideDown(e,t){const s=e.offsetHeight,i=(new Date).getTime();e.style.height=0,e.style.opacity=0;const n=()=>{let o=(new Date).getTime()-i;if(o<this.slideDownDuration){let t=function(e,t){return(e=e/t-1)*e*e+1}(o,this.slideDownDuration);e.style.height=`${Math.round(t*s)}px`,e.style.opacity=t.toFixed(1),this.__animDown=requestAnimationFrame(n)}else e.style.height=null,e.style.opacity=null,t()};this.__animDown=requestAnimationFrame(n)},stopDown(){cancelAnimationFrame(this.__animDown)},slideUp(e,t){const s=e.offsetHeight,i=(new Date).getTime(),n=()=>{let o=(new Date).getTime()-i;if(o<this.slideUpDuration){let t=1-function(e,t){return(e/=t/2)<1?e*e*e/2:((e-=2)*e*e+2)/2}(o,this.slideUpDuration);e.style.height=`${Math.round(t*s)}px`,e.style.opacity=t.toFixed(1),this.__animUp=requestAnimationFrame(n)}else e.style.height=null,e.style.opacity=null,t()};this.__animUp=requestAnimationFrame(n)},stopUp(e){cancelAnimationFrame(this.__animUp),e.style.height=null,e.style.opacity=null},close(){this.isOpened=!1},open(){this.isOpened=!0},toggle(){this.isOpened=!this.isOpened}},render(e){return e("transition",{props:{css:!1},on:{enter:this.slideDown,"enter-cancelled":this.stopDown,leave:this.slideUp,"leave-cancelled":this.stopUp}},[e(this.tag,{class:"slide-up-down",style:{overflow:"hidden"},directives:[{name:"show",value:this.isOpened}]},this.$slots.default)])}};const h=u;u.__file="slide-up-down.vue";var p=i({},void 0,h,void 0,void 0,void 0,void 0,void 0);const m={installed:!1,install:function(){this.installed||(this.installed=!0,Vue.prototype.$awesLayoutCrm=new Vue(t),Vue.component("content-wrapper",o),Vue.component("frame-nav",c),Vue.component("slide-up-down",p))}};var v={MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal"};const g=["success","error"],f={type:"success",position:"bottom-right",duration:2e3},w=e=>({title:t,message:s})=>{let i=`<i class="toasted__icon icon icon-${e}"></i><div class="toasted__content">`;return(i+=t?`<p class="toasted__title">${t}</p>`:"")+s+"</div>"};const y={modules:{vue:{src:"https://unpkg.com/vue@2.5.21/dist/vue.js",cb(){Vue.use(m),Vue.config.ignoredElements.push("content-wrapper","frame-nav","modal-window","slide-up-down")}},lodash:{src:"https://unpkg.com/lodash@4.17.11/lodash.min.js",deps:["vue"],cb(){Vue.prototype.$get=_.get}},vuex:{src:"https://unpkg.com/vuex@2.5.0/dist/vuex.min.js",deps:["vue"],cb(){Vue.prototype.$awesLayoutCrm.$store=new Vuex.Store(e)}},"vue-shortkey":{src:"https://unpkg.com/vue-shortkey@3",deps:["vue"],cb(){Vue.use(VueShortkey)}},"vue-toasted":{src:"https://unpkg.com/vue-toasted",deps:["vue"],cb:function(){Vue.use(Toasted),Vue.toasted.register("awes_success",w("circle-check"),f),Vue.toasted.register("awes_error",w("circle-cross"),Object.assign({},f,{type:"error"})),AWES.notify=function({status:e="success",title:t,message:s}){g.includes(e)&&Vue.prototype.$toasted.global[`awes_${e}`]({title:t,message:s})}}},"vue-tabs-component":{src:"https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js",deps:["vue"],cb(){Vue.use(VueTabs)}},highlight:{src:["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github-gist.min.css"]},highlight_lang_html:{src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/languages/javascript.min.js",deps:["highlight"],cb(){document.querySelectorAll("pre code.html").forEach(e=>{hljs.highlightBlock(e)})}}},install(){AWES.lang=v}};window&&"AWES"in window?AWES.use(y):(window.__awes_plugins_stack__=window.__awes_plugins_stack__||[],window.__awes_plugins_stack__.push(y))}();
