import { useSelector, useDispatch } from "react-redux";
import {
  modifyQtiteArticle,
  deleteArticle,
} from "../features/articleInPanier/articleInPanierSlice";
import uniqid from "uniqid";
const PanierCmd = (props) => {
  const allArticlePanier = useSelector((state) => state.allArticlePanier);
  const dispatch = useDispatch();
  const handleChange = (id, e) => {
    e.preventDefault();
    const valeur = e.target.value;
    dispatch(modifyQtiteArticle({ id, valeur }));
  };

  const removeArticle = (id, e) => {
    e.preventDefault();
    dispatch(deleteArticle(id));
  };
  return (
    <div className="col-12 col-md-5 offset-md-2 text-left px-0 page-panier">
      <h6 className=" fw-bold">Panier</h6>
      <ul key={uniqid()} className="w-100 d-md-flex px-0 border-bottom">
        <li key={uniqid()} className="small w-10">
          Produit
        </li>
        <li key={uniqid()} className="small w-21">
          Description
        </li>
        <li key={uniqid()} className="small w-15">
          Prix unit.
        </li>
        <li key={uniqid()} className="small w-15">
          Quantite
        </li>
        <li key={uniqid()} className="small w-15">
          Sous-total
        </li>
      </ul>
      {allArticlePanier.map((article) => (
        <ul
          key={uniqid()}
          className="w-100 d-flex flex-row px-0 border-bottom py-2"
        >
          <li key={uniqid()} className="small w-10">
            <img
              src={process.env.PUBLIC_URL + article.image}
              alt={article.titre}
              className="photo-page-panier"
            />
          </li>
          <li key={uniqid()} className="small w-21">
            {article.titre}
            <button
              className="border-0 bg-white text-black py-1"
              onClick={(e) => removeArticle(article.id, e)}
              key={uniqid()}
            >
              supprimer
            </button>
          </li>
          <li key={uniqid()} className="small w-15">
            {article.prix}€
          </li>
          <li key={uniqid()} className="small w-15">
            <form>
              <input
                onChange={(e) => handleChange(article.id, e)}
                className="d-inline-block w-75 m-md-1"
                type="number"
                value={article.quantite}
              />
            </form>
          </li>
          <li key={uniqid()} className="small w-15">
            {article.prix * article.quantite} €
          </li>
        </ul>
      ))}
    </div>
  );
};

export default PanierCmd;
