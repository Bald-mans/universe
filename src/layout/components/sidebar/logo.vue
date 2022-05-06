<template>
    <div :class="{ collapse: props.collapse }" class="sidebar-logo-container">
        <transition name="sidebarLogoFade">
            <router-link 
            v-if="props.collapse" 
            key="props.collapse" 
            class="sidebar-logo-link"
            to="/">
                <img src="logo.ico" class="sidebar-logo">
                <span class="sidebar-title">{{ title }}</span>
            </router-link>
            <router-link 
            v-else 
            key="expand" 
            class="sidebar-logo-link"
            to="/">
                <img src="logo.ico" class="sidebar-logo">
                <span class="sidebar-title">{{ title }}</span>
            </router-link>

        </transition>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    collapse: Boolean
})
const title = 'vue3管理平台'
</script>

<style lang="less" scoped>
.sidebarLogoFade-enter-active{
transition: opacity 1.5s}
/*动画的到来起点和离开终点*/
.sidebarLogoFade-enter,.sidebarLogoFade-leave-to{
opacity: 0;}

.sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: red;
    text-align: center;
    overflow: hidden;
    margin-bottom: 30px;
    margin-top: 20px;


    & .sidebar-logo-link {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        & .sidebar-logo {
            display: inline-block;
            height: 100%;
        }
        & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #435EBE;
        font-weight: 600;
        line-height: 50px;
        font-size: 24px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
        }
    }

    & .collapse {
        .sidebar-logo {
            margin-right: 0
        }
    }
}
</style>