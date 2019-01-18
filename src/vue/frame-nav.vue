<template>
    <div class="frame__aside-nav-wrap">
        <ul class="frame__aside-links" v-if="links">
            <li class="frame__aside-li" v-for="(item, index) in links" :key="index">
                <nav-item v-bind="item"></nav-item>
                <!-- <a class="frame__aside-link" :href="item.link" v-if="item.link != null" :class="{ 'frame__aside-link_active': item.active }">
                    <i :class="'icon icon-'+item.icon"></i>
                    <span>{{ item.title }}</span>
                </a>

                <div v-else>
                    <a class="frame__aside-link frame__aside-link_sub" href="#" @click.prevent="setActive(index, item.active)" :class="{ 'frame__aside-link_active': item.active }" >
                        <i :class="'icon icon-'+item.icon"></i>
                        <span>{{ item.title }}</span>
                        <i class="icon icon-angle-bottom"></i>
                    </a>

                    <slide-up-down :show="item.active" :slideDownDuration="380" :slideUpDuration="210">
                        <ul class="frame__aside-hidden active">
                            <li class="frame__aside-inlist" v-for="sub in item.sub">
                                <a class="frame__aside-inlink" :class="{'frame__aside-inlink_active': sub.active}" :href="sub.link">
                                    <span :class="{'tf-strong': sub.active}">{{ sub.title }}</span>
                                </a>
                            </li>
                        </ul>
                    </slide-up-down>
                </div> -->
                
            </li>
        </ul> 
        <slot name="difnav"></slot>
    </div>
</template>

<script>
import navItem from './_nav-item.vue'

export default {

    name: 'frame-nav',

    components: { navItem },

    props: {

        links: Array,

        expanded: {
            type: Boolean,
            default: false
        }
    },


    data() {
        return {
            toggle: false,
            active: null,
            val: false
        }
    },


    computed: {
        // menu() {
        //     return this.links.map( (item, key) => {
        //         if (this.active !== null && item.link === undefined) {
        //             item.active = (key === this.active) ? this.val : false;
        //         }
        //         return item;
        //     });
        // }
    },


    methods: {
        setActive(index, val) {
            this.val = !val;
            this.active = index;
        }
    }
}
</script>
