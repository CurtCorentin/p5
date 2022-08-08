///Recuperation de lID dans lURL 
const PRODUIT = window.location.search.split('?').join("")  ;


let produitData = [];
const FETCHPRODUITS = async () => { 
    await fetch(`http://localhost:3000/api/products/${PRODUIT}`)
    .then((res) => res.json())
    .then((promise) => {
        produitData = promise;});
        
    };

    FETCHPRODUITS ();

    const DISPLAYPRODUITS = async () => 
{ 
    await FETCHPRODUITS(); 

 document.getElementById("IMAGE").innerHTML = 
 ` <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"/>`;

   document.getElementById("title").innerText = `${produitData.name.toUpperCase()} `;
   document.getElementById("price").innerText = `${produitData.price} `;
   document.getElementById("description").innerText = `${produitData.description} `;


  let select = document.getElementById("colors");
 produitData.colors.forEach((color) => {
    document.createElement("option");

    let tagOption = document.createElement("option");
    tagOption.innerHTML = ` ${color}`;
    tagOption.value=`${color}`;
    
    select.appendChild(tagOption);

 })
   
   
 envoieAuPanier();
 
};

DISPLAYPRODUITS (); 

const envoieAuPanier = () => {
 let bouton =document.getElementById("addToCart");
 bouton.addEventListener("click",() => {
    let produitTableau = JSON.parse(localStorage.getItem("produit"));
    let select = document.getElementById("colors");
    let quantite = document.getElementById("quantity");

const FUSIONPRODUITTEINTE = Object.assign({},produitData,{
    teinte:`${select.value}`,
    quantite:`${quantite.value}`,
});
console.log(FUSIONPRODUITTEINTE);

if(produitTableau == null){
    produitTableau = [];
    produitTableau.push(produitData);
    console.log(produitTableau);
    localStorage.setItem("produit",JSON.stringify(produitTableau));
}

 });
};