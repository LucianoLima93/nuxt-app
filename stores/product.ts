import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    selectedCategory: "",
  }),
  getters: {
    getSelectedCategory(): string {
      return this.selectedCategory;
    },
  },
  actions: {
    setSelectedCategory(category: string) {
      this.selectedCategory = category;
    },
  },
});
