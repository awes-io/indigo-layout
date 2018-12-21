<template>
    <transition
        name="modal-fade"
        @after-enter="initBottomObserver"
        @after-leave="destroyBottomObserver">
        <div
            v-if="isOpened"
            :class="['modal', {'modal_bottom-visible': isBottomVisible}, {'modal_fullscreen': fullscreen}]"
        >
            <div role="dialog"
                class="modal__dialog"
                :class="{'modal-fade__translate': !fullscreen}"
            >
                <!-- header -->
                <div class="modal__header">

                    <button
                        v-if="fullscreen"
                        class="modal__back"
                        type="button"
                        :title="$lang.MODAL_BACK"
                        :aria-label="$lang.MODAL_BACK"
                        @click.prevent="historyBack"
                    >
                        &larr;
                    </button>
                
                    <h2 class="modal__title" v-if="title">{{ title }}</h2>
                    
                    <button
                        class="modal__close"
                        type="button"
                        :title="$lang.MODAL_CLOSE"
                        :aria-label="$lang.MODAL_CLOSE"
                        v-shortkey="['esc']"
                        @shortkey="close(name)"
                        @click.prevent="close(name)"
                    >
                        &times;
                    </button>
                
                </div><!-- / header -->

                <!-- content -->
                <div class="modal__content">
                    <slot></slot>
                </div><!-- / content -->

                <!-- bottom element -->
                <div class="modal__bottom" ref="bottom"></div>
            </div>
        </div>
    </transition>
</template>

<script>
let _uniqModalId = 0;

function getCleanUrl() {
  const url = location.href
  return url.substring(0, url.indexOf("#"))
}

export default {

  name: 'modal-window',

  props: {

    title: String,

    name: {
        type: String,
        default: () => `modal-${_uniqModalId++}`
    },
    
    fullscreen: {
        type: Boolean,
        default: false
    }
  },


  data() {
    return {
      isOpened: false, // controls open / close
      bottomObserver: null,
      isBottomVisible: false, // controls modal bottom side visibility
      closePrevented: false
    }
  },

  computed: {
    
    hash() {
      return '#modal_' + this.name
    }
  },


  provide() {
    return {
      modal: {
        hash: this.hash,
        name: this.name
      }
    }
  },


  watch: {

    isOpened( isOpened ) {
      this.$root.toggleBodyFix(isOpened)
    }
  },


  methods: {

    open( name ) {
      if ( name !== this.name ) return
      const url = getCleanUrl() + this.hash
      history.pushState( {modal: this.modal}, document.title, url )
      this.isOpened = true
    },

    close( name ) {
      if ( name !== this.name ) return
      if ( this.closePrevented ) {
        this.$root.$emit('modals:on-close-prevented', this.name)
        return
      }
      history.pushState( {}, document.title, getCleanUrl() )
      this.isOpened = false
    },
    
    historyBack() {
      history.back()
    },

    hashWatcher() {
      if ( location.hash === this.hash && ! this.isOpened ) {
        this.open( this.name )
      } else if ( location.hash !== this.hash && this.isOpened ) {
        this.close( this.name )
      }
    },

    initBottomObserver() {
      this.bottomObserver = new IntersectionObserver( entries => {
        this.isBottomVisible = entries[0].isIntersecting
      })
      this.bottomObserver.observe(this.$refs.bottom)
    },

    destroyBottomObserver() {
      this.bottomObserver.disconnect()
    },

    setClosePrevented({ name, state }) {
      if ( name === this.name ) this.closePrevented = state
    }
  },


  mounted() {
    this.hashWatcher()
    this.$root.$on('modals:open', this.open)
    this.$root.$on('modals:close', this.close)
    this.$root.$on('modals:prevent', this.setClosePrevented)
    window.addEventListener('hashchange', this.hashWatcher, false)
  },


  beforeDestroy() {
    this.destroyBottomObserver()
    this.$root.$off('modals:open', this.open)
    this.$root.$off('modals:close', this.close)
    this.$root.$off('modals:prevent', this.setClosePrevented)
    window.removeEventListener('hashchange', this.hashWatcher)
  }
}
</script>
