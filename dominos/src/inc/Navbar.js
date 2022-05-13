import React from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';

function Navbar1(){
    return(
        <div>
    <Navbar  bg="light" variant="light ">
  
    <Navbar.Brand href="#home"><img src={require('../images/Logo.png')}></img></Navbar.Brand>
    <Nav className="ms-auto  Nav">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">Our Menu</Nav.Link>
      <Nav.Link href="/">resturant near me</Nav.Link>
      <Nav.Link href="/">gift card</Nav.Link>
      <Nav.Link href="/">corporate Inquirey</Nav.Link>
      <Nav.Link href="/">contact</Nav.Link>
    </Nav>
   
  </Navbar>
        </div>
    )
}
export default Navbar1;