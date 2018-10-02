import React, { Component } from 'react'
import {Container, Header, Message} from 'semantic-ui-react';
import { connect } from 'react-redux';

import PageLayout from '../containers/page_layout';
import MainHeader from '../containers/main_header';
import TokenReader from '../containers/token_reader';

class Index extends Component {

  static getInitialProps({reduxStore}) {
    return {};
  }

  renderErrorMessage() {
    const {contracts} = this.props;
    if(!!contracts.errorMessage) {
      return(
        <Message 
              className='headermessage'
              attached='bottom'
              error 
              header="Oops!" 
              content={contracts.errorMessage} />
      )
    }
    return null;
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
            <TokenReader />
          </Container>
          {this.renderErrorMessage()}
          
        </MainHeader>

      </PageLayout>
    )
  }
}

function mapStateToProps(state) {
  const {contracts} = state;
  return {contracts};
}

export default connect(mapStateToProps)(Index);
