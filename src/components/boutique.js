import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Trier from "../components/trier";
import Recherche from "../features/recherche/Recherche";

export const Boutique = (props) => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const listeArticle = useSelector((state) =>
    state.listeArticle.filter((article) => article.titre.startsWith(searchTerm))
  );
  return (
    <>
      <div className="container pb-5">
        <Trier />

        <div className="row py-4">
          <Recherche />
          {listeArticle.length === 0 ? (
            <div className="col-12">
              <p>Aucun article trouvé</p>
            </div>
          ) : (
            listeArticle.map((article) => (
              <div
                className="col-12 col-md-6 text-left mt-3 mb-3"
                key={article.id}
              >
                <Link
                  to={`/boutique/${article.titre}`}
                  className=" text-decoration-none"
                >
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + article.image}
                      className="photo-boutique img-fluid"
                      alt="ordinateur"
                    />
                    <h6>{article.titre}</h6>
                    <p>{article.prix}€</p>
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
