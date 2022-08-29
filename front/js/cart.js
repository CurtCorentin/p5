
const RECUPERATION = async () => {
   let idProduits = []; 
   let prixPanier = 0;
  let quantitePanier = 0;

    for (i=0; i<localStorage.length; i++)  ///////////////////////boucle
    {  
       let key = localStorage.key(i);  
       let idCouleur  = JSON.parse(localStorage.getItem(key));
       
       quantitePanier = quantitePanier + parseInt(idCouleur.quantite, 10); 
       let keyId = key.substring(0, 32);
       let keyColor= key.substring(32, key.length);
 idProduits.push(keyId);
     await fetch(`http://localhost:3000/api/products/${keyId}`)
  .then((res) => res.json())
  .then((promise) => {
      produitData = promise;});

prixPanier = prixPanier+ parseInt(idCouleur.quantite, 10) * parseInt(produitData.price,10);

let article = document.createElement("section");

article.innerHTML =`<article class="cart__item" id="${key}" data-color="${keyColor}">
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
      <input type="number" class="itemQuantity" id="itemQuantity" name="${key}" min="1" max="100" value="${idCouleur.quantite}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem" id="${key}" >Supprimer</p>
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

console.log(key,produitData.price);

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

 }/////////////.................fin de boucle
 
totalQuantity.innerText = `${quantitePanier}`;
    totalPrice.innerText = `${prixPanier}`;

///////////////////////////////////////////////////////////////////////////////////////////////////
///////Formulaire
  const PRENOM = document.getElementById("firstName");
  const NOM = document.getElementById("lastName");
  const ADRESSE = document.getElementById("address");
  const VILLE = document.getElementById("city");
  const EMAIL = document.getElementById("email");
  

  const COMMANDER = document.getElementById("order");
COMMANDER.formAction = "./confirmation.html";//!!/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////Controle value*
PRENOM.addEventListener("input",()=> {
  if(PRENOM.value.match(/^[a-zA-Z]{3,25}$/)){
 console.log(PRENOM.value);
 firstNameErrorMsg.innerText=``;
}else{
  firstNameErrorMsg.innerText=`Remplir correctement svp`;
}
});
NOM.addEventListener("input",()=> {
  if(NOM.value.match(/^[a-zA-Z]{3,25}$/)){
   console.log(NOM.value); 
   lastNameErrorMsg.innerText=``;
}else{
  lastNameErrorMsg.innerText=`Remplir correctement svp`;
}
});
ADRESSE.addEventListener("input",()=>{
  if(ADRESSE.value.match(/^[0-9]{1,3} [a-zA-Z]{3,25}$/)){
   console.log(ADRESSE.value); 
   addressErrorMsg.innerText=``;
  }else{
    addressErrorMsg.innerText=`Remplir correctement svp`;
  }
});
VILLE.addEventListener("input",()=>{
  if(VILLE.value.match(/^[a-zA-Z]{3,25}$/)){
   console.log(VILLE.value); 
   cityErrorMsg.innerText=``;
}else{
  cityErrorMsg.innerText=`Remplir correctement svp`;
}
});
EMAIL.addEventListener("input",()=> {
  if(EMAIL.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
    console.log(EMAIL.value); 
    emailErrorMsg.innerText=``;
  }else{
    emailErrorMsg.innerText=`Remplir correctement svp`;
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Recuperation value et Envoie localStorage
   COMMANDER.addEventListener("click", () => { 

if (PRENOM.value,NOM.value,ADRESSE.value,VILLE.value,EMAIL.value != ("")  ) {
  const body ={
   contact: {
    firstName:PRENOM.value,
    lastName:NOM.value,
    address:ADRESSE.value,
    city:VILLE.value,
    email:EMAIL.value,
  },
  products:idProduits};

 console.log(JSON.stringify(body),"body");
 
fetch('http://localhost:3000/api/products/order', {
method: 'POST',
body: JSON.stringify(body),
headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => {localStorage.setItem("commander",JSON.stringify(json));
console.log(json,"reponse envoyer");});

}else {
console.log("Remplir le formulaire");}});
}; 
 RECUPERATION();

 





