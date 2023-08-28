<template>
  <div>
    <section role="list" class="grid grid-cols-12 gap-y-4 relative">
      <Filters />
      <Products :products="filteredProducts as IProduct[]" />
      <div class="col-span-2">
        <Cart />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getAllProducts } from "~/api/products";
import { useProductStore } from "~/stores/product";
const store = useProductStore();

const { products } = await getAllProducts();
const selectedCategory = computed(() => store.selectedCategory);

const filteredProducts = computed(() => {
  if (selectedCategory.value === "") return products;
  return products?.filter(
    (product) => product.category === selectedCategory.value,
  );
});
</script>

<style scoped></style>
