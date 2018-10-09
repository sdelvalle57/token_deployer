import React, {Component} from 'react';
import { Container, Form, Input, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

import {isAddressValid} from '../helpers/solver';

import {setERC20Address} from '../actions/action_contracts';
import {erc20Summary, setERC20SummaryError} from '../actions/action_erc20';

class TokenReader extends Component {
    

    onSubmit = (event) => {
        const {dispatch, network, contracts:{erc20Address}} = this.props;
        if(event != null) event.preventDefault();
        

        if(network.providerNotSet || network.networkNotSet) {
            dispatch(setERC20SummaryError(network.message));
            return;
        }

        if(isAddressValid(erc20Address)) {
            dispatch(erc20Summary());
            /*
                this.setState({ errroMessage: "Contract not found"}) : 
                Router.pushRoute(`/token/view/${erc20Address}`)
            this.setState({loading : false})
            */
        } else dispatch(setERC20SummaryError("Not valid eth address"));
        
    }

    onChange = (event) => {
        const {dispatch} = this.props;
        dispatch(setERC20Address(event.target.value));
        console.log(event.target.value)
        if(isAddressValid(event.target.value))
            dispatch(erc20Summary());
    }

    onTryClick = (tryAddress) => {
        const {dispatch} = this.props;
        dispatch(setERC20Address(tryAddress));
        if(isAddressValid(tryAddress))
            dispatch(erc20Summary());
        else dispatch(setERC20SummaryError("Not valid eth address"));
    }

    renderLabel() {
        const {contracts, network: {networkId}, dispatch} = this.props;
        if(networkId == "1" || networkId == "4"){
            const tryAddress = contracts.tryAddress.erc20[networkId];
            return (
                <Label 
                    as='a' 
                    basic 
                    className="tryThis" 
                    pointing 
                    onClick = {this.onTryClick.bind(this, tryAddress)}
                    content = {`Try This: ${tryAddress}`} /> 
                )
        }
        return null;
    }

    renderInput() {
        const {contracts, network: {networkId}, dispatch, loading} = this.props;

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
                                loading = {loading}
                                className='index' 
                                action={{ icon: 'search' }} 
                                actionPosition= 'left'
                                placeholder={placeholder}
                                value={contracts.erc20Address}
                                onChange={this.onChange}
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
    const { network, contracts, erc20: {summary:{loading}} } = state;
    return {network, contracts, loading};
}


export default connect(mapStateToProps)(TokenReader);