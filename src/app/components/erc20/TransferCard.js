import React, {Component} from 'react';
import { Form, Input, Label, Card, Container, Dimmer, Loader } from 'semantic-ui-react';
import api from '../../helpers/erc20/apiBasicERC20';


class TransferCard extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        disabled: this.props.disabled,
        transfer: {'to': this.props.value, 'value':'', 'response': {'ok':false, 'message':''}},
        dimmerActive: false,
        loading: false
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            tokenAddress: nextProps.tokenAddress,
            summary: nextProps.summary,
            network: nextProps.network,
            value: nextProps.value,
            disabled: nextProps.disabled
        });
    }

    onSubmit = () => async (event) => {
        event.preventDefault();
        const { tokenAddress, network, transfer} = this.state;
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
        
    }

    renderMeta() {
        return (
            <Container className="contRibbon">
                {this.renderResponse()}
                {this.renderRibbon()}
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
            let url = parseInt(network.networkId) == 1? "":"rinkeby.";
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

    renderRibbon() {
        const {dimmerActive} = this.state;
        const showHide = dimmerActive ? "hide":"show";
        return <Label className={"tfRibbon " + showHide} onClick={ this.onSubmit() } as='a' color='blue' ribbon='right'>Send</Label>
    }

    /* Forms */
    

    renderTransferForm() {
        const { summary, transfer, disabled } = this.state;
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
                        placeholder = "0x... address of beneficiary"
                        value = {transfer.to}
                        disabled = {disabled} />
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

    renderTransferCard() {
        let {dimmerActive, transfer} = this.state;
        const metaClass = (!transfer.response.ok && transfer.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Transfer </Card.Header>
                    <Card.Meta>{this.renderTransferForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                        { this.renderMeta()  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={dimmerActive} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }
    

    render() {   
        let {dimmerActive, transfer} = this.state;
        const metaClass = (!transfer.response.ok && transfer.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Transfer </Card.Header>
                    <Card.Meta>{this.renderTransferForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                        { this.renderMeta()  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={dimmerActive} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }
}


export default TransferCard;