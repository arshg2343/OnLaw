const { db } = require("../firebase-config");

exports.handler = async (event, context) => {
	if (event.httpMethod === "POST") {
		const formData = JSON.parse(event.body);

		try {
			// Save form data to Firebase
			const docRef = await db.collection("formSubmissions").add(formData);
			return {
				statusCode: 200,
				body: JSON.stringify({
					message: "Form submitted successfully!",
					id: docRef.id,
				}),
			};
		} catch (error) {
			return {
				statusCode: 500,
				body: JSON.stringify({
					message: "Failed to submit form",
					error: error.message,
				}),
			};
		}
	}

	return {
		statusCode: 405,
		body: JSON.stringify({ message: "Method Not Allowed" }),
	};
};
