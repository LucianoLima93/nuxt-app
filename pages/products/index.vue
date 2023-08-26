<template>
  <div>
    <h1>Produtos</h1>
    <section
      role="list"
      class="flex flex-wrap gap-5 justify-around items-center"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="w-80 cursor-pointer"
      >
        <nuxt-link :to="`/products/${product.id}`">
          <h2>{{ product.title }}</h2>
          <NuxtImg class="w-80" :src="product.image" :alt="product.title" />
          <p>{{ product.description }}</p>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getAllProducts } from "~/api/products";
const { products } = await getAllProducts();
</script>

<style scoped></style>
