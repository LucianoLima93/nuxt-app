<template>
  <button
    :type="type"
    :disabled="disabled"
    class="flex justify-center items-center px-2 py-1 w-full bg-purple-800 text-gray-50 rounded-md"
    @click="$emit('action')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { type PropType } from "vue";

defineProps({
  type: {
    type: String as PropType<"button" | "submit" | "reset" | undefined>,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["action"]);
</script>

<style scoped></style>
