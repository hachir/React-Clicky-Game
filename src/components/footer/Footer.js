import React from "react";
import "./Footer.css";
import ReactLogo from "./download.svg"
const Footer = () => (
	<footer className="footer">
		<div className="footer-bottom">
			Click Game! 
			<img alt="react" src={ReactLogo}/>
		</div>
	</footer>

);

export default Footer;