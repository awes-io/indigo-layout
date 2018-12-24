<template>
    <div class="frame">

        <aside class="frame__aside">
            <div class="frame__aside-top">
                <slot name="title">{{ title }}</slot>
            </div>

            <ul class="frame__aside-nav">
                <slot name="menu"></slot>
            </ul>
        </aside>

        <main class="frame__right">
            <div class="frame__header">
                <slot name="header"></slot>
            </div>
            <div class="frame__content">
                <slot></slot>
            </div>
        </main>

        <!-- TODO: simplify markup and move to component AWES-notifications -->
        <notifications class="notifications_rb" group="bottom-right" position="bottom right"><template slot="body" slot-scope="props">
                <div class="vue-notification" :class="props.item.type">
                    <div class="vue-notification__wrap"><i class="icon icon-circle-check vue-notification__left-icon"></i><span class="vue-notification__title">{{ props.item.title }}</span><span class="vue-notification__text" v-html="props.item.text"></span><button class="vue-notification__close" @click.prevent="props.close"><i class="icon icon-cross"></i></button></div>
                </div>
            </template></notifications>
        <notifications class="notifications_header" group="undo" width="360px" position="top center"><template slot="body" slot-scope="props">
                <div class="vue-notification vue-notification_content" :class="props.item.type"><span class="vue-notification__animation" :style="{animationDuration: props.item.length + 'ms'}"></span>
                    <div class="vue-notification__wrap"><span class="title">{{props.item.title}}</span></span><button class="vue-notification__btn vue-notification__btn_mleft" @click.prevent=""><strong>UNDO</strong></button><button class="vue-notification__close" @click.prevent="props.close"><i class="icon icon-cross"></i></button></div>
                </div>
            </template>
        </notifications>
    </div>
</template>

<script>
export default {

    name: 'AwesFrame',

    props: {

        title: {
            type: String,
            // TODO: replace with lang
            default: 'AwesCRM'
        }
    }
}
</script>
