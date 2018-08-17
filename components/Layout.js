import React, {Component} from 'react';
import Head from 'next/head'
import { Container } from 'semantic-ui-react';
import Favicon from 'react-favicon';
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
        }
    }

    componentDidMount() {
        this.setCheckNetworkInterval();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
     }

     setCheckNetworkInterval = () => {
        let {network} = this.state;
        this.interval = setInterval(() => {
            network.message = '';
            network.accounts = []
            if (typeof window.web3 == 'undefined') {
                network.providerNotSet = true;
                network.message = "Use a provider to send the Transaction";
                this.setState({network});
                this.props.callback({network});
                return;
            }
            network.providerNotSet = false;

            if (typeof window.web3 != 'undefined') {
                window.web3.version.getNetwork(async (err, netId) => {
                    network.networkId = netId;
                    if(netId != "1" && netId != "4") {
                        network.message =  "Please select the Main or Rinkeby network";
                        network.networkNotSet = true;
                        this.props.callback({network});
                        return;
                    } else {
                        network.networkNotSet = false;
                    }
                    
                    const accounts = await web3.eth.getAccounts();  
                    if(!accounts[0]) {
                        network.message = "Please login to the network";
                        network.notLogged = true;
                    } else {
                        network.accounts = accounts;
                        network.notLogged = false;
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
                <div>
                    <Favicon url="/static/images/favicon.png" />
                </div>
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

