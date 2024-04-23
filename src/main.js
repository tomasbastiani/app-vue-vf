import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ListadoComponent from './components/ListadoComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import 'bootstrap/dist/css/bootstrap.css';

const routes = [
  { path: '/', component: LoginComponent },
  { path: '/movies', component: ListadoComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
