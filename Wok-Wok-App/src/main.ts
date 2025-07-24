import { createApp } from 'vue'
import {createStore} from './store'
import router from "./router"
import App from './App.vue'

const store = createStore();

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

