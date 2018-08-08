import React, {Component} from 'react';
import { Form, Input, Label, Card, Container, Dimmer, Loader, Grid } from 'semantic-ui-react';
import api from '../helpers/apiTokenERC20';
import solver from '../helpers/solver';


class BasicToken extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        requests: {'balanceOf':1, 'transfer':2},
        balance: {'who':'', 'response':''},
        transfer: {'to':'', 'value':'', 'response': {'ok':false, 'message':''}},
        dimmerActive: false
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            tokenAddress: nextProps.tokenAddress,
            summary: nextProps.summary,
            network: nextProps.network
        });
    }

    onSubmit = (typeOfRequest) => async (event) => {
        event.preventDefault();
        const { requests, tokenAddress, balance, network, transfer} = this.state;
        switch (typeOfRequest) {
            case requests.balanceOf:
                balance.response = await api.balanceOf(tokenAddress, balance.who, network);
                this.setState({ balance });
                break;
            case requests.transfer:
                if(network.networkNotSet || network.providerNotSet || network.notLogged) {
                    transfer.response.message = network.message;
                    transfer.response.ok = false;
                    this.setState({transfer});
                } else if(transfer.to != "" && transfer.value > 0) {
                    transfer.response.message = '';
                    this.setState({transfer, dimmerActive: true})
                    const transferValue = await api.transfer(tokenAddress, transfer.to, transfer.value);
                    transfer.response.ok = !transferValue.error; 
                    transfer.response.message = transferValue.message;
                    this.setState({
                        dimmerActive: false, 
                        transfer
                    });
                }
                break;
        }
        
    }

    renderMeta(request) {
        return (
            <Container className="contRibbon">
                {this.renderResponse()}
                {this.renderRibbon(request)}
            </Container>
        )
    }

    renderResponse() {
        const {transfer, network} = this.state;
       
        if(!transfer.response.ok && transfer.response.message!='') {
            transfer.response.message = transfer.response.message.length > 80 ? 
            transfer.response.message.slice(0, 80):
            transfer.response.message;
            return(
                <Container className="contResponse red">
                    {transfer.response.message}
                </Container>
            );
        } else if(transfer.response.ok){
            let url = network == 1? "":"rinkeby.";
            url = "https://"+url+"etherscan.io/tx/"+transfer.response.message;
            return( 
                <Container className="contResponse normal">
                    <a target="_blank" 
                        rel="noopener noreferrer"
                        href={url}>
                        {transfer.response.message.slice(0,40)+"..."}
                    </a>
                </Container>
            );
        } else {
            return (<Container className="contResponse"></Container>);
        }
    }

    renderRibbon(request) {
        const {dimmerActive} = this.state;
        const showHide = dimmerActive ? "hide":"show";
        return <Label className={"tfRibbon " + showHide} onClick={ this.onSubmit(request) } as='a' color='blue' ribbon='right'>Send</Label>
    }

    /* Forms */
    renderCheckBalancesForm() {
        const { requests, balance } = this.state;
        return(
            <Form onSubmit={ this.onSubmit(requests.balanceOf) } >
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        action={{ icon: 'search' }} 
                        onChange={event => {
                            balance.who = event.target.value;
                            this.setState({ balance })}

                        }
                        placeholder = "0x..." />
                </Form.Field>
            </Form>
        );
    } 

    renderTransferForm() {
        const { summary, transfer } = this.state;
        return(
            <Form>
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            transfer.to = event.target.value;
                            this.setState({ transfer })}

                        }
                        placeholder = "0x... address of beneficiary" />
                    <Input 
                        className='basicToken' 
                        labelPosition='right' 
                        type="number"
                        onChange={event => {
                            transfer.value = event.target.value
                            this.setState({ transfer })}
                        }
                        placeholder = "amount to send" >
                            <Label>{'$.'+summary.symbol}</Label>
                            <input/>
                            <Label>{'x10^'+summary.decimals}</Label>
                    </Input>
                </Form.Field>
            </Form>
        );
    }

    /* Principal rendering */
    renderCheckBalanceCard() {
        let { summary, balance} = this.state;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Check balance of address </Card.Header>
                    <Card.Meta>{this.renderCheckBalancesForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                        { balance.response!=""? 
                        solver.formatNumber(api.
                            convertToEther(balance.response)) +" "+ summary.symbol+"s"
                        :"" }
                </Card.Content>
            </Card>
        );
    }

    renderTransferCard() {
        let {requests, dimmerActive, transfer} = this.state;
        const metaClass = (!transfer.response.ok && transfer.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Transfer </Card.Header>
                    <Card.Meta>{this.renderTransferForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                        { this.renderMeta(requests.transfer)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={dimmerActive} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }
    

    render() {   
        let {tokenAddress, summary} = this.state;
        if(typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {  
            return(
                <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group className="tokenCards" id='basicTokenCards' >
                            {this.renderCheckBalanceCard()}
                            {this.renderTransferCard()}
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>

                </Grid>

            );
        }
        return null;
    }
}


export default BasicToken;