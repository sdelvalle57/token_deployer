import React, { Component } from 'react';
import { Input, Container, Header, Form, Dropdown, Message } from 'semantic-ui-react';
import Layout from '../components/Layout'; 
import { Router } from '../routes';
import solver from '../helpers/solver';
import api from '../helpers/apiToken';


class InsertTokenAddress extends Component {

    state = {
        tokenAddress: "", 
        errroMessage: "",
        network: '4'
    }

    onSubmit = async (event) => {
        event.preventDefault();
        let { tokenAddress, network } = this.state;
        tokenAddress = tokenAddress.trim();
        if(solver.isAddressValid(tokenAddress)) {
            const summary = await api.getSummary(tokenAddress, network);
            typeof summary.name == 'undefined' ?
                this.setState({ errroMessage: "Contract not found"}) :
                Router.pushRoute(`/token/view/${tokenAddress}/${network}`)
        } else {
            this.setState({ errroMessage: "Not valid eth address"});
        }
    }

    renderIndex() {
        return(
            <Container className='mainIndex' >
                <Header as='h1' id='indexHeader' block align='center'>
                    ERC20 TOKEN INTERFACE 20
                </Header> 
            </Container>
            );
    }

    renderInput() {
        const options = [
            { key: 'rinkeby', text: 'Rinkeby eth//: ', value: '4' },
            { key: 'main', text: 'Main eth//: ', value: '1' }
          ]
        return (
            <Container className='input'>
                    <Form className='indexForm' onSubmit={ this.onSubmit } error={!!this.state.errroMessage}>
                        <Form.Field>
                            <Input 
                                className='index' 
                                label={<Dropdown 
                                    defaultValue='4' 
                                    options={options} 
                                    onChange= {(e, result) => {
                                        this.setState({ network: result.value })}
                                    }/>}
                                labelPosition='left'
                                action={{ icon: 'search' }} 
                                onChange={event => 
                                    this.setState({ 
                                        tokenAddress: event.target.value,
                                        errroMessage: ''
                                    })}
                                placeholder='0x...  Enter the ERC20 token contract address' />
                        </Form.Field>
                        <Message error header="Oops!" content={this.state.errroMessage} />
                    </Form>
            </Container>
        )
    }

    // 

    render() {
        return (
            <Layout>
                <div>
                    {this.renderIndex()}
                    {this.renderInput()}
                </div>
            </Layout>
        )
    }
}

export default InsertTokenAddress;
