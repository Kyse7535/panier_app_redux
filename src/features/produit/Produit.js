import React from "react";
import { useRouteMatch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addArticle } from "../articleInPanier/articleInPanierSlice";
import { updateCount } from "../produit/produitSlice";
import * as Icon from "react-bootstrap-icons";
import $ from "jquery";
import Footer from "../../components/footer";
import {
  addArticleToFavorite,
  removeArticleFromFavorite,
} from "../favoriteArticle/favoriteArticleSlice";

/**
 *
 * @param {Obect} props
 * @returns page de description d'un produit ou article
 */
const Produit = (props) => {
  /**
   * useRouteMatch tente de faire correspondre un URL de la même maniere que <Route />
   */
  const match = useRouteMatch();
  const allArticles = useSelector((state) => state.listeArticle.items);
  const screenWidth = useSelector((state) => state.screenWidth);
  const quantite = useSelector((state) => state.articleQuantite);
  const dispatch = useDispatch();

  const handleAddArticle = (article, e) => {
    e.preventDefault();
    dispatch(addArticleToFavorite({ article }));
  };
  const handleRemoveArticle = (id, e) => {
    e.preventDefault();
    console.log("allo");
    dispatch(removeArticleFromFavorite(id));
  };

  /**
   * cette instruction cherche dans la liste des articles, celui dont le titre correspond
   * au titre qui figure dans le lien
   */
  const article = allArticles.find(
    ({ title }) => title === decodeURI(match.params.titreArticle)
  );

  const allFavoriteArticles = useSelector((state) => state.allFavoriteArticles);
  /**
   *
   * Affiche un apperçu du anier chaque fois qu'on ajoute un article
   */
  const togglePanier = () =>
    $(".content-panier").css("display", "block").delay(2000).fadeOut();

  /**
   * Permet d'afficher un text, confirmant l'ajout d'un article au panier.
   *  Ce texte ne s'affiche que des ecrans < 1200px
   *
   */
  const toggleArticleAddedText = () =>
    $(".article-added-text").css("display", "block").delay(2000).fadeOut();

  /**
   * cette fonction prend un evenement et transmet au store l'action d'ajout d'un article.
   * @param {event} e
   */
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
          <div className="col-12 text-left mt-5 mb-3 px-1 px-md-0 ">
            {match.url}
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-5 p-3 p-md-4 border p-2 d-flex align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="photo-produit img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 z-index-1 text-left px-4 py-2">
            <p className="font-weight-bold">{article.title}</p>
            <p className="font-weight-bold">{article.price}€ </p>
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
                className="w-100 py-2 mb-3 fw-light rounded-0 text-white bg-dark border-0 "
              />
              {allFavoriteArticles.find(
                (favorite) => favorite.id === article.id
              ) === article ? (
                <p className="fw-bold">
                  <Icon.HeartFill
                    size="20"
                    className="mr-2 cursor-pointer text-danger"
                    onClick={(e) => handleRemoveArticle(article.id, e)}
                  />
                  RETIRER DES FAVORIS
                </p>
              ) : (
                <p className="fw-bold">
                  <Icon.Heart
                    size="20"
                    className="mr-2 cursor-pointer"
                    onClick={(e) => handleAddArticle(article, e)}
                  />
                  AJOUTER AUX FAVORIS
                </p>
              )}
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
            <p>{article.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Produit;
