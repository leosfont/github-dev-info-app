import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useDeveloperStore } from './stores/developer';
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

const developerStore = useDeveloperStore();
developerStore.fetchDevelopers();

import "bootstrap"

import SearchFilter from './components/SearchFilter.vue';
import DeveloperCard from './components/DeveloperCard.vue';

app.component('SearchFilter', SearchFilter);
app.component('DeveloperCard', DeveloperCard);

app.mount('#app')
