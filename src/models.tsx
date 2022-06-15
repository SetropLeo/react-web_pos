export type Food = {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string[];
  quantity: number,
};

export type Order = {
  id: number;
  list: Food[];
  totalPrice: number;
}

export type Food2 = {
  category: Category;
  category_id: string;
  created_at: Date
  deleted_at: null
  description: string;
  id: string;
  image: string;
  name: string;
  price: number
  updated_at: string;
}

export type Category = {
  id: string, 
  created_at: Date, 
  updated_at: Date, 
  deleted_at: null, 
  name: string
}

export type OrderDetail = {
  id: string;
  quantity: number;
  food_id: string;
  order_id: number;
}