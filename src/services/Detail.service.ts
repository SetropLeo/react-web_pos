export class DetailService {

  getAllOrderDetails() {
    return fetch('http://localhost:3001/detail/getAll')
      .then((response) => response.json())
      .then((responseJSON) => {
        return responseJSON;
      })
  }

  async getFoodsByOrderID(id: string) {
    const response = await fetch(`http://localhost:3001/detail/get/${id}`);
    const responseJson = await response.json();
    return responseJson;
  }

  createNewOrderDetail(quantity: number, food_id: string, order_id: number) {
    fetch('http://localhost:3001/detail/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        quantity: quantity,
        food_id: food_id,
        order_id: order_id,
      })
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
      })
  }
}