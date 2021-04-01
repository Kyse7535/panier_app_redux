import { useSelector, useDispatch } from "react-redux";
import {
  modifyQtiteArticle,
  deleteArticle,
} from "../features/articleInPanier/articleInPanierSlice";
import uniqid from "uniqid";

/**
 *cette fonction affiche le bloc panier dans la page panier
 * @param {object} props
 * @returns
 */
const PanierCmd = (props) => {
  const allArticlePanier = useSelector((state) => state.allArticlePanier);
  const dispatch = useDispatch();

  /**
   * modifie la quantité de l'article avec l'id spécifié dans le panier
   * @param {int} id
   * @param {event} e
   */
  const handleChange = (id, e) => {
    e.preventDefault();

    const valeur = e.target.value === "" ? 1 : e.target.value;
    dispatch(modifyQtiteArticle({ id, valeur }));
  };

  /**
   * supprime définitivment article avec l'id spécifié dans le panier
   * @param {int} id
   * @param {event} e
   */
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
              className="border-0 bg-white text-black py-1 d-block px-0 text-decoration-underline"
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
                className="d-inline-block w-50 m-md-1 py-1"
                type="number"
                min="1"
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
