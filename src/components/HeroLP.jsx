import React from "react";
import "../lodu.css";
import { useNavigate } from "react-router-dom";

const HeroLP = () => {
	const navigate = useNavigate();
	return (
		<header className="hero-section">
			<nav className="navbar">
				<div className="logo">LawOnline</div>
				<ul className="nav-links">
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#about">About Us</a>
					</li>
					<li>
						<a onClick={() => navigate("/contact")}>Contact</a>
					</li>
				</ul>
				<a onClick={() => navigate("/contact")} className="btn">
					Book Consultation
				</a>
			</nav>
			<div className="hero-content">
				<h1>Your Trusted Online Legal Partner</h1>
				<p>
					Expert legal solutions at your fingertips. Convenient,
					reliable, and professional.
				</p>
				<a href="#services" className="cta-btn">
					Explore Our Services
				</a>
			</div>
		</header>
	);
};

export default HeroLP;
