import { createRouter, createWebHistory } from 'vue-router';
import ArticleList from '../components/ArticleList.vue';
import ArticleDetail from '../components/ArticleDetail.vue';
import ArticleForm from '../components/ArticleForm.vue';

const routes = [
  { path: '/', component: ArticleList },
  { path: '/article/:id', component: ArticleDetail },
  { path: '/add', component: ArticleForm },
  { path: '/edit/:id', component: ArticleForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
