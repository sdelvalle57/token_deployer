import React, {Component} from 'react';
import { Segment, Grid, Header, Step, Input, Message, Button, Container } from 'semantic-ui-react';
import TokenTypesDropdown from './TokenTypesDropdown';
import apiBasicERC20 from '../../helpers/erc20/apiFactoryERC20';


class SetPricesStep extends Component {
    
    state = {
        factoryAddress: this.props.factoryAddress,
        network: this.props.network,
        prices: this.props.prices,
        tokenType: '0',
        loading: false,
        price: '',
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

    onSetPrice = async () => {
        const {factoryAddress, tokenType, price} = this.state;
        
        if(price >= 0 && price != '') {
            this.setState({message: '', loading: true});
            const setPrice = await apiBasicERC20.setPrice(
                factoryAddress, 
                tokenType, 
                price
            );
            this.setState({ loading: false, message: setPrice.message, error: setPrice.error });
        } else {
            this.setState({ message: "Price cannot be null", error: true });
        }
    }

    onChange = (event) => {
        const price = event.target.value;
        if(price >= 0) {
            this.setState({ price, message: '', error: false })
        }
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

    renderInput() {
        const {loading} = this.state;
        return(
            <Input 
                disabled = {loading}
                type = 'number'
                onChange = {this.onChange}
                placeholder='Set price in ETH'
                 />
        );
    }

    renderButton() {
        const {loading} = this.state;
        return(
            <Button 
                primary 
                className='fullWidth' 
                loading = {loading}
                onClick = {this.onSetPrice}>
                Set price
            </Button>
        );
    }

    renderStepResponse() {
        let {message, error, network} = this.state;
        if(error && message!='') {
            message = message.length > 80 ? message.slice(0, 80) : message;
            return(
                <Step>
                    <Container className="verticalStepResponse red">
                        {message}
                    </Container>
                </Step>
            );
        } else if(!error && message!=''){
            let url = parseInt(network.networkId) == 1? "":"rinkeby.";
            url = "https://"+url+"etherscan.io/tx/"+message;
            return( 
                <Step>
                    <Container className="verticalStepResponse normal">
                        <a target="_blank" 
                            rel="noopener noreferrer"
                            href={url}>
                            {message.slice(0,40)+"..."}
                        </a>
                    </Container>
                </Step>
            );
        } else {
            return null;
        }
    }

    render() {   
        return(
            <Segment padded className='ownerIndex'>
            <Header as='h3'>Only Owner</Header>
                <Grid columns={4} celled className='lastGridIndex'>
                    <Grid.Column>
                        <Header as='h4'>Set token price</Header>
                        <Step.Group fluid vertical>
                            <Step>{this.renderTypes()}</Step>

                            <Step>{this.renderInput()}</Step>

                            <Step>{this.renderButton()}</Step>

                            {this.renderStepResponse()}


                        </Step.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <p>The steps take up the entire column width</p>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}


export default SetPricesStep;