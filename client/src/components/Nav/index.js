import React from "react";
import { Link } from "react-router-dom";
import "../Nav/style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div>
                <Link className="navbar-brand" to="/"></Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        to="/search"
                        />
                    </li>
                    <li className="nav-item">
                        <Link
                        className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        to="/saved"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;

