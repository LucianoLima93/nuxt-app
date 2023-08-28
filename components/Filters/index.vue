<template>
  <div class="px-4 col-span-1 w-full">
    <h2 class="text-xl font-semibold my-4">Filtros</h2>
    <form id="search" class="flex flex-col gap-8">
      <div class="flex flex-col w-fit">
        <label for="categories" class="text-purple-800 font-medium mb-2"
          >Categorias</label
        >
        <select
          id="categories"
          v-model="selected"
          name="categories"
          class="text-gray-900 uppercase font-semibold"
          @change="store.setSelectedCategory(selected)"
        >
          <option class="text-gray-600 uppercase font-semibold" value="">
            Todas
          </option>
          <option
            v-for="(category, i) in categories"
            :key="i"
            :value="category"
            class="text-gray-900 uppercase font-semibold"
          >
            {{ category }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
import { getAllCategories } from "~/api/products";
const store = useProductStore();

const { categories } = await getAllCategories();
const selected = ref("");
</script>

<style scoped></style>
