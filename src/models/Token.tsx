import IBalancesTypesParams from "models/BalancesTypes";

export enum ETokenName {
  RBTC = "RBTC",
  RIF = "RIF"
}

export interface ITokenParams {
  balance: IBalancesTypesParams;
  hold: number;
  tokenAddress: string;
  tokenName: ETokenName;
}

export default class Token {
  balance: IBalancesTypesParams;
  hold: number;
  tokenAddress: string;
  tokenName: ETokenName;

  constructor({ balance, hold, tokenAddress, tokenName }: ITokenParams) {
    this.balance = balance;
    this.hold = hold;
    this.tokenAddress = tokenAddress;
    this.tokenName = tokenName;
  }
}
