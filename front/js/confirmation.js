
const CONFIRMATION = JSON.parse(localStorage.getItem("commander"));
console.log("CONFIRMATION",CONFIRMATION)


orderId.innerText = `${CONFIRMATION.orderId}`;
for (i=0; i<localStorage.length; i++)  ///////////////////////boucle
{  
   let key = localStorage.key(i);
localStorage.removeItem(key);
};

localStorage.removeItem("commander");
