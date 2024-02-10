<template>
    <div class="card p-3 mb-3 border" role="button" @click="redirectToProfile">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img :src="developerDetails.avatar_url" alt="Avatar" class="rounded-circle shadow" style="width: 50px; height: 50px;">
          <div class="ms-3">
            <h5 class="mb-0 text-start">{{ developerDetails.login }}</h5>
            <p v-if="developerDetails.created_at" class="mb-0">
              Usuário desde: {{ formatDate(developerDetails.created_at) }}
            </p>
          </div>
        </div>
        <div>
          <span class="badge bg-secondary">{{ developerDetails.public_repos }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType, ref, onMounted } from 'vue';
  import { DeveloperProfile } from '../interfaces/DeveloperProfile.ts';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    props: {
      developer: {
        type: Object as PropType<DeveloperProfile>,
        required: true,
      },
    },
    setup(props) {
      const developerDetails = ref<DeveloperProfile>({
        id: 0,
        avatar_url: '',
        login: '',
        public_repos: 0,
        created_at: '',
        bio: '',
        company: '',
        location: '',
        followers: 0,
        following: 0
      });
  
      const router = useRouter();
  
      onMounted(() => {
        developerDetails.value = props.developer;
      });
  
      const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
      };
  
      const redirectToProfile = () => {
        router.push({ name: 'UserProfile', params: { username: props.developer.login } });
      };
  
      return {
        developerDetails,
        formatDate,
        redirectToProfile,
      };
    },
  });
  </script>
  