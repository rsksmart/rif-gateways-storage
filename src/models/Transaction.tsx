export interface ITransactionParams {
  date: Date;
  amount: number;
  type: string;
}

export default class Transaction {
  date: Date;
  amount: number;
  type: string;

  constructor({ date, amount, type }: ITransactionParams) {
    this.date = date;
    this.amount = amount;
    this.type = type;
  }
}
