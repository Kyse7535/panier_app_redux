import React from "react";
import { useRouteMatch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addArticle } from "../articleInPanier/articleInPanierSlice";
import { updateCount } from "../produit/produitSlice";
import * as Icon from "react-bootstrap-icons";
import $ from "jquery";
import Footer from "../../components/footer";

const Produit = (props) => {
  const match = useRouteMatch();
  const allArticles = useSelector((state) => state.listeArticle);
  const screenWidth = useSelector((state) => state.screenWidth);
  const quantite = useSelector((state) => state.articleQuantite);
  const dispatch = useDispatch();
  const article = allArticles.find(
    ({ titre }) => titre === match.params.titreArticle
  );

  const togglePanier = () =>
    $(".content-panier").css("display", "block").delay(2000).fadeOut();

  const toggleArticleAddedText = () =>
    $(".article-added-text").css("display", "block").delay(2000).fadeOut();

  const handleSubmit = (e) => {
    e.preventDefault();
    togglePanier();
    if (screenWidth < 1200) {
      toggleArticleAddedText();
    }
    dispatch(addArticle({ quantite, article }));
  };

  return (
    <>
      <div className="container h-100 pb-5">
        <div className="row">
          <div className="col-12 text-left mt-5 mb-3 px-0 ">{match.url}</div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-5 border p-2 d-flex align-items-center"
            style={{ height: "60vh" }}
          >
            <img
              src={process.env.PUBLIC_URL + article.image}
              alt={article.titre}
              className=" img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 z-index-1 text-left px-4 py-2">
            <p className="font-weight-bold">{article.titre}</p>
            <p className="font-weight-bold">{article.prix}€ </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col-3 col-md-2">
                  <label className="d-block">Quantité</label>
                  <input
                    type="number"
                    min="1"
                    className=" form-control rounded-0 px-1"
                    value={quantite}
                    onChange={(e) => dispatch(updateCount(e.target.value))}
                  />
                </div>
              </div>
              <p className="text-success font-weight-lighter my-2">
                <Icon.CircleFill size="12" /> En stock
              </p>
              <input
                type="submit"
                value="AJOUTER AU PANIER"
                className="w-100 py-2 fw-light rounded-0 text-white bg-dark border-0 "
              />
            </form>

            {screenWidth < 1200 ? (
              <div className="article-added-text text-black  text-center bg-light">
                <p>Article ajouté au panier</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center text-md-left font-smaller py-3">
            <h5 className="fw-bold">Description</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus vitae illo molestiae odit, hic consectetur porro
              illum ea distinctio sed blanditiis cum nobis enim exercitationem,
              ipsum sunt sit praesentium? Mollitia distinctio minus itaque. Quis
              velit adipisci aut minima! Consequatur aliquid obcaecati nihil aut
              voluptas aperiam et at assumenda aspernatur expedita.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Produit;
