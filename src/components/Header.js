import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
     const [toggle,setToggle] = useState(false);


     const styles = {
          handleToggle : {
               transform: toggle ? 'rotate(90deg)' : 'rotate(0deg)',
               transition: "transform 0.5s ease-in-out"
          }
     }
     const handleToggle = () => {
          if(toggle === false){
               setToggle(true)
          }
          if(toggle === true){
               setToggle(false)
          }

     };

     return ( 
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Bhone Thit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" id='toggle' onClick={handleToggle} style={styles.handleToggle} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
}

export default Header;