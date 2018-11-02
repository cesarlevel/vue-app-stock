<template>
    <div class="col-sm-6 col-md-4">
        <div class="card border-info mb-3">
            <div class="card-header bg-transparent border-info">{{ stock.name }}
                <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </div>
            <div class="card-body text-success">
                <div class="d-flex">
                    <input type="number" v-model="quantity" class="form-control mr-2" placeholder="QTY">
                    <button class="btn btn-primary" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0">{{ insufficientQuantity ? 'No enough stocks' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'portfolio-stock',
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
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            },
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock',
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity,
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        },
    };
</script>
