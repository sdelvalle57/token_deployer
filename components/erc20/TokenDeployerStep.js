import React, {Component} from 'react';
import { Step, Icon } from 'semantic-ui-react';
import TokenTypesDropdown from './TokenTypesDropdown';


class TokenDeployerStep extends Component {
    
    state = {
        factoryAddress: this.props.factoryAddress,
        network: this.props.network,
        prices: this.props.prices,
        tokenType: '0'
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            factoryAddress: nextProps.factoryAddress,
            network: nextProps.network,
            prices: nextProps.prices
        });
    }

    tokenTypesDropdownCallback = (result) => {
        this.setState({tokenType: result.tokenType});
    }

    renderNetwork() {
        const {network} = this.state;
        if(!network.networkNotSet) {
            let networkMessage  = "";
            switch(parseInt(network.networkId)) {
                case 1: 
                    networkMessage = "Main";
                    break;
                case 4:
                    networkMessage = "Rinkeby";
                    break;
            }
            return(<p>{networkMessage}</p>);
        }
        return null;
    }

    renderTypes() {
        const {network, prices} = this.state;
        return(
            <TokenTypesDropdown
                network = {network}
                callback = {this.tokenTypesDropdownCallback}
                prices = {prices}/>
        );
    }

    render() {   
        return(
            <Step.Group widths={7}>
                <Step active>
                    <Icon name='globe' />
                    <Step.Content>
                        <Step.Title>Network</Step.Title>
                        <Step.Description>{this.renderNetwork()}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='list' />
                    <Step.Content>
                        <Step.Title>Type</Step.Title>
                        <Step.Description>{this.renderTypes()}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='list' />
                    <Step.Content>
                        <Step.Title>Select type</Step.Title>
                        <Step.Description>{this.renderTypes()}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='list' />
                    <Step.Content>
                        <Step.Title>Select type</Step.Title>
                        <Step.Description>{this.renderTypes()}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='list' />
                    <Step.Content>
                        <Step.Title>Select type</Step.Title>
                        <Step.Description>{this.renderTypes()}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='list' />
                    <Step.Content>
                        <Step.Title>Select type</Step.Title>
                        <Step.Description>{this.renderTypes()}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='list' />
                    <Step.Content>
                        <Step.Title>Select type</Step.Title>
                        <Step.Description>{this.renderTypes()}</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>

        );
    }
}


export default TokenDeployerStep;