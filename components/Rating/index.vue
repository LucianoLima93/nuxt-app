<template>
  <div class="flex gap-2 items-center">
    <span v-for="(star, idx) in arrayStars" :key="idx">
      <Icon
        :name="
          star === 'star'
            ? 'ic:baseline-star-rate'
            : star === 'star_half'
            ? 'ic:baseline-star-half'
            : 'ic:baseline-star-border'
        "
        class="text-yellow-500"
      />
    </span>
    <span class="text-sm text-purple-500">{{ count }} {{ count > 1 ? ' avaliações de clientes' : 'avaliação de cliente' }}</span>
  </div>
</template>

<script setup lang="ts">
const { rate, count } = defineProps({
  rate: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const verifyQuantityOfStarsToFillByRateValue = (
  rate: number,
): Array<string> => {
  const halfStar: boolean = rate < Math.round(rate);
  return new Array(5).fill('star').map((_, index) => {
    if (index < Math.floor(rate)) {
      return "star";
    } else if (index === Math.floor(rate) && halfStar) {
      return "star_half";
    } else {
      return "star_border";
    }
  });
};

const arrayStars = reactive(verifyQuantityOfStarsToFillByRateValue(rate));
</script>

<style scoped></style>
