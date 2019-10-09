import Transaction from "models/Transaction";

export interface IUserParams {
  address: string;
  rskAddress: string;
  balance: number;
  history: Array<Transaction>;
}

export default class User {
  address: string;
  rskAddress: string;
  balance: number;
  history: Array<Transaction>;

  constructor({ address, rskAddress, balance, history }: IUserParams) {
    this.address = address;
    this.rskAddress = rskAddress;
    this.balance = balance;
    this.history = history;
  }
}
