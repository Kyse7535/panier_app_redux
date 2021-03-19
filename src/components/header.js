import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import $ from "jquery";
import ContentPanier from "../components/contentPanier";
import { useSelector } from "react-redux";

const Header = (props) => {
  const displayPanier = () => $(".content-panier").css("display", "block");
  const hidePanier = () =>
    $(".content-panier").delay(2000).css("display", "none");

  const allArticlePanier = useSelector((state) => state.allArticlePanier);
  const nbreArticlePanier = allArticlePanier.reduce(
    (acc, curr) => acc + curr.quantite,
    0
  );
  return (
    <header className="menu-desktop">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 offset-2 d-flex justify-content-between py-3">
            <div>Mon logo</div>
            <ul className="my-0 px-0 ">
              <li className="mx-3 link-menu cursor-pointer">
                <Link className="text-dark text-decoration-none" to="/">
                  Accueil
                </Link>
              </li>
              <li className="mx-3 link-menu cursor-pointer">
                <Link className="text-dark text-decoration-none" to="/boutique">
                  Boutique
                </Link>
              </li>
              <li className="mx-3 link-menu cursor-pointer">
                <Link className="text-dark text-decoration-none" to="/a_propos">
                  A propos
                </Link>
              </li>
              <li className="mx-3 link-menu cursor-pointer">
                <Link className="text-dark text-decoration-none " to="/contact">
                  Contact
                </Link>
              </li>
              <li
                className="mx-3 link-menu cursor-pointer position-relative panier"
                onMouseOver={displayPanier}
                onMouseOut={hidePanier}
              >
                <Link className="text-dark text-decoration-none" to="/panier">
                  <Icon.Bag className="mr-2 " size="30" />
                  Panier({nbreArticlePanier})
                </Link>
                <ContentPanier />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
