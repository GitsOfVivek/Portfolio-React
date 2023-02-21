import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section id="contact">
			<h2 className="heading-secondary cancle-skewY">Get In Touch</h2>
			<div className="contact-block">
				<div className="thank-u-block-left">
					<i className="fa-solid fa-handshake handshake"></i>
					<h2 className="thank-u">Thank You</h2>
					<p className="text-1-5-rem">Do You Have Any Queries?</p>
				</div>
				<div className="contact-form">
					<form action="">
						<div className="form-box">
							<div className="row">
								<div className="input-box">
									<div>
										<label htmlFor="name">Name :</label>
									</div>
									<input
										required
										type="text"
										id="name"
										placeholder="Name..."
									/>
								</div>
								<div className="input-box">
									<div>
										<label htmlFor="email">Email :</label>
									</div>
									<input
										required
										type="email"
										id="email"
										placeholder="Email..."
									/>
								</div>
							</div>
							<div className="row">
								<div className="input-box">
									<div>
										<label htmlFor="msg">Message :</label>
									</div>
									<textarea
										required
										id="msg"
										placeholder="Message here.."></textarea>
								</div>
							</div>
							<div className="row">
								<div className="input-box btn-wrapper">
									<button>
										Submit
										<i className="fa-solid fa-paper-plane"></i>
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
