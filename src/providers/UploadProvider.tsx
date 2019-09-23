import React, {Component} from "react";

export interface IUploadProvider {
    state: {
        server: string;
        privacy: string;
        incentivisation: string;
    };
    actions: {
        setServer:(value:string) =>void,
        setPrivacy:(value:string) =>void,
        setIncentivisation:(value:string) =>void
    };
}

const { Provider, Consumer } = React.createContext <IUploadProvider>({
    state: {
        server: 'Swarm',
        privacy: 'public',
        incentivisation: 'usersPay',
    },
    actions: {
        setServer:(value) =>{},
        setPrivacy:(value) =>{},
        setIncentivisation:(value) =>{}
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

    setServer(value){
        this.setState({server: value})
    };

    setPrivacy(value){
        this.setState({privacy: value})
    };

    setIncentivisation(value) {
        this.setState({incentivisation: value})
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

// return (
//             <ThemeContext.Provider value="dark">
//                 <Toolbar />
//             </ThemeContext.Provider>
//         );

// class ThemedButton extends React.Component {
//     static contextType = UploadContext;
//     render() {
//         return <Button theme={this.context} />;
//     }
// }