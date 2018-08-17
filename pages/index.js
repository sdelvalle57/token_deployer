import React, { Component } from 'react';
import { Divider, Segment, Header, Dimmer, Loader, Icon} from 'semantic-ui-react';
import Layout from '../components/Layout'; 
import apiFactoryERC20 from '../helpers/erc20/apiFactoryERC20';
import TokenReader from '../components/TokenReader';
import OwnerFactory from '../components/erc20/OwnerFactory';
import TokenDeployerStep from '../components/erc20/TokenDeployerStep';


class InsertTokenAddress extends Component {

    state = {
        factoryAddress: "",
        tokenAddress: "", 
        errroMessage: "",
        network: {},
        loading: false,
        prices: [],
        factoryOwner: "",
        dimmerActive: true, 
        contractError: false
    }

    networkCallback = (response) => {
        const network = response.network;
        let factoryAddress = "0x001a50b7ca5a24b2cc905592eb4b07a71f1f5c1b";
        if(network.networkId == "1") 
            factoryAddress = "0x001a50b7ca5a24b2cc905592eb4b07a71f1f5c1c";
        this.setState({network, factoryAddress});
        this.setValues();
        
    }

    async setValues() {
        const {factoryAddress} = this.state;
        try {
            const prices = await apiFactoryERC20.getPrices(factoryAddress);
            const factoryOwner = await apiFactoryERC20.getOwner(factoryAddress);
            this.setState({prices, factoryOwner, dimmerActive: false, contractError: false});
        } catch (e) {
            this.setState({dimmerActive: true, contractError: true})
        }
        
        
    }

    isOwner() {
        const {network, factoryOwner} = this.state;
        return(!network.networkNotSet && !network.providerNotSet && !network.notLogged
        && network.accounts && network.accounts.length > 0 && network.accounts[0] == factoryOwner)
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
                    Please try another network
                </Header>
            );
        } else {
            return <Loader size='large'>Loading</Loader>;
        }
        
    }

    renderTokenReader() {
        const {network, factoryAddress, contractError} = this.state;
        if(contractError) return null;
        return(
            <TokenReader 
                network = {network}
                factoryAddress = {factoryAddress}/>
        )
    }
    

    renderDeployment() {
        const {network, factoryAddress, prices, contractError} = this.state;
        if(contractError) return null;
        return(
            <TokenDeployerStep 
                network = {network}
                factoryAddress = {factoryAddress}
                prices = {prices}
            />
        );
    }

    renderAdmin() {
        const {factoryAddress, network, prices, contractError} = this.state;
        if(contractError) return null;
        if(this.isOwner()) {
            return(
                <OwnerFactory
                    factoryAddress = {factoryAddress}
                    network = {network}
                    prices = {prices}
                />
            );
        }
        return null;
    }

    // 

    render() {
        return (
            <Layout callback={this.networkCallback}>
                {this.renderDimmer()}
                <Segment padded>
                    <Header as='h2'textAlign='center'>ERC20 Token</Header>
                    {this.renderTokenReader()}
                    <Divider horizontal>Or</Divider>
                    <Header as='h3'>Deploy a Token</Header>
                    {this.renderDeployment()}                    
                </Segment>
                {this.renderAdmin()}
            </Layout>
        )
    }
}

export default InsertTokenAddress;