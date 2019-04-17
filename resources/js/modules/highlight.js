export function copy(b) {
    let d = document
    let t = document.createElement('TEXTAREA')
    t.id = 'copy-text'
    t.style.height = 0
    t.position = 'fixed'
    d.body.appendChild(t)
    try {
        // remove empty lines
        t.value = b.innerText.split('\n').filter(l => l !== '' && l !== '\t').join('\n')
        t.select()
        d.execCommand('copy')
        return true
    } catch (e) {
        return false
    } finally {
        d.body.removeChild(t)
    }
}

export default {
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

                let blocks = document.querySelectorAll('pre > code[class^="language"]')

                blocks && blocks.forEach(block => {

                    let pre = block.parentNode

                    // add row numbers
                    hljs.lineNumbersBlock(block)

                    // add language badge
                    let language = block.className.match(/language-([a-z]*)/);
                    language && pre.setAttribute('data-language', language[1])

                    // add copy button
                    let button = document.createElement('BUTTON')
                    button.className = 'hljs-copy'
                    button.innerText = AWES.lang.CODE_COPY
                    button.addEventListener('click', function(){
                        if ( copy(block) ) {
                            AWES.notify({ message: AWES.lang.CODE_COPIED_MSG })
                        }
                    }, false)
                    pre.insertBefore(button, block)
                })
            })
        }
    }
}