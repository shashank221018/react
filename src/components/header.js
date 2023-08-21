import React from "react";
import { Link } from "react-router-dom";
import {NavDropdown} from "react-bootstrap"
import "../css/header.css"

const Header = () => {
	return (
        <div className="img-header">
            <nav class="navbar navbar-expand-lg main-menu">
                <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
                    <span class="navbar-toggler-icon">
                    <i class="fa fa-bars"> </i>
                    </span>
                </button>
                <div class="navbar-collapse collapse" id="navb">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <NavDropdown title="How It Werks" id="basic-nav-dropdown">                        
                                <NavDropdown.Item><Link className="nav-link" to="/how-it-werks">How It Werks</Link></NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="nav-item">
                            <NavDropdown title="Apps" id="basic-nav-dropdown">                        
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/encryption">Encryption</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  );
}

export default Header;
