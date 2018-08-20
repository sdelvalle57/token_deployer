import React, {Component} from 'react';
import { Form, Input, Label, Card,  Container, Dimmer, Loader} from 'semantic-ui-react';
import api from '../../helpers/erc20/apiStandardERC20';

class ApproveCard extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        approve: {
            'spender':'', 
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
        const {tokenAddress, approve, network } = this.state;
        if(network.networkNotSet || network.providerNotSet || network.notLogged) {
            approve.response.message = network.message;
            approve.response.ok = false;
            this.setState({approve});
        } else if(approve.spender != "" && approve.value > 0) {
            approve.response.message = '';
            approve.dimmer = true;
            this.setState({approve})
            const approveValue = await api.approve(tokenAddress, approve.spender, approve.value);
            approve.response.ok = !approveValue.error; 
            approve.response.message = approveValue.message;
            approve.dimmer = false;
            this.setState({ approve });
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
        const {approve} = this.state;
        let showHide = approve.dimmer ? "hide":"show";
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
    renderApproveForm() {
        const { summary, approve } = this.state;
        return(
            <Form>
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            approve.spender = event.target.value;
                            this.setState({ approve })}

                        }
                        placeholder = "0x... address of spender" />
                    <Input 
                        className='basicToken' 
                        labelPosition='right' 
                        type="number"
                        onChange={event => {
                            approve.value = event.target.value;
                            this.setState({ approve })}
                        }
                        placeholder = "amount to approve" >
                            <Label>{'$.'+summary.symbol}</Label>
                            <input/>
                            <Label>{'x10^'+summary.decimals}</Label>
                    </Input>
                </Form.Field>
            </Form>
        );
    }

    
    render() {   
        let {approve} = this.state;
        const metaClass = (!approve.response.ok && approve.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Approve </Card.Header>
                    <Card.Meta>{this.renderApproveForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(approve)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={approve.dimmer} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }
}


export default ApproveCard;