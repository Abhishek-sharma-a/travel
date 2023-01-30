import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'
function Menu() {
    const nave = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand to={"/"}> <img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navFont fs-5 w-100 d-flex justify-content-around">

                        <Link to={"/"}>Home</Link>
                        <Link to={"/destinationpackages"}>Packages</Link>
                        <Link to={"/glimpse"}>Glimpse</Link>
                        <Link to={"/contact"}>Contact us</Link>
                        <Link to={"/aboutus"}>About</Link>
                        {/* <Link to={"/loginpage"}>Login</Link>
                        <Link to={"/signup"}>Sign up</Link> */}

                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <button className="btn_navber" onClick={() => nave("/bookyourtrip")}>Book your Trip</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;