import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import $ from "jquery";
import ContentPanier from "./contentPanier";

const Header = (props) => {
	const [nbreArticle, setNbreArticle] = useState(0);

	useEffect(() => {
		setNbreArticle(props.nbrePanier);
	}, [props.nbrePanier]);

	const displayPanier = () => {
		$(".panier").mouseover(() =>
			$(".content-panier").css("display", "block"),
		);
	};
	const hidePanier = () => {
		$(".panier").mouseout(() =>
			$(".content-panier").css("display", "none"),
		);
	};

	displayPanier();
	hidePanier();
	return (
		<header className="menu-desktop">
			<div className="container-fluid">
				<div className="row">
					<div className="col-8 offset-2 d-flex justify-content-between py-3">
						<div>Mon logo</div>
						<ul className="my-0 px-0 ">
							<li className="mx-3 link-menu cursor-pointer">
								<Link
									className="text-dark text-decoration-none"
									to="/">
									Accueil
								</Link>
							</li>
							<li className="mx-3 link-menu cursor-pointer">
								<Link
									className="text-dark text-decoration-none"
									to="/boutique">
									Boutique
								</Link>
							</li>
							<li className="mx-3 link-menu cursor-pointer">
								<Link
									className="text-dark text-decoration-none"
									to="/a_propos">
									A propos
								</Link>
							</li>
							<li className="mx-3 link-menu cursor-pointer">
								<Link
									className="text-dark text-decoration-none "
									to="/contact">
									Contact
								</Link>
							</li>
							<li className="mx-3 link-menu cursor-pointer position-relative panier">
								<Link
									className="text-dark text-decoration-none"
									to="/panier">
									<Icon.Bag className="mr-2 " size="30" />
									Panier({nbreArticle})
								</Link>
								<ContentPanier
									articles={props.articles}
									coutTotal={props.coutTotal}
									deleteArticles={props.deleteArticles}
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
