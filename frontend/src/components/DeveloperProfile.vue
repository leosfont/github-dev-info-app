<template>
    <div class="container mt-5">
        <Breadcrumb :items="breadcrumbItems" />
        <div v-if="developer" class="d-flex flex-column">
            <div class="card p-4 d-flex flex-column align-items-center">
                <img :src="developer.avatar_url" alt="Avatar" class="rounded-circle shadow" style="width: 100px; height: 100px;">
                <div class="">
                    <h4 class="text-small">{{ developer.login }}</h4>
                    <p v-if="developer.bio" class="bio">{{ developer.bio }}</p>
                    <p v-if="developer.company" class="company">{{ developer.company }}</p>
                    <p v-if="developer.location" class="location">{{ developer.location }}</p>
                </div>
            </div>
            <div class="mt-3 d-flex flex-wrap justify-content-center align-items-center">
                <div class="mx-3">
                    <span class="badge bg-secondary">{{ developer.public_repos }} 📁</span>
                    <span class="ms-1">Repos</span>
                </div>
                <div class="mx-3">
                    <span class="badge bg-secondary">{{ developer.followers }} 👥</span>
                    <span class="ms-1">Followers</span>
                </div>
                <div class="mx-3">
                    <span class="badge bg-secondary">{{ developer.following }} 👥</span>
                    <span class="ms-1">Following</span>
                </div>
            </div>
            <div class="mt-3 d-flex flex-wrap justify-content-center align-items-center">
                
                <button role="button" class="mx-3 btn btn-outline-primary" @click="saveDeveloper(developer.login)">
                    {{ developerSaved ? 'Atualizar Perfil' : 'Salvar Perfil' }}
                </button>
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
  import { defineComponent, ref, watchEffect } from 'vue';
  import Breadcrumb from '../components/Breadcrumb.vue';
  import { DeveloperProfile } from '../interfaces/DeveloperProfile.ts';
  import { GitHubRepository } from '../interfaces/GitHubRepository.ts';
  import { useDeveloperStore } from '../stores/developer.ts';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    components: {
      Breadcrumb,
    },
    setup() {
        const route = useRoute();
        const developerStore = useDeveloperStore();
        const developer = ref<DeveloperProfile | null>(null);
        const repositories = ref<GitHubRepository[]>([]);
        const username = route.params.username;
        const developerSaved = ref<boolean>(false);
        const breadcrumbItems = ref([
            { label: 'App', to: '/' },
            { label: 'Developer List', to: '/' },
            { label: 'Profile', to: `/developer/${username}`, active: true },
        ]);

        developerStore.fetchDeveloper(username);
        developerStore.fetchRepositories(username);
    
        watchEffect(() => {
            developerSaved.value = developerStore.localDeveloper?.login == username ? true : false;
            developer.value = developerStore.developerProfile;
            repositories.value = developerStore.developerRepositories;
        });
    
        const formatDate = (dateString: string) => {
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('pt-BR', options);
        };

        const saveDeveloper = (username: string | undefined) => {
            if (username) {
                developerStore.saveLocalDeveloper(username);
                developerStore.fetchDeveloper(username);
            }
        };
    
        return {
            developer,
            repositories,
            breadcrumbItems,
            developerSaved,
            formatDate,
            saveDeveloper,
        };
    },
  });
  </script>