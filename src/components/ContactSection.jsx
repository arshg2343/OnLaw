import React, { useState } from "react";
import { db } from "../firebase-config"; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const ContactLP = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setErrorMessage("");

		try {
			// Add data to Firestore
			await addDoc(collection(db, "contactMessages"), {
				name: formData.name,
				email: formData.email,
				message: formData.message,
				timestamp: new Date(),
			});
			// Clear form fields
			setFormData({ name: "", email: "", message: "" });
			alert("Your message has been submitted successfully!");
		} catch (error) {
			setErrorMessage("Error submitting message: " + error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="contact">
			<h2>Contact Us</h2>
			<p>Reach out to us for any queries or assistance.</p>

			{errorMessage && (
				<div className="error-message">{errorMessage}</div>
			)}

			<form onSubmit={handleSubmit} method="POST">
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					value={formData.message}
					onChange={handleChange}
					rows="5"
					required
				></textarea>
				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Sending..." : "Send Message"}
				</button>
			</form>
		</section>
	);
};

export default ContactLP;
