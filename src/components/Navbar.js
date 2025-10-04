import {Outlet} from "react-router";
import "./style.css"

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <a href="#" className="logo">
                            <img src='../images/logo.png' alt="Logo" style={{ height: "40px" }} />
                        </a>
                    </li>
                    <div className="nav-center">
                        <li><a href="/check-weather">Check Weather</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contacts">Contact</a></li>
                    </div>
                    <div className="auth-buttons">
                        <button className="btn-login">Login</button>
                        <button className="btn-signup">Sign Up</button>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
export default Navbar;