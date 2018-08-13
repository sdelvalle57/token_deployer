import React, { Component } from 'react';
import { Card, Dimmer, Loader, Header, Icon } from 'semantic-ui-react';
import Layout from '../../components/Layout'; 
import api from '../../helpers/erc20/apiBasicERC20';
import solver from '../../helpers/solver';
import BasicToken from '../../components/erc20/BasicToken';
import StandardToken from '../../components/erc20/StandardToken';
import { Router } from '../../routes';


class ViewToken extends Component {

    state = {
        tokenAddress: this.props.url.query.tokenAddress, 
        contractError: false,
        summary: {},
        web3:{},
        dimmerActive: true,
        network : {}
    }

    networkCallback = async (network) => {
        await this.setValues(network.network);
    }

    async setValues(network) {
        const  tokenAddress = this.props.url.query.tokenAddress;
        const summary = await api.getSummary(tokenAddress, network.networkId);
        const dimmerActive =  typeof summary.name == 'undefined';
        const contractError = dimmerActive;
        this.setState({summary, dimmerActive, contractError, network})
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
                        formatNumber(solver.convertToEther(summary.totalSupply)) 
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
            <Layout callback = {this.networkCallback}>
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
