import React, {Component} from 'react';
import { Form, Input, Label, Card,  Container, Dimmer, Loader, Grid} from 'semantic-ui-react';
import api from '../helpers/apiToken';
import solver from '../helpers/solver';


class StandardToken extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        allowance: {'spender':'', 'owner':'', 'response':''},
        approve: {
            'spender':'', 
            'value':'', 
            'response': {
                'ok':false, 
                'message':''
            }, 
            'dimmer': false
        },
        increaseApproval: {
            'spender':'', 
            'addedValue':'', 
            'response': {
                'ok':false, 
                'message':''
            }, 
            'dimmer': false
        },
        decreaseApproval: {
            'spender':'', 
            'subtractedValue':'', 
            'response': {
                'ok':false, 
                'message':''
            }, 
            'dimmer': false
        },
        transferFrom: {
            'from':'', 
            'to':'', 
            'value':'',
            'response': {
                'ok':false, 
                'message':''
            }, 
            'dimmer': false
        },
        requests: {
            'allowance':1, 
            'approve':2, 
            'increaseApproval':3, 
            'decreaseApproval':4,
            'transferFrom':5
        }
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
        const { requests, tokenAddress, allowance, approve, network, increaseApproval,
            decreaseApproval, transferFrom } = this.state;
        switch (typeOfRequest) {
            case requests.allowance:
                allowance.response = await api.allowance(tokenAddress, allowance.owner, allowance.spender, network);
                this.setState({ allowance });
                break;
            case requests.approve:
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
                break;
            case requests.increaseApproval:
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
                break;
            case requests.decreaseApproval:
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
                break;
            case requests.transferFrom:
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
                break;
        }
    }

    renderMeta(request, method) {
        return (
            <Container className="contRibbon">
                {this.renderResponse(method)}
                {this.renderRibbon(request)}
            </Container>
        )
    }

    renderRibbon(request) {
        const { requests } = this.state;
        let showHide = "hide";
        switch (request) {
            case requests.approve:
                const {approve} = this.state;
                showHide = approve.dimmer ? "hide":"show";
                break;
            case requests.increaseApproval:
                const {increaseApproval} = this.state;
                showHide = increaseApproval.dimmer ? "hide":"show";
                break;
            case requests.decreaseApproval:
                const {decreaseApproval} = this.state;
                showHide = decreaseApproval.dimmer ? "hide":"show";
                break;
            case requests.transferFrom:
                const {transferFrom} = this.state;
                showHide = transferFrom.dimmer ? "hide":"show";
                break;
        }
        return <Label className={"tfRibbon " + showHide} onClick={ this.onSubmit(request) } as='a' color='blue' ribbon='right'>Send</Label>
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
            let url = network == 1? "":"rinkeby.";
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
    renderAllowanceForm() {
        const { requests, allowance } = this.state;
        return(
            <Form onSubmit={ this.onSubmit(requests.allowance)}>
                <Form.Field>
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        onChange={event => {
                            allowance.owner = event.target.value;
                            this.setState({ allowance })}
                        }
                            
                        placeholder = "0x... address of owner" />
                    <Input 
                        className='basicToken' 
                        label='eth://' 
                        action={{ icon: 'search' }} 
                        onChange={event => {
                            allowance.spender = event.target.value;
                            this.setState({ allowance })}
                        }
                        placeholder = "0x... address of spender" >
                    </Input>
                </Form.Field>
            </Form>
        );
    }

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

       /* Principal Rendering */
    renderAllowance() {
        let { summary, allowance} = this.state;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Check allowance </Card.Header>
                    <Card.Meta>{this.renderAllowanceForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra >
                    { allowance.response!=""? 
                        solver.formatNumber(
                            api.convertToEther(allowance.response)) +" "+ summary.symbol+"s"
                        :"" }
                </Card.Content>
            </Card>
        );
    }

    renderApprove() {
        let {requests, approve} = this.state;
        const metaClass = (!approve.response.ok && approve.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Approve </Card.Header>
                    <Card.Meta>{this.renderApproveForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(requests.approve, approve)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={approve.dimmer} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }

    renderIncreaseApproval() {
        let {requests, increaseApproval} = this.state;
        const metaClass = (!increaseApproval.response.ok && increaseApproval.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Increase approval </Card.Header>
                    <Card.Meta>{this.renderIncreaseApprovalForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(requests.increaseApproval, increaseApproval)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={increaseApproval.dimmer} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }

    renderDecreaseApproval() {
        let {requests, decreaseApproval} = this.state;
        const metaClass = (!decreaseApproval.response.ok && decreaseApproval.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Decrease approval </Card.Header>
                    <Card.Meta>{this.renderDecreaseApprovalForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(requests.decreaseApproval, decreaseApproval)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={decreaseApproval.dimmer} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
            </Card>
        );
    }

    renderTransferFrom() {
        let {requests, transferFrom} = this.state;
        const metaClass = (!transferFrom.response.ok && transferFrom.response.message!='')?
            'red':'normal';
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Transfer from </Card.Header>
                    <Card.Meta>{this.renderTransferFromForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra className={metaClass}>
                    { this.renderMeta(requests.transferFrom, transferFrom)  }
                </Card.Content>

                <Dimmer className='cardDimmer' active={transferFrom.dimmer} >
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
                            <Card.Group className="tokenCards" >
                                {this.renderAllowance()} 
                                {this.renderApprove()} 
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Card.Group className="tokenCards" >
                                {this.renderIncreaseApproval()} 
                                {this.renderDecreaseApproval()}
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>

                     <Grid.Row>
                        <Grid.Column>
                            <Card.Group className="tokenCards" >
                                {this.renderTransferFrom()} 
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                   
                </Grid>

                

            );
        }
        return null;
    }
}


export default StandardToken;