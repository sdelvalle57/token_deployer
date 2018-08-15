import React, {Component} from 'react';
import {  Dropdown } from 'semantic-ui-react/dist/commonjs';

class TokenDeployerStep extends Component {
    
    state = {
        network: this.props.network,
        tokenType: '0',
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            network: nextProps.network
        });
    }

    render() {   
        const options = [
            { key: 'basic', text: 'Basic', description: 'Free', value: '0' },
            { key: 'sytandard', text: 'Standard', description:'0.2 ETH', value: '1' }
          ]
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