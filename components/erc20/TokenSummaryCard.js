import React, {Component} from 'react';
import {Card, Header} from 'semantic-ui-react';
import solver from '../../helpers/solver';


class TokenSummaryCard extends Component {
    
    state = {
        summary: this.props.summary,
        myBalance: this.props.myBalance
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            summary: nextProps.summary,
            myBalance: nextProps.myBalance
        });
    }

    renderSupply() {
        const {summary} = this.state;
        return(
            <p>
                Total supply is {solver.
                formatNumber(solver.convertToEther(summary.totalSupply))} {summary.symbol}s
            </p>
        )
    }

    renderMyBalance() {
        const {summary, myBalance} = this.state;
        if(myBalance == null) return null;
        return(
            <p>
                My Balance is {solver.
                formatNumber(solver.convertToEther(myBalance))} {summary.symbol}s
            </p>
        )
    }

    renderDescription() {
        return(
            <Header as='h5'>
                {this.renderSupply()}
                {this.renderMyBalance()}
            </Header>
        )
    }

    
    
    render() {   
        let {summary, myBalance} = this.state;
        if(typeof summary.totalSupply != 'undefined') {        
            const items = [
                {
                    header: "Name and symbol: "+ summary.name+"("+summary.symbol+")",
                    meta: summary.decimals + " decimals",
                    description: this.renderDescription(),
                    extra: 'owner: '+summary.owner
                }
            ];
            return <Card.Group id='summaryCard' items={ items } />;
        }
        return null;
    }
}


export default TokenSummaryCard;