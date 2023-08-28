import { defineStore } from "pinia";
import { formatterPriceToBRL } from "~/utils/formatters";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [] as IProduct[],
  }),
  getters: {
    totalItems(): number {
      return this.items.length;
    },
    totalPrice(): string {
      return formatterPriceToBRL(
        this.items.reduce((total, product) => total + product.price, 0),
      );
    },
  },
  actions: {
    addProduct(product: IProduct | null) {
      const existingProduct = this.items.find(
        (item) => item.id === product?.id,
      );
      if (!existingProduct) {
        this.items.push(product as IProduct);
      }
    },
    productIsInCart(productId: undefined | number) {
      return this.items.some((item) => item.id === productId);
    },
    removeProduct(productId: undefined | number) {
      const existingProductIndex = this.items.findIndex(
        (item) => item.id === productId,
      );
      if (existingProductIndex !== -1) {
        const existingProduct = this.items[existingProductIndex];
        if (existingProduct) {
          this.items.splice(existingProductIndex, 1);
        }
      }
    },
    clearCart() {
      this.items = [];
    },
  },
});
