import React from "react";
import IconSnappyProcess from "../svgs/IconSnappyProcess";
import IconAffordablePrices from "../svgs/IconAffordablePrices";
import IconPeopleFirst from "../svgs/IconPeopleFirst";

function AboutSection() {
	return (
		<section className="about-section">
			<h1 className="about-title">We're differrent</h1>
			<article>
				<figure>
					<IconSnappyProcess />
					<figcaption>
						<h2>Snappy Process</h2>
						<p>
							Our application process can be completed in minutes, not hours.
							Don't get stuck filling in tedious forms.
						</p>
					</figcaption>
				</figure>
				<figure>
					<IconAffordablePrices />
					<figcaption>
						<h2>Affordable Prices</h2>
						<p>
							We don't want you worrying about high monthly coses. Our prices
							may be low, but we still offer the best coverage possible.
						</p>
					</figcaption>
				</figure>
				<figure>
					<IconPeopleFirst />

					<figcaption>
						<h2>People First</h2>
						<p>
							Our plans aren't full of conditions and clauses to prevent
							payouts. We make sure you're covered when you need it.
						</p>
					</figcaption>
				</figure>
			</article>

			<article className="cta-article  alt-bg">
				<h1>Find our more about how we work</h1>
				<button className="btn-white">How we work</button>
			</article>
		</section>
	);
}

export default AboutSection;
