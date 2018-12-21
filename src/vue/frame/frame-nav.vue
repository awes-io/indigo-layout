<template>
    <aside class="frame__aside">

        <div v-if="title"
            class="frame__aside-top">
            {{ title }}
        </div>

        <ul class="frame__aside-nav">
            <slot></slot>
        </ul>
    </aside>
</template>

<script>
export default {

    name: 'FrameNav',
    
    props: {

        title: String,
    },

    computed: {
        
    }
}
</script>
