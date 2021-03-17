import React, { useEffect, useState } from "react";
import Boutique from "./boutique";
import Produit from "./produit";
const Article = (props) => {
	const article = {
		id: 1,
		titre: "Ordinateur-portable1",
		image: "/ordi.jpg",
		prix: 499,
		description: "Description",
	};

	const article2 = {
		id: 2,
		titre: "Ordinateur-portable2",
		image: "/ordi.jpg",
		prix: 499,
		description: "Description",
	};
	const article3 = {
		id: 3,
		titre: "Ordinateur-portable3",
		image: "/ordi.jpg",
		prix: 499,
		description: "Description",
	};
	let [listeArticle, setListeArticle] = useState([
		article,
		article2,
		article3,
	]);

	const sortZToA = () => {
		let liste = listeArticle.slice();
		let change = true;
		while (change) {
			change = false;
			for (let i = 0; i < liste.length - 1; i++) {
				if (liste[i].titre < liste[i + 1].titre) {
					const tmp = liste[i];
					liste[i] = liste[i + 1];
					liste[i + 1] = tmp;
					change = true;
				}
			}
		}
		return liste;
	};

	const sortAToZ = () => {
		let liste = listeArticle.slice();
		let change = true;
		while (change) {
			change = false;
			for (let i = 0; i > liste.length - 1; i++) {
				if (liste[i].titre > liste[i + 1].titre) {
					const tmp = liste[i];
					liste[i] = liste[i + 1];
					liste[i + 1] = tmp;
					change = true;
				}
			}
		}
		return liste;
	};
	const trier = (e) => {
		const optionValue = e.target.value;
		if (optionValue === "AtoZ") {
			listeArticle = sortAToZ();
		} else if (optionValue === "ZtoA") {
			listeArticle = sortZToA();
		}
	};

	useEffect(() => {
		console.log("change");
		setListeArticle(listeArticle);
	}, [listeArticle]);

	const content =
		props.motif === "boutique" ? (
			<Boutique articles={listeArticle} trier={trier} />
		) : (
			<Produit articles={listeArticle} addToPanier={props.addToPanier} />
		);

	return <> {content} </>;
};

export default Article;
