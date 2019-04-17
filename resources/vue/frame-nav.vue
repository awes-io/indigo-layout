<template>
    <div class="frame__aside-nav-wrap" :class="{'is-expanded': expanded}">
        <ul class="frame__aside-links" v-if="links">
            <li class="frame__aside-li"
                v-for="(item, index) in links"
                :key="index">

                <!-- single link -->
                <a  v-if="! item.children"
                    :href="item.link || ''"
                    :class="['frame__aside-link', {'frame__aside-link_active': active === index }]"
                >
                    <i v-if="item.icon" :class="'icon icon-'+item.icon"></i>
                    <span>{{ item.name }}</span>
                </a><!-- / single link -->


                <!-- link with children -->
                <div v-else>
                    <component
                        :is="expanded && !item.link ? 'span' : 'a'"
                        :href="expanded && item.link || ''"
                        :class="['frame__aside-link frame__aside-link_sub',
                                {'is-active': active === index, 'no-hover': expanded && !item.link }]"
                        @click="item.link ? null : toggleActive($event, index)"
                    >
                        <i v-if="item.icon" :class="'icon icon-'+item.icon"></i>
                        <span>{{ item.name }}</span>
                        <i v-if="! expanded"
                           class="icon icon-angle-bottom"
                           @click="toggleActive($event, index)"></i>
                    </component>

                    <slide-up-down :show="active === index || expanded">
                        <ul
                            class="frame__aside-hidden"
                            :class="{'has-background': !expanded || active === index }"
                        >
                            <li class="frame__aside-inlist"
                                v-for="(child, i) in item.children"
                                :key="i">
                                <a  :href="child.link || ''"
                                    :class="['frame__aside-inlink', {'is-active': child.active}]"
                                >
                                    <span :class="{'text-strong': child.active}">{{ child.name }}</span>
                                </a>
                            </li>
                        </ul>
                    </slide-up-down>
                </div><!-- / link with children -->

            </li>
        </ul>

        <!-- additional nav -->
        <slot name="difnav"></slot>
    </div>
</template>

<script>
export default {

    name: 'frame-nav',

    props: {

        links: {
            type: Array,
            validator(links) {

                let invalid = []

                function isValid( item ) {
                    if ( item.name && item.link ) return
                    if ( item.name && item.children && Array.isArray(item.children) ) {
                        item.children.forEach(isValid)
                        return
                    }
                    invalid.push(item)
                }

                links.forEach(isValid)

                if ( invalid.length ) {
                    console.error('frame-nav: prop `links` must have name and a link or children:')
                    console.error('<frame-nav :links="[ {name:<String>, link:<String>}, {name:<String>, children:<Array>} ]"/>')
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
                })
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
            $event.stopPropagation()
            $event.preventDefault()
            if ( this.expanded ) return
            if ( this.active === index ) {
                this.active = null
            } else {
                this.active = index
            }
        }
    }
}
</script>
