export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  on_sale: boolean;
  created_at: string;
  updated_at: string;
  category_name: string;
}

export interface ProductsResponse {
  message: string;
  data: Product[];
}
