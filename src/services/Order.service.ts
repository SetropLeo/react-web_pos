export class OrderService {

  async getAllOrders() {
    const response = await fetch('http://localhost:3001/order/getAll');
    const responseJson = await response.json();
    return responseJson;
  }

  async getOrdersLength() {
    const orders = await this.getAllOrders();
    return orders.length;
  }

  async getLastOrderID() {
    const orders = await this.getAllOrders();
    return orders[orders.length - 1].id;
  }

  createNewOrder(price: number, user_id: string) {
    fetch('http://localhost:3001/order/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: price,
        user_id: user_id
      })
    })
  }
}