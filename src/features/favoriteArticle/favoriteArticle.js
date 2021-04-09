import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeArticleFromFavorite,
  deleteAllfavorite,
} from "./favoriteArticleSlice";
import * as Icon from "react-bootstrap-icons";

const Favoris = (props) => {
  const allFavoriteArticles = useSelector((state) => state.allFavoriteArticles);
  const dispatch = useDispatch();

  const handleRemoveArticle = (id, e) => {
    e.preventDefault();

    dispatch(removeArticleFromFavorite(id));
  };

  const handleDeleteFavorite = (e) => {
    e.preventDefault();
    dispatch(deleteAllfavorite());
  };
  return (
    <div className="container">
      <div className="row py-4 padding-bottom-10">
        {allFavoriteArticles.length === 0 ? (
          <div className="col-12">
            <p className="my-5">Aucun article trouvé</p>
          </div>
        ) : (
          allFavoriteArticles.map((article) => (
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
                    src={article.image}
                    className="photo-boutique img-fluid"
                    alt="ordinateur"
                  />
                  <h6>{article.title}</h6>
                  <p>{article.price}€</p>
                </div>
              </Link>
              <p className="fw-bold">
                <Icon.HeartFill
                  size="25"
                  className="text-danger cursor-pointer mr-2"
                  onClick={(e) => handleRemoveArticle(article.id, e)}
                />
                RETIRER DES FAVORIS
              </p>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <div className="col-12">
          <button
            className="border-0 bg-black text-white rounded-pill py-1 px-3"
            onClick={(e) => handleDeleteFavorite(e)}
          >
            Supprimer tous les favoris
          </button>
        </div>
      </div>
    </div>
  );
};

export default Favoris;
