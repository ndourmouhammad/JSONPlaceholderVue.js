<template>
    <div class="container">
      <h1>Liste des articles</h1>
      <ul class="list">
        <li v-for="article in articles" :key="article.id" class="list-item">
          <router-link :to="'/article/' + article.id" class="link">{{ article.title }}</router-link>
        </li>
      </ul>
      <router-link to="/add" class="contrast">Ajouter un article</router-link>
    </div>
  </template>

<script>
// import articleService from '@/services/articleService';

// export default {
//   data() {
//     return {
//       articles: []
//     };
//   },
//   created() {
//     this.getArticles();
//   },
//   methods: {
//     getArticles() {
//       articleService.getArticles()
//         .then(response => {
//           this.articles = response.data;
//         })
//         .catch(error => {
//           console.error('Erreur lors de la sélection des articles:', error);
//         });
//     }
//   } 
// };

// CompositionAPI
import { ref, onMounted } from 'vue';
import articleService from '@/services/articleService';

export default {
  setup() {
    const articles = ref([]);

    onMounted(() => {
      articleService.getArticles()
        .then(response => {
          articles.value = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la sélection des articles:', error);
        });
    });

    return {
      articles
    };
  }
};

</script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .list {
    list-style: none;
    padding: 0;
  }
  
  .list-item {
    margin-bottom: 1rem;
  }
  
  .link {
    text-decoration: none;
    font-weight: bold;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  
  
  
  