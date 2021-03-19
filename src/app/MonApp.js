import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import HeaderMobile from "../components/headerMobile";

const App = (props) => {
  const [nbreArticle, setNbreArticle] = useState(0);

  const [listSelectedArticles, setListSlectedArticles] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  });

  const ajouterArticle = (e, quantite, articleAdded) => {
    e.preventDefault();
    const index = listSelectedArticles.findIndex(
      (article) => article.id === articleAdded.id
    );
    if (index === -1) {
      const article = {
        id: articleAdded.id,
        titre: articleAdded.titre,
        image: articleAdded.image,
        prix: articleAdded.prix,
        quantite: parseInt(quantite),
      };
      listSelectedArticles.push(article);
      setListSlectedArticles(listSelectedArticles);
    } else {
      listSelectedArticles[index].quantite += parseInt(quantite);
    }
    countArticles();
  };

  const deleteArticles = (e, id) => {
    e.preventDefault();
    const index = listSelectedArticles.findIndex(
      (article) => article.id === id
    );
    listSelectedArticles.splice(index, 1);
    setListSlectedArticles(listSelectedArticles);
    countArticles();
  };
  const countArticles = () => {
    let nbreArticle = 0;
    for (let i = 0; i < listSelectedArticles.length; i++) {
      nbreArticle += listSelectedArticles[i].quantite;
    }
    setNbreArticle(nbreArticle);
  };

  const coutTotal = () => {
    let nbreArticle = 0;
    for (let i = 0; i < listSelectedArticles.length; i++) {
      nbreArticle +=
        listSelectedArticles[i].quantite * listSelectedArticles[i].prix;
    }
    return nbreArticle;
  };

  return (
    <>
      {width < 1200 ? (
        <HeaderMobile windowWidth={width} nbreArticle={nbreArticle} />
      ) : (
        <Header
          nbrePanier={nbreArticle}
          articles={listSelectedArticles}
          coutTotal={coutTotal()}
          deleteArticles={deleteArticles}
        />
      )}

      <main className="position-relative">
        {
          <ContentPage
            addToPanier={ajouterArticle}
            motif={props.motif}
            articles={listSelectedArticles}
            coutTotal={coutTotal()}
          />
        }
      </main>
      <Footer />
    </>
  );
};

export default App;
