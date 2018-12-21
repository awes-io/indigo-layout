<template>
    <li class="frame__nav-item" :class="{'has-submenu':hasSubnav, 'is-opened': isOpened}">
        <a v-if="! hasSubnav" :href="href">
            {{ title }}
        </a>
        <button v-else
            @click="isOpened = !isOpened">
            {{ title }}
        </button>
        <slideUpDown v-if="hasSubnav" :show="isOpened">
            <slot></slot>
        </slideUpDown>
    </li>
</template>

<script>
import slideUpDown from '@/vue/slide-up-down.vue'

export default {

    name: 'FrameNavItem',

    components: { slideUpDown },

    props: {

        href: String,
        
        title: String,
    },
    
    data() {
        return {
            isOpened: false
        }
    },

    computed: {

        hasSubnav() {
            return this.$slots.default
        }
    }
}
</script>

<style lang="css">
</style>
