const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp(); // Initialize Firebase Admin SDK

const db = admin.firestore(); // Get Firestore reference
const app = express();

// Enable CORS for cross-origin requests
app.use(cors({ origin: true }));

// POST endpoint to handle form data
app.post("/submit-form", async (req, res) => {
	try {
		const formData = req.body; // Extract data from request body
		const docRef = await db.collection("formSubmissions").add(formData); // Save data to Firestore
		res.status(201).json({
			message: "Form data submitted successfully!",
			id: docRef.id,
		});
	} catch (error) {
		console.error("Error saving form data:", error);
		res.status(500).json({
			message: "Failed to submit form data",
			error: error.message,
		});
	}
});

// Export the API
exports.api = functions.https.onRequest(app);
