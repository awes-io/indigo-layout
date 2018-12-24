<template>
    <li class="frame__nav-item" :class="{'has-submenu':hasSubmenu, 'is-opened': isOpened}">
        <component
            :is="hasSubmenu ? 'button' : 'a'"
            :href="hasSubmenu ? null : href"
            @click="isOpened = !isOpened">
            <slot></slot>
        </component>
        <slideUpDown v-if="hasSubmenu" :show="isOpened">
            <ul>
                <slot name="submenu"></slot>
            </ul>
        </slideUpDown>
    </li>
</template>

<script>
import slideUpDown from '@/vue/slide-up-down.vue'

export default {

    name: 'AwesNavItem',

    components: { slideUpDown },


    props: {

        href: String,
    },


    data() {
        return {
            isOpened: false
        }
    },


    computed: {

        hasSubmenu() {
            return this.$slots.submenu
        }
    }
}
</script>

<style lang="css">
</style>
