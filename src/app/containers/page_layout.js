import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './menu';
import Footer from '../components/footer';
import LoginModal from './login_modal';
import {connect} from 'react-redux';

import { Router } from '../routes';


class PageLayout extends Component {

    componentWillReceiveProps({login}) {
        if(!login.user.uid) {
            Router.pushRoute('/');
        }
    }

    render() {
        return(
            <Container className="parent">
                <LoginModal />
                <Menu />
                {this.props.children}
                <Footer />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const {login} = state;
    return {login};
}

export default connect(mapStateToProps)(PageLayout);
