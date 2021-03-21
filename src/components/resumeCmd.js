import $ from "jquery";
import { useSelector } from "react-redux";
const ResumeCmd = (props) => {
  const allArticlePanier = useSelector((state) => state.allArticlePanier);
  const handleSubmitCP = (e) => {
    e.preventDefault();
    $(".input-code-promo").css("border-color", "red");
    $(".error-code-promo").show();
  };

  const handleChangeCP = (e) => {
    e.preventDefault();
    $(".input-code-promo").css("border-color", "black");
    $(".error-code-promo").hide();
  };

  const coutTotal = allArticlePanier.reduce(
    (acc, curr) => acc + curr.prix * curr.quantite,
    0
  );
  return (
    <div className="col-12 col-md-3 pl-md-3 px-0 text-left">
      <h6 className="text-left fw-bold">Resume de la commande</h6>
      <p className="d-flex justify-content-between mb-md-3">
        <span>Sous total:</span>
        <span className="fw-bold">{coutTotal}€</span>
      </p>
      <form
        className="float-none d-block w-100 small mb-4 my-md-3 py-md-3"
        onSubmit={handleSubmitCP}
      >
        <input
          type="text"
          className="input-code-promo py-1 px-2"
          placeholder="code-promo"
          onChange={handleChangeCP}
        />
        <input
          type="submit"
          className="submit-code-promo my-1 py-1"
          value="Appliquer"
        />
        <span className=" w-100 py-2 error-code-promo text-danger">
          Oups ! Il semble que ce code promo n'existe pas
        </span>
      </form>

      <button className="rounded-pill border-0 bg-black text-white py-1 px-4">
        Commander
      </button>
    </div>
  );
};

export default ResumeCmd;
