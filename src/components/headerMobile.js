import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../headerMobile.css";
import $ from "jquery";

const HeaderMobile = (props) => {
  const displayMenu = () => {
    $(".overlay").fadeIn();
  };
  const hideMenu = () => {
    $(".overlay").fadeOut();
  };

  const closeMenu = () => $(".overlay").fadeOut();

  return (
    <>
      <div
        className=" position-fixed h-100 w-100 z-index-2 overlay"
        style={{ display: "none" }}
      >
        <div id="menu_mobile" className="h-100 w-100">
          <i className="fas fa-times fa-2x close-menu" onClick={hideMenu}></i>
          <div className="h-100  d-flex align-items-center position-static justify-content-center">
            <ul className="col-12 my-0 px-0 text-white">
              <li
                onClick={closeMenu}
                className="mx-3 py-2 link-menu d-block cursor-pointer"
              >
                <Link className=" text-decoration-none" to="/">
                  Accueil
                </Link>
              </li>
              <li
                onClick={closeMenu}
                className="mx-3 py-2 link-menu d-block cursor-pointer"
              >
                <Link className=" text-decoration-none" to="/boutique">
                  Boutique
                </Link>
              </li>
              <li
                onClick={closeMenu}
                className="mx-3 py-2 link-menu d-block cursor-pointer"
              >
                <Link className=" text-decoration-none" to="/a_propos">
                  A propos
                </Link>
              </li>
              <li
                onClick={closeMenu}
                className="mx-3 py-2 link-menu d-block cursor-pointer"
              >
                <Link className=" text-decoration-none " to="/contact">
                  Contact
                </Link>
              </li>
              <li
                onClick={closeMenu}
                className="mx-3 py-2 link-menu d-block cursor-pointer"
              >
                <Icon.Bag className="mr-2 text-black" size="30" />
                <Link className=" text-decoration-none" to="/panier">
                  Panier({props.nbreArticle})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hamburger d-flex justify-content-between py-1 px-5">
        <div>logo</div>
        <i
          className="fas fa-bars fa-2x"
          id="open-menu"
          onClick={displayMenu}
        ></i>
      </div>
    </>
  );
};

export default HeaderMobile;
