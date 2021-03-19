import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  sortAToZ,
  sortZToA,
  sortPrixAsc,
  sortPrixDesc,
  sortDateAsc,
  sortDateDesc,
} from "../features/article/articleSlice";

const Trier = (props) => {
  const dispatch = useDispatch();
  const sort = (val) => {
    if (val === "AtoZ") {
      dispatch(sortAToZ("titre"));
    } else if (val === "ZtoA") {
      dispatch(sortZToA("titre"));
    } else if (val === "PrixAsc") {
      dispatch(sortPrixAsc("prix"));
    } else if (val === "PrixDesc") {
      dispatch(sortPrixDesc("prix"));
    } else if (val === "dateAsc") {
      dispatch(sortDateAsc("datePublication"));
    } else {
      dispatch(sortDateDesc("datePublication"));
    }
  };
  return (
    <div className="row">
      <div className="col-12 text-right trier">
        <form>
          <select
            className="bg-light border-0 small"
            onChange={(e) => sort(e.target.value)}
          >
            <option value="AtoZ">Titre: de A à Z</option>
            <option value="ZtoA">Titre: de Z à A</option>
            <option value="PrixAsc">Prix: Ascendant</option>
            <option value="PrixDesc">Prix: Descendant</option>
            <option value="dateAsc">Moins recent</option>
            <option value="dateDesc">Plus recent</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export const Boutique = (props) => {
  const listeArticle = useSelector((state) => state.listeArticle);
  return (
    <>
      <div className="container">
        <Trier />
        <div className="row">
          {listeArticle.map((article) => (
            <div className="col-12 col-md-6 text-left my-5" key={article.id}>
              <Link to={`/boutique/${article.titre}`}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + article.image}
                    className="photo-boutique img-fluid"
                    alt="ordinateur"
                  />
                  <h5>{article.titre}</h5>
                  <p>{article.prix}€</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Boutique;