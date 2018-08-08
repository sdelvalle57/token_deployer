import React, { Component } from 'react';
import { Card, Dimmer, Loader, Header, Icon } from 'semantic-ui-react';
import Layout from '../../components/Layout'; 
import api from '../../helpers/apiTokenERC20';
import solver from '../../helpers/solver';
import BasicToken from '../../components/BasicToken';
import StandardToken from '../../components/StandardToken';
import { Router } from '../../routes';


class ViewToken extends Component {

    state = {
        tokenAddress: this.props.url.query.tokenAddress, 
        networkId: this.props.url.query.network,
        contractError: false,
        summary: {},
        web3:{},
        dimmerActive: true,
        network : {
            providerNotSet: false,
            networkNotSet: false,
            networkId: 0,
            notLogged: false,
            accounts: [],
            message: '',
            contractError : false
        }
    }

    async componentDidMount() {
        const  tokenAddress = this.props.url.query.tokenAddress;
        const networkId = this.props.url.query.network;
        const summary = await api.getSummary(tokenAddress, networkId);
        this.setCheckNetworkInterval();
        const dimmerActive =  typeof summary.name == 'undefined';
        const contractError = dimmerActive;
        this.setState({summary, dimmerActive, contractError})
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setCheckNetworkInterval = () => {
        this.interval = setInterval(() => {
            const {networkId} = this.state;
            let network = {
                providerNotSet: false,
                networkNotSet: false,
                networkId: 0,
                notLogged: false,
                accounts: [],
                message: '',
                contractError : false
            }
            if (typeof window.web3 == 'undefined') {
                network.providerNotSet = true;
                network.message = "Use a provider to send the Transaction";
                this.setState({network});
                return;
            }
            if (typeof window.web3 != 'undefined') {
                
                window.web3.version.getNetwork(async (err, netId) => {
                    if(netId == "1" || netId == "4") {
                        if(netId == "1" && networkId != "1") {
                            network.message = "Please select the Rinkeby network";
                            network.networkNotSet = true;
                        } else if(netId == "4" && networkId != "4") {
                            network.message = "Please select the Main network";
                            network.networkNotSet = true;
                        }
                        const accounts = await api.getAccounts(window.web3.currentProvider);
                        network.accounts = accounts;
                        network.networkId = netId;
                        if(!accounts[0]) {
                            network.message = "Please login to the network";
                            network.notLogged = true;
                        } 
                    } else {
                        network.message = networkId == 1 ? "Please select the Main network":
                        "Please select the Rinkeby network";
                        network.networkNotSet = true;
                    }
                    this.setState({network});
                });
            }
        }, 1000);
    }

    onClick = () => {
        Router.pushRoute(`/`);
    }

    renderDimmer() {
        const {dimmerActive} = this.state;
        return(
            <Dimmer active = {dimmerActive}>
                {this.renderDimmerContent()}
            </Dimmer>
        );
    }

    renderDimmerContent() {
        const {contractError} = this.state;
        if(contractError) {
            return (
                <Header as='h2' icon inverted>
                    <Icon name='broken chain' />
                    Contract not found!
                    <Icon link name='reply' onClick = {this.onClick} />
                </Header>
            );
        } else {
            return <Loader size='large'>Loading</Loader>;
        }
        
    }

    /* Principal Rendering */
    renderSummaryCard() {
        let {summary} = this.state;
        if(typeof summary.totalSupply != 'undefined') {        
            const items = [
                {
                    header: "Name and symbol: "+ summary.name+"("+summary.symbol+")",
                    meta: summary.decimals + " decimals",
                    description: "Total supply is "+solver.
                        formatNumber(api.convertToEther(summary.totalSupply)) 
                        +" "+ summary.symbol+"s",
                    extra: 'owner: '+summary.owner
                }
            ];
            return <Card.Group id='summaryCard' items={ items } />;
        }
        return null;
    }


    renderBasicToken() {
        const {tokenAddress, summary, network } = this.state;
        return (<BasicToken 
            tokenAddress = {tokenAddress}
            summary = {summary}
            network = {network}
            />);
    }

    renderStandardToken() {
        const {tokenAddress, summary, network } = this.state;
        return (<StandardToken 
            tokenAddress = {tokenAddress}
            summary = {summary}
            network = {network}
            />);
    }

    render() {
       
        return (
            <Layout>
                {this.renderDimmer()}
                <div>
                    {this.renderSummaryCard()}
                    {this.renderBasicToken()}
                    {this.renderStandardToken()}
                </div>
            </Layout>
            
            
        )
    }
}

export default ViewToken;
