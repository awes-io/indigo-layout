export function replaceCode() {
    let blocks = document.querySelectorAll('pre > code[class^="language"]')

    blocks && blocks.forEach(block => {

        let pre = block.parentElement,
            container = pre.parentElement,
            language = block.className.match(/language-([a-z]*)/);

        let codeBlock = document.createElement('code-block')
        codeBlock.setAttribute('language', language[1])
        codeBlock.innerHTML = '<template v-pre>' + block.innerHTML + '</template>'

        container.replaceChild(codeBlock, pre)

        pre = null
        container = null
        codeBlock = null
    })
}