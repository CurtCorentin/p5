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

const FUSIONPRODUITCOULEUR = Object.assign({},produitData,
    {couleur:`${select.value}`,
    quantite:`${quantite.value}`,});

    if (produitsTableau == null && quantite.value > 0 ) 
    {
        console.log('canapé non acheté encore',);
        produitsTableau = [];
        produitsTableau.push(FUSIONPRODUITCOULEUR);
        localStorage.setItem("produit",JSON.stringify(produitsTableau));
        
    }else if (produitsTableau != null ) 
    {
        for (let i = 0; i < produitsTableau.length; i++) 
        {
            if (PRODUIT == produitsTableau[i]._id &&
                select.value == produitsTableau[i].couleur )
                {return(
                    produitsTableau[i].quantite++,
                        console.log("coucou"),
                        console.log(select.value),
                        console.log(produitsTableau[i]),
                        localStorage.setItem("produit",JSON.stringify(produitsTableau)),
                        produitsTableau = JSON.parse(localStorage.getItem("produit")))
                }
                 else if(PRODUIT == produitsTableau[i]._id &&  select.value !=  produitsTableau[i].couleur
                    && quantite.value > 0 ||  produitsTableau[i]._id != PRODUIT && quantite.value > 0)
                          {return(
                            console.log("nouveau") ,
                            console.log(produitsTableau),
                            produitsTableau.push(FUSIONPRODUITCOULEUR),
                            localStorage.setItem("produit",JSON.stringify(produitsTableau)),
                            produitsTableau = JSON.parse(localStorage.getItem("produit")))
                        }

                       
                
        } 
     }
})
 produitsTableau = JSON.parse(localStorage.getItem("produit"));
};
envoieAuPanier();
