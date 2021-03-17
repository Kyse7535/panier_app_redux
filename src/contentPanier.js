import React from "react";
import * as Icon from "react-bootstrap-icons";

const ContentPanier = (props) => {
	return (
		<span className=" mt-2 mx-0 z-index-2  content-panier bg-white border border-dark px-0">
			{props.articles.length === 0 ? (
				<p className="m-0">Votre panier est vide</p>
			) : (
				<>
					{props.articles.map((article) => (
						<div
							className="d-flex justify-content-between align-items-center px-1"
							key={article.id}>
							<img
								src={process.env.PUBLIC_URL + article.image}
								alt={article.titre}
								className="photo-panier"
							/>
							<div>
								<p className=" small text-left">
									{article.titre} <br />
									Qtité: {article.quantite}
								</p>
							</div>
							<div>
								<Icon.X
									className="fw-bolder"
									onClick={(e) =>
										props.deleteArticles(e, article.id)
									}
								/>
								<p className="small text-left">
									Prix unitaire <br />
									{article.prix} €
								</p>
							</div>
						</div>
					))}
					<div className="small bg-secondary cursor-pointer px-0 ">
						<p className="d-flex justify-content-between m-0">
							<span className="">SOUS-TOTAL</span>
							<span className="">{props.coutTotal}€</span>
						</p>
						<button className=" w-75 text-white bg-dark border-0  mb-2 py-1 cursor-pointer">
							PASSER AU PAIEMENT
						</button>
					</div>
				</>
			)}
		</span>
	);
};
export default ContentPanier;
