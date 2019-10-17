import Transaction from "models/Transaction";
import Token from "models/Token";

export interface IUserParams {
  address: string;
  rskAddress: string;
  balances: Array<Token>;
  history: Array<Transaction>;
}

export default class User {
  address: string;
  rskAddress: string;
  balances: Array<Token>;
  history: Array<Transaction>;

  constructor({ address, rskAddress, balances, history }: IUserParams) {
    this.address = address;
    this.rskAddress = rskAddress;
    this.balances = balances;
    this.history = history;
  }
}
