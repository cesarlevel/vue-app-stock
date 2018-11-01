<template>
    <ul class="nav nav-pills">
        <router-link tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
        <router-link tag="li" active-class="active" to="/stocks"><a>Stocks</a></router-link>
        <router-link tag="li" active-class="active" to="/portafolio"><a>Portafolio</a></router-link>
    </ul>
</template>

<script>
export default {
  name: 'app-header',
}
</script>
