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
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produit.quantite}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`,);
let totalPanier = ADDPRODUITS.quantite * ADDPRODUITS.price ;
document.getElementById("totalPrice").innerText = `${totalPanier}`;
document.getElementById("totalQuantity").innerText = `${produit.quantite}`;
};
DISPLAYPRODUITS();