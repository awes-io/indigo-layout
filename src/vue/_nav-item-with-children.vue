<template>
<div>
    <div class="frame__aside-nav-inwrap">
        <nav-item v-bind="{name, url, icon, className: topLevelClassName, active: isOpened || isActive}"
                  @click.prevent="toggleChildren"></nav-item>
        <i class="icon icon-angle-bottom" @click="toggleChildren"></i>
    </div>

    <slide-up-down
        tag="ul"
        :class="{'frame__aside-hidden active' : topLevel}"
        :show="isOpened || isActive">
        <li class="frame__aside-inlist"
            v-for="(child, i) in children"
            :key="i">
            <nav-item v-if="! child.children"
                      class="frame__aside-inlink"
                      v-bind="child"></nav-item>
            <nav-item-with-children v-else v-bind="child"></nav-item-with-children>
        </li>
    </slide-up-down>
</div>
</template>

<script>
import navItem from './_nav-item.vue'

const LINK_TOP_CLASS = 'frame__aside-link'
const LINK_IN_CLASS = 'frame__aside-inlink'

export default {

    name: 'nav-item-with-children',

    extends: navItem,

    components: { navItem },

    props: {

        children: Array,
        
        topLevel: Boolean,
    },


    data() {
        return {
            isOpened: false
        }
    },


    computed: {

        topLevelClassName() {
            let className = this.topLevel ? LINK_TOP_CLASS : LINK_IN_CLASS
            switch ( typeof this.className ) {
                case 'array':
                    return this.className.concat([className])
                    break;
                case 'object':
                    let obj = {}
                    obj[className] = true
                    return Object.assign(this.className, obj)
                    break;
                case 'string':
                    return `${this.className} ${className}`
                    break;
                default:
                    return className
            }
        }
    },


    methods: {

        toggleChildren() {
            this.isOpened = ! this.isOpened
        },

        checkIsCurrent() {
            // quick check
            const path = window.location.pathname
            if ( path === this.url ) {
                this.isCurrent = true
                return
            }

            // children check
            let childrenMatch = false
            function matchLocation( item ) {
                childrenMatch = childrenMatch || item.url === path
                item.children && item.children.forEach(matchLocation)
            }
            this.children.forEach(matchLocation)
            this.isCurrent = childrenMatch
        }
    }
}
</script>
