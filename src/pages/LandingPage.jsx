import React from "react";
import HeroLP from "../components/HeroLP.jsx";
import ServicesLP from "../components/ServicesLP.jsx";
import AboutLP from "../components/AboutLP.jsx";
import FooterLP from "../components/FooterLP.jsx";

const LandingPage = () => {
	return (
		<>
			<HeroLP />
			<ServicesLP />
			<AboutLP />
			<FooterLP />
		</>
	);
};

export default LandingPage;
