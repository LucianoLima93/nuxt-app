<template>
  <header
    class="w-full flex justify-between items-center px-8 py-4 bg-gray-800 sticky top-0 z-10"
  >
    <nav>
      <ul class="flex text-lg gap-4">
        <li class="font-semibold text-xl">
          <NuxtLink
            to="/"
            class="text-gray-50"
            active-class="active-class-header"
            >Início</NuxtLink
          >
        </li>
        <li class="font-semibold text-xl">
          <NuxtLink
            to="/products"
            class="text-gray-50"
            active-class="active-class-header"
            >Produtos</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <div class="text-gray-50">
      <div class="relative">
        <Icon name="ic:outline-shopping-cart" class="text-gray-50 text-4xl" />
        <span class="absolute text-lg">{{ store.totalItems }}</span>
      </div>
      <span>Carrinho</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const store = useCartStore();
</script>

<style scoped>
.active-class-header {
  @apply text-purple-500;
}
</style>
