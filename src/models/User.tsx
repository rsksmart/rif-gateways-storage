import Transaction from "models/Transaction";
import Token from "models/Token";

export interface IUserParams {
  address: string;
  rskAddress: string;
  tokens: Array<Token>;
  history: Array<Transaction>;
}

export default class User {
  address: string;
  rskAddress: string;
  tokens: Array<Token>;
  history: Array<Transaction>;

  constructor({ address, rskAddress, tokens, history }: IUserParams) {
    this.address = address;
    this.rskAddress = rskAddress;
    this.tokens = tokens;
    this.history = history;
  }
}
