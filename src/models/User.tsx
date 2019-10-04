export interface IUserParams {
  address: string;
  rskAddress: string;
  balance: number;
}

export default class User {
  address: string;
  rskAddress: string;
  balance: number;

  constructor({ address, rskAddress, balance }: IUserParams) {
    this.address = address;
    this.rskAddress = rskAddress;
    this.balance = balance;
  };
}
