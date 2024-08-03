import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

localStorage.text
    ? app.config.globalProperties.$text = localStorage.text
    : app.config.globalProperties.$text = 'bb';

app.mount('#app');
