import React from "react";

function HeroSection() {
	return (
		<section className="hero-section">
			<img src="./images/mobile.jpg" alt="family of 4 holding hands" />
			<article className="alt-bg">
				<h1 className="hero-title">Humanizing your insurance.</h1>
				<p className="hero-text">
					Get your life insurance coverage easier and faster. We blend our
					expertise and technology to help you find the plan that’s right for
					you. Ensure you and your loved ones are protected.
				</p>
				<button className="btn-light">View plans</button>
			</article>
		</section>
	);
}

export default HeroSection;
