<template>
    <div class="frame__aside-nav-wrap">
        <ul class="frame__aside-links" v-if="links">
            <li class="frame__aside-li"
                v-for="(item, index) in links"
                :key="index">

                <!-- single link -->
                <a  v-if="! item.children"
                    :href="item.link || ''"
                    :class="['frame__aside-link', {'frame__aside-link_active': links[index].active }]"
                >
                    <i v-if="item.icon" :class="'icon icon-'+item.icon"></i>
                    <span>{{ item.name }}</span>
                </a><!-- / single link -->


                <!-- link with children -->
                <div v-else>
                    <a  :href="item.link || ''"
                        :class="['frame__aside-link frame__aside-link_sub', {'frame__aside-link_active': itemActive(index) }]"
                        @click="item.link ? null : toggleActive($event, index)"
                    >
                        <i v-if="item.icon" :class="'icon icon-'+item.icon"></i>
                        <span>{{ item.name }}</span>
                        <i v-if="! expanded"
                           class="icon icon-angle-bottom"
                           @click="toggleActive($event, index)"></i>
                    </a>

                    <slide-up-down :show="itemActive(index)">
                        <ul class="frame__aside-hidden active">
                            <li class="frame__aside-inlist"
                                v-for="(child, i) in item.children"
                                :key="i">
                                <a  :href="child.link || ''"
                                    :class="['frame__aside-inlink', {'frame__aside-inlink_active': child.active}]"
                                >
                                    <span :class="{'tf-strong': child.active}">{{ child.name }}</span>
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


    methods: {

        itemActive(index) {
            return this.active === index ||
                   this.links[index].active ||
                   this.expanded
        },

        toggleActive( $event, index ) {
            $event.stopPropagation()
            $event.preventDefault()
            if ( this.active === index ) {
                this.active = null
            } else {
                this.active = index
            }
        }
    }
}
</script>
