<template>
    <div class="container mt-5">
        <Breadcrumb :items="breadcrumbItems" />
        <div class="d-flex flex-column">
            <div class="card p-4 d-flex flex-column align-items-center">
                <img :src="developerDetails?.avatar_url" alt="Avatar" class="rounded-circle shadow" style="width: 100px; height: 100px;">
                <div class="">
                    <h4 class="text-small">{{ developerDetails?.login }}</h4>
                    <p v-if="developerDetails?.bio" class="bio">{{ developerDetails?.bio }}</p>
                    <p v-if="developerDetails?.company" class="company">{{ developerDetails?.company }}</p>
                    <p v-if="developerDetails?.location" class="location">{{ developerDetails?.location }}</p>
                </div>
            </div>
            <div class="mt-3 d-flex flex-wrap justify-content-center align-items-center">
                <div class="mx-3">
                    <span class="badge bg-secondary">{{ developerDetails?.public_repos }} 📁</span>
                    <span class="ms-1">Repos</span>
                </div>
                <div class="mx-3">
                    <span class="badge bg-secondary">{{ developerDetails?.followers }} 👥</span>
                    <span class="ms-1">Followers</span>
                </div>
                <div class="mx-3">
                    <span class="badge bg-secondary">{{ developerDetails?.following }} 👥</span>
                    <span class="ms-1">Following</span>
                </div>
            </div>
            <div class="mt-4">
                <h5 class="text-start">Repositórios</h5>
                <div v-for="repo in repositories" :key="repo.id" class="card p-3 mb-3 border">
                    <div class="d-flex justify-content-between align-items-center">
                        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                        <span class="badge bg-secondary">{{ repo.stargazers_count }} ⭐</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import Breadcrumb from '../components/Breadcrumb.vue';
  import { DeveloperDetails } from '../interfaces/DeveloperDetails.ts';
  import { GitHubRepository } from '../interfaces/GitHubRepository.ts';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    components: {
      Breadcrumb,
    },
    setup() {
        const route = useRoute();
        const developerDetails = ref<DeveloperDetails | null>(null);
        const repositories = ref<GitHubRepository[]>([]);
        const breadcrumbItems = ref([
            { label: 'App', to: '/' },
            { label: 'Developer List', to: '/' },
            { label: 'Profile', to: `/developer/${route.params.username}`, active: true },
        ]);
    
        const fetchDeveloperDetails = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${route.params.username}`);
                if (response.data) {
                    developerDetails.value = response.data;
                }
            } catch (error) {
                console.error('Erro ao buscar detalhes do desenvolvedor:', error);
            }
        };
    
        const fetchRepositories = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${route.params.username}/repos`);
                if (response.data) {
                    repositories.value = response.data;
                }
            } catch (error) {
                console.error('Erro ao buscar repositórios do desenvolvedor:', error);
            }
        };
    
        onMounted(async () => {
            await fetchDeveloperDetails();
            await fetchRepositories();
        });
    
        const formatDate = (dateString: string) => {
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('pt-BR', options);
        };
    
        return {
            developerDetails,
            repositories,
            breadcrumbItems,
            formatDate,
        };
    },
  });
  </script>