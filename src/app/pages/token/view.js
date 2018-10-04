import React, { Component } from 'react';
import { Dimmer, Loader, Header, Icon, Menu, Segment } from 'semantic-ui-react';
import Layout from '../../components/Layout'; 
import api from '../../helpers/erc20/apiBasicERC20';
import TokenSummaryCard from '../../components/erc20/TokenSummaryCard';
import BasicToken from '../../components/erc20/BasicToken';
import StandardToken from '../../components/erc20/StandardToken';
import TransferOwnership from '../../components/TransferOwnershipCard'
import { Router } from '../../routes';


class ViewToken extends Component {

    state = {
        tokenAddress: this.props.url.query.tokenAddress, 
        contractError: false,
        summary: {},
        web3:{},
        dimmerActive: true,
        network : {},
        activeItem: 0,
        menuSelection: {
            "basic":0,
            "standard":1,
            "ownership":9
        },
        myBalance: ''
    }

    networkCallback = async (network) => {
        await this.setValues(network.network);
    }

    async setValues(network) {
        const  tokenAddress = this.props.url.query.tokenAddress;
        const summary = await api.getSummary(tokenAddress, network.networkId);
        let myBalance = 0;
        const dimmerActive =  typeof summary.name == 'undefined';
        if(!dimmerActive) myBalance = await this.getBalance(tokenAddress, network);
        const contractError = dimmerActive;
        this.setState({summary, dimmerActive, contractError, network, myBalance})
    }
    

    onClick = () => {
        Router.pushRoute(`/`);
    }

    handleItemClick = (e, { id }) => {
        this.setState({ activeItem: id });
    }

    async getBalance(tokenAddress, network) {
        if(!network.networkNotSet && !network.providerNotSet && !network.notLogged
        && network.accounts && network.accounts.length > 0){
            const myBalance = await api.balanceOf(tokenAddress, network.accounts[0]);
            
            return myBalance;
        }   
        return null;
    }

    isOwner() {
        const {network, summary} = this.state;
        return(!network.networkNotSet && !network.providerNotSet && !network.notLogged
        && network.accounts && network.accounts.length > 0 && network.accounts[0] == summary.owner)
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

    renderSummaryCard() {
        const {summary, myBalance} = this.state;
        return(
            <TokenSummaryCard
                summary = {summary}
                myBalance = {myBalance}
            />);
    }

    renderTokenMenu() {
        const { activeItem, menuSelection } = this.state;
        return(
            <Menu attached='top' tabular >
                <Menu.Menu position="right">
                    <Menu.Item 
                        name={Object.keys(menuSelection)[0]} 
                        id={menuSelection.basic}
                        active={activeItem == menuSelection.basic} 
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        name={Object.keys(menuSelection)[1]}
                        id={menuSelection.standard}
                        active={activeItem == menuSelection.standard}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name={Object.keys(menuSelection)[2]}
                        id={menuSelection.ownership}
                        active={activeItem == menuSelection.ownership}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        );
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

    renderTransferOwnership() {
        const {tokenAddress, network } = this.state;
        const disabled = this.isOwner();
        return (<TransferOwnership 
            tokenAddress = {tokenAddress}
            disabled = {!disabled}
            network = {network}
            />);
    }

    render() {
        const {activeItem, menuSelection} = this.state;
        let viewToRender;
        switch (activeItem) {
            case menuSelection.standard:
                viewToRender = this.renderStandardToken();
                break;
            case menuSelection.ownership:
                viewToRender = this.renderTransferOwnership();
                break;
            default:
                viewToRender = this.renderBasicToken();
                break;
        }
        return (
            <Layout callback = {this.networkCallback}>
                {this.renderDimmer()}
                <div>
                    {this.renderSummaryCard()}
                    {this.renderTokenMenu()}

                    <Segment attached='bottom'>
                        {viewToRender}
                    </Segment>
                </div>
            </Layout>
        );
    }
}

export default ViewToken;
