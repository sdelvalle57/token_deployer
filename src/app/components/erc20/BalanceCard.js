import React, {Component} from 'react';
import { Form, Input, Card, Container, Loader } from 'semantic-ui-react';
import api from '../../helpers/erc20/apiBasicERC20';
import solver from '../../helpers/solver';


class BalanceCard extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        balance: {'who':'', 'response':''},
        loading: false
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
        const { tokenAddress, balance} = this.state;
        this.setState({loading: true});
        balance.response = await api.balanceOf(tokenAddress, balance.who);
        this.setState({ balance, loading:false });
        
    }

    renderMeta(request) {
        return (
            <Container className="contRibbon">
                {this.renderResponse()}
                {this.renderRibbon(request)}
            </Container>
        )
    }

    renderCheckBalancesForm() {
        const { requests, balance } = this.state;
        return(
            <Form onSubmit={ this.onSubmit() } >
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

    renderValue() {
        let { summary, balance, loading} = this.state;
        if(!loading) {
            return(
                <p>
                    { balance.response!=""? 
                    solver.formatNumber(solver.
                        convertToEther(balance.response)) +" "+ summary.symbol+"s"
                    :"" }
                </p>
            )
        }
        return null; 
    }

    
    render() {   
        let { loading} = this.state;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Check balance of address </Card.Header>
                    <Card.Meta>{this.renderCheckBalancesForm()}</Card.Meta>
                </Card.Content>
                
                <Card.Content extra>
                    <Loader active={loading} inline='centered' />  
                    {this.renderValue()}
                </Card.Content>
            </Card>
        );
    }
}


export default BalanceCard;