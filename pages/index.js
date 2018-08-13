import React, { Component } from 'react';
import { Input, Container, Label, Form, 
    Message, Divider, Segment, Header, Grid, 
    List, Step, Icon, Dropdown} from 'semantic-ui-react/dist/commonjs';
import Layout from '../components/Layout'; 
import { Router } from '../routes';
import solver from '../helpers/solver';
import apiBasicERC20 from '../helpers/erc20/apiBasicERC20';


class InsertTokenAddress extends Component {

    state = {
        tokenAddress: "", 
        errroMessage: "",
        network: {},
        loading: false,
        tokenType: '0'
    }

    networkCallback = (network) => {
        this.setState({network: network.network});
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

    renderNetwork() {
        const {network} = this.state;
        if(!network.networkNotSet) {
            let networkMessage  = "";
            switch(parseInt(network.networkId)) {
                case 1: 
                    networkMessage = "Main";
                    break;
                case 4:
                    networkMessage = "Rinkeby";
                    break;
            }
            return(<p>{networkMessage}</p>);
        }
        return null;
    }

    renderTypes() {
        const options = [
            { key: 'basic', text: 'Basic', description: 'Free', value: '0' },
            { key: 'sytandard', text: 'Standard', description:'0.2 ETH', value: '1' }
          ]
        const {network, tokenType} = this.state;
        let networkId = parseInt(network.networkId);
        const isNetworkNotSelected = (networkId != 1 && networkId != 4);
        return(
            <Dropdown 
                disabled={isNetworkNotSelected} 
                value={tokenType}
                options={options} 
                onChange= {(e, result) => {
                    this.setState({tokenType: result.value})
                    }
                }  >
                
            </Dropdown>
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

                    <Step.Group widths={7}>
                        <Step active>
                            <Icon name='globe' />
                            <Step.Content>
                                <Step.Title>Network</Step.Title>
                                <Step.Description>{this.renderNetwork()}</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step >
                            <Icon name='list' />
                            <Step.Content>
                                <Step.Title>Type</Step.Title>
                                <Step.Description>{this.renderTypes()}</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step >
                            <Icon name='list' />
                            <Step.Content>
                                <Step.Title>Select type</Step.Title>
                                <Step.Description>{this.renderTypes()}</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step >
                            <Icon name='list' />
                            <Step.Content>
                                <Step.Title>Select type</Step.Title>
                                <Step.Description>{this.renderTypes()}</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step >
                            <Icon name='list' />
                            <Step.Content>
                                <Step.Title>Select type</Step.Title>
                                <Step.Description>{this.renderTypes()}</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step >
                            <Icon name='list' />
                            <Step.Content>
                                <Step.Title>Select type</Step.Title>
                                <Step.Description>{this.renderTypes()}</Step.Description>
                            </Step.Content>
                        </Step>
                        <Step >
                            <Icon name='list' />
                            <Step.Content>
                                <Step.Title>Select type</Step.Title>
                                <Step.Description>{this.renderTypes()}</Step.Description>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </Segment>
                <div>
                    
                </div>
            </Layout>
        )
    }
}

export default InsertTokenAddress;