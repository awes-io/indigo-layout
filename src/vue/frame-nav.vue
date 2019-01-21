<template>
    <div class="frame__aside-nav-wrap">
        <ul class="frame__aside-links">
            <li class="frame__aside-li"
                v-for="(link, i) in links">
                <component :is="link.children ? 'nav-item-with-children' : 'nav-item'"
                           :class="{'frame__aside-link': ! link.children}"
                           top-level
                           v-bind="link"></component>
            </li>
        </ul>
        
        <slot name="difnav"></slot>
    </div>
</template>

<script>
import navItem from './_nav-item.vue'
import navItemWithChildren from './_nav-item-with-children.vue'

export default {

    name: 'frame-nav',

    components: {
        navItem,
        navItemWithChildren
    },

    props: {

        links: Array,

        expanded: {
            type: Boolean,
            default: false
        }
    },


    provide() {
        return {
            expanded: this.expanded
        }
    },


    data() {
        return {
            toggle: false,
            active: null,
            val: false
        }
    }
}
</script>
