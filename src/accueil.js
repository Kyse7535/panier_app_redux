import React from "react";
import { Link } from "react-router-dom";

const Part1 = (props) => {
	return (
		<div
			className="row "
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/part1.jpg)`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				height: "100vh",
			}}>
			<div className=" col-12 col-md-8 offset-md-2 text-white position-relative">
				<div className="part-1 text-right mx-0">
					<h6 className="fw-bolder letter-spacing-3">
						UNE TECHNOLOGIE REVOLUTIONNAIRE
					</h6>
					<p>
						Ceci est un paragraphe. Survolez-moi avec votre souris
						d'ordinateur et cliquez une fois pour que le menu
						s'affiche. Double-cliquez pour éditer directement le
						texte. Vous pouvez aussi me déplacer n'importe où sur la
						page par la méthode du «Glisser et Déposer»
					</p>
				</div>
			</div>
		</div>
	);
};

const Part2 = (props) => {
	return (
		<div className="row">
			<div
				className="col-12 col-md-5 offset-md-1 col-lg-3 offset-lg-3 text-md-left my-5 py-5 "
				style={{ fontSize: "15px" }}>
				<h6 className="letter-spacing-3 fw-bolder">NOUVEAU PRODUIT</h6>
				<p className="my-4 font-weight-400">
					Ceci est un paragraphe. Survolez-moi avec votre souris
					d'ordinateur et cliquez une fois pour que le menu s'affiche.
					Double-cliquez pour éditer directement le texte. Vous pouvez
					aussi me déplacer n'importe où sur la page par la méthode du
					«Glisser et Déposer»
				</p>
				<Link
					to="/boutique/Ordinateur-portable2"
					className=" btn-acheter d-inline-block bg-black text-white w-70 text-center small py-2 rounded-pill text-decoration-none">
					ACHETER
				</Link>
			</div>
			<img
				src={process.env.PUBLIC_URL + "/Laptop-produit.jpg"}
				alt="ordi"
				className="col-12 col-md-5 col-lg-3 img-fluid "
			/>
		</div>
	);
};
const Accueil = (props) => {
	return (
		<div className="container-fluid ">
			<Part1 />
			<Part2 />
			<div className="row">
				<div
					className="col-12 part-3"
					style={{
						background: `url(${process.env.PUBLIC_URL}/ipad.jpg) center no-repeat`,
						backgroundSize: "cover",
						height: "450px",
					}}>
					{" "}
				</div>
			</div>
			<div className="row bg-black text-white">
				<div className="col-12 col-md-3 center-div py-5 my-5">
					<h6 className="letter-spacing-3 fw-bolder">
						TECHNOLOGIE AVANCEE
					</h6>
					<p className="p-3  font-size-14 text-center">
						Ceci est un paragraphe. Survolez-moi avec votre souris
						d'ordinateur et cliquez une fois pour que le menu
						s'affiche. Double-cliquez pour éditer directement le
						texte. Vous pouvez aussi me déplacer n'importe où sur la
						page par la méthode du «Glisser et Déposer»
					</p>
				</div>
			</div>
		</div>
	);
};

export default Accueil;
