import React, { Component, createContext } from "react";

import User from "models/User";

export interface IWeb3Provider {
  state: {
    readonly user?: User;
  };
  actions: {
    lock: () => void;
    unlock: () => void;
  };
}

const { Provider, Consumer } = createContext<IWeb3Provider>({
  actions: {
    lock: () => {},
    unlock: () => {}
  },
  state: {
    user: undefined
  }
});

interface IWeb3ProviderProps {}
interface IWeb3ProviderState {
  user?: User;
}

class Web3Provider extends Component<IWeb3ProviderProps, IWeb3ProviderState> {
  constructor(props: object) {
    super(props);

    this.state = {
      user: undefined
    };

    this.lock = this.lock.bind(this);
    this.unlock = this.unlock.bind(this);
  }

  lock() {
    this.setState({ user: undefined }, () => {
      console.debug("Wallet locked");
    });
  }

  unlock() {
    this.setState({ user: new User({ address: "0x0" }) }, () => {
      console.debug("Wallet unlocked");
    });
  }

  render() {
    const { user } = this.state;
    const { lock, unlock } = this;

    return (
      <Provider
        value={{
          actions: { lock, unlock },
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
