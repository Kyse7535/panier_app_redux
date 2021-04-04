import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "../components/accueil";
import Apropos from "../components/apropos";
import Header from "../components/header";
import HeaderMobile from "../components/headerMobile";
import { useSelector, useDispatch } from "react-redux";
import { updateWidth } from "../features/screenWidth/ScreenWidthSlice";
import Boutique from "../components/boutique";
import Contact from "../components/contact";
import Produit from "../features/produit/Produit";
import Panier from "../components/panier";
import Footer from "../components/footer";
import Favoris from "../features/favoriteArticle/favoriteArticle";
const App = (props) => {
  const screenWidth = useSelector((state) => state.screenWidth);
  const dispatch = useDispatch();
  window.addEventListener("resize", () =>
    dispatch(updateWidth(window.innerWidth))
  );
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <div className="min-w-250">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Accueil />
              <Footer />
            </div>
          </Route>
          <Route exact path="/boutique">
            <div>
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Boutique />
              <Footer />
            </div>
          </Route>
          <Route exact path="/contact">
            <div className="min-w-250">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Contact />
              <Footer />
            </div>
          </Route>
          <Route exact path={`/boutique/:titreArticle`}>
            <div className="min-w-250">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Produit />
              <Footer />
            </div>
          </Route>
          <Route exact path="/a_propos">
            <div className="min-w-250">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Apropos />
              <Footer />
            </div>
          </Route>
          <Route exact path="/favoris">
            <div className="min-w-300">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Favoris />
            </div>
          </Route>
          <Route exact path="/panier">
            <div className="min-w-300">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Panier />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
