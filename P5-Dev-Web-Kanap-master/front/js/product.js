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

   
   

    if (produitsTableau == null) {
        console.log('canapé non acheté encore',);
        produitsTableau = [];
        produitsTableau.push(FUSIONPRODUITCOULEUR);
        localStorage.setItem("produit",JSON.stringify(produitsTableau));
        
    }else if (produitsTableau != null) {
        for (let i = 0; i < produitsTableau.length; i++) {
            if (produitsTableau[i]._id == produitData._id &&
                produitsTableau[i].couleur == select.value ){
                    return(produitsTableau[i].quantite++,
                        console.log("coucou"),
                        console.log(produitsTableau[i]),
                        localStorage.setItem("produit",JSON.stringify(produitsTableau)),
                        (produitsTableau = JSON.parse(localStorage.getItem("produit")))
                        );
                }
                for (let i = 0; i < produitsTableau.length; i++) {
                    if(produitsTableau[i]._id == produitData._id &&
                        produitsTableau[i].couleur != select.value 
                          ){
                            return (console.log("nouveau") ,
                            console.log(produitsTableau),
                            produitsTableau.push(FUSIONPRODUITCOULEUR),
                            localStorage.setItem("produit",JSON.stringify(produitsTableau)),
                            produitsTableau = JSON.parse(localStorage.getItem("produit"))
                            )
                        }if(produitsTableau[i]._id != produitData._id ){
                            return (console.log("NOUVEAU") ,
                            console.log(produitsTableau),
                            produitsTableau.push(FUSIONPRODUITCOULEUR),
                            localStorage.setItem("produit",JSON.stringify(produitsTableau)),
                            produitsTableau = JSON.parse(localStorage.getItem("produit"))
                            )
                        }
                }
        } 
     }


}); 
 return (produitsTableau = JSON.parse(localStorage.getItem("produit")));
};

