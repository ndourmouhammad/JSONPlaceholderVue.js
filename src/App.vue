<template>
  <div id="app" class="container">
    <nav class="nav">
      <router-link to="/" class="link">Liste des articles</router-link>
      <span class="separator">|</span>
      <router-link to="/add" class="button contrast">Ajouter un article</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.link {
  text-decoration: none;
  font-weight: bold;
  color: #007bff;
}

.link:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 1rem;
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


<script>
export default {
  name: 'App',
};
</script>


