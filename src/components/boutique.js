import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Trier from "../components/trier";
import { fetchArticles } from "../features/article/articleSlice";
import Recherche from "../features/recherche/Recherche";

/**
 * affiche la liste d'une liste pasé en props.
 * le compoant admet une propriété props nommée liste
 * @param {object} props
 * @returns
 */
export const Boutique = (props) => {
  const searchTermToLowercase = useSelector((state) =>
    state.searchTerm.toLowerCase()
  );
  const listeArticle = useSelector((state) =>
    state.listeArticle.items.filter((article) =>
      article.title.toLowerCase().startsWith(searchTermToLowercase)
    )
  );

  const dispatch = useDispatch();

  /**
   * récupère la propriété status de la tranche de reduction listeArticle
   */
  const listeArticleStatus = useSelector((state) => state.listeArticle.status);

  /**
   * Envoie une action fetchArticles pour récuperer des données de l'api fetchArticle
   * seulement si la propriéte status de listeArticle est "inactif"
   */
  useEffect(() => {
    if (listeArticleStatus === "inactif") {
      dispatch(fetchArticles());
    }
  }, [listeArticleStatus, dispatch]);
  return (
    <>
      <div className="container p-3 mb-5">
        <Trier />
        <Recherche />
        <div className="row py-4 padding-bottom-10">
          {listeArticle.length === 0 ? (
            <div className="col-12">
              {listeArticleStatus === "loading" ? (
                <p className="my-5">Chargement...</p>
              ) : (
                <p className="my-5">Aucun article trouvé</p>
              )}
            </div>
          ) : (
            listeArticle.map((article) => (
              <div
                className="col-12 col-md-4 text-left mt-5 mb-4 d-flex flex-column align-items-center justify-content-center position-relative"
                key={article.id}
              >
                <Link
                  to={`/boutique/${article.title}`}
                  className=" text-decoration-none"
                >
                  <div>
                    <img
                      src={article.image}
                      className="photo-boutique img-fluid mb-2"
                      alt={article.title}
                    />
                    <div className="position-absolute top-100">
                      <h6>{article.title}</h6>
                      <p>{article.price}€</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Boutique;
