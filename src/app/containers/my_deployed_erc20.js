import React, {Component} from 'react';
import { connect } from 'react-redux';
import {List, Image, Container, Header} from 'semantic-ui-react';

import {isAddressValid} from '../helpers/solver';

import {getDeployedERC20} from '../actions/action_deployed_tokens';
import {setERC20Address} from '../actions/action_contracts';
import {erc20Summary, setERC20SummaryError} from '../actions/action_erc20';

class MyDeployedERC20 extends Component {

    componentWillReceiveProps({network: {networkId, notLogged}, dispatch}) {
        if( (networkId == "1" || networkId == "4") && !notLogged) {
            dispatch(getDeployedERC20());
        }
    }

    onItemClick = (address) => {
        const {dispatch} = this.props;
        dispatch(setERC20Address(address));
        if(isAddressValid(address))
            dispatch(erc20Summary());
        else dispatch(setERC20SummaryError("Not valid eth address"));

    }

    renderList() {
        const {network: {networkId, notLogged}, deployedTokens} = this.props;
        if( (networkId != "1" && networkId != "4") || notLogged) {
            return(
                <Container className='notokens'>
                    Unable to fetch your deployed tokens, select and login to
                     the correct network
                </Container>
            )
        } else if(deployedTokens.erc20.error) {
            return(
                <Container className='notokens'>
                    {deployedTokens.erc20.message}
                </Container>
            )
        }
        const summaries = deployedTokens.erc20.summaries;


        return summaries.map((token) => {
            return(
                <List.Item 
                    as='a' 
                    key={token.address} 
                    onClick = {
                        this.onItemClick.bind(this, token.address)
                    } >
                    <Image avatar src={token.blockie} />
                    <List.Content className="contentIndexList" >
                        <List.Header >
                            {token.name.message + "("+token.symbol.message+")"}
                        </List.Header>
                        <List.Description>
                            <strong>Supply: </strong>
                            {token.totalSupply.message + " "+token.symbol.message+"s"} 
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        })
    }

    render() {
             return (
            <Container className='deployed'>
            <Header as='h2'>
                My deployed tokens
            </Header>
                <List className='listIndex' divided animated >
                   
                    {this.renderList()}
                </List>
                
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const {network, contracts, deployedTokens} = state;
    return {network, contracts, deployedTokens}
}

export default connect(mapStateToProps)(MyDeployedERC20);

