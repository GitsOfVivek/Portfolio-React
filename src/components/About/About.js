import './About.css';
import React from 'react';
import myImg from '../../assets/img/myimg.jpeg';

const About = () => {
	return (
		<section id="about">
			<h2 className="heading-secondary">About me</h2>
			<div className="about-block">
				<img className="my-img" src={myImg} alt="profile-photo" />

				<div className="my-about">
					<span className="big-inverted-coma">“</span>
					Hi, I'm Vivek Kumar, a self-taught passionate FrontEnd
					developer from India, currently studing
					<span className="bold-feature">
						{' '}
						Full Stack Development{' '}
					</span>
					and
					<span className="bold-feature">
						{' '}
						Data Structures & Algorithms{' '}
					</span>
					at Newton School.
					<span className="big-inverted-coma">”</span>
				</div>
			</div>
			<div className="my-tech">
				<i className="fa-brands fa-java"></i>
				<i className="fa-brands fa-html5"></i>
				<i className="fa-brands fa-css3"></i>
				<i className="fa-brands fa-square-js"></i>
				<i className="fa-brands fa-bootstrap"></i>
				<i class="fa-brands fa-react"></i>
			</div>
		</section>
	);
};

export default About;
