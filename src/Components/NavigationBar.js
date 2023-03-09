import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function NavigationBar() {
  return (
    <div style={{backgroundColor: '#1e1ea8'}}>
    <Navbar expand="lg" bg="#FFC300" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{margin: '20px'}}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#features">Act And Rules</Nav.Link>
            <Nav.Link href="#pricing">Schemes and Projects</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Solid Waste Management/NGT</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Muncipalities at a Glance
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Tenders/RFP & Advt.
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationBar;