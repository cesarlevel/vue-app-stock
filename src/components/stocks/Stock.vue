<template>
    <div class="col-sm-6 col-md-4">
        <div class="card border-success mb-3">
            <div class="card-header bg-transparent border-success">Name <small>(Price: PRICE)</small></div>
            <div class="card-body text-success">
                <div class="d-flex">
                    <input type="number" class="form-control mr-2" placeholder="QTY">
                    <button class="btn btn-success">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'stock',
    }
</script>
