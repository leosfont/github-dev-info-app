<template>
    <div class="container mt-5">
        <Breadcrumb :items="breadcrumbItems" />
        <SearchFilter @search="handleSearch" />
        <div class="row p-0 m-0">
            <DeveloperCard v-for="developer in filteredDevelopers" :key="developer.id" :developer="developer" class="col-md-12 mb-3"/>
        </div>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent, ref, watchEffect } from 'vue';
    import { useDeveloperStore } from '../stores/developer.ts';
    import SearchFilter from './SearchFilter.vue';
    import DeveloperCard from './DeveloperCard.vue';
    import Breadcrumb from './Breadcrumb.vue';

    export default defineComponent({
        components: {
            Breadcrumb,
        },
        setup() {
            const developerStore = useDeveloperStore();
            const filteredDevelopers = ref(developerStore.developers);
            const breadcrumbItems = ref([
                { label: 'App', to: '/' },
                { label: 'Developer List', to: '/developer-list' },
            ]);

            developerStore.fetchDevelopers();

            watchEffect(() => {
                filteredDevelopers.value = developerStore.developers;
            });
        
            const handleSearch = (query: string) => {
                developerStore.filterDevelopers(query);
            };
        
            return {
                filteredDevelopers,
                handleSearch,
                breadcrumbItems,
            };
        },
    });
  </script>
  