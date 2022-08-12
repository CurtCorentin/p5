let ADDPRODUITS = JSON.parse(localStorage.getItem("produit"));
console.log(ADDPRODUITS);

const DISPLAYPRODUITS = () => {
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
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`,).join("");
};
DISPLAYPRODUITS();

///////////////////////////////////////////////////////////////////////////////////////////////
///////////Manipulation panier


let Boutons = [];
 let boutons = document.getElementById("itemQuantity");
 Boutons.push(boutons);
// console.log(Boutons,"rxgxg");
Boutons.forEach((bouton)=>{
 // console.log(bouton.dataset,"UYUTYKUYVKUYVK"); 
});
 
/////////////////////////////////////////::::::
/////Supprimer produit
const SUPPRIMER = async (DISPLAYPRODUITS) => {
await DISPLAYPRODUITS;
let Poubelles = [];
  let poubelles = document.getElementsByClassName("deleteItem");
 /// console.log(poubelles,"1111");
 Poubelles.push(poubelles);
 //console.log(Poubelles,"222222");
Poubelles.forEach(poubelle=>{
 // console.log(poubelle,"3333");
 

});
 
};
SUPPRIMER();
/*
*/


//////////////////////////////////////////////////////////////////////////////////////////////
//Total panier


let quantitePanier = [];
let prixPanier = []; 
ADDPRODUITS.map((produit) =>
{ 

let calculPanier = (produit.price * produit.quantite);

  prixPanier.push(calculPanier);
  quantitePanier.push(produit.quantite);
  
  //console.log(quantitePanier);
  //console.log(prixPanier);
//  console.log(calculPanier);
  
  

  totalQuantity.textContent = `${eval(quantitePanier.join("+"))}`;
totalPrice.textContent = `${eval(prixPanier.join("+"))}`;
});

///////////////////////////////////////////////////////////////////////////////////////////////////
///////Formulaire



  const PRENOM = document.getElementById("firstName");
  const NOM = document.getElementById("lastName");
  const ADRESSE = document.getElementById("address");
  const VILLE = document.getElementById("city");
  const EMAIL = document.getElementById("email");
  const FORMULAIRE =[];
  const COMMANDER = document.getElementById("order");

  ADDFORMULAIRE = () => {
    FORMULAIRE.push(PRENOM.value,NOM.value,ADRESSE.value,VILLE.value,EMAIL.value); 
    console.log("ADDFORMULAIRE");};

   COMMANDER.addEventListener("click", () => { 
    
    if (FORMULAIRE == null && PRENOM.value,NOM.value,ADRESSE.value,VILLE.value,EMAIL.value != ""){
  console.log("Order");
  ADDFORMULAIRE();
  console.log(FORMULAIRE);
  localStorage.setItem("formulaire",JSON.stringify(FORMULAIRE));
}else {console.log("NANANNAANANANA")}

});





















/*
  PRENOM.addEventListener("input", function(e) {
let valuePrenom = e.target.value;
   FORMULAIRE.push(valuePrenom); 
  console.log(valuePrenom);});
   
   NOM.addEventListener("input", function(e) {
    let valueNom = e.target.value;
    FORMULAIRE.push(valueNom); 
   console.log(valueNom);}); 
   
   ADRESSE.addEventListener("input", function(e) {
    let valueAdresse = e.target.value;
    FORMULAIRE.push(valueAdresse); 
   console.log(valueAdresse);}); 
  
   VILLE.addEventListener("input", function(e) {
    let valueVille = e.target.value;
    FORMULAIRE.push(valueVille); 
   console.log(valueVille);}); 
  
   EMAIL.addEventListener("input", function(e) {
    let valueEmail = e.target.value;
    FORMULAIRE.push(valueEmail); 
   console.log(valueEmail);}); 
   */
  

