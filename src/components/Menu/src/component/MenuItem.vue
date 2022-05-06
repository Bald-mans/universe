<template>
    <MenuItem>

    </MenuItem>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import {Menu} from 'ant-design-vue';
    
    export default defineComponent({
        name:'MenuItem',
        component:{MenuItem:Menu.item,},
        
    })
</script>