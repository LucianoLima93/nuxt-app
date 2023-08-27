<template>
  <div>
    <h1>Produtos</h1>
    <section role="list" class="flex flex-wrap gap-4 justify-around items-end">
      <div
        v-for="product in products"
        :key="product.id"
        class="w-80 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-md"
      >
        <nuxt-link :to="`/products/${product.id}`">
          <NuxtImg
            class="w-80 h-80 object-contain p-2"
            :src="product.image"
            :alt="product.title"
          />
          <div class="flex flex-col p-3">
            <h2 class="font-semibold mb-2">{{ product.title }}</h2>
            <p class="font-normal text-sm text-gray-600 line-clamp-2">
              {{ product.description }}
            </p>
            <div class="w-full flex justify-start py-2 gap-1">
              <span>Preço: {{ product.price }}</span>
              <span>Nota: {{ product.rating.rate }}</span>
            </div>
          </div>
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
