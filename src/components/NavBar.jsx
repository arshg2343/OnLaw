import React from "react";
import { useNavigate } from "react-router-dom";
import "../lodu.css";
import logoImage from "../assets/logo2.png";

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<nav className="navbar-const">
			<div className="logo-container" onClick={() => navigate("/")}>
				<img
					src={logoImage}
					alt="LawOnline Logo"
					className="logo-image"
				/>
				<span className="logo-text-const">LawOnline</span>
			</div>
			<ul className="nav-links">
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a onClick={() => navigate("/aboutus")}>About Us</a>
				</li>
				<li>
					<a onClick={() => navigate("/contact")}>Contact</a>
				</li>
			</ul>
			<a onClick={() => navigate("/contact")} className="btn">
				Book Consultation
			</a>
		</nav>
	);
};

export default NavBar;
