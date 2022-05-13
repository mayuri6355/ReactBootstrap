import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container } from 'react-bootstrap';
// import mycss from './mycss.module.css'

function Header(){
    return(
        <div>
  <Navbar  bg="dark" variant="dark">
    <Container>
   
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header;