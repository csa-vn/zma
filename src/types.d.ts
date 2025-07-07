export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: Category;
  details?: Detail[];
  sizes?: Size[];
  colors?: Color[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Detail {
  title: string;
  content: string;
}
export type Size = string;

export interface Color {
  name: string;
  hex: string;
}

export type SelectedOptions = {
  size?: Size;
  color?: Color["name"];
};

export interface CartItem {
  id: number;
  product: Product;
  options: SelectedOptions;
  quantity: number;
}

export type Cart = CartItem[];

// // Khai báo type cho state
// export type UserRole = 'admin' | 'staff';
// export type DiscountType = 'percentage' | 'fixed';
// export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   salt: string;
//   role: UserRole;
//   phone_number: string;
//   created_at: string;
//   updated_at: string;
// }

// export interface UserSession {
//   id: string;
//   user_id: string;
//   refresh_token: string;
//   refresh_exp_at: string;
//   access_exp_at: string;
//   created_at: string;
//   updated_at: string;
// }
// export interface Customer {
//   id: string;
//   zalo_id: string;
//   name: string;
//   phone: string;
// }

// export interface Address {
//   id: string;
//   customer_id: string;
//   full_name: string;
//   phone: string;
//   province: string;
// }
// export interface Product {
//   id: string;
//   category_id: string;
//   brand_id: string;
//   name: string;
//   price: number;
//   contents: string;
//   video_url: string;
//   created_at: string;
//   updated_at: string;
// }

// export interface ProductVariant {
//   id: string;
//   product_id: string;
//   image_id: string;
//   color: string;
//   size: string;
//   price: number;
//   sku: string;
//   quantity: number;
// }

// export interface ProductReview {
//   id: string;
//   customer_id: string;
//   product_id: string;
//   rating: number;
//   comment: string;
// }
// export interface Order {
//   id: string;
//   customer_id: string;
//   status: OrderStatus;
//   total: number;
//   discount_id: string;
// }

// export interface OrderItem {
//   id: string;
//   order_id: string;
//   variant_id: string;
//   quantity: number;
//   price: number;
//   sub_total: number;
// }

// export interface Discount {
//   id: string;
//   code: string;
//   type: DiscountType;
//   value: number;
//   condition: any;
//   start_date: string;
//   end_date: string;
//   created_at: string;
//   updated_at: string;
// }
// export interface Image {
//   id: string;
//   title: string;
//   file_name: string;
//   file_url: string;
// }

// export interface Category {
//   id: string;
//   name: string;
//   image_id: string;
// }
