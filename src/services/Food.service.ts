import { TFoodDTO } from "../models";

export class FoodService {

  public async getFoodList(): Promise<TFoodDTO[]> {
    const foodList = await fetch('http://localhost:3001/food/', { method: 'GET' });
    const foodListJson = await foodList.json();

    return foodListJson;
  }
}