import { ETokenName } from "models/Token";

export interface ITransactionParams {
  date: Date;
  amount: number;
  type: string;
  currency: ETokenName;
}

export default class Transaction {
  date: Date;
  amount: number;
  type: string;
  currency: ETokenName;

  constructor({ date, amount, type, currency }: ITransactionParams) {
    this.date = date;
    this.amount = amount;
    this.type = type;
    this.currency = currency;
  }
}
