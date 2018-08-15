import React, {Component} from 'react';
import SetPricesStep from './SetPricesStep';


class OwnerFactory extends Component {
    
    state = {
        factoryAddress: this.props.factoryAddress,
        network: this.props.network,
        tokenType: '0'
    };  

    componentWillReceiveProps(nextProps) {
        this.setState({
            factoryAddress: nextProps.factoryAddress,
            network: nextProps.network
        });
    }

    renderSetPrice() {
        const {network, factoryAddress} = this.state;
        return(
            <SetPricesStep
                network = {network}
                factoryAddress = {factoryAddress} />
        );
    }

    render() {   
        return(
            this.renderSetPrice()

        );
    }
}


export default OwnerFactory;