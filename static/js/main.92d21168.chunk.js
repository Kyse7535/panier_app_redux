(this.webpackJsonppanier_app=this.webpackJsonppanier_app||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);c(26);var r=c(1),i=c.n(r),s=c(17),n=c.n(s),a=c(6),l=c(5),o=c(0),d=function(e){return Object(o.jsx)("div",{className:"row ",style:{backgroundImage:"url(".concat("/panier_app_redux","/part1.jpg)"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"},children:Object(o.jsx)("div",{className:" col-12 col-md-8 offset-md-2 text-white position-relative",children:Object(o.jsxs)("div",{className:"part-1 text-right mx-0",children:[Object(o.jsx)("h6",{className:"fw-bolder letter-spacing-3",children:"UNE TECHNOLOGIE REVOLUTIONNAIRE"}),Object(o.jsx)("p",{children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"})]})})})},j=function(e){return Object(o.jsxs)("div",{className:"row ",children:[Object(o.jsxs)("div",{className:"col-12 col-md-5 offset-md-1 col-lg-3 offset-lg-3 text-md-left my-5 py-5 ",style:{fontSize:"15px"},children:[Object(o.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"NOUVEAU PRODUIT"}),Object(o.jsx)("p",{className:"my-4 font-weight-400",children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"}),Object(o.jsx)(a.b,{to:"/boutique",className:" btn-acheter d-inline-block bg-black text-white w-70 text-center small py-2 rounded-pill text-decoration-none",children:"ACHETER"})]}),Object(o.jsx)("img",{src:"/panier_app_redux/Laptop-produit.jpg",alt:"ordi",className:"col-12 col-md-5 col-lg-3 img-fluid "})]})},u=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(d,{}),Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 part-3",style:{background:"url(".concat("/panier_app_redux","/ipad.jpg) center no-repeat"),backgroundSize:"cover",height:"450px"}})}),Object(o.jsx)("div",{className:"row bg-black text-white ",children:Object(o.jsxs)("div",{className:"col-12 col-md-3 center-div py-5 my-4",children:[Object(o.jsx)("h6",{className:"letter-spacing-3 fw-bolder",children:"TECHNOLOGIE AVANCEE"}),Object(o.jsx)("p",{className:"p-3  font-size-14 text-center",children:"Ceci est un paragraphe. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s'affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xabGlisser et D\xe9poser\xbb"})]})})]})})},b=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",style:{background:"url(".concat("/panier_app_redux","/business.jpg) center no-repeat"),height:"300px"}})})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 col-md-6 offset-md-3 col-lg-5\r center-div my-5 py-5 a-propos-text",children:[Object(o.jsx)("h5",{className:"fw-bolder pb-3",children:"A PROPOS"}),Object(o.jsx)("p",{children:"Ceci est un paragraphe. C'est l'endroit id\xe9al pour \xe9crire une description sur votre entreprise ou vos services. Vous pouvez ajouter et modifier le texte. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s\u2019affiche. Double-cliquez pour \xe9diter directement le texte. Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xab Glisser et D\xe9poser \xbb ."}),Object(o.jsx)("p",{children:"Ceci est un paragraphe. C'est l'endroit id\xe9al pour \xe9crire une description sur votre entreprise ou vos services. Vous pouvez ajouter et modifier le texte. Survolez-moi avec votre souris d'ordinateur et cliquez une fois pour que le menu s\u2019affiche. Double-cliquez pour \xe9diter directement le texte."}),Object(o.jsx)("p",{children:"Vous pouvez aussi me d\xe9placer n'importe o\xf9 sur la page par la m\xe9thode du \xab Glisser et D\xe9poser \xbb."})]})})}),Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",style:{background:"url(".concat("/panier_app_redux","/technology.jpg) center no-repeat"),height:"350px"}})})})]})},m=c(42),x=c(7),p=c.n(x),h=c(41),O=c(2),f=c(12),v={name:"allArticlePanier",initialState:[],reducers:{addArticle:function(e,t){var c=e.findIndex((function(e){return e.id===t.payload.article.id}));if(-1===c){var r={id:t.payload.article.id,titre:t.payload.article.titre,image:t.payload.article.image,prix:t.payload.article.prix,quantite:parseInt(t.payload.quantite)};console.log(t.payload.quantite),e.push(r)}else e[c].quantite+=parseInt(t.payload.quantite);return e},deleteArticle:function(e,t){var c=e.findIndex((function(e){return e.id===t.payload.id}));return e.splice(c,1),e},modifyQtiteArticle:function(e,t){var c=e.findIndex((function(e){return e.id===t.payload.id}));return e[c].quantite=""===!t.payload.valeur?parseInt(t.payload.valeur):1,e}}},N=Object(f.b)(v),g=N.actions,y=g.addArticle,w=g.deleteArticle,k=g.modifyQtiteArticle,A=N.reducer,q=function(e){var t=Object(O.c)((function(e){return e.allArticlePanier})),c=Object(O.b)(),r=t.reduce((function(e,t){return e+t.prix*t.quantite}),0);return Object(o.jsx)("span",{className:"mt-2 mx-0 z-index-2 content-panier bg-white border border-dark px-0",children:0===r?Object(o.jsx)("p",{className:"m-0",children:"Votre panier est vide"}):Object(o.jsxs)(o.Fragment,{children:[t.map((function(e){return Object(o.jsxs)("div",{className:"d-flex justify-content-between align-items-center px-1",children:[Object(o.jsx)("img",{src:"/panier_app_redux"+e.image,alt:e.titre,className:"photo-panier"}),Object(o.jsx)("div",{children:Object(o.jsxs)("p",{className:" small text-left",children:[e.titre," ",Object(o.jsx)("br",{}),"Qtit\xe9: ",e.quantite]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{className:"fw-bolder",onClick:function(){return c(w(e))}}),Object(o.jsxs)("p",{className:"small text-left",children:["Prix unitaire ",Object(o.jsx)("br",{}),e.prix," \u20ac"]})]})]},e.id)})),Object(o.jsxs)("div",{className:"small bg-secondary cursor-pointer px-0 ",children:[Object(o.jsxs)("p",{className:"d-flex justify-content-between m-0",children:[Object(o.jsx)("span",{className:"",children:"SOUS-TOTAL"}),Object(o.jsxs)("span",{className:"",children:[r,"\u20ac"]})]}),Object(o.jsx)(a.b,{to:"/panier",children:Object(o.jsx)("button",{className:" w-75 text-white bg-dark border-0  mb-2 py-1 cursor-pointer",children:"PASSER AU PAIEMENT"})})]})]})})},D=function(e){var t=Object(O.c)((function(e){return e.allArticlePanier})).reduce((function(e,t){return e+t.quantite}),0);return Object(o.jsx)("header",{className:"menu-desktop",children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-8 offset-2 d-flex justify-content-between py-3",children:[Object(o.jsx)("div",{children:"Mon logo"}),Object(o.jsxs)("ul",{className:"my-0 px-0 ",children:[Object(o.jsx)("li",{className:"mx-4 link-menu cursor-pointer",children:Object(o.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/",children:"Accueil"})}),Object(o.jsx)("li",{className:"mx-4 link-menu cursor-pointer",children:Object(o.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/boutique",children:"Boutique"})}),Object(o.jsx)("li",{className:"mx-4 link-menu cursor-pointer",children:Object(o.jsx)(a.b,{className:"text-dark text-decoration-none",to:"/a_propos",children:"A propos"})}),Object(o.jsx)("li",{className:"mx-4 link-menu cursor-pointer",children:Object(o.jsx)(a.b,{className:"text-dark text-decoration-none ",to:"/contact",children:"Contact"})}),Object(o.jsxs)("li",{className:"mx-4 link-menu cursor-pointer position-relative panier",onMouseOver:function(){return p()(".content-panier").css("display","block")},onMouseOut:function(){return p()(".content-panier").delay(2e3).css("display","none")},children:[Object(o.jsxs)(a.b,{className:"text-dark text-decoration-none",to:"/panier",children:[Object(o.jsx)(m.a,{className:"mr-2 ",size:"30"}),"Panier(",t,")"]}),Object(o.jsx)(q,{})]})]})]})})})})},P=(c(37),function(e){var t=function(){return p()(".overlay").fadeOut()},c=Object(O.c)((function(e){return e.allArticlePanier})).reduce((function(e,t){return e+t.quantite}),0);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:" position-fixed h-100 w-100 z-index-2 overlay",style:{display:"none"},children:Object(o.jsxs)("div",{id:"menu_mobile",className:"h-100 w-100",children:[Object(o.jsx)("i",{className:"fas fa-times fa-2x close-menu",onClick:function(){p()(".overlay").fadeOut()}}),Object(o.jsx)("div",{className:"h-100  d-flex align-items-center position-static justify-content-center",children:Object(o.jsxs)("ul",{className:"col-12 d-flex flex-column align-items-center justify-content-center my-0 px-0 text-white",children:[Object(o.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(o.jsx)(a.b,{className:" text-decoration-none",to:"/",children:"Accueil"})}),Object(o.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(o.jsx)(a.b,{className:" text-decoration-none",to:"/boutique",children:"Boutique"})}),Object(o.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(o.jsx)(a.b,{className:" text-decoration-none",to:"/a_propos",children:"A propos"})}),Object(o.jsx)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:Object(o.jsx)(a.b,{className:" text-decoration-none ",to:"/contact",children:"Contact"})}),Object(o.jsxs)("li",{onClick:t,className:"mx-3 py-2 link-menu d-block cursor-pointer",children:[Object(o.jsx)(m.a,{className:"mr-2 text-black",size:"30"}),Object(o.jsxs)(a.b,{className:" text-decoration-none",to:"/panier",children:["Panier(",c,")"]})]})]})})]})}),Object(o.jsxs)("div",{className:"hamburger d-flex justify-content-between py-1 px-5",children:[Object(o.jsx)("div",{children:"logo1"}),Object(o.jsx)("i",{className:"fas fa-bars fa-2x",id:"open-menu",onClick:function(){p()(".overlay").fadeIn()}})]})]})}),C={name:"screenWidth",initialState:window.innerWidth,reducers:{updateWidth:function(e,t){return t.payload}}},z=Object(f.b)(C),S=z.actions.updateWidth,_=z.reducer,T={id:1,titre:"Ordinateur-portable1, 2e version",image:"/ordi.jpg",prix:399,description:"Description",datePublication:new Date(2020,1).toString()},E={id:2,titre:"Ordinateur-portable2, 3e version",image:"/ordi.jpg",prix:599,description:"Description",datePublication:new Date(2021,3).toString()},I={id:3,titre:"Ordinateur-portable3, 1ere version",image:"/ordi.jpg",prix:499,description:"Description",datePublication:new Date(2019,1).toString()},F=function(e,t){for(var c=!0;c;){c=!1;for(var r=0;r<e.length-1;r++)if(e[r][t.payload]>e[r+1][t.payload]){var i=e[r];e[r]=e[r+1],e[r+1]=i,c=!0}}return e},V=function(e,t){for(var c=!0;c;){c=!1;for(var r=0;r<e.length-1;r++)if(e[r][t.payload]<e[r+1][t.payload]){var i=e[r];e[r]=e[r+1],e[r+1]=i,c=!0}}return e},R={name:"article",initialState:[T,E,I],reducers:{sortAToZ:function(e,t){return F(e,t)},sortZToA:function(e,t){return V(e,t)},sortPrixAsc:function(e,t){return F(e,t)},sortPrixDesc:function(e,t){return V(e,t)},sortDateAsc:function(e,t){return F(e,t)},sortDateDesc:function(e,t){return V(e,t)}}},L=Object(f.b)(R),Z=L.actions,G=Z.sortAToZ,Q=Z.sortZToA,U=Z.sortPrixAsc,W=Z.sortPrixDesc,M=Z.sortDateAsc,B=Z.sortDateDesc,H=L.reducer,J=function(e){var t=Object(O.b)();return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 text-right trier ",children:Object(o.jsx)("form",{children:Object(o.jsxs)("select",{className:"bg-light border-0 small cursor-pointer",onChange:function(e){return c=e.target.value,void t("AtoZ"===c?G("titre"):"ZtoA"===c?Q("titre"):"PrixAsc"===c?U("prix"):"PrixDesc"===c?W("prix"):"dateAsc"===c?M("datePublication"):B("datePublication"));var c},children:[Object(o.jsx)("option",{value:"AtoZ",children:"Titre: de A \xe0 Z"}),Object(o.jsx)("option",{value:"ZtoA",children:"Titre: de Z \xe0 A"}),Object(o.jsx)("option",{value:"PrixAsc",children:"Prix: Ascendant"}),Object(o.jsx)("option",{value:"PrixDesc",children:"Prix: Descendant"}),Object(o.jsx)("option",{value:"dateAsc",children:"Moins recent"}),Object(o.jsx)("option",{value:"dateDesc",children:"Plus recent"})]})})})})},K=Object(f.b)({name:"searchTerm",initialState:"",reducers:{updateSearchTerm:function(e,t){return t.payload}}}),X=K.actions.updateSearchTerm,Y=K.reducer,$=c(43),ee=function(e){var t=Object(O.c)((function(e){return e.searchTerm})),c=Object(O.b)();return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 mt-5 mb-3 text-left",children:Object(o.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"d-flex justify-content-between form-search",children:[Object(o.jsxs)("span",{className:"set-border d-flex justify-content-between boutique-input-search",children:[Object(o.jsx)($.a,{className:"m-1"}),Object(o.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),c(X(e.target.value))},value:t,className:"border-0 focus-no-outline d-inline-block w-100 mx-1"})]}),Object(o.jsx)("input",{type:"submit",value:"Rechercher",className:"border-0 mx-1 boutique-submit-search"})]})})})},te=function(e){var t=Object(O.c)((function(e){return e.searchTerm})),c=Object(O.c)((function(e){return e.listeArticle.filter((function(e){return e.titre.startsWith(t)}))}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container p-3 mb-5",children:[Object(o.jsx)(J,{}),Object(o.jsx)(ee,{}),Object(o.jsx)("div",{className:"row py-4 padding-bottom-10",children:0===c.length?Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("p",{className:"my-5",children:"Aucun article trouv\xe9"})}):c.map((function(e){return Object(o.jsx)("div",{className:"col-12 col-md-6 text-left mt-3 mb-3",children:Object(o.jsx)(a.b,{to:"/boutique/".concat(e.titre),className:" text-decoration-none",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"/panier_app_redux"+e.image,className:"photo-boutique img-fluid",alt:"ordinateur"}),Object(o.jsx)("h6",{children:e.titre}),Object(o.jsxs)("p",{children:[e.prix,"\u20ac"]})]})})},e.id)}))})]})})},ce=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",style:{background:"url(".concat("/panier_app_redux","/technology.jpg) center no-repeat"),height:"300px"}})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row py-md-5",children:Object(o.jsx)("h5",{className:" col-12 fw-bolder mb-2",children:"CONTACT"})})})]})})},re=Object(f.b)({name:"articleQuantite",initialState:1,reducers:{updateCount:function(e,t){return t.payload}}}),ie=re.actions.updateCount,se=re.reducer,ne=c(44),ae=function(e){return Object(o.jsx)("div",{className:"container-fluid position-absolute bottom-0 top-100",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 py-3 footer",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"letter-spacing-3 fw-bold",children:"COMPAGNIE DE TECHNOLOGIE"}),Object(o.jsx)("p",{className:"mb-0 font-size-12",children:"432 rue des Dunes"}),Object(o.jsx)("p",{className:"font-size-12",children:"75000 Paris"})]})})})})},le=function(e){var t=Object(l.f)(),c=Object(O.c)((function(e){return e.listeArticle})),r=Object(O.c)((function(e){return e.screenWidth})),i=Object(O.c)((function(e){return e.articleQuantite})),s=Object(O.b)(),n=c.find((function(e){return e.titre===t.params.titreArticle})),a=function(e){e.preventDefault(),p()(".content-panier").css("display","block").delay(2e3).fadeOut(),r<1200&&p()(".article-added-text").css("display","block").delay(2e3).fadeOut(),s(y({quantite:i,article:n}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container h-100 pb-5",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 text-left mt-5 mb-3 px-0 ",children:t.url})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-12 col-md-5 border p-2 d-flex align-items-center",style:{height:"60vh"},children:Object(o.jsx)("img",{src:"/panier_app_redux"+n.image,alt:n.titre,className:" img-fluid"})}),Object(o.jsxs)("div",{className:"col-12 col-md-6 z-index-1 text-left px-4 py-2",children:[Object(o.jsx)("p",{className:"font-weight-bold",children:n.titre}),Object(o.jsxs)("p",{className:"font-weight-bold",children:[n.prix,"\u20ac "]}),Object(o.jsxs)("form",{onSubmit:function(e){return a(e)},children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-3 col-md-2",children:[Object(o.jsx)("label",{className:"d-block",children:"Quantit\xe9"}),Object(o.jsx)("input",{type:"number",min:"1",className:" form-control rounded-0 px-1",value:i,onChange:function(e){return s(ie(e.target.value))}})]})}),Object(o.jsxs)("p",{className:"text-success font-weight-lighter my-2",children:[Object(o.jsx)(ne.a,{size:"12"})," En stock"]}),Object(o.jsx)("input",{type:"submit",value:"AJOUTER AU PANIER",className:"w-100 py-2 fw-light rounded-0 text-white bg-dark border-0 "})]}),r<1200?Object(o.jsx)("div",{className:"article-added-text text-black  text-center bg-light",children:Object(o.jsx)("p",{children:"Article ajout\xe9 au panier"})}):Object(o.jsx)(o.Fragment,{})]})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center text-md-left font-smaller py-3",children:[Object(o.jsx)("h5",{className:"fw-bold",children:"Description"}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus vitae illo molestiae odit, hic consectetur porro illum ea distinctio sed blanditiis cum nobis enim exercitationem, ipsum sunt sit praesentium? Mollitia distinctio minus itaque. Quis velit adipisci aut minima! Consequatur aliquid obcaecati nihil aut voluptas aperiam et at assumenda aspernatur expedita."})]})})]}),Object(o.jsx)(ae,{})]})},oe=function(e){var t=Object(O.c)((function(e){return e.allArticlePanier})).reduce((function(e,t){return e+t.prix*t.quantite}),0);return Object(o.jsxs)("div",{className:"col-12 col-md-3 pl-md-3 px-0 text-left",children:[Object(o.jsx)("h6",{className:"text-left fw-bold",children:"Resume de la commande"}),Object(o.jsxs)("p",{className:"d-flex justify-content-between mb-md-3",children:[Object(o.jsx)("span",{children:"Sous total:"}),Object(o.jsxs)("span",{className:"fw-bold",children:[t,"\u20ac"]})]}),Object(o.jsxs)("form",{className:"float-none d-block w-100 small mb-4 my-md-3 py-md-3",onSubmit:function(e){e.preventDefault(),p()(".input-code-promo").css("border-color","red"),p()(".error-code-promo").show()},children:[Object(o.jsx)("input",{type:"text",className:"input-code-promo py-1 px-2",placeholder:"code-promo",onChange:function(e){e.preventDefault(),p()(".input-code-promo").css("border-color","black"),p()(".error-code-promo").hide()}}),Object(o.jsx)("input",{type:"submit",className:"submit-code-promo my-1 py-1",value:"Appliquer"}),Object(o.jsx)("span",{className:" w-100 py-2 error-code-promo text-danger",children:"Oups ! Il semble que ce code promo n'existe pas"})]}),Object(o.jsx)("button",{className:"rounded-pill border-0 bg-black text-white py-1 px-4",children:"Commander"})]})},de=c(9),je=c.n(de),ue=function(e){var t=Object(O.c)((function(e){return e.allArticlePanier})),c=Object(O.b)();return Object(o.jsxs)("div",{className:"col-12 col-md-5 offset-md-2 text-left px-0 page-panier",children:[Object(o.jsx)("h6",{className:" fw-bold",children:"Panier"}),Object(o.jsxs)("ul",{className:"w-100 d-md-flex px-0 border-bottom",children:[Object(o.jsx)("li",{className:"small w-10",children:"Produit"},je()()),Object(o.jsx)("li",{className:"small w-21",children:"Description"},je()()),Object(o.jsx)("li",{className:"small w-15",children:"Prix unit."},je()()),Object(o.jsx)("li",{className:"small w-15",children:"Quantite"},je()()),Object(o.jsx)("li",{className:"small w-15",children:"Sous-total"},je()())]},je()()),t.map((function(e){return Object(o.jsxs)("ul",{className:"w-100 d-flex flex-row px-0 border-bottom py-2",children:[Object(o.jsx)("li",{className:"small w-10",children:Object(o.jsx)("img",{src:"/panier_app_redux"+e.image,alt:e.titre,className:"photo-page-panier"})},je()()),Object(o.jsxs)("li",{className:"small w-21",children:[e.titre,Object(o.jsx)("button",{className:"border-0 bg-white text-black py-1 d-block px-0 text-decoration-underline",onClick:function(t){return function(e,t){t.preventDefault(),c(w(e))}(e.id,t)},children:"supprimer"},je()())]},je()()),Object(o.jsxs)("li",{className:"small w-15",children:[e.prix,"\u20ac"]},je()()),Object(o.jsx)("li",{className:"small w-15",children:Object(o.jsx)("form",{children:Object(o.jsx)("input",{onChange:function(t){return function(e,t){t.preventDefault();var r=t.target.value;console.log(""===r),c(k({id:e,valeur:r}))}(e.id,t)},className:"d-inline-block w-50 m-md-1 py-1",type:"number",min:"1",value:e.quantite})})},je()()),Object(o.jsxs)("li",{className:"small w-15",children:[e.prix*e.quantite," \u20ac"]},je()())]},je()())}))]})},be=function(e){var t=Object(O.c)((function(e){return e.allArticlePanier}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"container-fluid min-vh-75",children:Object(o.jsx)("div",{className:"row p-3 ",children:0===t.length?Object(o.jsx)("div",{className:"col-12 col-md-8 offset-md-2 text-left border-bottom pb-2 my-5",children:"Votre panier est vide"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-12 col-md-8 offset-md-2 text-left px-0 mb-5 small",children:Object(o.jsx)(a.b,{to:"/boutique",children:"continuer les achats"})}),Object(o.jsx)(ue,{}),Object(o.jsx)(oe,{})]})})}),Object(o.jsx)(ae,{})]})},me=function(e){var t=Object(O.c)((function(e){return e.screenWidth})),c=Object(O.b)();return window.addEventListener("resize",(function(){return c(S(window.innerWidth))})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(a.a,{basename:"/panier_app_redux",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsxs)("div",{className:"min-w-250",children:[t<1200?Object(o.jsx)(P,{}):Object(o.jsx)(D,{}),Object(o.jsx)(u,{}),Object(o.jsx)(ae,{})]})}),Object(o.jsx)(l.a,{exact:!0,path:"/boutique",children:Object(o.jsxs)("div",{children:[t<1200?Object(o.jsx)(P,{}):Object(o.jsx)(D,{}),Object(o.jsx)(te,{}),Object(o.jsx)(ae,{})]})}),Object(o.jsx)(l.a,{exact:!0,path:"/contact",children:Object(o.jsxs)("div",{className:"min-w-250",children:[t<1200?Object(o.jsx)(P,{}):Object(o.jsx)(D,{}),Object(o.jsx)(ce,{}),Object(o.jsx)(ae,{})]})}),Object(o.jsx)(l.a,{exact:!0,path:"/boutique/:titreArticle",children:Object(o.jsxs)("div",{className:"min-w-250",children:[t<1200?Object(o.jsx)(P,{}):Object(o.jsx)(D,{}),Object(o.jsx)(le,{}),Object(o.jsx)(ae,{})]})}),Object(o.jsx)(l.a,{exact:!0,path:"/a_propos",children:Object(o.jsxs)("div",{className:"min-w-250",children:[t<1200?Object(o.jsx)(P,{}):Object(o.jsx)(D,{}),Object(o.jsx)(b,{}),Object(o.jsx)(ae,{})]})}),Object(o.jsx)(l.a,{exact:!0,path:"/panier",children:Object(o.jsxs)("div",{className:"min-w-300",children:[t<1200?Object(o.jsx)(P,{}):Object(o.jsx)(D,{}),Object(o.jsx)(be,{})]})})]})})})},xe=(c(39),Object(f.a)({reducer:{listeArticle:H,allArticlePanier:A,screenWidth:_,articleQuantite:se,searchTerm:Y}})),pe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),r(e),i(e),s(e),n(e)}))};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(O.a,{store:xe,children:Object(o.jsx)(me,{})})}),document.getElementById("root")),pe()}},[[40,1,2]]]);
//# sourceMappingURL=main.92d21168.chunk.js.map