import { useDispatch } from "react-redux";
import {
  sortAToZ,
  sortZToA,
  sortPrixAsc,
  sortPrixDesc,
} from "../features/article/articleSlice";

/**
 *
 * @param {object} props
 * @returns un formulaire permettant de trier des articles dans la boutique
 */
const Trier = (props) => {
  const dispatch = useDispatch();

  /**
   * cette fonction recupere la valeur du select dans le formulaire et transmet l'action correspondante au store
   * afin de faire le tri voulu.
   * @param {string} val
   */
  const sort = (val) => {
    if (val === "AtoZ") {
      dispatch(sortAToZ("title"));
    } else if (val === "ZtoA") {
      dispatch(sortZToA("title"));
    } else if (val === "PrixAsc") {
      dispatch(sortPrixAsc("price"));
    } else if (val === "PrixDesc") {
      dispatch(sortPrixDesc("price"));
    }
  };
  return (
    <div className="row">
      <div className="col-12 text-right trier ">
        <form>
          <select
            className="bg-light border-0 small cursor-pointer"
            onChange={(e) => sort(e.target.value)}
          >
            <option value="AtoZ">Titre: de A à Z</option>
            <option value="ZtoA">Titre: de Z à A</option>
            <option value="PrixAsc">Prix: Ascendant</option>
            <option value="PrixDesc">Prix: Descendant</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Trier;
