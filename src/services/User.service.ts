export class UserService {

  getAllUsers() {
    return fetch('http://localhost:3001/user/getAll')
      .then((response) => response.json())
      .then((responseJSON) => {
        return responseJSON
      })
  }

  async getUsersLength() {
    const users = await this.getAllUsers();
    return users.length;
  }

  async getFirstUserID() {
    const users = await this.getAllUsers();
    return users[0];
  }

  createUser() {
    fetch('http://localhost:3001/user/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: "Leo",
        last_name: "user",
        email: "leouser@hotmail.com"
      })
    })
  }
}