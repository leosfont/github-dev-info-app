import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useDeveloperStore } from './stores/developer';
import App from './App.vue'
import './style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

const developerStore = useDeveloperStore();
developerStore.fetchDevelopers();

app.mount('#app')
