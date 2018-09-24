import React, { Component } from 'react'
import {Button, Container, Header, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';

import {openLoginModal} from '../actions/action_login';
import {getStarterClicked, getStartedInitial} from '../actions/action_get_started';
import {switchToPage} from '../actions/action_current_page';
import {HOME_PAGE} from '../actions/types';

import PageLayout from '../containers/page_layout';

import { Router } from '../routes';

class Index extends Component {

  static getInitialProps({reduxStore}) {
    reduxStore.dispatch(switchToPage(HOME_PAGE));
    return {};
  }

  componentWillReceiveProps({getStarted, dispatch, login}) {
    if(getStarted.clicked && !!login.user.uid) {
      dispatch(getStartedInitial());
      Router.pushRoute('/vision_page');
    }
  }

  onGetStarterClick = () => {
    const {dispatch, login} = this.props;
    if(!!login.user.uid) {
      Router.pushRoute('/vision_page');
    } else if(!login.loading) {
      dispatch(getStarterClicked());
      dispatch(openLoginModal());
    }
  }

  render() {
    return (
      <PageLayout>
        <Container 
          className = "parent" 
          textAlign='center' >
            <Header className='homebig'
              as='h1' 
              content='dCom Regional Development'
              inverted />
            <Header className='homemedium'
              as='h2'
              content='"The best no fluff education system that teaches you how to use the 
              blockchain by using it to create your regional Internet Service Provider."'
              inverted/>
            
            <Button
              primary 
              size='huge' 
              onClick={this.onGetStarterClick} >
              Get Started
              <Icon name='right arrow' />
            </Button>
        </Container>
      </PageLayout>
    )
  }
}

function mapStateToProps(state) {
  const {login, getStarted} = state;
  return {login, getStarted};
}

export default connect(mapStateToProps)(Index);
