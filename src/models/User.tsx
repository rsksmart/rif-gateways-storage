export interface IUserParams {
  address: string;
}

export default class User {
  address: string;

  constructor({ address }: IUserParams) {
    this.address = address;
  }
}
