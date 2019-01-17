(function () {
    'use strict';

    var store = {

        state: {},

        mutations: {
            
            setData( state, payload ) {
                Vue.set(state, payload.param, payload.data);
            }
        }
    };

    const BODY_NO_SCROLL_CLASS = 'body-overflow-hidden';
    const BODY_NO_SCROLL_CLASS_MOBILE = "body-overflow-usermenu";

    var layoutApp = {

        data() {
            return {
                togglenav: false,
                showSearch: false,
                showUserMenu: false,
                stActive: false
            }
        },

        methods: {

            toggleBodyFix(shouldFix) {
                document.documentElement.classList[shouldFix ? 'add' : 'remove'](BODY_NO_SCROLL_CLASS);
            },

            toggleBodyMobileFix(shouldFix) {
                document.documentElement.classList[shouldFix ? 'add' : 'remove'](BODY_NO_SCROLL_CLASS_MOBILE);
            },

            openNav() {
                if(this.togglenav == true) {
                    this.togglenav = false;
                    this.toggleBodyFix(false);
                } else {
                    this.togglenav = true;
                    this.toggleBodyFix(true);
                }
            },

            overlayClick() {
                this.showUserMenu = false;
                this.togglenav = false;
                this.toggleBodyFix(false);
            },

            notify(text, type = 'success', group = 'bottom-right') {
                this.$notify({
                    group: 'bottom-right',
                    type: type,
                    title: type,
                    text: text
                });
            }
        },
        
        watch: {
            showUserMenu( isShown ) {
                this.toggleBodyMobileFix(isShown);
            }
        }
    };

    //
    //
    //
    //
    //
    //

    var script = {
        name: 'content-wrapper',
        props: {
            data: {
                type: Object,
                default: null
            },
            'storeData': {
                type: String,
                require: true
            }
        },
        created() {
            this.$awesLayoutCrm.$store && this.$awesLayoutCrm.$store.commit('setData', {
                param: this.storeData,
                data: this.data
            });
        },
        computed: {
            content() {
                return this.$awesLayoutCrm.$store && this.$awesLayoutCrm.$store.state[this.storeData];
            }
        }
    };

    function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof isShadowMode === 'function') {
            createInjectorSSR = createInjector;
            createInjector = isShadowMode;
            isShadowMode = false;
        }
        // Vue.extend constructor export interop
        const options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport;
        // render functions
        if (compiledTemplate && compiledTemplate.render) {
            options.render = compiledTemplate.render;
            options.staticRenderFns = compiledTemplate.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        let hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (injectStyle) {
                    injectStyle.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (injectStyle) {
            hook = isShadowMode
                ? function () {
                    injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
                }
                : function (context) {
                    injectStyle.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                const originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                const existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return defaultExport;
    }

    /* script */
                const __vue_script__ = script;
                
    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", [_vm._t("default", null, { data: _vm.content })], 2)
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = undefined;
      /* scoped */
      const __vue_scope_id__ = undefined;
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var contentWrapper = normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    function easeOutCubic(time, duration) {
        return (time = time / duration - 1) * time * time + 1
    }

    function easeInOutCubic(time, duration) {
        if ( (time/=duration/2) < 1 ) return time*time*time/2;
        return ((time-=2)*time*time + 2) / 2;
    }

    var script$1 = {

        name: 'slide-up-down',
        
        props: {

            show: Boolean,
            
            tag: {
                type: String,
                default: 'div'
            },
            
            slideUpDuration: {
                type: Number,
                default: 250 // milliseconds
            },
            
            slideDownDuration: {
                type: Number,
                default: 300 // milliseconds
            }
        },

        data() {
            return {
                isAnimating: false,
                isOpened: this.show
            }
        },

        watch: {

            show(value) {
                this.isOpened = value;
            }
        },

        methods: {

            slideDown(el, done) {
                const height = el.offsetHeight;
                const start = new Date().getTime();
                el.style.height = 0;
                el.style.opacity = 0;
                const setHeight = () => {
                    let time = new Date().getTime() - start;
                    if ( time < this.slideDownDuration ) {
                        let fraction = easeOutCubic(time, this.slideDownDuration);
                        el.style.height = `${Math.round(fraction * height)}px`;
                        el.style.opacity = fraction.toFixed(1);
                        this.__animDown = requestAnimationFrame(setHeight);
                    } else {
                        el.style.height = null;
                        el.style.opacity = null;
                        done();
                    }
                };
                this.__animDown = requestAnimationFrame(setHeight);
            },

            stopDown() {
                cancelAnimationFrame(this.__animDown);
            },

            slideUp(el, done) {
                const height = el.offsetHeight;
                const start = new Date().getTime();
                const setHeight = () => {
                    let time = new Date().getTime() - start;
                    if ( time < this.slideUpDuration ) {
                        let fraction = 1 - easeInOutCubic(time, this.slideUpDuration);
                        el.style.height = `${Math.round( fraction * height )}px`;
                        el.style.opacity = fraction.toFixed(1);
                        this.__animUp = requestAnimationFrame(setHeight);
                    } else {
                        el.style.height = null;
                        el.style.opacity = null;
                        done();
                    }
                };
                this.__animUp = requestAnimationFrame(setHeight);
            },

            stopUp(el) {
                cancelAnimationFrame(this.__animUp);
                el.style.height = null;
                el.style.opacity = null;
            },

            close() {
                this.isOpened = false;
            },

            open() {
                this.isOpened = true;
            },

            toggle() {
                this.isOpened = ! this.isOpened;
            }
        },

        render(h) {
            return h('transition', {
                    props: { css: false },
                    on: {
                        enter: this.slideDown,
                        'enter-cancelled': this.stopDown,
                        leave: this.slideUp,
                        'leave-cancelled': this.stopUp
                    }
                }, [
                    h(this.tag, {
                        class: 'slide-up-down',
                        style: {
                            overflow: 'hidden'
                        },
                        directives: [
                            { name: 'show', value: this.isOpened }
                        ]
                    }, this.$slots.default)
                ])
        }
    };

    /* script */
                const __vue_script__$1 = script$1;
                
    /* template */

      /* style */
      const __vue_inject_styles__$1 = undefined;
      /* scoped */
      const __vue_scope_id__$1 = undefined;
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var SlideUpDown = normalizeComponent(
        {},
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        undefined,
        undefined
      );

    //

    var script$2 = {

        name: 'frame-nav',

        data() {
            return {
                toggle: false,
                active: null,
                val: false
            }
        },
        components: {
            SlideUpDown
        },
        computed: {
            menu() {
                return this.links.map( (item, key) => {
                    if (this.active !== null && item.link === undefined) {
                        item.active = (key === this.active) ? this.val : false;
                    }
                    return item;
                });
            }
        },
        props: {
            links: {
                type: [Object, Array],
                default: function() {return []}
            },
            title: {
                type: String,
                default: "AwesCRM"
            }
        },
        methods: {
            setActive(index, val) {
                this.val = !val;
                this.active = index;
            }
        }
    };

    /* script */
                const __vue_script__$2 = script$2;
                
    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "frame__aside-nav-wrap" }, [
        _c(
          "ul",
          { staticClass: "frame__aside-links" },
          _vm._l(_vm.menu, function(item, index) {
            return _c("li", { staticClass: "frame__aside-li" }, [
              item.link != null
                ? _c(
                    "a",
                    {
                      staticClass: "frame__aside-link",
                      class: { "frame__aside-link_active": item.active },
                      attrs: { href: item.link }
                    },
                    [
                      _c("i", { class: "icon icon-" + item.icon }),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(item.title))])
                    ]
                  )
                : _c(
                    "div",
                    [
                      _c(
                        "a",
                        {
                          staticClass: "frame__aside-link frame__aside-link_sub",
                          class: { "frame__aside-link_active": item.active },
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault();
                              _vm.setActive(index, item.active);
                            }
                          }
                        },
                        [
                          _c("i", { class: "icon icon-" + item.icon }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(item.title))]),
                          _vm._v(" "),
                          _c("i", { staticClass: "icon icon-angle-bottom" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "slide-up-down",
                        {
                          attrs: {
                            show: item.active,
                            slideDownDuration: 380,
                            slideUpDuration: 210
                          }
                        },
                        [
                          _c(
                            "ul",
                            { staticClass: "frame__aside-hidden active" },
                            _vm._l(item.sub, function(sub) {
                              return _c(
                                "li",
                                { staticClass: "frame__aside-inlist" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "frame__aside-inlink",
                                      class: {
                                        "frame__aside-inlink_active": sub.active
                                      },
                                      attrs: { href: sub.link }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { class: { "tf-strong": sub.active } },
                                        [_vm._v(_vm._s(sub.title))]
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      )
                    ],
                    1
                  )
            ])
          }),
          0
        )
      ])
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var frameNav = normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    function install() {

        if ( this.installed ) return
        this.installed = true;

        Vue.prototype.$awesLayoutCrm = new Vue(layoutApp);

        Vue.component('content-wrapper', contentWrapper);
        Vue.component('frame-nav', frameNav);
        Vue.component('slide-up-down', SlideUpDown);
    }

    const plugin = {

        installed: false,

        install
    };

    var i18n = {
        MODAL_BACK: "Go back",
        MODAL_CLOSE: "Close modal"
    };

    /*
     * Docs here: https://github.com/shakee93/vue-toasted
     */

    const allowedStatuses = ['success', 'error'];

    const defaultOptions = {
        type : 'success',
        position: 'bottom-right',
        duration: 2000
    };

    const templateRightBottom = icon => ({ title, message }) => {
        let html = `<i class="toasted__icon icon icon-${icon}"></i><div class="toasted__content">`;
        html += title ? `<p class="toasted__title">${title}</p>` : '';
        return html + message + '</div>'
    };

    function toastedRegistration() {

        Vue.use(Toasted);

        Vue.toasted.register(
            'awes_success',
            templateRightBottom('circle-check'),
            defaultOptions
        );

        Vue.toasted.register(
            'awes_error',
            templateRightBottom('circle-cross'),
            Object.assign({}, defaultOptions, {type : 'error'})
        );

        // Rewrite default core method
        AWES.notify = function({ status = 'success', title, message }) {
            if ( ! allowedStatuses.includes(status) ) return
            Vue.prototype.$toasted.global[`awes_${status}`]({ title, message });
        };
    }

    const awesPlugin = {

        modules: {
            'vue': {
                src: 'https://unpkg.com/vue@2.5.21/dist/vue.js',
                cb() {
                    Vue.use(plugin);
                    Vue.config.ignoredElements.push('content-wrapper', 'frame-nav', 'modal-window', 'slide-up-down');
                }
            },
            'lodash': {
                src: 'https://unpkg.com/lodash@4.17.11/lodash.min.js',
                deps: ['vue'],
                cb() {
                    Vue.prototype.$get = _.get;
                }
            },
            'vuex': {
                src: 'https://unpkg.com/vuex@2.5.0/dist/vuex.min.js',
                deps: ['vue'],
                cb() {
                    Vue.prototype.$awesLayoutCrm.$store = new Vuex.Store(store);
                }
            },
            'vue-shortkey': {
                src: 'https://unpkg.com/vue-shortkey@3',
                deps: ['vue'],
                cb() {
                    Vue.use(VueShortkey);
                }
            },
            'vue-toasted': {
                src: 'https://unpkg.com/vue-toasted',
                deps: ['vue'],
                cb: toastedRegistration
            },
            'vue-tabs-component': {
                src: 'https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js',
                deps: ['vue'],
                cb() {
                    Vue.use(VueTabs);
                }
            },
            'highlight': {
                src: [
                    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github-gist.min.css'
                ]
            },
            'highlight_lang_html': {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/languages/javascript.min.js',
                deps: ['highlight'],
                cb() {
                    document.querySelectorAll('pre code.html').forEach( block => { hljs.highlightBlock(block); });
                }
            }
        },

        install() {
            AWES.lang = i18n;
            // window.Vue.use(Notifications);
        }
    };

    if (window && ('AWES' in window)) {
        AWES.use(awesPlugin);

    } else {
        window.__awes_plugins_stack__ = window.__awes_plugins_stack__ || [];
        window.__awes_plugins_stack__.push(awesPlugin);
    }

}());
