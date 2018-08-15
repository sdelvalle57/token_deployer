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
        
    }

    networkCallback = (network) => {
        this.setState({network: network.network});
        this.setValues()
    }

    async setValues() {
        const factoryAddress = "0x782ee203bac13e2d75ee58dd19d2164d8bd4c2eb";
        const prices = await apiFactoryERC20.getPrices(factoryAddress);
        //console.log(prices);
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
        const {network, factoryAddress} = this.state;
        return(
            <TokenDeployerStep 
                network = {network}
                factoryAddress = {factoryAddress}
            />
        );
    }

    renderAdmin() {
        const {factoryAddress, network} = this.state;
        
        return(
            <OwnerFactory
                factoryAddress = {factoryAddress}
                network = {network}
            />
        )
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