<template>
    <div class="col-sm-6 col-md-4">
        <div class="card border-success mb-3">
            <div class="card-header bg-transparent border-success">{{ stock.name }}
                <small>(Price: {{ stock.price }})</small>
            </div>
            <div class="card-body text-success">
                <div class="d-flex">
                    <input type="number" v-model="quantity" class="form-control mr-2" placeholder="Quantity">
                    <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'stock',
        props: {
            stock: {
                type: Object,
            },
        },
        data() {
            return {
                quantity: 0,
            };
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            },
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            },
        },
    };
</script>
