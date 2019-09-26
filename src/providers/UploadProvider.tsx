import React, {Component, createContext} from "react";

export interface IUploadProvider {
    state: {
        server: string;
        privacy: string;
        incentivisation: string;
    };
    actions: {
        setServer: (any) => void,
        setPrivacy: (any) => void,
        setIncentivisation: (any) => void
    };
}

const { Provider, Consumer } = createContext <IUploadProvider>({
    state: {
        server: 'Swarm',
        privacy: 'public',
        incentivisation: 'usersPay',
    },

    actions: {
        setServer: () => {},
        setPrivacy: () => {},
        setIncentivisation: () => {}
    }
});

interface IUploadProviderProps {}
interface IUploadProviderState {
    server: 'Swarm',
    privacy: 'public',
    incentivisation: 'usersPay',
}

class UploadProvider extends Component<IUploadProviderProps, IUploadProviderState> {
    constructor(props: object) {
        super(props);

        this.state = {
            server: 'Swarm',
            privacy: 'public',
            incentivisation: 'usersPay',
        };

        this.setServer = this.setServer.bind(this);
        this.setPrivacy = this.setPrivacy.bind(this);
        this.setIncentivisation = this.setIncentivisation.bind(this);
    }

    setServer(e){
        this.setState({server: e.target.value})
    };

    setPrivacy(e){
        this.setState({privacy: e.target.value})
    };

    setIncentivisation(e) {
        this.setState({incentivisation: e.target.value})
    };

    render (){
        const {server, privacy, incentivisation} = this.state;
        const { setServer, setPrivacy, setIncentivisation} = this;

        return (
            <Provider value={{
                state:{
                    server,
                    privacy,
                    incentivisation
                },
                actions:{
                    setServer,
                    setPrivacy,
                    setIncentivisation,
                }
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default { Consumer, Provider: UploadProvider };