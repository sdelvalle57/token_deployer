import React, { Component } from 'react'
import {Button, Container, Header, Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';

import PageLayout from '../containers/page_layout';
import MainHeader from '../containers/main_header';

import { Router } from '../routes';

class Index extends Component {

  static getInitialProps({reduxStore}) {
    return {};
  }

  render() {
    return (
      <PageLayout>
        <MainHeader>
          <Container text>
            <Header
              as='h1'
              content='ERC20 Token'
              inverted
              className='homebig'/>
            <Header
              as='h2'
              content='Create and manage Tokens on the Rinkeby or Main network'
              inverted
              className='homemedium'/>
          </Container>
        </MainHeader>
      </PageLayout>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Index);
