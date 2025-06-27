import { api } from "@/utils";

export const testService = {
  getProducts: async () => {
    try {
      const res = await api.get("/products");
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      throw error;
    }
  },
  updateProduct: (id: string, data: any) => api.put(`/products/${id}`, data)
}