import { TUserDTO } from "../models";

export class UserService {

  public async getAllUsers(): Promise<TUserDTO[]> {
    return fetch('http://localhost:3001/user/', { method: 'GET'})
      .then((response) => response.json())
      .then((responseJSON) => {
        return responseJSON
      })
  }

  public async getUsersLength(): Promise<number> {
    const users = await this.getAllUsers();
    return users.length;
  }

  public async getFirstUserID(): Promise<string> {
    const users = await this.getAllUsers();
    return users[0].id;
  }

  public createUser(): void {
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