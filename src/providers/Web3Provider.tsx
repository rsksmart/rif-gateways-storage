import React, { Component, createContext } from "react";

import User from "models/User";
import Transaction from "../models/Transaction";

export interface IWeb3Provider {
  state: {
    readonly user: User;
    success: boolean;
    message: string;
  };
  actions: {
    lock: () => void;
    unlock: () => void;
    setAddress: (address: string) => void;
    setRskAddress: (rskAddress: string) => void;
    getAddress: () => void;
    depositBalance: (deposit: number) => void;
    withdrawBalance: (value: number) => void;
    setBalance: (balance: number) => void;
    resetMessage: () => void;
  };
}

const { Provider, Consumer } = createContext<IWeb3Provider>({
  actions: {
    lock: () => {},
    unlock: () => {},
    setAddress: () => {},
    setRskAddress: () => {},
    getAddress: () => {},
    depositBalance: () => {},
    withdrawBalance: () => {},
    setBalance: () => {},
    resetMessage: () => {}
  },
  state: {
    user: {
      address: "",
      rskAddress: "",
      balance: 0,
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
        balance: 0,
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
    this.setBalance = this.setBalance.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.resetMessage = this.resetMessage.bind(this);
    this.addTransactionItem = this.addTransactionItem.bind(this);
  }

  addTransactionItem(date, amount, type) {
    const transaction = new Transaction({ date, amount, type });
    const { user } = this.state;
    const { address, rskAddress, balance, history } = user;
    const newHistory = history.concat(transaction);
    const newUser = new User({
      address,
      rskAddress,
      balance,
      history: newHistory
    });

    this.setState({
      user: newUser
    });
  }

  depositBalance(deposit) {
    const { user } = this.state;
    const { address, rskAddress, balance, history } = user;
    const newUser = new User({
      address,
      rskAddress,
      balance: balance + deposit,
      history
    });
    this.setState({ user: newUser }, () => {
      return this.addTransactionItem(new Date().toDateString(), deposit, "Deposit");
    });

    return this.setState({ success: true, message: "Transaction Success" });
  }

  withdrawBalance(value) {
    const { user } = this.state;
    const { address, rskAddress, balance, history } = user;
    const newUser = new User({
      address,
      rskAddress,
      balance: balance - value,
      history
    });
    if (balance >= value) {
      this.setState({ user: newUser }, () => {
        this.addTransactionItem(new Date().toDateString(), value, "Withdraw");
        return this.setState({ success: true, message: "Transaction Success" });
      });
    } else {
      return this.setState({ success: false, message: "Transaction Fail" });
    }
  }

  setBalance(balance) {
    const { user } = this.state;
    const { address, rskAddress, history } = user;
    const newUser = new User({ address, rskAddress, balance, history });
    this.setState({ user: newUser }, () => {
      return balance;
    });
  }

  resetMessage() {
    this.setState({ success: false, message: "" });
  }

  setRskAddress(rskAddress) {
    const { user } = this.state;
    const { address, balance, history } = user;
    const newUser = new User({ address, rskAddress, balance, history });
    this.setState({ user: newUser }, () => {
      return rskAddress;
    });
  }

  setAddress(address) {
    const { user } = this.state;
    const { rskAddress, balance, history } = user;
    const newUser = new User({ address, rskAddress, balance, history });
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
        user: new User({ address: "", rskAddress: "", balance: 0, history: [] })
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
          balance: 20,
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
      setAddress,
      getAddress,
      setRskAddress,
      setBalance,
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
            setAddress,
            getAddress,
            withdrawBalance,
            setRskAddress,
            setBalance,
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
