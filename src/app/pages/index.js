import React, { Component } from 'react'
import {Container, Header, Message, Grid} from 'semantic-ui-react';
import { connect } from 'react-redux';

import PageLayout from '../containers/page_layout';
import MainHeader from '../containers/main_header';
import TokenReader from '../containers/token_reader';
import MyDeployedERC20 from '../containers/my_deployed_erc20';

class Index extends Component {

  static getInitialProps({reduxStore}) {
    return {};
  }

  renderErrorMessage() {
    const {summary} = this.props;
    if(!!summary.error) {
      return(
        <Message 
              className='headermessage'
              attached='bottom'
              error 
              header="Oops!" 
              content={summary.message} />
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
        <Grid 
          celled='internally'
          container 
          className='gridmain' 
          stackable 
          verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={5}>
              <MyDeployedERC20 />
            </Grid.Column>
            <Grid.Column floated='right' width={11}>

            </Grid.Column>
          </Grid.Row>
       
      </Grid>

      </PageLayout>
    )
  }
}

function mapStateToProps(state) {
  const {erc20: {summary}} = state;
  return {summary};
}

export default connect(mapStateToProps)(Index);
