<template>
    <div class="row">
        <stock v-for="stock in stocks"></stock>
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
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 150 },
                { id: 2, name: 'Google', price: 250 },
                { id: 3, name: 'Apple', price: 200 },
                { id: 4, name: 'Twitter', price: 8 },
            ],
        };
    },
}
</script>
