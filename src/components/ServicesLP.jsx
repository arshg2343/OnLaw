import React from "react";
import "../lodu.css";

const ServicesLP = () => {
	return (
		<section id="services" className="services">
			<h2>Our Services</h2>
			<div className="service-cards">
				<div className="card">
					<h3>Legal Consultation</h3>
					<p>Get expert advice from experienced lawyers online.</p>
				</div>
				<div className="card">
					<h3>Contract Drafting</h3>
					<p>We draft and review contracts tailored to your needs.</p>
				</div>
				<div className="card">
					<h3>Dispute Resolution</h3>
					<p>Resolve disputes efficiently with our legal team.</p>
				</div>
			</div>
		</section>
	);
};

export default ServicesLP;
