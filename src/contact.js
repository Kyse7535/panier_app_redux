import React from "react";

const Contact = (props) => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div
						className="col-12"
						style={{
							background: `url(${process.env.PUBLIC_URL}/technology.jpg) center no-repeat`,
							height: "300px",
						}}></div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h5 className="fw-bolder">CONTACT</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
