import React, {Component} from 'react';
import { Form, Input, Label, Card,  Container, Dimmer, Loader} from 'semantic-ui-react';
import api from '../../helpers/erc20/apiStandardERC20';

class IncreaseApproval extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        increaseApproval: {
            'spender':'', 
            'addedValue':'', 
            'response': {
                'ok':false, 
                'message':''
            }, 
            'dimmer': false
        },
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
        const { tokenAddress, network, increaseApproval } = this.state;
        if(network.networkNotSet || network.providerNotSet || network.notLogged) {
            increaseApproval.response.message = network.message;
            increaseApproval.response.ok = false;
            this.setState({increaseApproval});
        } else if(increaseApproval.spender != "" && increaseApproval.addedValue > 0) {
            increaseApproval.response.message = '';
            increaseApproval.dimmer = true;
            this.setState({increaseApproval})
            const increaseApprovalValue = await api.increaseApproval(tokenAddress, increaseApproval.spender, increaseApproval.addedValue);
            increaseApproval.response.ok = !increaseApprovalValue.error; 
            increaseApproval.response.message = increaseApprovalValue.message;
            increaseApproval.dimmer = false;
            this.setState({ increaseApproval });
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
        const { increaseApproval } = this.state;
        let showHide = increaseApproval.dimmer ? "hide":"show";
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

    renderIncreaseApprovalForm() {
        const { summary, increaseApproval } = this.state;
        return(
            <Form>
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            increaseApproval.spender = event.target.value;
                            this.setState({ increaseApproval })}
                        }
                        placeholder = "0x... address of spender" />
                    <Input 
                        className='basicToken' 
                        labelPosition='right' 
                        type="number"
                        onChange={event => {
                            increaseApproval.addedValue = event.target.value;
                            this.setState({ increaseApproval })}
                        }
                        placeholder = "amount to increase" >
                            <Label>{'$.'+summary.symbol}</Label>
                            <input/>
                            <Label>{'x10^'+summary.decimals}</Label>
                    </Input>
                </Form.Field>
            </Form>
        );
    }

 
    
    render() {   
        let {increaseApproval} = this.state;
        const metaClass = (!increaseApproval.response.ok && increaseApproval.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Increase approval </Card.Header>
                    <Card.Meta>{this.renderIncreaseApprovalForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(increaseApproval)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={increaseApproval.dimmer} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }
}


export default IncreaseApproval;