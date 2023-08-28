<template>
  <div class="grid grid-cols-12 gap-6 w-full max-w-7xl mx-auto p-5">
    <div class="col-span-3">
      <NuxtImg
        class="w-80 h-80 object-contain p-2"
        :src="product?.image"
        :alt="product?.title"
      />
    </div>
    <div class="col-span-5">
      <span class="uppercase text-xs">{{ product?.category }}</span>
      <h1 class="text-2xl font-medium mb-4">{{ product?.title }}</h1>
      <p class="text-lg mb-4">{{ product?.description }}</p>
      <span class="text-2xl block mb-4 font-semibold">{{
        formatterPriceToBRL(product?.price || 0)
      }}</span>
      <Rating class="mb-4" :rating="product?.rating" />
      <Button
        class="mb-4"
        @action="
          {
            isProductInCart
              ? store.removeProduct(product?.id)
              : store.addProduct(product);
          }
        "
      >
        <Icon
          :name="
            isProductInCart
              ? 'ic:outline-remove-shopping-cart'
              : 'ic:round-add-shopping-cart'
          "
          class="mr-2 text-lg"
        />
        <span class="block text-sm">{{
          store.productIsInCart(product?.id)
            ? "Remover do carrinho"
            : "Adicionar ao carrinho"
        }}</span>
      </Button>
    </div>
    <div class="col-span-4">
      <Cart />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/shared/Button/index.vue";
import { getProductById } from "~/api/products";
import { useCartStore } from "~/stores/cart";
import { formatterPriceToBRL } from "~/utils/formatters";

const store = useCartStore();
const { id } = useRoute().params;
const { product } = await getProductById(id);
const isProductInCart = computed(() => store.productIsInCart(product?.id));
</script>

<style scoped></style>
