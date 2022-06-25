import { TOrderDTO } from "../models";

export class OrderService {

  public async getAllOrders(): Promise<TOrderDTO[]> {
    const response = await fetch('http://localhost:3001/order/', { method: 'GET' });
    const responseJson = await response.json();
    return responseJson;
  }

  public async getOrdersLength(): Promise<number> {
    const orders = await this.getAllOrders();
    return orders.length;
  }

  public async getLastOrderID(): Promise<string> {
    const orders = await this.getAllOrders();
    return orders[orders.length - 1].id;
  }

  public createNewOrder(price: number, user_id: string): void {
    fetch('http://localhost:3001/order/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: price,
        user_id: user_id
      })
    })
  }
}