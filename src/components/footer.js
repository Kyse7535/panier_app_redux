import React from "react";

const Footer = (props) => {
  return (
    <div className="container-fluid position-absolute bottom-0 top-100">
      <div className="row">
        <div className="col-12 py-3 footer">
          <div>
            <p className="letter-spacing-3 fw-bold">COMPAGNIE DE TECHNOLOGIE</p>
            <p className="mb-0 font-size-12">432 rue des Dunes</p>
            <p className="font-size-12">75000 Paris</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
