import React, {Component} from 'react';
import {  Dropdown } from 'semantic-ui-react';

class TokenDeployerStep extends Component {
    
    state = {
        network: this.props.network,
        prices: this.props.prices,
        tokenType: '0',
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            network: nextProps.network,
            prices: nextProps.prices
        });
    }

    getOptions(prices) {

        for(let j = 0; j < prices.length; j++) {
            prices[j] = parseFloat(prices[j]);
            
        }
        const options = [
            { key: 'basic', text: 'Basic', description: prices[0] + " ETH", value: '0' },
            { key: 'sytandard', text: 'Standard', description: prices[1]+ " ETH", value: '1' }
        ]
        return options;

    }

    render() {   
        const {prices} = this.state;
        if(prices == null || prices.length == 0) return null;
        const options = this.getOptions(prices);
        const {network, tokenType} = this.state;
        let networkId = parseInt(network.networkId);
        const isNetworkNotSelected = (networkId != 1 && networkId != 4);
        return(
            <Dropdown 
                fluid
                disabled={isNetworkNotSelected} 
                value={tokenType}
                options={options} 
                onChange= {(e, result) => {
                    this.props.callback({tokenType: result.value});
                    this.setState({tokenType: result.value})
                    }
                }  >
                
            </Dropdown>
        )
    }
}


export default TokenDeployerStep;