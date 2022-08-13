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

    const DISPLAYPRODUITS = async () => 
    { 
    await FETCHPRODUITS(); 
 IMAGE.innerHTML = ` <img src="${produitData.imageUrl}" alt="${produitData.altTxt}"/>`;
   title.innerText = `${produitData.name.toUpperCase()} `;
   price.innerText = `${produitData.price} `;
   description.innerText = `${produitData.description} `;
  let select = document.getElementById("colors");
 produitData.colors.forEach((color) => 
 {
    document.createElement("option");
    let tagOption = document.createElement("option");
    tagOption.innerHTML = ` ${color}`;
    tagOption.value=`${color}`;
    select.appendChild(tagOption);
 })

};

DISPLAYPRODUITS (); 



const envoieAuPanier = () => 
{
 let bouton = document.getElementById("addToCart");
 bouton.addEventListener("click",() => 
 {
    let select = document.getElementById("colors");
    let quantite = document.getElementById("quantity");

const FUSIONPRODUITCOULEUR = [
    `${select.value}`,
    `${quantite.value}` ];

    if (quantite.value <= 0 ) 
    {
        return false;
    } 
    if (localStorage.getItem(PRODUIT+select.value) != null  )
                { let quantiteActuel =                  parseInt(JSON.parse(localStorage.getItem(PRODUIT+select.value))[1],10);
       //  `${eval((localStorage.getItem(PRODUIT.value+select.value).join("+"))}`
                 quantite.value =  quantite.value + quantiteActuel ;
                   
                return(
                   

                        localStorage.setItem(PRODUIT+select.value,JSON.stringify(FUSIONPRODUITCOULEUR),
                
        
                        ));
                }
                 else {return(
                            console.log("nouveau") ,
                            localStorage.setItem(PRODUIT+select.value,JSON.stringify(FUSIONPRODUITCOULEUR)),
                            console.log(localStorage.getItem(PRODUIT+select.value)),
                            console.log(localStorage.getItem(PRODUIT[0])),
                            console.log(localStorage.getItem(PRODUIT[1]))
                            ); }
})
};
envoieAuPanier();



/*Etape 1, on reçoit l'identifiant du produit choisi (PRODUIT)
Vérifier s'il est ou pas dans le localStorage (getItem)
Etape 2
Si le getItem donne null
	Ajouter faire un setItem dans le localStorage avec les nouvelles données
Si le getItem donne autre chose que null
	Faire un setItem dans le localStorage en modifiant la quantité par ancienne quantité+nouvelle quantité */