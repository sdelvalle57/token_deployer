import React, { Component } from 'react';
import { Input, Container, Label, Form, Message, Divider, Segment, 
    Header, Grid, List} from 'semantic-ui-react/dist/commonjs';
import Layout from '../components/Layout'; 
import { Router } from '../routes';
import solver from '../helpers/solver';
import apiBasicERC20 from '../helpers/erc20/apiBasicERC20';
import apiFactoryERC20 from '../helpers/erc20/apiFactoryERC20';
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

    networkCallback = (response) => {
        const network = response.network;
        let factoryAddress = "0xcc1fe6b032609eadff0718d98d83cc6f1faaa975";
        if(network.networkId == "1") 
            factoryAddress = "0xcc1fe6b032609eadff0718d98d83cc6f1faaa976";
            this.setState({network, factoryAddress});
        this.setValues()
        
    }

    async setValues() {
        const {factoryAddress} = this.state;
        const prices = await apiFactoryERC20.getPrices(factoryAddress);
        const factoryOwner = await apiFactoryERC20.getOwner(factoryAddress);
        this.setState({prices, factoryOwner});
    }

    onSubmit = async (event) => {
        if(event != null) event.preventDefault();
        this.setState({ errroMessage: ''});
        let { tokenAddress, network } = this.state;
        
        if(network.providerNotSet || network.networkNotSet) {
            this.setState({ errroMessage: network.message});
            return;
        }
        tokenAddress = tokenAddress.trim();

        if(solver.isAddressValid(tokenAddress)) {
            this.setState({loading : true})
            const summary = await apiBasicERC20.getSummary(tokenAddress, network.networkId);
            typeof summary.name == 'undefined' ?
                this.setState({ errroMessage: "Contract not found"}) : 
                Router.pushRoute(`/token/view/${tokenAddress}`)
            this.setState({loading : false})
        } else {
            this.setState({ errroMessage: "Not valid eth address"});
        }
    }

    onTryCLick = (tryAddress) => {
        this.setState({tokenAddress: tryAddress});
        setTimeout(() => {
            this.onSubmit();
        }, 350);
        
    }

    isOwner() {
        const {network, factoryOwner} = this.state;
        return(!network.networkNotSet && !network.providerNotSet && !network.notLogged
        && network.accounts && network.accounts.length > 0 && network.accounts[0] == factoryOwner)
    }

    renderInput() {
        const tryAddress = "0x7bbd2895bf740e7771785854ee74ed401e803555";
        const {errroMessage, loading, tokenAddress} = this.state;
        return ( 
            <Container className='input'>
                    <Form className='indexForm' onSubmit={ this.onSubmit } error={!!errroMessage}>
                        <Form.Field>
                            <Input 
                                loading = {loading}
                                className='index' 
                                action={{ icon: 'search' }} 
                                actionPosition= 'left'
                                onChange={event => 
                                    this.setState({ 
                                        tokenAddress: event.target.value,
                                        errroMessage: ''
                                    })}
                                placeholder='0x...  Enter the ERC20 Token address'
                                value={tokenAddress} />
                        </Form.Field>
                        <Label onClick ={this.onTryCLick.bind(this, tryAddress)} as='a' basic className="tryThis" pointing>
                            Tyr this {tryAddress}
                        </Label>
                        <Message error header="Oops!" content={errroMessage} />
                    </Form>
            </Container>
        )
    }

    renderMyTokens() {
        const campaigns = [];
        const items = campaigns.map(name => {
            return (
                <List.Item as='a'>
                    <Header as='h4' className='headerIndexList'>{name}</Header>
                    <List.Content >
                        <List.Header >Name</List.Header>
                        <List.Description>
                            400.000.000 supply
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
              
          });
      
        return items;
       
    }

    renderTokensList() {
        return(
            <List className='listIndex' divided animated>
                <List.Item>
                    <List.Content>
                        <List.Header as='h4'>My deployed tokens</List.Header>
                    </List.Content>
                </List.Item>
                {this.renderMyTokens()}
                
            </List>
        );
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
                    <Grid celled className='gridIndex'>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                {this.renderInput()}
                            </Grid.Column>
                            <Grid.Column width={4}>

                                {this.renderTokensList()}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                        
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