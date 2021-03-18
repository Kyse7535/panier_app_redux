import React from "react";
import Boutique from "../../components/boutique";
import Produit from "../produit/Produit";
const Article = (props) => {
  const content = props.motif === "boutique" ? <Boutique /> : <Produit />;
  //articles={listeArticle} addToPanier={props.addToPanier}*/
  return <> {content} </>;
};

export default Article;
