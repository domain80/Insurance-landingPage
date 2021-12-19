import React from "react";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="bg-div">
				<HeroSection />
				<AboutSection />
			</div>
			<Footer />
		</>
	);
}

export default App;
