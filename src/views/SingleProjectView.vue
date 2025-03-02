<template>
    <div>
        <h1>Project {{ route.params?.id }}</h1>
    </div>
</template>

<script lang="ts">
 import { useRoute } from 'vue-router';
    export default {
       setup() {
        const route = useRoute();
       return {
        route
       }
       }
    }
</script>

<style lang="scss" scoped>

</style>