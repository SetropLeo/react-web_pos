import { TOrderItemDTO } from "../models";

export class OrderItemsService {

  public async getAllOrderItems(): Promise<TOrderItemDTO[]> {
    const orderList = await fetch('http://localhost:3001/orderItem/', { method: 'GET' })
    const responseJson = await orderList.json();

    return responseJson
  }

  public async getFoodsByOrderID(id: string): Promise<TOrderItemDTO[]> {
    const response = await fetch(`http://localhost:3001/orderItem/${id}`, { method: 'GET' });
    const responseJson = await response.json();

    return responseJson;
  }

  public createNewOrderItem(quantity: number, food_id: string, order_id: string): void {
    fetch('http://localhost:3001/orderItem/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: quantity, food_id: food_id, order_id: order_id })
    })
  }
}