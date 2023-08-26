<template>
  <div>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { getProductById } from "~/api/products";

const { id } = useRoute().params;
const { product } = await getProductById(id);
</script>

<style scoped></style>
