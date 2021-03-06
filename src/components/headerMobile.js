import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../headerMobile.css";
import $ from "jquery";
import { useSelector } from "react-redux";

/**
 * Cette fonction est un header pour les ecrans < 1200px
 * @param {object} props
 * @returns
 */
const HeaderMobile = (props) => {
  /**
   * affiche le contenu du menu en cliquant sur le hamburger
   */
  const displayMenu = () => {
    $(".overlay").fadeIn();
  };

  /**
   * cache le contenu du menu en cliquant sur le X
   */
  const hideMenu = () => {
    $(".overlay").fadeOut();
  };

  const closeMenu = () => $(".overlay").fadeOut();

  const allArticlePanier = useSelector((state) => state.allArticlePanier);
  /**
   * calcule la quantité des articles dans le panier
   */
  const nbreArticle = allArticlePanier.reduce(
    (acc, curr) => acc + curr.quantite,
    0
  );

  const allFavoriteArticles = useSelector((state) => state.allFavoriteArticles);
  const nbreFavoriteArticles = allFavoriteArticles.reduce(
    (acc, curr) => acc + 1,
    0
  );

  return (
    <>
      <div
        className=" position-fixed h-100 w-100 z-index-2 overlay"
        style={{ display: "none" }}
      >
        <div id="menu_mobile" className="h-100 w-100">
          <i className="fas fa-times fa-2x close-menu" onClick={hideMenu}></i>
          <div className="h-100  d-flex align-items-center position-static justify-content-center">
            <ul className="col-12 d-flex flex-column align-items-center justify-content-center my-0 px-0 text-white">
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
                <Icon.Heart className="mr-2 text-black" size="30" />
                <Link className=" text-decoration-none " to="/favoris">
                  Favoris ({nbreFavoriteArticles})
                </Link>
              </li>
              <li
                onClick={closeMenu}
                className="mx-3 py-2 link-menu d-block cursor-pointer"
              >
                <Icon.Cart3 className="mr-2 text-black" size="30" />
                <Link className=" text-decoration-none" to="/panier">
                  Panier({nbreArticle})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hamburger d-flex justify-content-between py-1 px-5">
        <div>
          <Link className=" text-decoration-none" to="/">
            Logo
          </Link>
        </div>
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
