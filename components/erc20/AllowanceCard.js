import React, {Component} from 'react';
import { Form, Input, Card, Loader, Container} from 'semantic-ui-react';
import api from '../../helpers/erc20/apiStandardERC20';
import solver from '../../helpers/solver';


class AllowanceCard extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        allowance: {'spender':'', 'owner':'', 'response':'', 'loading':false, 'error':false},
        
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
        const { tokenAddress, allowance } = this.state;
        allowance.loading = true;
        this.setState({allowance});
        const ans = await api.allowance(tokenAddress, allowance.owner, allowance.spender);
        allowance.response = ans.message;
        allowance.error = ans.error;
        allowance.loading = false;
        this.setState({ allowance });
    }

    renderResponse() {
        const {allowance, summary} = this.state;
//allowance: {'spender':'', 'owner':'', 'response':'', 'loading':false, 'error':false},
        if(allowance.error && allowance.response!='') {
            allowance.response = allowance.response.length > 80 ? 
            allowance.response.slice(0, 80):allowance.response;
            return(
                <Container className="contResponse red">
                    {allowance.response}
                </Container>
            );
        } else if(!allowance.error && parseInt(allowance.response)>=0){
            return(
                <Container className="contResponse green">
                    { solver.formatNumber(
                            solver.convertToEther(allowance.response)) +" "+ summary.symbol+"s"}
                </Container>
            );
        } else {
            return (<Container className="contResponse"></Container>);
        }
    }

   
    /* Forms */
    renderAllowanceForm() {
        const { allowance } = this.state;
        return(
            <Form onSubmit={ this.onSubmit()}>
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

    renderValue() {
        let { summary, allowance} = this.state;
        if(!allowance.loading) {
            return(
                this.renderResponse()
            )
        }
        return null; 
    }

   
    render() {   
        let { allowance} = this.state;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Check allowance </Card.Header>
                    <Card.Meta>{this.renderAllowanceForm()}</Card.Meta>
                </Card.Content>
                <Card.Content extra >
                    <Loader active={allowance.loading} inline='centered' />
                    {this.renderValue()}
                </Card.Content>
            </Card>
        );
    }
}


export default AllowanceCard;