let produits = [];


//////recuperation donne api + rajouter a la variable produits
const FETCHPRODUITS = async () => { 
await fetch('http://localhost:3000/api/products')
.then((res) => res.json())
.then((promise) => {
    produits = promise;});
};
//////////////////creation produits
const DISPLAYPRODUITS = async () => 
{ 
    await FETCHPRODUITS(); 
   document.getElementById('items',)
   .innerHTML = produits.map(//.map (pou chaque element)
    (produits) =>
    `<a href="./product.html">
    <article>
      <img src="${produits.imageUrl}" alt="${produits.altTxt}">
      <h3 class="productName">${produits.name}</h3>
      <p class="productDescription">${produits.description}</p>
    </article>
    </a>`);
 };

 DISPLAYPRODUITS(); 

 
  

 



