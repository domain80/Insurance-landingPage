import React from "react";

function IconHamburger() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
			<g fill="none" fill-rule="evenodd">
				<path
					fill="#FFF"
					stroke="#2C2830"
					stroke-width="1.5"
					d="M.75.75h30.5v30.5H.75z"
				/>
				<g fill="#2C2830">
					<path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z" />
				</g>
			</g>
		</svg>
	);
}

export default IconHamburger;
