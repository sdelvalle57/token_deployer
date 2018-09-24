import React, {Component} from 'react';
import { Container} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {checkNetwork} from '../actions/action_network';

import Footer from '../components/footer';



class PageLayout extends Component {

    componentDidMount() {
        this.setCheckNetworkInterval();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setCheckNetworkInterval = () => {
        let {dispatch} = this.props;
        this.interval = setInterval(() => {
            dispatch(checkNetwork());
        }, 2000);
    }

   
    render() {
        return(
            <Container className='parent'>
                {this.props.children}
                <Footer />
            </Container>
        );
    }
}

export default connect(null)(PageLayout);
