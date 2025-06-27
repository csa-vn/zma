import { api } from "@/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  rating: number;
  numReviews: number;
}

export const testService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const res = await api.get<Product[]>("/products");
      return res.data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw new Error("Failed to fetch products");
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
}