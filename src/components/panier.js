import React from "react";

const Panier = (props) => {
	const panierVide = (
		<div className="row">
			<div className="col-12 text-left mt-4 px-2 h-100">
				<p>Votre panier est vide</p> <hr />
			</div>
		</div>
	);

	const panierFilled = <div>Mon panier</div>;
	return (
		<div className="container">
			{props.articles.length === 0 ? panierVide : panierFilled}
		</div>
	);
};

export default Panier;
