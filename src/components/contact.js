import React from "react";

const Iframe = (props) => {
  return (
    <div>
      <iframe
        src="https://maps.googleapis.com/maps/api/staticmap?center=Tour+Eiffel&size=500x500&key=AIzaSyAKrAKZ4wYnsble3kVS1S6owfw4j9QzE7M"
        title="carte1"
        width="300px"
        height="300px"
        frameborder="0"
      >
        title
      </iframe>
      <div>
        <p className="py-2">LOREM IPSUM</p>
        <div>
          <p className="my-0">Power Street</p>
          <p className="my-0">New-York, NY</p>
          <p className="my-0">10001</p>
          <p className="my-0">555-555-5555</p>
          <p className="my-0">ktevot@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

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
            }}
          ></div>
        </div>
        <div className="container">
          <div className="row py-md-5">
            <h5 className=" col-12 fw-bolder mb-2">CONTACT</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
