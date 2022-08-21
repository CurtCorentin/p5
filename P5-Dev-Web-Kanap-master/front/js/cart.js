
let idCouleur = []; 

const RECUPERATION = async () => {
   let prixPanier = 0;
  let quantitePanier = 0;

    for (i=0; i<localStorage.length; i++)  
    {  
       let key = localStorage.key(i);  
       let idCouleur  = JSON.parse(localStorage.getItem(key));
       quantitePanier = quantitePanier + parseInt(idCouleur.quantite, 10); 
let KEY = key; 
let keyId = key.substring(0, 32);
let keyColor= key.substring(32, key.length);
 console.log(key,"key");
     await fetch(`http://localhost:3000/api/products/${keyId}`)
  .then((res) => res.json())
  .then((promise) => {
      produitData = promise;});

prixPanier = prixPanier+ parseInt(idCouleur.quantite, 10) * parseInt(produitData.price,10);

let article = document.createElement("section");

article.innerHTML =`<article class="cart__item" id="${KEY}" data-color="${keyColor}">
<div class="cart__item__img">
  <img src="${produitData.imageUrl}" alt="${produitData.altTxt}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${produitData.name}</h2>
    <p>${keyColor}</p>
    <p>${produitData.price}$</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" id="itemQuantity" name="${KEY}" min="1" max="100" value="${idCouleur.quantite}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem" id="${KEY}" >Supprimer</p>
    </div>
  </div>
</div>
</article>`;
cart__items.append( article ); 
 let boutons = document.getElementsByClassName("itemQuantity"); 

      
boutons[i].addEventListener("input", async (e) => {
 
  await fetch(`http://localhost:3000/api/products/${keyId}`)
  .then((res) => res.json())
  .then((promise) => {
      produitData = promise;});
console.log(produitData._id,produitData.price);
envoieQuantiteLocal = {quantite:e.target.value};
  localStorage.setItem(key,JSON.stringify(envoieQuantiteLocal));

  quantitePanier = quantitePanier - parseInt(idCouleur.quantite, 10);
prixPanier = prixPanier - parseInt(idCouleur.quantite, 10) * parseInt(produitData.price,10) ;
idCouleur.quantite = e.target.value;
quantitePanier = quantitePanier + parseInt(e.target.value, 10);
prixPanier = prixPanier + parseInt(e.target.value, 10) * parseInt(produitData.price,10) ;
totalQuantity.innerText = `${quantitePanier}`;
    totalPrice.innerText = `${prixPanier}`;
  });


 }
 
 
 

  

totalQuantity.innerText = `${quantitePanier}`;
    totalPrice.innerText = `${prixPanier}`;
}; 
 RECUPERATION();
  /* 
quantitePanier =  parseInt(idCouleur.quantite, 10)  ; 
        prixPanier = prixPanier + parseInt(idCouleur.quantite, 10) * parseInt(produitData.price,10) ;
        totalQuantity.innerText = `${quantitePanier}`;
        totalPrice.innerText = `${prixPanier}`;
console.log(quantitePanier,"1111");
console.log(prixPanier,"22222");


   
  
*/

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
PRENOM.addEventListener("input",()=> {
  
 console.log(PRENOM.value);
});
NOM.addEventListener("input",()=> {
  
  console.log(NOM.value);
});
ADRESSE.addEventListener("input",()=>{
  
  console.log(ADRESSE.value);
});
VILLE.addEventListener("input",()=>{

  console.log(VILLE.value);
});
EMAIL.addEventListener("input",()=> {
  
  console.log(EMAIL.value);
});


///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Recuperation value et Envoie localStorage
   COMMANDER.addEventListener("click", () => { 
    if (PRENOM.value,NOM.value,ADRESSE.value,VILLE.value,EMAIL.value != ("")  ) {
  FORMULAIRE.push(PRENOM.value,NOM.value,ADRESSE.value,VILLE.value,EMAIL.value); 
  localStorage.setItem("formulaire",JSON.stringify(FORMULAIRE));
}else {console.log("Remplir le formulaire")}});



