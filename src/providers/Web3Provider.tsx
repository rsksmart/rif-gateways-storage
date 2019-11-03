import React, { Component, createContext } from "react";

import Token, { ETokenName } from "models/Token";
import Transaction from "models/Transaction";
import User from "models/User";

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
    depositBalance: () => {},
    lock: () => {},
    resetMessage: () => {},
    unlock: () => {},
    withdrawBalance: () => {}
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

  public render() {
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
            depositBalance,
            lock,
            resetMessage,
            unlock,
            withdrawBalance
          },
          state: {
            message,
            success,
            user
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  private addTransactionItem(date, amount, type, currency) {
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

  private depositBalance(deposit, tokenAddress, currency) {
    const { user } = this.state;
    const { address, rskAddress, tokens, history } = user;
    const newBalances = tokens.map(t =>
      t.tokenAddress === tokenAddress
        ? new Token({
            ...t,
            balance: t.balance + deposit
          })
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

  private withdrawBalance(value, tokenAddress, currency) {
    const { user } = this.state;
    const { address, rskAddress, tokens, history } = user;
    const newTokens = tokens.map(t =>
      t.tokenAddress === tokenAddress
        ? new Token({
            ...t,
            balance: t.balance - value
          })
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
        message: "You don’t have enough balance",
        success: false
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

  private resetMessage() {
    this.setState({ success: false, message: "" });
  }

  private setRskAddress(rskAddress) {
    const { user } = this.state;
    const { address, tokens, history } = user;
    const newUser = new User({ address, rskAddress, tokens, history });
    this.setState({ user: newUser }, () => {
      return rskAddress;
    });
  }

  private setAddress(address) {
    const { user } = this.state;
    const { rskAddress, tokens, history } = user;
    const newUser = new User({ address, rskAddress, tokens, history });
    this.setState({ user: newUser }, () => {
      return address;
    });
  }

  private getAddress() {
    if (this.state.user) {
      return this.state.user.address;
    }

    return "No Address";
  }

  private lock() {
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

  private unlock() {
    this.setState(
      {
        user: new User({
          address: "0xD856FA8E0b978da6d8D5C3FC3DfE177b39b501f7",
          rskAddress: "john.rsk",
          tokens: [
            new Token({
              balance: 0,
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
}

export default { Consumer, Provider: Web3Provider };
