import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      carts: [],
      addToCart: (product) =>
        set((state) => {
          const existingItems = state.carts.find((item) => item.id === product.id);

          if (existingItems) {
            return { carts: state.carts.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)) };
          }
          return { carts: [...state.carts, { ...product, quantity: 1 }] };
        }),
      removeCart: (id) => set((state) => ({ carts: state.carts.filter((item) => item.id !== id) })),

      clearCart: () => set({ carts: [] }),

      increaseQuantity: (id) => set((state) => ({ carts: state.carts.map((cart) => (cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart)) })),

      decreaseQuantity: (id) => set((state) => ({ carts: state.carts.map((cart) => (cart.id === id && cart.quantity > 0 ? { ...cart, quantity: cart.quantity - 1 } : cart)).filter((item) => item.quantity > 0) })),

      getTotal: () => {
        const { carts } = get();
        return carts.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    { name: "cart-storage" }
  )
);
export default useCartStore;
