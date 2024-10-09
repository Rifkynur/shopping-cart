import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  products: [],
  product: null,
  error: null,
  loading: false,

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed Fetch Products", loading: false });
    }
  },
  fetchProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      set({ product: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed Fetch Product", loading: false });
    }
  },
}));

export default useProductStore;
