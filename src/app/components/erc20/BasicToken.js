import React, {Component} from 'react';
import { Card, Grid } from 'semantic-ui-react';
import TransferCard from './TransferCard';
import BalanceCard from './BalanceCard';


class BasicToken extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,
        requests: {'balanceOf':1, 'transfer':2},
        balance: {'who':'', 'response':''},
        transfer: {'to':'', 'value':'', 'response': {'ok':false, 'message':''}},
        dimmerActive: false,
        loading: false
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            tokenAddress: nextProps.tokenAddress,
            summary: nextProps.summary,
            network: nextProps.network
        });
    }

    render() {   
        let {tokenAddress, summary, network} = this.state;
        if(typeof tokenAddress != 'undefined' && typeof summary.totalSupply != 'undefined') {  
            return(
                <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group className="tokenCards" id='basicTokenCards' >
                            <BalanceCard 
                                tokenAddress = {tokenAddress}
                                summary = {summary}
                                network = {network} />
                            <TransferCard
                                tokenAddress = {tokenAddress}
                                summary = {summary}
                                network = {network}
                                value = {''}
                                disabled = {false} />
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