import React, {Component} from 'react';
import SetPricesStep from './SetPricesStep';


class OwnerFactory extends Component {
    
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

    renderSetPrice() {
        const {network, factoryAddress, prices} = this.state;
        return(
            <SetPricesStep
                network = {network}
                factoryAddress = {factoryAddress}
                prices = {prices} />
        );
    }

    render() {   
        return(
            this.renderSetPrice()

        );
    }
}


export default OwnerFactory;