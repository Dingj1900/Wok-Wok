import { createApp } from 'vue'
import {createStore} from './store'
import App from './App.vue'

const store = createStore();

createApp(App).mount('#app');
App.use(store);
