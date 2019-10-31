import { ETokenName } from "models/Token";

export interface IBalancesTypesParams {
  [ETokenName.RIF]: number;
  [ETokenName.RBTC]: number;
}

export default class BalancesTypes {
    [ETokenName.RIF]: number;
    [ETokenName.RBTC]: number;

  constructor(values: IBalancesTypesParams) {
    this[ETokenName.RIF] = values[ETokenName.RIF];
    this[ETokenName.RBTC] = values[ETokenName.RBTC];
  }
}
