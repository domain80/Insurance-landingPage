import React from "react";

function HeroSection() {
	return (
		<section className="hero-section">
			<picture>
				<img
					// src="./images/desktop.jpg"
					alt="a family of 4 holding hands"
					srcset="
					./images/desktop.jpg 1x,
					./images/mobile.jpg 5x"
				/>
			</picture>
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
