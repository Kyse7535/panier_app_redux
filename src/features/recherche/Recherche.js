import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchTerm } from "./RechercheSlice";
import * as Icon from "react-bootstrap-icons";

const Recherche = (props) => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(updateSearchTerm(e.target.value));
  };
  return (
    <div className="col-12 mt-3 text-left">
      <form onSubmit={(e) => e.preventDefault()}>
        <span className="set-border d-inline-block ">
          <Icon.Search className="mx-1" />
          <input
            type="text"
            onChange={handleChange}
            value={searchTerm}
            className="border-0 focus-no-outline"
          />
        </span>
        <input
          type="submit"
          value="Rechercher"
          className="border-0 mx-1 py-1"
        />
      </form>
    </div>
  );
};

export default Recherche;
