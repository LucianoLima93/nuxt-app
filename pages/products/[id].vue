<template>
  <div>
    <h1 class="text-teal-500">Produto {{ id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const { id } = useRoute().params;

    return {
      id
    }
  }
})
</script>

<style scoped>

</style>