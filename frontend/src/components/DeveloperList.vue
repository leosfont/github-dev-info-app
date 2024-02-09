<template>
    <div>
        developerListComponent
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, watchEffect } from 'vue';
  import { useDeveloperStore } from '../stores/developer.ts';

  
  export default defineComponent({
    
    setup() {
      const developerStore = useDeveloperStore();
      const filteredDevelopers = ref(developerStore.developers);
  
      watchEffect(() => {
        filteredDevelopers.value = developerStore.developers;
      });
  
      const handleSearch = (query: string) => {
        developerStore.fetchDevelopers(query);
      };
  
      return { filteredDevelopers, handleSearch };
    },
  });
  </script>
  