<script>
    export default {

        functional: true,

        name: 'Frame',

        render(h, context) {
            return h('div', {
                class: 'frame'
            }, context.children)
        }
    }
</script>
