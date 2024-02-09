import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import DeveloperList from './components/DeveloperList.vue';
import DeveloperProfile from './components/DeveloperProfile.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: DeveloperList },
  { path: '/profile/:username', name: 'UserProfile', component: DeveloperProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;