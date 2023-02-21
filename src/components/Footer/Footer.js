import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer">
				<div className="logo">
					<Link to={'/'}>
						<img id="logo-img" src={logo} alt="logo" />
					</Link>
				</div>
				<div className="footer-text">
					<span>Created with Love by </span>
					<Link to={'https://github.com/GitsOfVivek'}>Vivek</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
