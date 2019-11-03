import Token from "models/Token";
import Transaction from "models/Transaction";

export interface IUserParams {
  address: string;
  rskAddress: string;
  tokens: Token[];
  history: Transaction[];
}

export default class User {
  public address: string;
  public rskAddress: string;
  public tokens: Token[];
  public history: Transaction[];

  constructor({ address, rskAddress, tokens, history }: IUserParams) {
    this.address = address;
    this.rskAddress = rskAddress;
    this.tokens = tokens;
    this.history = history;
  }
}
