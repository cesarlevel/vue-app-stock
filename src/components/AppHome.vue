<template>
    <div class="container">
        <h1>Trade or view your portfolio</h1>
        <p>You may Save & load your Data</p>
        <p>Click on 'End Day' to begin a new day</p>
        <hr>
        <h3>Your Funds: ${{ funds | currency }}</h3>
    </div>
</template>
<script>
    export default {
        name: 'home',
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
        },
    }
</script>
