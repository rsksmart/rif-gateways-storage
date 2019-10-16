export interface ITokenParams {
    balance: number;
    hold: number;
    tokenAddress: string;
    // tokenName: ETokenName;
}

export default class Token {
    balance: number;
    hold: number;
    tokenAddress: string;
    // tokenName: ETokenName;

    constructor({ balance, hold, tokenAddress }: ITokenParams) {
        this.balance = balance;
        this.hold = hold;
        this.tokenAddress = tokenAddress;
        // this.tokenName = tokenName;
    }
}