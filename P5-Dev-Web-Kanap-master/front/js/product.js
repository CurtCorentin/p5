///Recuperation de lID dans lURL 
const PRODUIT = window.location.search.split('?').join("")  ;
console.log(PRODUIT) ;



const FETCHPRODUITS = async () => { 
    await fetch(`http://localhost:3000/api/products/${PRODUIT}`)
    .then((res) => res.json())
    .then((promise) => {
        produitData = promise;});};
    FETCHPRODUITS ();

    const DISPLAYPRODUITS = async () =>  { 
    await FETCHPRODUITS(); 
 IMAGE.innerHTML = ` <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"/>`;
   title.innerText = `${produitData.name.toUpperCase()} `;
   price.innerText = `${produitData.price} `;
   description.innerText = `${produitData.description} `;
  let select = document.getElementById("colors");
 produitData.colors.forEach((color) => {
    document.createElement("option");
    let tagOption = document.createElement("option");
    tagOption.innerHTML = ` ${color}`;
    tagOption.value=`${color}`;
    select.appendChild(tagOption); })

};

DISPLAYPRODUITS (); 



const envoieAuPanier = async () => {
    
 let bouton = document.getElementById("addToCart");
 let select = document.getElementById("colors");
 let quantite = document.getElementById("quantity");

 bouton.addEventListener("click",() => {

    if (quantite.value <= 0 ) 
    {
        return false;
    } 
    if (localStorage.getItem(PRODUIT+select.value) != null  ) { 
        let quantiteActuel = JSON.parse(localStorage.getItem(PRODUIT+select.value)).quantite;


        let quantiteTableau = [];
        quantiteTableau.push(quantite.value,quantiteActuel);  
       let quantiteFinal= `${eval(quantiteTableau.join("+"))}`;
        let majPanier = {quantite:quantiteFinal};
       
        localStorage.setItem(PRODUIT+select.value,JSON.stringify(Object.assign(majPanier)) );
         console.log(JSON.parse(localStorage.getItem(PRODUIT+select.value)));
    } else {
        console.log("nouveau") ;

        let nouveauPanier = {quantite:quantite.value};
        localStorage.setItem(PRODUIT+select.value,JSON.stringify(Object.assign(nouveauPanier)));

        console.log(JSON.parse(localStorage.getItem(PRODUIT+select.value)));
    }})
    };
    
envoieAuPanier();

//for (var key in localStorage){ console.log(key)}