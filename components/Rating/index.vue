<template>
  <div v-if="rating.count > 0" class="flex gap-1 items-baseline">
    <span class="text-sm">{{ rating.rate }}</span>
    <span v-for="(star, idx) in arrayStars" :key="idx">
      <Icon :name="star" class="text-yellow-500" />
    </span>
    <span class="text-sm text-purple-800"
      >{{ rating.count }}
      {{
        rating.count > 1 ? " avaliações de clientes" : "avaliação de cliente"
      }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { type PropType } from "vue";

const { rating } = defineProps({
  rating: {
    type: Object as PropType<IRating>,
    required: true,
    default: () => ({
      rate: 0,
      count: 0,
    }),
  },
});

const verifyQuantityOfStarsToFillByRateValue = (
  rate: number,
): Array<string> => {
  const halfStar: boolean = rate < Math.round(rate);
  return new Array(5).fill("star").map((_, index) => {
    if (index < Math.floor(rate)) {
      return "ic:baseline-star-rate";
    } else if (index === Math.floor(rate) && halfStar) {
      return "ic:baseline-star-half";
    } else {
      return "ic:baseline-star-border";
    }
  });
};

const arrayStars = reactive(
  verifyQuantityOfStarsToFillByRateValue(rating.rate),
);
</script>

<style scoped></style>
