import './Header.css';
import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<nav className="nav-bar">
				<div className="logo">
					<Link to={'/'}>
						<img id="logo-img" src={logo} alt="logo" />
					</Link>
				</div>

				<div className="navigation">
					<div className="nav__hamburger">
						<Link className="navigation__items" to={'/'}>
							Home
						</Link>
						<Link className="navigation__items" to={'/about'}>
							About
						</Link>
						<Link className="navigation__items" to={'/projects'}>
							Projects
						</Link>
						<Link className="navigation__items" to={'/contact'}>
							Contact
						</Link>
					</div>
					<div id="toggle">
						<span className="indicator">
							<i id="icon" className="fa-solid fa-sun"></i>
						</span>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
