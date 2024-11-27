import React from "react";
import "../lodu.css";
import { services } from "../data/services";

const ServicesLP = () => {
	return (
		<section id="services" className="services">
			<h2>Our Services</h2>
			<div className="service-cards">
				{services.map((service) => (
					<div key={service.id} className="card">
						<h3>{service.title}</h3>
						<p>{service.description}</p>
					</div>
				))}
				<div className="card">
					<h3>Legal Consultation</h3>
					<p>Get expert advice from experienced lawyers online.</p>
				</div>
			</div>
		</section>
	);
};

export default ServicesLP;
