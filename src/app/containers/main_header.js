import React, {Component } from 'react';
import { Menu, Visibility, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import MainMenu from './menu';

import {Router} from '../routes';

const style = {
  background: 'gray',
  color: 'white',
  padding: '1em',
  borderRadius: '6px'
}

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


