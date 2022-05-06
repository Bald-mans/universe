<template>
  <header id="head">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        <polyline
          points="12,18 4,9 12,0"
          style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2" />
      </svg>
    </section>

    <section class="title_head" v-if="headtitle">
      <span class="title_text">{{ title }}</span>
    </section>
    <slot name="edit"></slot>
    <slot name="s"></slot>
    <slot name=""></slot>
    <slot name=""></slot>
  </header>
</template>

<script setup>
import defineComponent from 'vue';
const name = 'ssl';
</script>

<style></style>
