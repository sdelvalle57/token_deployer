import React, {Component} from 'react';
import { List, Image } from 'semantic-ui-react';
import makeBlockie from 'ethereum-blockies-base64';
import apiFactoryERC20 from '../helpers/erc20/apiFactoryERC20';
import apiBasicERC20 from '../helpers/erc20/apiBasicERC20';
import solver from '../helpers/solver';


class MyDeployedTokens extends Component {
    
    state = {
        network: this.props.network,
        factoryAddress: this.props.factoryAddress,
        myDeployedTokens: [],
        summaryToken: {}
    };  

    async componentWillReceiveProps(nextProps) {
        const {summaryToken} = this.state; 
        const network = nextProps.network;
        const factoryAddress = nextProps.factoryAddress;
        if(this.isConnected(network) && factoryAddress!=''){
            const who = network.accounts[0];
            const myDeployedTokens = await apiFactoryERC20.getContracts(factoryAddress, who);
            this.setState({myDeployedTokens});
            if(myDeployedTokens.length > 0) {
                for(let j = 0; j < myDeployedTokens.length; j++) {
                    const address = myDeployedTokens[j];
                    const summary = await apiBasicERC20.getSummary(address);
                    summaryToken[address] = summary;
                }
            }
        } else {
            this.setState({myDeployedTokens: []});
        }
        this.setState({
            network, factoryAddress, summaryToken
        });
    }

    onItemClick = (address) => {
        this.props.callback({address});
    }

    isConnected(network) {
        return(!network.networkNotSet && !network.providerNotSet && !network.notLogged
            && network.accounts && network.accounts.length > 0)
    
    }

    summaryFetched(summary) {
        return(!!summary && summary.symbol != 'undefined' 
                && summary.name != 'undefined' 
                && summary.totalSupply != 'undefined')
    }

    getBlockie(address) {
        return blockies.create({
            seed: address,
        });
    }
    

    renderMyTokens() {
        const {myDeployedTokens, summaryToken} = this.state;
        if(myDeployedTokens.length == 0) return null;
        let i = 0;
        const items = myDeployedTokens.map(address => {
            
            const summary = summaryToken[address];
            let symbol = "";
            let name = "Loading";
            let supply = "Loading";
            if(this.summaryFetched(summary)) {
                symbol = summary.symbol;
                name = summary.name;
                supply = solver.formatNumber(solver.convertToEther(summary.totalSupply));
            }
            i++;
            return (
                <List.Item as='a' key={i} onClick = {this.onItemClick.bind(this, address)} >
                    <Image avatar src={makeBlockie(address)} />
                    <List.Content className="contentIndexList" >
                        <List.Header >{name + "("+symbol+")"}</List.Header>
                        <List.Description>
                            {"supply: "+supply + " "+symbol+"s"} 
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
              
          });
      
        return items;
    }

    render() {   
        return(
            <List className='listIndex' divided animated >
                <List.Item>
                    <List.Content>
                        <List.Header as='h4'>My deployed tokens</List.Header>
                    </List.Content>
                </List.Item>
                {this.renderMyTokens()}
                
            </List>
        );
    }
}


export default MyDeployedTokens;