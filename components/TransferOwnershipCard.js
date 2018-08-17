import React, {Component} from 'react';
import { Form, Input, Label, Card, Container, Dimmer, Loader, Grid } from 'semantic-ui-react';
import api from '../helpers/erc20/apiOwnership';


class TransferOwnershipCard extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        network: this.props.network,
        disabled: this.props.disabled,
        transfer: {
            'newOwner': this.props.value, 
            'response': {
                'ok':false, 
                'message':''
            }
        },
        dimmerActive: false,
    };  

    componentWillReceiveProps(nextProps) {
        let {transfer} = this.state;
        const disabled = nextProps.disabled;
        
        if(disabled) {
            transfer.response.message = "You are not the owner of the contract"; 
            transfer.response.ok = false;
        }
        else if(transfer.response.message == "You are not the owner of the contract"){
            transfer.response.message = "";
            transfer.response.ok = true;
        }
        this.setState({
            transfer,
            tokenAddress: nextProps.tokenAddress,
            network: nextProps.network,
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
        } else if(transfer.newOwner != "" ) {
            transfer.response.message = '';
            this.setState({transfer, dimmerActive: true})
            const transferValue = await api.transferOwnership(tokenAddress, transfer.newOwner);
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
        return <Label 
            className={"tfRibbon " + showHide} 
            onClick={ this.onSubmit() } 
            as='a' color='blue' 
            ribbon='right'
        >Send</Label>
    }

    /* Forms */
    

    renderTransferForm() {
        const { transfer, disabled } = this.state;
        return(
            <Form>
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            transfer.newOwner = event.target.value;
                            this.setState({ transfer })}
                        }
                        placeholder = "0x... address of new owner"
                        disabled = {disabled} />
                </Form.Field>
            </Form>
        );
    }

   
    

    render() {   
        let {dimmerActive, transfer} = this.state;
        const metaClass = (!transfer.response.ok && transfer.response.message!='')?
            'red':'normal';
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group className="tokenCards">
                            <Card>
                                <Card.Content>
                                    <Card.Header>Transfer token ownership </Card.Header>
                                    <Card.Meta>{this.renderTransferForm()}</Card.Meta>
                                </Card.Content>
                                
                                <Card.Content extra className={metaClass}>
                                    { this.renderMeta()  }
                                </Card.Content>
                                <Dimmer className='cardDimmer' active={dimmerActive} >
                                    <Loader size='small'>Sending Tx</Loader>
                                </Dimmer>
                            </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}


export default TransferOwnershipCard;