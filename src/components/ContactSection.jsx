import React from "react";
import "../lodu.css";

const ContactLP = () => {
	return (
		<section id="contact" className="contact">
			<h2>Contact Us</h2>
			<p>Reach out to us for any queries or assistance.</p>
			<form action="#" method="POST">
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					rows="5"
					required
				></textarea>
				<button type="submit">Send Message</button>
			</form>
		</section>
	);
};

export default ContactLP;
