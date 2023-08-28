<template>
  <div class="col-span-9 flex flex-wrap gap-4 justify-around items-end">
    <div
      v-for="(product, i) in products"
      :key="i"
      class="w-80 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-md"
    >
      <nuxt-link :to="`/products/${product.id}`">
        <NuxtImg
          class="w-80 h-80 object-contain p-2"
          :src="product.image"
          :alt="product.title"
        />
        <div class="flex flex-col p-3">
          <span class="text-xs uppercase py-1">{{ product.category }}</span>
          <h2 class="font-semibold mb-2 line-clamp-1">
            {{ product.title }}
          </h2>
          <p class="font-normal text-sm text-gray-600 line-clamp-2">
            {{ product.description }}
          </p>
          <div class="w-full flex flex-col justify-start py-2 gap-1">
            <span class="text-lg font-bold"
              >R${{
                product.price.toLocaleString("pt-br", {
                  style: "decimal",
                  minimumFractionDigits: 2,
                })
              }}</span
            >
            <Rating :rating="product.rating" />
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  products: {
    type: Array as PropType<IProduct[]>,
    required: true,
  },
});
</script>

<style scoped></style>
