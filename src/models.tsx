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

export type TOrderDTO = {
  created_at: Date;
  deleted_at: Date | null;
  id: string;
  price: string;
  updated_at: string;
  user_id: string;
}

export type TUserDTO = {
  created_at: Date;
  deleted_at: Date | null;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  updated_at: Date;
}

export type TFoodDTO = {
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

export type TOrderItemDTO = {
  id: string;
  created_at: string;
  deleted_at: Date | null;
  food: TFoodDTO;
  food_id: string;
  order: TOrderDTO;
  order_id: string;
  quantity: number;
  updated_at: Date;
}