import {Outlet} from "react-router";
import "./style.css"
import Footer from "./Footer";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <a href="/" className="logo">
                        </a>
                    </li>
                    <div className="nav-center">
                        <li><a href="/">Home</a></li>
                        <li><a href="/check-weather">Check Weather</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contacts">Contact</a></li>
                    </div>
                    <div className="auth-buttons">
                        <a href="/login">
                            <button className="btn-login">Login</button>
                        </a>
                        <a href="/signup">
                            <button className="btn-signup">Sign Up</button>
                        </a>

                    </div>
                </ul>
            </nav>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Navbar;