import React, { Component, createContext } from "react";

import User from "models/User";
import Transaction from "models/Transaction";
import BalancesTypes from "models/BalancesTypes";
import Token, { ETokenName } from "models/Token";

export interface IWeb3Provider {
  state: {
    readonly user: User;
    success: boolean;
    message: string;
  };
  actions: {
    lock: () => void;
    unlock: () => void;

    depositBalance: (
      deposit: number,
      tokenAddress: string,
      currency: ETokenName
    ) => void;
    withdrawBalance: (
      value: number,
      tokenAddress: string,
      currency: ETokenName
    ) => void;
    resetMessage: () => void;
  };
}

const { Provider, Consumer } = createContext<IWeb3Provider>({
  actions: {
    lock: () => {},
    unlock: () => {},
    depositBalance: () => {},
    withdrawBalance: () => {},
    resetMessage: () => {}
  },
  state: {
    user: {
      address: "",
      rskAddress: "",
      tokens: [],
      history: []
    },
    success: false,
    message: ""
  }
});

interface IWeb3ProviderProps {}
interface IWeb3ProviderState {
  user: User;
  success: boolean;
  message: string;
}

class Web3Provider extends Component<IWeb3ProviderProps, IWeb3ProviderState> {
  constructor(props: object) {
    super(props);

    this.state = {
      user: {
        address: "",
        rskAddress: "",
        tokens: [],
        history: []
      },
      success: false,
      message: ""
    };

    this.lock = this.lock.bind(this);
    this.unlock = this.unlock.bind(this);
    this.setAddress = this.setAddress.bind(this);
    this.setRskAddress = this.setRskAddress.bind(this);
    this.depositBalance = this.depositBalance.bind(this);
    this.withdrawBalance = this.withdrawBalance.bind(this);
    // this.setBalance = this.setBalance.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.resetMessage = this.resetMessage.bind(this);
    this.addTransactionItem = this.addTransactionItem.bind(this);
  }

  addTransactionItem(date, amount, type, currency) {
    const transaction = new Transaction({ date, amount, type, currency });
    const { user } = this.state;
    const { address, rskAddress, tokens, history } = user;
    const newHistory = history.concat(transaction);
    const newUser = new User({
      address,
      rskAddress,
      tokens,
      history: newHistory
    });

    this.setState({
      user: newUser
    });
  }

  depositBalance(deposit, tokenAddress, currency) {
    const { user } = this.state;
    const { address, rskAddress, tokens, history } = user;
    const newBalances = tokens.map(t =>
      t.tokenAddress === tokenAddress
        ? {
              ...t,
              balance: {
                  ...t.balance,
                  [t.balance[currency]]: t.balance[currency] + deposit
              }
          }
        : t
    );
    const newUser = new User({
      address,
      rskAddress,
      tokens: newBalances,
      history
    });

    this.setState({ user: newUser }, () => {
      return this.addTransactionItem(
        new Date().toDateString(),
        deposit,
        "Deposit",
        currency
      );
    });

    return this.setState({ success: true, message: "Transaction Success" });
  }

  withdrawBalance(value, tokenAddress, currency) {
    const { user } = this.state;
    const { address, rskAddress, tokens, history } = user;
    const newTokens = tokens.map(t =>
      t.tokenAddress === tokenAddress
        ? {
            ...t,
            balance: {
              ...t.balance,
              [t.balance[currency]]: t.balance[currency] - value
            }
          }
        : t
    );

    const newUser = new User({
      address,
      rskAddress,
      tokens: newTokens,
      history
    });
    if (tokens[0].balance[currency] >= value) {
      this.setState({ user: newUser }, () => {
        this.addTransactionItem(
          new Date().toDateString(),
          value,
          "Withdraw",
          currency
        );
        return this.setState({ success: true, message: "Transaction Success" });
      });
    } else {
      return this.setState({
        success: false,
        message: "You don’t have enough balance"
      });
    }
  }

  // setBalance(tokens) {
  //   const { user } = this.state;
  //   const { address, rskAddress, history } = user;
  //   const newUser = new User({ address, rskAddress, tokens, history });
  //   this.setState({ user: newUser }, () => {
  //     return tokens;
  //   });
  // }

  resetMessage() {
    this.setState({ success: false, message: "" });
  }

  setRskAddress(rskAddress) {
    const { user } = this.state;
    const { address, tokens, history } = user;
    const newUser = new User({ address, rskAddress, tokens, history });
    this.setState({ user: newUser }, () => {
      return rskAddress;
    });
  }

  setAddress(address) {
    const { user } = this.state;
    const { rskAddress, tokens, history } = user;
    const newUser = new User({ address, rskAddress, tokens, history });
    this.setState({ user: newUser }, () => {
      return address;
    });
  }

  getAddress() {
    if (this.state.user) {
      return this.state.user.address;
    }

    return "No Address";
  }

  lock() {
    this.setState(
      {
        user: new User({
          address: "",
          rskAddress: "",
          tokens: [],
          history: []
        })
      },
      () => {
        console.debug("Wallet locked");
      }
    );
  }

  unlock() {
    this.setState(
      {
        user: new User({
          address: "0xD856FA8E0b978da6d8D5C3FC3DfE177b39b501f7",
          rskAddress: "john.rsk",
          tokens: [
            new Token({
              balance: new BalancesTypes({
                [ETokenName.RIF]: 20,
                [ETokenName.RBTC]: 30
              }),
              hold: 0,
              tokenAddress: "0x2acc95758f8b5f583470ba265eb685a8f45fc9d5",
              tokenName: ETokenName.RIF
            })
          ],
          history: []
        })
      },
      () => {
        console.debug("Wallet unlocked");
      }
    );
  }

  render() {
    const { user, message, success } = this.state;
    const {
      lock,
      unlock,
      depositBalance,
      withdrawBalance,
      resetMessage
    } = this;

    return (
      <Provider
        value={{
          actions: {
            lock,
            unlock,
            withdrawBalance,
            depositBalance,
            resetMessage
          },
          state: {
            user,
            message,
            success
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default { Consumer, Provider: Web3Provider };
