import React from "react";
import * as Icon from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteArticle } from "../features/articleInPanier/articleInPanierSlice";
import { Link } from "react-router-dom";

/**
 * cette fonction est appelé lorsqu'on survole panier dans header
 * @param {object} props
 * @returns
 */
const ContentPanier = (props) => {
  const allArticlePanier = useSelector((state) => state.allArticlePanier);
  const dispatch = useDispatch();
  const coutTotal = allArticlePanier.reduce(
    (acc, curr) => acc + curr.price * curr.quantite,
    0
  );
  return (
    <span className="mt-2 mx-0 z-index-2 content-panier bg-white border border-dark px-0">
      {coutTotal === 0 ? (
        <p className="m-0">Votre panier est vide</p>
      ) : (
        <>
          {allArticlePanier.map((article) => (
            <div
              className="d-flex justify-content-between align-items-center px-1"
              key={article.id}
            >
              <img
                src={article.image}
                alt={article.title}
                className="photo-panier mr-1"
              />
              <div>
                <p className=" small text-left">
                  {article.title} <br />
                  Qtité: {article.quantite}
                </p>
              </div>
              <div>
                <Icon.X
                  className="fw-bolder"
                  onClick={() => dispatch(deleteArticle(article))}
                />
                <p className="small text-left">
                  Prix unitaire <br />
                  {article.price} €
                </p>
              </div>
            </div>
          ))}
          <div className="small bg-secondary cursor-pointer px-0 ">
            <p className="d-flex justify-content-between m-0">
              <span className="">SOUS-TOTAL</span>
              <span className="">{coutTotal}€</span>
            </p>
            <Link to="/panier">
              <button className=" w-75 text-white bg-dark border-0  mb-2 py-1 cursor-pointer">
                PASSER AU PAIEMENT
              </button>
            </Link>
          </div>
        </>
      )}
    </span>
  );
};
export default ContentPanier;
