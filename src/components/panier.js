import React from "react";
import ResumeCmd from "./resumeCmd";
import PanierCmd from "./panierCmd";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Cette fonction permet d'affiche la page du panier, lorsqu'on clique sur panier dans le Header
 * @param {object} props
 * @returns
 */
const Panier = (props) => {
  const allArticlePanier = useSelector((state) => state.allArticlePanier);
  return (
    <>
      <div className="container-fluid min-vh-75">
        <div className="row p-3 ">
          {allArticlePanier.length === 0 ? (
            <div className="col-12 col-md-8 offset-md-2 text-left border-bottom pb-2 my-5">
              Votre panier est vide
            </div>
          ) : (
            <>
              <div className="col-12 col-md-8 offset-md-2 text-left px-0 mb-5 small">
                <Link to="/boutique">continuer les achats</Link>
              </div>
              <PanierCmd />
              <ResumeCmd />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Panier;
