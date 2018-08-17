import React, {Component} from 'react';
import Head from 'next/head'
import { Container } from 'semantic-ui-react';
import web3 from '../ethereum/api/web3';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {

    state = {
        network : {
            providerNotSet: true,
            networkNotSet: true,
            networkId: 0,
            notLogged: true,
            accounts: [],
            message: '',
            contractError : false
        },
        lastFetched: {
            providerNotSet: false,
            networkNotSet: false,
            networkId: 0,
            notLogged: false,
            accounts: [],
            message: '',
            contractError : false
        }
    }

    componentDidMount() {
        this.setCheckNetworkInterval();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
     }

     setCheckNetworkInterval = () => {
        let {network, lastFetched} = this.state;
        this.interval = setInterval(() => {
            if (typeof window.web3 == 'undefined') {
                network.providerNotSet = true;
                network.message = "Use a provider to send the Transaction";
                if(!lastFetched.providerNotSet) {
                    lastFetched.providerNotSet = true;
                    this.setState({network, lastFetched});
                    this.props.callback({network:network});
                }
                return;
            }
            network.providerNotSet = false;

            if (typeof window.web3 != 'undefined') {
                window.web3.version.getNetwork(async (err, netId) => {
                    network.networkId = netId;
                    if(netId != "1" && netId != "4") {
                        network.message =  "Please select the Main or Rinkeby network";
                        network.networkNotSet = true;
                        if(!lastFetched.networkNotSet){
                            lastFetched.networkNotSet = true;
                            this.setState({network, lastFetched});
                            this.props.callback({network});
                        }
                        return;
                    } else {
                        network.networkNotSet = false;
                    }
                    
                    const accounts = await web3.eth.getAccounts();  
                    if(!accounts[0]) {
                        network.message = "Please login to the network";
                        network.accounts = []
                        network.notLogged = true;
                    } else {
                        network.accounts = accounts;
                        network.notLogged = false;
                        network.message = "";
                    }
                    
                    this.setState({network});
                    this.props.callback({network});
                });
            }
        }, 1000);
    }

    render() {
        return (
            <Container >
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="/static/dist/semantic.min.css"
                    />
                </Head>
                <Header />
                {this.props.children}
                <Footer network={this.state.network} />
                
            </Container>
        );
    }
}

export default Layout;

