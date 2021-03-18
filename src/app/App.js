import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "../components/accueil";
import Header from "../components/header";
import Footer from "../components/footer";
import HeaderMobile from "../components/headerMobile";
import { useSelector, useDispatch } from "react-redux";
import { updateWidth } from "../features/screenWidth/ScreenWidthSlice";
import Boutique from "../components/boutique";
import Contact from "../components/contact";
import Produit from "../features/produit/Produit";
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
            <>
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Accueil />
              <Footer />
            </>
          </Route>
          <Route exact path="/boutique">
            <>
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Boutique />
              <Footer />
            </>
          </Route>
          <Route exact path="/contact">
            <>
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Contact />
              <Footer />
            </>
          </Route>
          <Route exact path={`/boutique/:titreArticle`}>
            <>
              {screenWidth < 1200 ? <HeaderMobile /> : <Header />}
              <Produit />
              <Footer />
            </>
          </Route>
          <Route exact path="/a_propos">
            <App motif="a_propos" />
          </Route>
          <Route exact path="/panier">
            <App motif="panier" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
