import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section id="home">
			<div className="home__info">
				<div className="upper-intro">Hello, I'm</div>
				<h1 className="my-name">Vivek kumar</h1>
				<div className="tag-below-name">
					creative frontend developer
				</div>
				<div className="resume">
					<Link
						target="_blank"
						to="https://drive.google.com/file/d/1cNg9wmoCauhbYJ414K_Q0nckYLjZ4A0K/view?usp=sharing">
						Download resume
					</Link>
				</div>
				<div className="social-links">
					<div className="social-block">
						<Link
							to="https://github.com/GitsOfVivek"
							target="_blank">
							<i className="fa-brands fa-github"></i>
						</Link>
						<Link
							to="https://www.linkedin.com/in/vivek9999/"
							target="_blank">
							<i className="fa-brands fa-linkedin-in"></i>
						</Link>
						<Link to="https://twitter.com/V1V3K__" target="_blank">
							<i className="fa-brands fa-twitter"></i>
						</Link>
					</div>
				</div>
			</div>
			<div className="box-style-right"></div>
		</section>
	);
};

export default Home;
