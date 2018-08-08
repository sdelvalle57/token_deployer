import React, {Component } from 'react';
import { Menu, Modal, Button, Container } from 'semantic-ui-react';
import { Link } from '../routes';
import web3 from '../ethereum/api/web3';

class Header extends Component {
  
  state = {
    open: false
  }

  show  = () => this.setState({ open: true }) ;
  close = () => this.setState({ open: false }) ;

  /* 
  TODO:
  add <Button positive icon='ethereum' labelPosition='right' content='Contribute' />
  inside Modal.Actions, next to the other button
  
  TODO:
  <Modal.Actions>
    TODO: handle error message when  click oo contribte
  </Modal.Actions> 
  */
  renderModal () {
    const { open } = this.state;
    return(
      <Modal size='tiny' open={open} onClose={this.close}>
          <Modal.Header>About</Modal.Header>
          <Modal.Content>
            {this.renderContent()}
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>Close</Button>
            
          </Modal.Actions>
          
        </Modal>
    );
  }

  renderLink(num) {
    let message = "Open Zeppelin Framework";
    let href = "https://openzeppelin.org/";
    if(num == 1) {
      message = "https://github.com/sdelvalle57/token_deployer";
      href = "https://github.com/sdelvalle57/token_deployer";
    } else if(num == 2) {
      message = "Linkedin profile";
      href = "https://www.linkedin.com/in/santiago-del-valle-sdelvalle57-96654969/";
    }
    return (
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        href={href}>
        {message}
      </a>
    );
  }

  renderContent() {
    return (
      <p align="justify">
        <strong>ERC Token Interface</strong><br/><br/>
        The purpose of this project is to create an ERC Token interface to read and launch 
        tokens on the test and the main network. < br/>
        We will use {this.renderLink(0)}  for the 
        contracts and we will add some other 
        contracts for the deployments of these.< br/>

        This is a personal project thus any collaboration would be appreciated, developers, 
        designers and enthusiasts are welcome to contribute.<br/>
        Please pass this project as many peers that you can, is on behalf of the community.<br/>
        Visit {this.renderLink(1)}  for the latest 
        deployments.<br/>
        If you want to contribute please launch a token and send some 
        ether to the contract(this way is much more appreciated). <br/>
        Email: sdelvalle57@gmail.com <br/>
        {this.renderLink(2)}
      </p>
    );
  }

  render() {
      return (
        <Container >
          <Menu style={{ marginTop: '10px' }}>
            <Link route="/">
              <a className="item">ERC-token.online</a>
            </Link>
      
            <Menu.Menu position="right">
              
                <a className="item" onClick = {this.show}>About</a>
            </Menu.Menu>
        </Menu>
        {this.renderModal()}

        
      </Container>
      )
  }
}

export default Header;



/*

-*/