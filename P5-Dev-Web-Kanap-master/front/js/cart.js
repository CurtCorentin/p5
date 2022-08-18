let ADDPRODUITS = [];

const FETCHPRODUITS = async () => { 
 await fetch(`http://localhost:3000/api/products`)
  .then((res) => res.json())
  .then((promise) => {
      produitData = promise;});
};
  FETCHPRODUITS();

  Recuperation =async () => {
    await FETCHPRODUITS();
    console.log(produitData);
      for (let i = 0; i < produitData.length; i++ ) {for (let j = 0; j < produitData[i].colors.length; j++) {

        let addproduit = JSON.parse(localStorage.getItem(produitData[i]._id+produitData[i].colors[j]));
        if (addproduit == null){
}else{
  ADDPRODUITS.push(addproduit);
}}
}

console.log(ADDPRODUITS,"1111");

cart__items.innerHTML = ADDPRODUITS.map((produit) => 
 `<article class="cart__item" data-id="${produit._id}" data-color="${produit.couleur}">
 <div class="cart__item__img">
   <img src="${produit.imageUrl}" alt="${produit.altTxt}">
 </div>
 <div class="cart__item__content">
   <div class="cart__item__content__description">
     <h2>${produit.name}</h2>
     <p>${produit.couleur}</p>
     <p>${produit.price}$</p>
   </div>
   <div class="cart__item__content__settings">
     <div class="cart__item__content__settings__quantity">
       <p>Qté : </p>
       <input type="number" class="itemQuantity" id="itemQuantity" name="itemQuantity" min="1" max="100" value="${produit.quantite}">
     </div>
     <div class="cart__item__content__settings__delete">
       <p class="deleteItem" id="${produit._id}" >Supprimer</p>
     </div>
   </div>
 </div>
 </article>`,).join("");
 ///////////////////////////////////////////////////////////////////////////////////////////////
///////////Manipulation panier
      let boutons = document.getElementsByClassName("itemQuantity");
       for (let b = 0; b < boutons.length; b++) {
     boutons[b].addEventListener("input",() => {
      console.log(boutons[b].value);
     })};

/////////////////////////////////////////::::::
/////Supprimer produit

  let poubelles = document.getElementsByClassName("deleteItem");
  for (let p = 0; p < poubelles.length; p++) {
    poubelles[p].addEventListener("click",() => { 
  console.log(poubelles[p]);})}

//////////////////////////////////////////////////////////////////////////////////////////////
//Total panier
let quantitePanier = [];
let prixPanier = []; 
ADDPRODUITS.map((produit) => { 
let calculPanier = (produit.price * produit.quantite);
  prixPanier.push(calculPanier);
  quantitePanier.push(produit.quantite);
  totalQuantity.textContent = `${eval(quantitePanier.join("+"))}`;
totalPrice.textContent = `${eval(prixPanier.join("+"))}`;
});
};

   Recuperation();





 


 

///////////////////////////////////////////////////////////////////////////////////////////////////
///////Formulaire
  const PRENOM = document.getElementById("firstName");
  const NOM = document.getElementById("lastName");
  const ADRESSE = document.getElementById("address");
  const VILLE = document.getElementById("city");
  const EMAIL = document.getElementById("email");
  const FORMULAIRE =[];

  const COMMANDER = document.getElementById("order");
COMMANDER.formAction = "./confirmation.html";

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////Controle value
PRENOM.addEventListener("input",function(e) {
  let valuePrenom = e.target.value ;
 console.log(valuePrenom);
});
NOM.addEventListener("input",function(e) {
  let valueNom = e.target.value;
  console.log(valueNom);
});
ADRESSE.addEventListener("input",function(e) {
  let valueAdresse = e.target.value;
  console.log(valueAdresse);
});
VILLE.addEventListener("input",function(e) {
  let valueVille = e.target.value;
  console.log(valueVille);
});
EMAIL.addEventListener("input",function(e) {
  let valueEmail = e.target.value;
  console.log(valueEmail);
});


///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Recuperation value et Envoie localStorage
   COMMANDER.addEventListener("click", () => { 
    if (PRENOM.value,NOM.value,ADRESSE.value,VILLE.value,EMAIL.value != ("")  ) {
  FORMULAIRE.push(PRENOM.value,NOM.value,ADRESSE.value,VILLE.value,EMAIL.value); 
  localStorage.setItem("formulaire",JSON.stringify(FORMULAIRE));
}else {console.log("Remplir le formulaire")}});



