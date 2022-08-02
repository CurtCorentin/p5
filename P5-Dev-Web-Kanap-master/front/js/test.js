
             
    const ITEMS = document.getElementById('items');
    console.log(produits);
           const APRODUITS = document.createElement('a');
           APRODUITS.title = produits[0].name;
            APRODUITS.href = "./product.html";
    
    const IMG = document.createElement('img');
    IMG.src =produits[0].imageUrl;
    IMG.alt= produits[0].altTxt;
    
    
    const NAMEPRODUITS = document.createElement('h3')
    NAMEPRODUITS.innerText=produits[0].name;
    NAMEPRODUITS.classList.add('productName');
    
    
    const DESCRIPTIONPRODUITS = document.createElement('p');
    DESCRIPTIONPRODUITS.classList.add('productDescription');
    DESCRIPTIONPRODUITS.innerText=produits[0].description;
    
    console.log(APRODUITS);
    
    console.log(IMG);
    
    console.log(NAMEPRODUITS);
    
    console.log(DESCRIPTIONPRODUITS);
             
             //APRODUITS.appendChild(IMG);
             

           


             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[1].imageUrl}" alt="${produits[1].altTxt}">
               <h3 class="productName">${produits[1].name}</h3>
               <p class="productDescription">${produits[1].description}</p>
             </article>
             </a>`;
         
             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[2].imageUrl}" alt="${produits[2].altTxt}">
               <h3 class="productName">${produits[2].name}</h3>
               <p class="productDescription">${produits[2].description}</p>
             </article>
             </a>`;
         
             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[3].imageUrl}" alt="${produits[3].altTxt}">
               <h3 class="productName">${produits[3].name}</h3>
               <p class="productDescription">${produits[3].description}</p>
             </article>
             </a>`;
             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[4].imageUrl}" alt="${produits[4].altTxt}">
               <h3 class="productName">${produits[4].name}</h3>
               <p class="productDescription">${produits[4].description}</p>
             </article>
             </a>`;
         
             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[5].imageUrl}" alt="${produits[5].altTxt}">
               <h3 class="productName">${produits[5].name}</h3>
               <p class="productDescription">${produits[5].description}</p>
             </article>
             </a>`;
         
             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[6].imageUrl}" alt="${produits[6].altTxt}">
               <h3 class="productName">${produits[6].name}</h3>
               <p class="productDescription">${produits[6].description}</p>
             </article>
             </a>`;
         
             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[7].imageUrl}" alt="${produits[7].altTxt}">
               <h3 class="productName">${produits[7].name}</h3>
               <p class="productDescription">${produits[7].description}</p>
             </article>
             </a>`;
         
             document.getElementById('items',)
             .innerHTML = `<a href="./product.html">
             <article>
               <img src="${produits[8].imageUrl}" alt="${produits[8].altTxt}">
               <h3 class="productName">${produits[8].name}</h3>
               <p class="productDescription">${produits[8].description}</p>
             </article>
             </a>`;
              






