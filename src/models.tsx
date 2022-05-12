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