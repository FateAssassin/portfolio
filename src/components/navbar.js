import "../styles/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <h2>Muaz <span className="surname">Ugur</span></h2>
                </div>
                <div className="navbar-right">
                    <button className="navbar-burger-button" onClick={toggleDropdown}><i className="bi bi-list"></i></button>
                    <div className="navbar-buttons">
                        <Link className="navbar-button" to="/">About</Link>
                        <Link className="navbar-button" to="/projects">Projects</Link>
                        <Link className="navbar-button" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
            <div className={`navbar-dropdown-menu ${dropdown === false ? "inactive" : "active"}`}>
                <Link className="navbar-dropdown-button" to="/">About</Link><br/>
                <Link className="navbar-dropdown-button" to="/projects">Projects</Link><br/>
                <Link className="navbar-dropdown-button" to="/contact">Contact</Link>
            </div>
        </>
    )
}