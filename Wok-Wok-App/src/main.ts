import { createApp } from 'vue'
import {createStore} from './store'
import router from "./router"
import App from './App.vue'

const store = createStore();

createApp(App).mount('#app');
App.use(store);
App.use(router);
