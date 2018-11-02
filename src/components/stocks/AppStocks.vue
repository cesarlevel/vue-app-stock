<template>
    <div class="row">
        <stock v-for="stock in stocks" :stock="stock"></stock>
    </div>
</template>
<script>
    import Stock from './Stock';

    export default {
        name: 'stocks',
        components: {
            Stock,
        },
        data() {
            return {};
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            },
        },
    };
</script>
