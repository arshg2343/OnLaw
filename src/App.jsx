import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
		</Router>
	);
};

export default App;
