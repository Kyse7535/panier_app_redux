import React from "react";
import { Link } from "react-router-dom";

const Trier = (props) => {
	return (
		<div className="row">
			<div className="col-12 text-right trier">
				<form>
					<select
						className="bg-light border-0 small"
						onChange={(e) => props.trier(e)}>
						<option value="AtoZ">Titre: de A à Z</option>
						<option value="ZtoA">Titre: de Z à A</option>
						<option value="Ascendant">Prix: Ascendant</option>
						<option value="Descendant">Prix: Descendant</option>
						<option value="Moins">Moins recent</option>
						<option value="plus">Plus recent</option>
					</select>
				</form>
			</div>
		</div>
	);
};

export const Boutique = (props) => {
	return (
		<>
			<div className="container">
				<Trier trier={props.trier} />
				<div className="row">
					{props.articles.map((article) => (
						<div
							className="col-12 col-md-6 text-left my-5"
							key={article.id}>
							<Link to={`/boutique/${article.titre}`}>
								<div>
									<img
										src={
											process.env.PUBLIC_URL +
											article.image
										}
										className="photo-boutique img-fluid"
										alt="ordinateur"
									/>
									<h5>{article.titre}</h5>
									<p>{article.prix}€</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Boutique;
