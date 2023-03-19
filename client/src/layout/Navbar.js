import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-bg-dark font-weight-bold">
                <Link className="navbar-brand" href="#" to="/">2023 Course: MicroService - VAMK</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="/api/accounts">Account</Link>
                        </li>
                    </ul>
                </div>

                <Link className="btn btn-outline-dark" to="/Signup">Sign up</Link>
            </nav>
        </div>
    )
}