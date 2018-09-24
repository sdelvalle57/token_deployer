import React, {Component} from 'react';
import { Step } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        const {network} = this.props;
        let providerMessage = "Choose a web3 provider";
        let logginMessage = "Not logged";
        let networkMessage = "Select the Main or Rinkeby network";
        if(!network.providerNotSet) {
            providerMessage = window.web3.currentProvider.constructor.name;
        }
        if(!network.notLogged) {
            logginMessage = "Logged";
        }
        if(!network.networkNotSet) {
            networkMessage  = "";
            switch(parseInt(network.networkId)) {
                case 1: 
                    networkMessage = "Main";
                    break;
                case 4:
                    networkMessage = "Rinkeby";
                    break;
            }
            networkMessage +=  " network selected"
        }
        return(
            <Step.Group ordered>
                <Step completed = {!network.providerNotSet} active = {network.providerNotSet}>
                <Step.Content>
                    <Step.Title>Provider</Step.Title>
                    <Step.Description>{providerMessage}</Step.Description>
                </Step.Content>
                </Step>

                <Step completed = {!network.networkNotSet} active = {network.networkNotSet}>
                <Step.Content>
                    <Step.Title>Network</Step.Title>
                    <Step.Description>{networkMessage}</Step.Description>
                </Step.Content>
                </Step>

                <Step completed = {!network.notLogged} active = {network.notLogged}>
                <Step.Content>
                    <Step.Title>Loggin</Step.Title>
                    <Step.Description>{logginMessage}</Step.Description>
                </Step.Content>
                </Step>

            </Step.Group>
        )
    }
}

function mapStateToProps(state) {
    const {network} = state;
    return {network};
}

export default connect(mapStateToProps)(Footer);