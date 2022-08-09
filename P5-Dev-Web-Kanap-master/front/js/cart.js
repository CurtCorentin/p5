let ADDPRODUITS = JSON.parse(localStorage.getItem("produit"));
console.log(ADDPRODUITS);

let totalPanier = ADDPRODUITS[i].quantite * ADDPRODUITS[i].price ;

const DISPLAYPRODUITS = () => {

  
for(let i = 0; i < ADDPRODUITS.length; i++) {

cart__items.innerHTML = ADDPRODUITS.map((produit) =>
`<article class="cart__item" data-id="${ADDPRODUITS._id}" data-color="${ADDPRODUITS[i].couleur}">
<div class="cart__item__img">
  <img src="${ADDPRODUITS[0].imageUrl}" alt="${ADDPRODUITS[i].altTxt}">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${ADDPRODUITS[1].name}</h2>
    <p>${ADDPRODUITS[i].couleur}</p>
    <p>${ADDPRODUITS[i].price}$</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${ADDPRODUITS[i].quantite}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`,);

document.getElementById("totalPrice").innerText = `${totalPanier}`;
document.getElementById("totalQuantity").innerText = `${ADDPRODUITS[i].quantite}`;
}
};

DISPLAYPRODUITS();