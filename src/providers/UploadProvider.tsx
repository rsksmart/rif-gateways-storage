import React, { Component, createContext } from "react";

export enum EPRIVACY_TYPE {
  PRIVATE = "private",
  PUBLIC = "public"
}

export interface IUploadProvider {
  state: {
    privacy: EPRIVACY_TYPE;
    incentivisation: string;
  };
  actions: {
    setPrivacy: (any) => void;
    setIncentivisation: (any) => void;
  };
}

const { Provider, Consumer } = createContext<IUploadProvider>({
  state: {
    privacy: EPRIVACY_TYPE.PUBLIC,
    incentivisation: "usersPay"
  },

  actions: {
    setPrivacy: () => {},
    setIncentivisation: () => {}
  }
});

interface IUploadProviderProps {}
interface IUploadProviderState {
  server: "Swarm";
  privacy: EPRIVACY_TYPE.PUBLIC;
  incentivisation: "usersPay";
}

class UploadProvider extends Component<
  IUploadProviderProps,
  IUploadProviderState
> {
  constructor(props: object) {
    super(props);

    this.state = {
      server: "Swarm",
      privacy: EPRIVACY_TYPE.PUBLIC,
      incentivisation: "usersPay"
    };

    this.setPrivacy = this.setPrivacy.bind(this);
    this.setIncentivisation = this.setIncentivisation.bind(this);
  }

  setPrivacy(e) {
    this.setState({ privacy: e.target.value });
  }

  setIncentivisation(e) {
    this.setState({ incentivisation: e.target.value });
  }

  render() {
    const { privacy, incentivisation } = this.state;
    const { setPrivacy, setIncentivisation } = this;

    return (
      <Provider
        value={{
          state: {
            privacy,
            incentivisation
          },
          actions: {
            setPrivacy,
            setIncentivisation
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default { Consumer, Provider: UploadProvider };
