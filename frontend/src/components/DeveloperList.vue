<template>
    <div class="container mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">App</a></li>
                <li class="breadcrumb-item active" aria-current="page">Developer List</li>
            </ol>
        </nav>
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
    
    export default defineComponent({
        setup() {
            const developerStore = useDeveloperStore();
            const filteredDevelopers = ref(developerStore.developers);
        
            watchEffect(() => {
                filteredDevelopers.value = developerStore.developers;
            });
        
            const handleSearch = (query: string) => {
                developerStore.filterDevelopers(query);
            };
        
            return { filteredDevelopers, handleSearch };
        },
    });
  </script>
  