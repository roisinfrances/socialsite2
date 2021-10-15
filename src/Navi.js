import React from "react";
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";

class Navi extends React.Component {
    render() {
        return (
            <Navbar bg="warning" expand="md">
                <Navbar.Brand>Social Site</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav>
                        <Link className="nav-link" to="/">
                            Posts
                        </Link>
                        <Link className="nav-link" to="/add">
                            Add Posts
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navi;