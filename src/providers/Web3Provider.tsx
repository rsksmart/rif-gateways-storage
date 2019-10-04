import React, { Component, createContext } from "react";

import User from "models/User";

export interface IWeb3Provider {
  state: {
    readonly user: User;
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
    setBalance: () => {}
  },
  state: {
    user: {
      address: "",
      rskAddress: "",
      balance: 0
    }
  }
});

interface IWeb3ProviderProps {}
interface IWeb3ProviderState {
  user: User;
}

class Web3Provider extends Component<IWeb3ProviderProps, IWeb3ProviderState> {
  constructor(props: object) {
    super(props);

    this.state = {
      user: {
        address: "",
        rskAddress: "",
        balance: 0
      }
    };

    this.lock = this.lock.bind(this);
    this.unlock = this.unlock.bind(this);
    this.setAddress = this.setAddress.bind(this);
    this.setRskAddress = this.setRskAddress.bind(this);
    this.depositBalance = this.depositBalance.bind(this);
    this.withdrawBalance = this.withdrawBalance.bind(this);
    this.setBalance = this.setBalance.bind(this);
    this.getAddress = this.getAddress.bind(this);
  }

  depositBalance(deposit) {
    const { user } = this.state;
    const { address, rskAddress, balance } = user;
    const newUser = new User({
      address,
      rskAddress,
      balance: balance + deposit
    });
    this.setState({ user: newUser }, () => {
      return balance;
    });
  }

  withdrawBalance(value) {
    const { user } = this.state;
    const { address, rskAddress, balance } = user;
    const newUser = new User({ address, rskAddress, balance: balance - value });
    if (balance >= value) {
      this.setState({ user: newUser }, () => {
        return balance;
      });
    }else {

    }
  }

  setBalance(balance) {
    const { user } = this.state;
    const { address, rskAddress } = user;
    const newUser = new User({ address, rskAddress, balance });
    this.setState({ user: newUser }, () => {
      return balance;
    });
  }

  setRskAddress(rskAddress) {
    const { user } = this.state;
    const { address, balance } = user;
    const newUser = new User({ address, rskAddress, balance });
    this.setState({ user: newUser }, () => {
      return rskAddress;
    });
  }

  setAddress(address) {
    const { user } = this.state;
    const { rskAddress, balance } = user;
    const newUser = new User({ address, rskAddress, balance });
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
      { user: new User({ address: "", rskAddress: "", balance: 0 }) },
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
          balance: 20
        })
      },
      () => {
        console.debug("Wallet unlocked");
      }
    );
  }

  render() {
    const { user } = this.state;
    const {
      lock,
      unlock,
      setAddress,
      getAddress,
      setRskAddress,
      setBalance,
      depositBalance,
      withdrawBalance
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
            depositBalance
          },
          state: {
            user
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default { Consumer, Provider: Web3Provider };
