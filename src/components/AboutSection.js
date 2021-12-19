import React from "react";
import IconSnappyProcess from "../svgs/IconSnappyProcess";
import IconAffordablePrices from "../svgs/IconAffordablePrices";
import IconPeopleFirst from "../svgs/IconPeopleFirst";

function AboutSection() {
	return (
		<section className="about-section">
			<h1 className="about-title">We're different</h1>
			<article>
				<figure>
					<IconSnappyProcess />
					<figcaption>
						<h3>Snappy Process</h3>
						<p>
							Our application process can be completed in minutes, not hours.
							Don't get stuck filling in tedious forms.
						</p>
					</figcaption>
				</figure>
				<figure>
					<IconAffordablePrices />
					<figcaption>
						<h3>Affordable Prices</h3>
						<p>
							We don't want you worrying about high monthly coses. Our prices
							may be low, but we still offer the best coverage possible.
						</p>
					</figcaption>
				</figure>
				<figure>
					<IconPeopleFirst />

					<figcaption>
						<h3>People First</h3>
						<p>
							Our plans aren't full of conditions and clauses to prevent
							payouts. We make sure you're covered when you need it.
						</p>
					</figcaption>
				</figure>
			</article>

			<article className="cta-article  alt-bg">
				<h2>Find out more about how we work</h2>
				<button className="btn-light">How we work</button>
			</article>
		</section>
	);
}

export default AboutSection;
