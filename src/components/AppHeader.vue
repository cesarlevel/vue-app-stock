<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <div class="container">
            <router-link class="navbar-brand" exact to="/">StockTrader</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <router-link tag="li" class="nav-item" active-class="active" to="/portfolio"><a class="nav-link">Portafolio
                        <span class="badge badge-pill badge-light">{{ availableStocks }}</span></a>
                    </router-link>
                    <router-link tag="li" class="nav-item" active-class="active" to="/stocks"><a
                            class="nav-link">Stocks</a></router-link>
                </ul>
            </div>
            <div class="collapse navbar-collapse" style="flex: none;">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="endDay">End Day</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" @click="isOpen = !isOpen" href="#"
                           id="navbarDropdownMenuLink" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Save & Load
                        </a>
                        <div class="dropdown-menu" :class="{'show': isOpen}" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active">Funds: ${{ funds | currency }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'app-header',
        data() {
            return {
                isOpen: false,
            };
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            availableStocks() {
                return this.$store.getters.stockPortfolio.length;
            },
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData',
            }),
            endDay() {
                this.randomizeStocks();
            },
            async saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks,
                };
                try {
                    await this.$http.put('data.json', data);
                } catch (error) {
                    throw error;
                } finally {
                    this.isOpen = false;
                }
            },
            async loadData() {
                this.fetchData();
                this.isOpen = false;
            },
        },
    };
</script>
