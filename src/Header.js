import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    <Link to="/add">AddProduct</Link>
                    <Link to="/update">UpdateProduct</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Header;