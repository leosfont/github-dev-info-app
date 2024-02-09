<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item" :class="{ active: index === items.length - 1 }">
          <router-link :to="item.to" v-if="item.to && index !== items.length - 1">{{ item.label }}</router-link>
          <span v-else>{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  interface BreadcrumbItem {
    label: string;
    to?: string;
  }
  
  export default defineComponent({
    props: {
      items: {
        type: Array as PropType<BreadcrumbItem[]>,
        required: true,
      },
    },
  });
  </script>