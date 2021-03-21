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
            <div>
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Accueil />
            </div>
          </Route>
          <Route exact path="/boutique">
            <div>
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Boutique />
            </div>
          </Route>
          <Route exact path="/contact">
            <div className="min-w-250">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Contact />
            </div>
          </Route>
          <Route exact path={`/boutique/:titreArticle`}>
            <div className="min-w-250">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Produit />
            </div>
          </Route>
          <Route exact path="/a_propos">
            <div className="min-w-250">
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Apropos />
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
