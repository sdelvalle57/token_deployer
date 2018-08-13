import React, { Component } from 'react';
import { Input, Container, Label, Form, Message} from 'semantic-ui-react';
import Layout from '../components/Layout'; 
import { Router } from '../routes';
import solver from '../helpers/solver';
import api from '../helpers/erc20/apiBasicERC20';


class InsertTokenAddress extends Component {

    state = {
        tokenAddress: "", 
        errroMessage: "",
        network: {},
        loading: false
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
            const summary = await api.getSummary(tokenAddress, network.networkId);
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
                                placeholder='0x...  Enter the YLEMER contract address'
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

    // 

    render() {
        return (
            <Layout callback={this.networkCallback}>
                <div>
                    {this.renderInput()}
                </div>
            </Layout>
        )
    }
}

export default InsertTokenAddress;