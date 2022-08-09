///Recuperation de lID dans lURL 
const PRODUIT = window.location.search.split('?').join("")  ;
console.log(PRODUIT) ;

let produitData = [];

const FETCHPRODUITS = async () => { 
    await fetch(`http://localhost:3000/api/products/${PRODUIT}`)
    .then((res) => res.json())
    .then((promise) => {
        produitData = promise;});
        
        };
    FETCHPRODUITS ();

    const DISPLAYPRODUITS = async () => { 
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
  
 let bouton = document.getElementById("addToCart");
 bouton.addEventListener("click",() => {
    
    let select = document.getElementById("colors");
    let quantite = document.getElementById("quantity");
let id = PRODUIT;

const FUSIONPRODUITCOULEUR = Object.assign({},produitData,{
    couleur:`${select.value}`,
    quantite:`${quantite.value}`,
});

    produitsTableau = [];
    produitsTableau.push(FUSIONPRODUITCOULEUR);
   
    
    



    if (localStorage.getItem(produitsTableau._id) !== null) {
      
        console.log('le canapé existe ds le localstorage');
    }
       else {
        console.log('canapé non acheté encore',);
        localStorage.setItem("produit",JSON.stringify(produitsTableau));}
   




}); 
 return (produitsTableau = JSON.parse(localStorage.getItem("produit")));
};

/*if (localStorage.getItem(numeroproduit) !== null) {
    console.log('le canapé existe ds le localstorage');
} else {
    console.log('canapé non acheté encore');


    liée L'ID
}*/