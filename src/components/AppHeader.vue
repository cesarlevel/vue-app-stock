<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <div class="container">
            <router-link class="navbar-brand" exact to="/">StockTraider</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <router-link tag="li" class="nav-item" active-class="active" to="/portafolio"><a class="nav-link">Portafolio</a></router-link>
                    <router-link tag="li" class="nav-item" active-class="active" to="/stocks"><a class="nav-link">Stocks</a></router-link>
                </ul>
            </div>
            <div class="collapse navbar-collapse" style="flex: none;">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link">End Day</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Save Data</a>
                            <a class="dropdown-item" href="#">Load Data</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Funds: $10.000</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'app-header',
}
</script>
