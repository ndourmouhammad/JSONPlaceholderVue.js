<template>
    <div class="container">
      <h1>{{ isEditMode ? 'Modifier' : 'Ajouter' }} un article</h1>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="title">Titre</label>
          <input type="text" v-model="article.title" id="title" required class="input" />
        </div>
        <div class="form-group">
          <label for="body">Contenu</label>
          <textarea v-model="article.body" id="body" required class="textarea"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="button contrast">{{ isEditMode ? 'Modifier' : 'Ajouter' }}</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  
  import { reactive, onMounted } from 'vue';
  import articleService from '@/services/articleService';
  import { useRoute, useRouter } from 'vue-router';

  export default {
  setup() {
    const article = reactive({
      title: '',
      body: ''
    });

    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;

    // Définir isEditMode en fonction de la présence de l'id
    const isEditMode = !!id;

    onMounted(() => {
      if (isEditMode) {
        articleService.getArticle(id)
          .then(response => {
            article.title = response.data.title;
            article.body = response.data.body;
          })
          .catch(error => {
            console.error('Erreur lors de la sélection de l\'article:', error);
          });
      }
    });

    const submitForm = () => {
      if (isEditMode) {
        articleService.updateArticle(id, article)
          .then(() => {
            console.log('Article mis à jour');
            router.push('/');
          })
          .catch(error => {
            console.error('Erreur lors de la modification de l\'article:', error);
          });
      } else {
        articleService.createArticle(article)
          .then(() => {
            console.log('Article ajouté');
            router.push('/');
          })
          .catch(error => {
            console.error('Erreur lors de l\'ajout de l\'article:', error);
          });
      }
    };

    return {
      article,
      submitForm,
      isEditMode
    };
  }
};


  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .form {
    display: grid;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .input, .textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  
  .textarea {
    resize: vertical;
  }
  
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
  }
  
  .button.contrast {
    background-color: #007bff;
    color: white;
  }
  
  .button.contrast:hover {
    background-color: #0056b3;
  }
  </style>
  