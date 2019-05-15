<template>
    <pre :data-language="language"><!--
     --><button class="hljs-copy has-wave" @click="copy"><!--
         -->{{ $lang.CODE_COPY }}<!--
         --><span class="wave"></span><!--
     --></button><!--
     --><code v-pre><!--
         --><slot></slot><!--
     --></code><!--
 --></pre>
</template>


<script>
export default {

    name: 'code-block',


    props: {

        language: String
    },


    methods: {

        copy() {
            let d = document,
                t = d.createElement('TEXTAREA'),
                b = this.$el.querySelector('code')

            t.id = 'copy-text'
            t.style.height = 0
            t.position = 'fixed'
            d.body.appendChild(t)
            try {
                // remove empty lines
                t.value = b.innerText.split('\n').filter(l => l !== '' && l !== '\t').join('\n')
                t.select()
                d.execCommand('copy')
                AWES.notify({ message: AWES.lang.CODE_COPIED_MSG })
            } catch (e) {
                AWES.notify({ status: 'error', message: e.message })
            } finally {
                d.body.removeChild(t)
            }
        },

        loadHighlight(cb) {
            AWES.utils.loadModules({
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
                    cb
                }
            })
        },

        initHighlight() {
            let code = this.$el.querySelector('code')
            code.className = `${this.language}`
            hljs.highlightBlock(code)
            hljs.lineNumbersBlock(code)
        }
    },


    mounted() {
        this.$nextTick( () => {
            this.loadHighlight(this.initHighlight)
        })
    }
}
</script>