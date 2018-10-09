import React, {Component } from 'react';
import { Visibility, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import MainMenu from './menu';

import {Router} from '../routes';

class Header extends Component {

  goHome = () => {
    Router.push(`/index`)
  }


  render() {
      return (
        <Visibility
            once={false}>
            <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical>
                <MainMenu />
                {this.props.children}
            </Segment>
        </Visibility>

   
  
      )
  }
}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Header);


