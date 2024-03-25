export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  on_sale: boolean;
  created_at: string;
  updated_at: string;
  category_name: string;
}

export interface ProductsRequest {
  message: string;
  date: Product[];
}
