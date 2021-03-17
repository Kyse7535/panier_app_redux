import React from "react";

const Apropos = (props) => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div
						className="col-12"
						style={{
							background: `url(${process.env.PUBLIC_URL}/business.jpg) center no-repeat`,
							height: "300px",
						}}></div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div
						className="col-12 col-md-6 offset-md-3 col-lg-5
					 center-div my-5 py-5 a-propos-text">
						<h5 className="fw-bolder pb-3">A PROPOS</h5>
						<p>
							Ceci est un paragraphe. C'est l'endroit idéal pour
							écrire une description sur votre entreprise ou vos
							services. Vous pouvez ajouter et modifier le texte.
							Survolez-moi avec votre souris d'ordinateur et
							cliquez une fois pour que le menu s’affiche.
							Double-cliquez pour éditer directement le texte.
							Vous pouvez aussi me déplacer n'importe où sur la
							page par la méthode du « Glisser et Déposer » .
						</p>
						<p>
							Ceci est un paragraphe. C'est l'endroit idéal pour
							écrire une description sur votre entreprise ou vos
							services. Vous pouvez ajouter et modifier le texte.
							Survolez-moi avec votre souris d'ordinateur et
							cliquez une fois pour que le menu s’affiche.
							Double-cliquez pour éditer directement le texte.
						</p>
						<p>
							Vous pouvez aussi me déplacer n'importe où sur la
							page par la méthode du « Glisser et Déposer ».
						</p>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div
						className="col-12"
						style={{
							background: `url(${process.env.PUBLIC_URL}/technology.jpg) center no-repeat`,
							height: "350px",
						}}></div>
				</div>
			</div>
		</>
	);
};

export default Apropos;
