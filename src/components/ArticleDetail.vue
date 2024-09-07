<template>
    <div class="container">
      <h1>{{ article.title }}</h1>
      <p class="content">{{ article.body }}</p>
      <div class="actions">
        <router-link :to="'/edit/' + article.id" class="button">Modifier l'article</router-link>
        <button @click="deleteArticle" class="button danger">Supprimer l'article</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .content {
    margin-bottom: 1.5rem;
  }
  
  .actions {
    display: flex;
    gap: 1rem;
  }
  
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
  }
  
  .button:hover {
    opacity: 0.8;
  }
  
  .danger {
    background-color: #e53935;
    color: white;
  }
  
  .danger:hover {
    background-color: #c62828;
  }
  </style>
  
  
  <script>
  import {ref, onMounted} from 'vue';
  import {useRoute, useRouter} from 'vue-router';
  import articleService from '@/services/articleService';

  export default {
    setup() {
      const article = ref({});
      const route = useRoute();
      const router = useRouter();
      const id = route.params.id;

      onMounted(() => {
        articleService.getArticle(id)
          .then(response => {
            article.value = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la sélection de l\'article:', error);
          });
      });

      const deleteArticle = () => {
        articleService.deleteArticle(id)
          .then(() => {
            router.push('/');
          })
          .catch(error => {
            console.error('Erreur lors de la suppression de l\'article:', error);
          });
      };

      return {
        article,
        deleteArticle
      };
    }
  };
  </script>
  