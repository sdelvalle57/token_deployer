import React, {Component} from 'react';
import { Grid, Container, Form, Input, Label, Message, List } from 'semantic-ui-react';
import apiBasicERC20 from '../helpers/erc20/apiBasicERC20';
import { Router } from '../routes';
import solver from '../helpers/solver';
import MyDeployedTokens from './MyDeployedTokens';


class TokenReader extends Component {
    
    state = {
        tokenAddress: "",
        summary: {},
        network: this.props.network,
        factoryAddress: this.props.factoryAddress,
        errroMessage:'',
        loading: false
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            network: nextProps.network,
            factoryAddress: this.props.factoryAddress
        });
    }

    clickDeployedTokenCallback = (response) => {
        this.setState({tokenAddress: response.address});
        setTimeout(() => {
            this.onSubmit();
        }, 350);
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
        const {network} = this.state;
        let tryAddress = "0x7bbd2895bf740e7771785854ee74ed401e803555";
        if(network.networkId == "1") 
            tryAddress = " 0xFD2785a0b571bDE760015798157BA6065157E8f2";
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

    renderMyDeployedTokens() {
        const {network, factoryAddress} = this.state;
        return(
            <MyDeployedTokens
                factoryAddress={factoryAddress}
                network = {network}
                callback = {this.clickDeployedTokenCallback}
             />
        )
    }

    
    render() {   
        return (
            <Grid celled className='gridIndex'>
                <Grid.Row>
                    <Grid.Column width={12}>
                        {this.renderInput()}
                    </Grid.Column>
                    <Grid.Column width={4}>

                        {this.renderMyDeployedTokens()}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}


export default TokenReader;