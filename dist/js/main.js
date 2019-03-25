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
                showHelpers: false,
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
            },

            showHelpers( isShown ) {
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
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //


    var script = {

        name: 'content-wrapper',


        props: {

            tag: {
                type: String,
                default: 'div'
            },

            default: {
                default: null
            },

            storeData: {
                type: String,
                required: true
            },

            url: String,

            method: {
                type: String,
                default: 'GET'
            }
        },


        data() {
            return {
                hasError: false
            }
        },


        computed: {

            loadingName() {
                return this.storeData + '_loading'
            },

            isLoading() {
                return this.$store.state[this.loadingName];
            },

            isEmpty() {
                return this.AWES.utils.object.isEmpty(this.data)
            },

            data() {
                return this.$store.state[this.storeData]
            },

            content() {
                return typeof this.data === 'object' ?
                       this.data :
                       { data: this.data }
            }
        },


        watch: {

            url() {
                this.fetchData();
            },

            hasError(error) {
                this.$emit('error', error);
            },

            isLoading(loading) {
                this.$emit('loading', loading);
            }
        },


        methods: {

            setLoader(event) {
                AWES._store.commit('setData', {
                    param: this.loadingName,
                    data: event.detail
                });
            },

            fetchData() {
                
                /* uncomment to test loading with 2 seconds delay */
                // this.setLoader({detail: 1})
                // AWES.ajax({}, this.url, this.method)
                //     .then( res => {
                //         setTimeout(() => {
                //             this.setLoader({detail: 0})

                //             if ( res.success ) {
                //                 AWES._store.commit('setData', {
                //                     param: this.storeData,
                //                     data: res.data
                //                 });
                //                 this.hasError = false;
                //             } else {
                //                 this.hasError = true
                //             }
                //         }, 2000)
                //     })

                /* comment to test loading */
                AWES.on('core:ajax', this.setLoader);
                AWES.ajax({}, this.url, this.method)
                    .then( res => {

                        AWES.off('core:ajax', this.setLoader);

                        if ( res.success ) {
                            AWES._store.commit('setData', {
                                param: this.storeData,
                                data: res.data
                            });
                            this.hasError = false;
                        } else {
                            this.hasError = true;
                        }
                    });
            }
        },


        created() {
            if ( this.default ) {
                AWES._store.commit('setData', {
                    param: this.storeData,
                    data: this.default
                });
            } else if ( this.url ) {
                this.fetchData();
            }
        },


        errorCaptured(error, component, info) {
            this.hasError = true;
            AWES.notify({status:'error', message: error.message});
            if ( AWES_CONFIG.dev ) {
                console.log(error, component, info);
            }
        },
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
    /* server only */
    , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
      } // Vue.extend constructor export interop.


      var options = typeof script === 'function' ? script.options : script; // render functions

      if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true; // functional template

        if (isFunctionalTemplate) {
          options.functional = true;
        }
      } // scopedId


      if (scopeId) {
        options._scopeId = scopeId;
      }

      var hook;

      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true

          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          } // inject component styles


          if (style) {
            style.call(this, createInjectorSSR(context));
          } // register component module identifier for async chunk inference


          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        }; // used by ssr in case component is cached and beforeCreate
        // never gets called


        options._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function () {
          style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
        } : function (context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook) {
        if (options.functional) {
          // register for functional component in vue file
          var originalRender = options.render;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return script;
    }

    var normalizeComponent_1 = normalizeComponent;

    /* script */
    const __vue_script__ = script;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        _vm.tag,
        { tag: "component" },
        [
          _vm.isEmpty && !_vm.hasError && !_vm.isLoading
            ? _vm._t("empty", [_vm._v(_vm._s(_vm.$lang.CONTENT_EMPTY))])
            : _vm._e(),
          _vm._v(" "),
          _vm.isLoading
            ? _vm._t("loading", [_vm._v(_vm._s(_vm.$lang.CONTENT_LOADING))])
            : _vm._e(),
          _vm._v(" "),
          _vm.hasError && !_vm.isLoading
            ? _vm._t("error", [
                _c("span", { staticStyle: { color: "red" } }, [
                  _vm._v(_vm._s(_vm.$lang.CONTENT_ERROR))
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.isEmpty && !_vm.isLoading && !_vm.hasError
            ? _vm._t("default", null, null, _vm.content)
            : _vm._e()
        ],
        2
      )
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
      

      
      var contentWrapper = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script$1 = {

        name: 'frame-nav',

        props: {

            links: {
                type: Array,
                validator(links) {

                    let invalid = [];

                    function isValid( item ) {
                        if ( item.name && item.link ) return
                        if ( item.name && item.children && Array.isArray(item.children) ) {
                            item.children.forEach(isValid);
                            return
                        }
                        invalid.push(item);
                    }

                    links.forEach(isValid);

                    if ( invalid.length ) {
                        console.error('frame-nav: prop `links` must have name and a link or children:');
                        console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>');
                        console.error('frame-nav: invalid items - ', invalid);
                        return false
                    } else {
                        return true
                    }
                }
            },

            expanded: {
                type: Boolean,
                default: false
            }
        },


        data() {
            return {
                active: null
            }
        },


        watch: {

            links: {
                handler(links) {
                    this.active = links.findIndex( link => {
                        return link.active ||
                               link.children && link.children.some( child => child.active )
                    });
                },
                immediate: true
            }
        },


        methods: {

            itemActive(index) {
                return this.links[index].active ||
                       this.expanded ||
                       this.hasActiveChildren[index]
            },

            toggleActive( $event, index ) {
                $event.stopPropagation();
                $event.preventDefault();
                if ( this.active === index ) {
                    this.active = null;
                } else {
                    this.active = index;
                }
            }
        }
    };

    /* script */
    const __vue_script__$1 = script$1;

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "frame__aside-nav-wrap" },
        [
          _vm.links
            ? _c(
                "ul",
                { staticClass: "frame__aside-links" },
                _vm._l(_vm.links, function(item, index) {
                  return _c("li", { key: index, staticClass: "frame__aside-li" }, [
                    !item.children
                      ? _c(
                          "a",
                          {
                            class: [
                              "frame__aside-link",
                              { "frame__aside-link_active": _vm.active === index }
                            ],
                            attrs: { href: item.link || "" }
                          },
                          [
                            item.icon
                              ? _c("i", { class: "icon icon-" + item.icon })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(item.name))])
                          ]
                        )
                      : _c(
                          "div",
                          [
                            _c(
                              "a",
                              {
                                class: [
                                  "frame__aside-link frame__aside-link_sub",
                                  {
                                    "frame__aside-link_active": _vm.active === index
                                  }
                                ],
                                attrs: { href: item.link || "" },
                                on: {
                                  click: function($event) {
                                    item.link
                                      ? null
                                      : _vm.toggleActive($event, index);
                                  }
                                }
                              },
                              [
                                item.icon
                                  ? _c("i", { class: "icon icon-" + item.icon })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("span", [_vm._v(_vm._s(item.name))]),
                                _vm._v(" "),
                                !_vm.expanded
                                  ? _c("i", {
                                      staticClass: "icon icon-angle-bottom",
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleActive($event, index)
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "slide-up-down",
                              {
                                attrs: {
                                  show: _vm.active === index || _vm.expanded
                                }
                              },
                              [
                                _c(
                                  "ul",
                                  { staticClass: "frame__aside-hidden active" },
                                  _vm._l(item.children, function(child, i) {
                                    return _c(
                                      "li",
                                      {
                                        key: i,
                                        staticClass: "frame__aside-inlist"
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            class: [
                                              "frame__aside-inlink",
                                              {
                                                "frame__aside-inlink_active":
                                                  child.active
                                              }
                                            ],
                                            attrs: { href: child.link || "" }
                                          },
                                          [
                                            _c(
                                              "span",
                                              {
                                                class: { "tf-strong": child.active }
                                              },
                                              [_vm._v(_vm._s(child.name))]
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
            : _vm._e(),
          _vm._v(" "),
          _vm._t("difnav")
        ],
        2
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      const __vue_inject_styles__$1 = undefined;
      /* scoped */
      const __vue_scope_id__$1 = undefined;
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var frameNav = normalizeComponent_1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
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

    var script$2 = {

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
                this.$emit('update:show', false);
            },

            open() {
                this.isOpened = true;
                this.$emit('update:show', true);
            },

            toggle() {
                this.isOpened = ! this.isOpened;
                this.$emit('update:show', this.isOpened);
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
    const __vue_script__$2 = script$2;

    /* template */

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var slideUpDown = normalizeComponent_1(
        {},
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
        Vue.component('content-placeholder', { functional: true, render(h){ return null }});
        Vue.component('frame-nav', frameNav);
        Vue.component('slide-up-down', slideUpDown);
    }

    const plugin = {

        installed: false,

        install
    };

    var i18n = {
        MODAL_BACK: "Go back",
        MODAL_CLOSE: "Close modal",
        CODE_COPY: "copy",
        CODE_COPIED_MSG: "Text copied to clipboard",
        CONTENT_EMPTY: "No data",
        CONTENT_ERROR: "Error",
        CONTENT_LOADING: "Loading..."
    };

    /*
     * Docs here: https://github.com/shakee93/vue-toasted
     */

    const allowedStatuses = ['success', 'error'];

    const defaultOptions = {
        type : 'success',
        position: 'bottom-right',
        duration: 5000
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

    function copy(b) {
        let d = document;
        let t = document.createElement('TEXTAREA');
        t.id = 'copy-text';
        t.style.height = 0;
        t.position = 'fixed';
        d.body.appendChild(t);
        try {
            // remove empty lines
            t.value = b.innerText.split('\n').filter(l => l !== '' && l !== '\t').join('\n');
            t.select();
            d.execCommand('copy');
            return true
        } catch (e) {
            return false
        } finally {
            d.body.removeChild(t);
        }
    }

    var highlight = {
        'highlight': {
            src: [
                'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/highlight.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/atom-one-light.min.css'
            ]
        },
        'highlight_langs': {
            src: [
                'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/languages/yaml.min.js',
                'https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js'
            ],
            deps: ['highlight'],
            cb() {
                // console.log( hljs.listLanguages() )
                AWES.once('core:inited', function () {

                    // highlight blocks
                    hljs.initHighlighting();

                    let blocks = document.querySelectorAll('.hljs');

                    blocks && blocks.forEach(block => {

                        let pre = block.parentNode;

                        // add row numbers
                        hljs.lineNumbersBlock(block);

                        // add language badge
                        let language = block.className.match(/language-([a-z]*)/);
                        language && pre.setAttribute('data-language', language[1]);

                        // add copy button
                        let button = document.createElement('BUTTON');
                        button.className = 'hljs-copy';
                        button.innerText = AWES.lang.CODE_COPY;
                        button.addEventListener('click', function(){
                            if ( copy(block) ) {
                                AWES.notify({ message: AWES.lang.CODE_COPIED_MSG });
                            }
                        }, false);
                        pre.insertBefore(button, block);
                    });
                });
            }
        }
    };

    const WAVE_DURATION = 1000;

    class Waves {

        constructor(root) {
            if ( ! root ) return
            this.initElObserver();
            this.addElements();
            this.initRootObserver(root);
        }

        addElements( container = document ) {
            let config = Object.assign({ selector: '.btn, .frame__header-add, .hljs-copy'}, AWES_CONFIG.waves);

            this._elements = container.querySelectorAll(config.selector);
            if ( this._elements ) {
                Array.from(this._elements).forEach( this.addElement, this );
            }
        }

        addElement(el) {
            // already inited
            if ( el.__AWES_WAVE__ ) return

            if ( ! el.classList.contains('has-wave') ) {
                el.classList.add('has-wave');
            }

            this._elObserver.observe(el, {
                attributes: true,
                attributeFilter:['class']
            });

            let wave = el.querySelector('span.wave');

            if ( ! wave ) {
                wave = document.createElement('span');
                wave.classList.add('wave');
                el.appendChild(wave);
            }

            el.__AWES_WAVE__ = { wave, active: false };
            Waves.resetWave(el);

            el.addEventListener('mousedown', Waves.showWave, false);

            el.addEventListener('mouseup', Waves.hideWave, false);
        }

        initElObserver() {
            this._elObserver = new MutationObserver(mutations => {
                mutations.forEach( record => {
                    let el = record.target;
                    let cls = el.className;
                    if ( ! /has-wave/.test(cls) ) {
                        el.className = cls ? cls + ' has-wave' : 'has-wave';
                    }
                });
            });
        }

        initRootObserver(root) {
            this._rootObserver = new MutationObserver(mutations => {
                // throttle call for addElements
                clearTimeout(this.__tm);
                this.__tm = setTimeout(this.addElements.bind(this), 300);
            });

            this._rootObserver.observe(root, {
                childList: true,
                subtree: true
            });
        }

        static showWave(ev) {
            let { wave, active } = this.__AWES_WAVE__;
            if ( active ) {
                clearTimeout(this._tm);
                Waves.resetWave(this);
            } else {
                this.__AWES_WAVE__.active = true;
            }
            wave.style.cssText = `
            transition: transform ${WAVE_DURATION * .6}ms ease, opacity ${WAVE_DURATION * .6}ms ease;
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(2);
            top: ${ev.offsetY}px;
            left: ${ev.offsetX}px
        `;
        }

        static hideWave(ev) {
            this.__AWES_WAVE__.wave.style.opacity = '0';
            this._tm = setTimeout( () => {
                this.__AWES_WAVE__.active = false;
                Waves.resetWave(this);
            }, WAVE_DURATION * .4 );
        }

        static resetWave(el) {
            el.__AWES_WAVE__.wave.style.cssText = `
            transform: translate(-50%, -50%) scale(0);
            transition: none;
            opacity: 1;
        `;
            delete el._tm;
        }
    }

    const awesPlugin = {

        modules: {
            'vue': {
                src: 'https://unpkg.com/vue/dist/vue.min.js',
                cb() {
                    Vue.use(plugin);
                }
            },
            'lodash': {
                src: 'https://unpkg.com/lodash/lodash.min.js',
                deps: ['vue'],
                cb() {
                    Vue.prototype.$get = _.get;
                }
            },
            'vuex': {
                src: 'https://unpkg.com/vuex/dist/vuex.min.js',
                deps: ['vue'],
                cb() {
                    AWES._store = AWES._store || new Vuex.Store(store);
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
            'v-tooltip': {
                src: 'https://unpkg.com/v-tooltip/dist/v-tooltip.min.js',
                deps: ['vue'],
                cb() {
                    VTooltip.default.options.popover = Object.assign(VTooltip.default.options.popover, {
                        defaultPlacement: 'right',
                        defaultAutoHide: false,
                        defaultTrigger: 'manual',
                        defaultPopperOptions: {
                            modifiers: {
                                flip: {
                                    behavior: ['right', 'top']
                                }
                            }

                        }
                    });
                }
            },
            'vue-tabs-component': {
                src: 'https://unpkg.com/vue-nav-tabs/dist/vue-tabs.js',
                deps: ['vue'],
                cb() {
                    Vue.use(VueTabs);
                }
            },
            ...highlight
        },

        install(AWES) {
            AWES.lang = i18n;
            AWES.once('core:inited', () => {
                AWES.Waves = new Waves(AWES._vueRoot.$el);
            });
        }
    };

    if (window && ('AWES' in window)) {
        AWES.use(awesPlugin);
    } else {
        window.__awes_plugins_stack__ = window.__awes_plugins_stack__ || [];
        window.__awes_plugins_stack__.push(awesPlugin);
    }

}());
