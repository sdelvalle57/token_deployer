import React, {Component} from 'react';
import { Form, Input, Label, Card,  Container, Dimmer, Loader} from 'semantic-ui-react';
import api from '../../helpers/erc20/apiStandardERC20';

class DecreaseApprovalCard extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        decreaseApproval: {
            'spender':'', 
            'subtractedValue':'', 
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
        const { tokenAddress, network, decreaseApproval } = this.state;
            if(network.networkNotSet || network.providerNotSet || network.notLogged) {
                decreaseApproval.response.message = network.message;
                decreaseApproval.response.ok = false;
                this.setState({decreaseApproval});
            } else if(decreaseApproval.spender != "" && decreaseApproval.subtractedValue > 0) {
                decreaseApproval.response.message = '';
                decreaseApproval.dimmer = true;
                this.setState({decreaseApproval})
                const decreaseApprovalValue = await api.decreaseApproval(tokenAddress, decreaseApproval.spender, decreaseApproval.subtractedValue);
                decreaseApproval.response.ok = !decreaseApprovalValue.error; 
                decreaseApproval.response.message = decreaseApprovalValue.message;
                decreaseApproval.dimmer = false;
                this.setState({ decreaseApproval });
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
        const {decreaseApproval} = this.state;
        const showHide = decreaseApproval.dimmer ? "hide":"show";
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
    renderDecreaseApprovalForm() {
        const { summary, decreaseApproval } = this.state;
        return(
            <Form>
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            decreaseApproval.spender = event.target.value;
                            this.setState({ decreaseApproval })}
                        }
                        placeholder = "0x... address of spender" />
                    <Input 
                        className='basicToken' 
                        labelPosition='right' 
                        type="number"
                        onChange={event => {
                            decreaseApproval.subtractedValue = event.target.value;
                            this.setState({ decreaseApproval })}
                        }
                        placeholder = "amount to decrease" >
                            <Label>{'$.'+summary.symbol}</Label>
                            <input/>
                            <Label>{'x10^'+summary.decimals}</Label>
                    </Input>
                </Form.Field>
            </Form>
        );
    }



    render() {   
        let {decreaseApproval} = this.state;
        const metaClass = (!decreaseApproval.response.ok && decreaseApproval.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Decrease approval </Card.Header>
                    <Card.Meta>{this.renderDecreaseApprovalForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(decreaseApproval)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={decreaseApproval.dimmer} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }
}


export default DecreaseApprovalCard;