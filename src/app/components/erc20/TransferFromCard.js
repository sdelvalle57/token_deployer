import React, {Component} from 'react';
import { Form, Input, Label, Card,  Container, Dimmer, Loader} from 'semantic-ui-react';
import api from '../../helpers/erc20/apiStandardERC20';

class TransferFromCard extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,

        transferFrom: {
            'from':'', 
            'to':'', 
            'value':'',
            'response': {
                'ok':false, 
                'message':''
            }, 
            'dimmer': false
        }
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            tokenAddress: nextProps.tokenAddress,
            summary: nextProps.summary,
            network: nextProps.network
        });
    }

    onSubmit = () => async (event) => {
        event.preventDefault();
        const { tokenAddress, network, transferFrom } = this.state;
        if(network.networkNotSet || network.providerNotSet || network.notLogged) {
            transferFrom.response.message = network.message;
            transferFrom.response.ok = false;
            this.setState({transferFrom});
        } else if(transferFrom.from != "" && transferFrom.to != "" && transferFrom.value > 0) {
            transferFrom.response.message = '';
            transferFrom.dimmer = true;
            this.setState({transferFrom})
            const transferFromlValue = await api.transferFrom(
                tokenAddress, 
                transferFrom.from, 
                transferFrom.to,
                transferFrom.value
            );
            transferFrom.response.ok = !transferFromlValue.error; 
            transferFrom.response.message = transferFromlValue.message;
            transferFrom.dimmer = false;
            this.setState({ transferFrom });
        }
    }

    renderMeta(method) {
        return (
            <Container className="contRibbon">
                {this.renderResponse(method)}
                {this.renderRibbon()}
            </Container>
        )
    }

    renderRibbon() {
        const {transferFrom} = this.state;
        let showHide = transferFrom.dimmer ? "hide":"show";
        return <Label className={"tfRibbon " + showHide} onClick={ this.onSubmit() } as='a' color='blue' ribbon='right'>Send</Label>
    }

    renderResponse(method) {
        const {network} = this.state;
        if(!method.response.ok && method.response.message!='') {
            method.response.message = method.response.message.length > 80 ? 
            method.response.message.slice(0, 80):
            method.response.message;
            return(
                <Container className="contResponse red">
                    {method.response.message}
                </Container>
            );
        } else if(method.response.ok){
            let url = parseInt(network.networkId) == 1? "":"rinkeby.";
            url = "https://"+url+"etherscan.io/tx/"+method.response.message;
            return( 
                <Container className="contResponse normal">
                    <a target="_blank" 
                        rel="noopener noreferrer"
                        href={url}>
                        {method.response.message.slice(0,40)+"..."}
                    </a>
                </Container>
            );
        } else {
            return (<Container className="contResponse"></Container>);
        }
    }

    /* Forms */
    renderTransferFromForm() {
        const { summary, transferFrom } = this.state;
        return(
            <Form>
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            transferFrom.from = event.target.value;
                            this.setState({ transferFrom })}
                        }
                        placeholder = "0x... address of owner" />
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            transferFrom.to = event.target.value;
                            this.setState({ transferFrom })}
                        }
                        placeholder = "0x... addressee" />
                    <Input 
                        className='basicToken' 
                        labelPosition='right' 
                        type="number"
                        onChange={event => {
                            transferFrom.value = event.target.value;
                            this.setState({ transferFrom })}
                        }
                        placeholder = "amount to transfer" >
                            <Label>{'$.'+summary.symbol}</Label>
                            <input/>
                            <Label>{'x10^'+summary.decimals}</Label>
                    </Input>
                </Form.Field>
            </Form>
        );
    }

    render() {   
        let {transferFrom} = this.state;
        const metaClass = (!transferFrom.response.ok && transferFrom.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Transfer from </Card.Header>
                    <Card.Meta>{this.renderTransferFromForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(transferFrom)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={transferFrom.dimmer} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }
}


export default TransferFromCard;