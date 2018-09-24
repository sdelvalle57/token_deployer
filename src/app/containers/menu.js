import React, {Component } from 'react';
import { Menu, Container, Popup } from 'semantic-ui-react';
import { connect } from 'react-redux';

import {Router} from '../routes';

const style = {
  background: 'gray',
  color: 'white',
  padding: '1em',
  borderRadius: '6px'
}

class MainMenu extends Component {

  goHome = () => {
    Router.push(`/index`)
  }


  render() {
      return (
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item active onClick = {this.goHome} as='a'> ERC20 </Menu.Item>
              <Popup
                trigger={
                  <Menu.Item as='a' >ERC721</Menu.Item>
                }
                on='click'
                content="Coming soon!"
                className = 'comingsoon'
                style = {style}
                hideOnScroll
                position = 'bottom right'
              />
            </Container>
          </Menu>

   
  
      )
  }
}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(MainMenu);


