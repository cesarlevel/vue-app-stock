<template>
    <div>
        <template v-if="!stocks.length">
            <div class="alert alert-primary" role="alert">
                No stocks available
            </div>
        </template>
        <div class="row" v-else>
            <portfolio-stocks v-for="stock in stocks" :stock="stock"></portfolio-stocks>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import PortfolioStocks from './PortfolioStock';

    export default {
        name: 'portfolio',
        components: {
            PortfolioStocks,
        },
        data() {
            return {};
        },
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio',
            }),
        },
    };
</script>
