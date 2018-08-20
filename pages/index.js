import React, { Component } from 'react';
import { Divider, Segment, Header} from 'semantic-ui-react';
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
        factoryOwner: ""
    }
    //we will add this comment

    networkCallback = (response) => {
        const network = response.network;
        let factoryAddress = "0x282388eeeaceacdad61d58743c28aea8ed7f4c59";
        if(network.networkId == "1") 
            factoryAddress = "0x8198bc0ea73e0c0377e346e227ba9854b088e5eb";
        this.setState({network, factoryAddress});
        this.setValues()
        
    }

    async setValues() {
        const {factoryAddress} = this.state;
        const prices = await apiFactoryERC20.getPrices(factoryAddress);
        const factoryOwner = await apiFactoryERC20.getOwner(factoryAddress);
        this.setState({prices, factoryOwner});
    }

    isOwner() {
        const {network, factoryOwner} = this.state;
        return(!network.networkNotSet && !network.providerNotSet && !network.notLogged
        && network.accounts && network.accounts.length > 0 && network.accounts[0] == factoryOwner)
    }

    renderTokenReader() {
        const {network, factoryAddress} = this.state;
        return(
            <TokenReader 
                network = {network}
                factoryAddress = {factoryAddress}/>
        )
    }
    

    renderDeployment() {
        const {network, factoryAddress, prices} = this.state;
        return(
            <TokenDeployerStep 
                network = {network}
                factoryAddress = {factoryAddress}
                prices = {prices}
            />
        );
    }

    renderAdmin() {
        const {factoryAddress, network, prices} = this.state;
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