<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader';  

  export default {
    name: 'app',
    components: {
      AppHeader,
    }
  }
</script>
