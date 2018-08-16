import React, {Component} from 'react';
import { Step, Icon, Input, Popup, Button, Dimmer, Segment, Loader, Container } from 'semantic-ui-react';
import TokenTypesDropdown from './TokenTypesDropdown';
import solver from '../../helpers/solver';
import apiFactoryERC20 from '../../helpers/erc20/apiFactoryERC20';


class TokenDeployerStep extends Component {
    
    state = {
        factoryAddress: this.props.factoryAddress,
        network: this.props.network,
        prices: this.props.prices,
        tokenType: '0',
        name: '', 
        symbol: '',
        supply: 0,
        dimmerActive: false,
        message: '',
        error: false
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

    onChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        if(id=='Name') {
            this.setState({name: value});
        } else if(id == 'Symbol') {
            this.setState({symbol: value});
        } else if(id == 'Supply') {
            this.setState({supply: value*1000000});
        }
    }

    launch = async () => {
        const {network, name, symbol, supply, factoryAddress, tokenType, prices} = this.state;
        const tokenIntType = parseInt(tokenType);
        if(network.networkNotSet || network.providerNotSet || network.notLogged) {
            this.setState({error: true, message: network.message});
        } else  {
            this.setState({error: false, message: '', dimmerActive:true})
            const tx = await apiFactoryERC20.createToken(
                factoryAddress, tokenIntType, name, symbol, supply, prices[tokenIntType]);
            this.setState({ error: tx.error, message: tx.message, dimmerActive: false});
        }
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

    renderInput(type, icon, type2) {
        return(
            <Input 
                id = {type}
                className = 'deployStep'
                type = {type2}
                icon= {icon} 
                iconPosition='left'
                onChange = {this.onChange}
                placeholder= {type} />
        );
    }

    renderSupply() {
        const {supply} = this.state;
        const formattedSupply = solver.formatNumber(supply);
        return (
            <p>{formattedSupply}</p>
        )
    }

    renderLaunchButton() {
        const {name, symbol, supply} = this.state;
        const disabled = name=='' || symbol=='' || supply == 0;
        return(
            <Button 
                primary 
                onClick={this.launch}
                disabled={disabled}
            >Launch</Button>
        )
    }

    renderResponse() {
        let {message, error, network} = this.state;
        if(error && message!='') {
            return(
                <Container className="verticalStepResponse red">
                    {message}
                </Container>
            );
        } else if(!error && message!=''){
            let url = parseInt(network.networkId) == 1? "":"rinkeby.";
            url = "https://"+url+"etherscan.io/tx/"+message;
            return( 
                <Container className="verticalStepResponse normal">
                    <a target="_blank" 
                        rel="noopener noreferrer"
                        href={url}>
                        {message.slice(0,40)+"..."}
                    </a>
                </Container>
            );
        } else {
            return null;
        }
    }

    renderSteps() {
        return(
            <Step.Group widths={7}>
                <Step active>
                    <Icon name='globe'  />
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
                    <Step.Content>
                        <Step.Title>Name</Step.Title>
                        <Step.Description>{this.renderInput('Name', 'user', 'text')}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Step.Content>
                        <Step.Title>Symbol</Step.Title>
                        <Step.Description>{this.renderInput('Symbol', 'registered', 'text')}</Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Step.Content>
                        <Step.Title>
                            <Popup trigger={<Icon name='question circle'></Icon>} content='Value is in millions' />
                             Supply
                        </Step.Title>
                        <Step.Description>
                            {this.renderInput('Supply', 'chart line', 'number')}
                            {this.renderSupply()}
                        </Step.Description>
                    </Step.Content>
                </Step>
                <Step >
                    <Icon name='rocket' />
                    <Step.Content>
                        <Step.Description>{this.renderLaunchButton()}</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        );
    }

    render() {   
        const {dimmerActive} = this.state;
        return(
            <Dimmer.Dimmable as={Segment} dimmed={dimmerActive}>
                {this.renderSteps()}
                {this.renderResponse()}

                <Dimmer active={dimmerActive} >
                    <Loader size='small'>Sending Tx</Loader>
                </Dimmer>
        </Dimmer.Dimmable>

        );
    }
}


export default TokenDeployerStep;