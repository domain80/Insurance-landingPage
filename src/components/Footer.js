import React from "react";
import LogoIcon from "../svgs/LogoIcon";

import SocialFacebook from "../svgs/SocialFacebook";
import SocialTwitter from "../svgs/SocialTwitter";
import SocialInstagram from "../svgs/SocialInstagram";
import SocialPinterest from "../svgs/SocialPinterest";

function Footer() {
	return (
		<footer>
			<header className="footer-header">
				<LogoIcon />
				<div className="social-icons">
					<SocialFacebook />
					<SocialTwitter />
					<SocialInstagram />
					<SocialPinterest />
				</div>
				<hr />
			</header>

			<ul>
				<li className="list-title">Our company</li>
				<li>How we work </li>
				<li>Why Insure? </li>
				<li>View plans</li>
				<li>Reviews</li>
			</ul>
			<ul>
				<li className="list-title">Help me</li>
				<li>FAQ</li>
				<li>Terms of use </li>
				<li>Privacy policy </li>
				<li>Cookies</li>
			</ul>
			<ul>
				<li className="list-title">Contact</li>
				<li>Sales</li>
				<li>Support</li>
				<li> Live chat </li>
			</ul>
			<ul>
				<li className="list-title">Others</li>
				<li>Careers </li>
				<li>Press </li>
				<li>Licenses</li>
			</ul>
		</footer>
	);
}

export default Footer;
