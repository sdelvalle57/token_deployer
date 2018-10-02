import React, {Component} from 'react';
import { Container, Form, Input, Label, Message, List } from 'semantic-ui-react';
import { connect } from 'react-redux';

import {isAddressValid} from '../helpers/solver';

import {setErrorMessage, setTokenAddress, setLoading} from '../actions/action_contracts';
import {erc20Summary} from '../actions/action_erc20';

class TokenReader extends Component {
    

    onSubmit = async (event) => {
        const {dispatch, network, contracts:{tokenAddress}} = this.props;
        if(event != null) event.preventDefault();
        dispatch(setErrorMessage(''));

        if(network.providerNotSet || network.networkNotSet) {
            dispatch(setErrorMessage(network.message));
            return;
        }

        if(isAddressValid(tokenAddress)) {
            dispatch(setLoading(true));
            dispatch(erc20Summary());
            /*
            const summary = await apiBasicERC20.getSummary(tokenAddress, network.networkId);
            typeof summary.name == 'undefined' ?
                this.setState({ errroMessage: "Contract not found"}) : 
                Router.pushRoute(`/token/view/${tokenAddress}`)
            this.setState({loading : false})
            */
        } else {
            //this.setState({ errroMessage: "Not valid eth address"});
        }
    }

    renderLabel() {
        const {contracts, network: {networkId}} = this.props;
        if(networkId == "1" || networkId == "4"){
            const tryAddress = contracts.tryAddress.erc20[networkId];
            return (
                <Label 
                    as='a' 
                    basic 
                    className="tryThis" 
                    pointing 
                    content = {`Try This: ${tryAddress}`} /> 
                )
        }
        return null;
    }

    renderInput() {
        const {contracts, network: {networkId}, dispatch} = this.props;

        const disabled = networkId != "1" && networkId != "4";
        const placeholder = disabled ? "Choose the correct network" : "0x...  Enter the ERC20 Token address";
        return ( 
            <Container className='input'>
                    <Form 
                        className='indexForm'
                        onSubmit={ this.onSubmit }>
                        <Form.Field>
                            <Input 
                                disabled = {disabled}
                                loading = {contracts.loading}
                                className='index' 
                                action={{ icon: 'search' }} 
                                actionPosition= 'left'
                                placeholder={placeholder}
                                value={contracts.tokenAddress}
                                onChange={event => {
                                    dispatch(setTokenAddress(event.target.value));
                                }}
                                />
                        </Form.Field>
                        {this.renderLabel()}
                    </Form>
                    
            </Container>
        )
    }

    render() {   
        return (
            <Container>
                {this.renderInput()}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const { network, contracts } = state;
    return {network, contracts};
}


export default connect(mapStateToProps)(TokenReader);