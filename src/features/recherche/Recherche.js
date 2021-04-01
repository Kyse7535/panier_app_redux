import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchTerm } from "./RechercheSlice";
import * as Icon from "react-bootstrap-icons";

/**
 * Cette fonction permet de gérer la recherche d'article dans la boutique
 * @param {Object} props
 * @returns un formulaire de recherche
 */
const Recherche = (props) => {
  const searchTerm = useSelector((state) => state.searchTerm);

  const dispatch = useDispatch();

  /**
   * cette fonction recupère les evenements reçu au niveau du champ de saisie de recherche,
   * et le transmet au store à travers le disptach
   * @param {event} e
   */
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(updateSearchTerm(e.target.value));
  };
  return (
    <div className="row">
      <div className="col-12 mt-5 mb-3 text-left">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="d-flex justify-content-between form-search"
        >
          <span className="set-border d-flex justify-content-between boutique-input-search">
            <Icon.Search className="m-1" />
            <input
              type="text"
              onChange={handleChange}
              value={searchTerm}
              className="border-0 focus-no-outline d-inline-block w-100 mx-1"
            />
          </span>
          <input
            type="submit"
            value="Rechercher"
            className="border-0 mx-1 boutique-submit-search"
          />
        </form>
      </div>
    </div>
  );
};

export default Recherche;
