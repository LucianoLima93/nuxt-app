<template>
  <div class="h-screen w-full flex flex-col gap-8 justify-center items-center">
    <h1 class="text-3xl text-gray-950 font-bold">
      Bem vindo a minha loja virtual
    </h1>
    <p class="text-lg text-gray-600">
      Aqui você encontra produtos de qualidade com o menor preço do mercado
    </p>
    <NuxtLink href="/products">
      <a class="text-2xl text-purple-800 font-semibold">Ver produtos</a>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
