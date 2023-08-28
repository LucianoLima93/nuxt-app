<template>
  <aside v-if="store.totalItems > 0" class="col-span-3 py-4 mx-2">
    <h2 class="text-xl font-semibold mb-8">Itens no carrinho</h2>
    <div
      v-for="item in items"
      :key="item.id"
      class="flex justify-between items-center px-3 py-1 gap-1 mb-2 border-solid border border-purple-800 rounded"
    >
      <NuxtLink :to="`/products/${item.id}`" class="flex w-full items-center">
        <div class="w-1/4">
          <NuxtImg
            class="w-20 h-20 object-contain p-2"
            :src="item.image"
            :alt="item.title"
          />
        </div>
        <span class="line-clamp-1 w-1/2 hover:text-purple-800">{{
          item.title
        }}</span>
        <span class="text-base font-semibold whitespace-nowrap w-1/4">{{
          formatterPriceToBRL(item.price)
        }}</span>
      </NuxtLink>
      <Icon
        :name="`ic:sharp-close`"
        class="cursor-pointer text-purple-800 text-lg mx-1"
        @click="store.removeProduct(item.id)"
      />
    </div>
    <span class="text-lg block my-4"
      >Subtotal de ({{ store.totalItems }}
      {{ store.totalItems > 1 ? "itens" : "item" }})
      <strong class="font-semibold">{{ store.totalPrice }}</strong></span
    >
    <Button type="button" @action="store.clearCart"> Limpar carrinho </Button>
  </aside>
  <div v-else>Nenhum item encontrado no carrinho</div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import Button from "~/components/shared/Button/index.vue";

const store = useCartStore();
const items = computed(() => store.items);
</script>

<style scoped></style>
