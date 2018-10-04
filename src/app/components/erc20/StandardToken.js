import React, {Component} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import AllowanceCard from './AllowanceCard';
import ApproveCard from './ApproveCard';
import IncreaseApproval from './IncreaseApprovalCard';
import DecreaseApproval from './DecreaseApprovalCard';
import TransferFromCard from './TransferFromCard';


class StandardToken extends Component {
    
    state = {
        tokenAddress: this.props.tokenAddress,
        summary: this.props.summary,
        network: this.props.network,

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
                            <Card.Group className="tokenCards" >
                                <AllowanceCard 
                                    tokenAddress = {tokenAddress}
                                    summary = {summary}
                                    network = {network} />
                                <ApproveCard 
                                    tokenAddress = {tokenAddress}
                                    summary = {summary}
                                    network = {network} /> 
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Card.Group className="tokenCards" >
                                <IncreaseApproval 
                                    tokenAddress = {tokenAddress}
                                    summary = {summary}
                                    network = {network} />
                                <DecreaseApproval 
                                    tokenAddress = {tokenAddress}
                                    summary = {summary}
                                    network = {network} />
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>

                     <Grid.Row>
                        <Grid.Column>
                            <Card.Group className="tokenCards" >
                                <TransferFromCard 
                                    tokenAddress = {tokenAddress}
                                    summary = {summary}
                                    network = {network} />
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