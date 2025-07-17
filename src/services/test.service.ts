import { api } from "@/utils/axios";
import { Product } from "@/types";

export const productService = {
  fetchProducts: async (): Promise<Product[]> => {
    try {
      const response = await api.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  updateProduct: async (id: string, data: Product): Promise<Product> => {
    try {
      const res = await api.put<Product>(`/products/${id}`, data);
      return res.data;
    } catch (error) {
      console.error(`Failed to update product ${id}:`, error);
      throw error;
    }
  }
};