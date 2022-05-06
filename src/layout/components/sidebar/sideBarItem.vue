<template>
<div v-if="1"></div>
  <el-menu v-else :index="resolvePath(props.item.path)" >
    <el-menu-item index=" 1">
	 </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import path from 'path';
import { PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import {isExternal} from '/@/utils/validate';

const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>
  },
  basePath: {
    type: String,
    default: true
  }
});

//校验路由
const resolvePath = (routePath: string) => {
  //路由如果
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<style>
.s:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
