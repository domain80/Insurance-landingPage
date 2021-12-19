import React, { useState } from "react";
import IconClose from "../svgs/IconClose";
import IconHamburger from "../svgs/IconHamburger";
import LogoIcon from "../svgs/LogoIcon";

function Navbar() {
	const [navOpen, setNavOpen] = useState(false);

	function handleClick() {
		setNavOpen(!navOpen);
	}
	return (
		<nav>
			<LogoIcon />
			<ul className={navOpen ? "nav-items" : "nav-items hidden "}>
				<li>how we work</li>
				<li>blog</li>
				<li>account</li>
				<li>
					<button className="btn-dark">view plans</button>
				</li>
			</ul>
			<div className="navIcon-container mobile" onClick={handleClick}>
				{navOpen ? <IconClose /> : <IconHamburger />}
			</div>
		</nav>
	);
}

export default Navbar;
