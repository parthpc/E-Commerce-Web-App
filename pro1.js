const products = [{
  id: 0,
  name: "Macbook",
  price: 150000
}, 
{ id: 1,
  name: "Ipad Pro",
  price: 120000
},
       {
 id: 2,
 name: "Iphone X",
 price: 80000     },
 {
  id: 3,                
  name: "iMac Pro",
 price: 250000 },
 {
   id: 4,
   name: "Iphone 11 Pro Max",
   price: 130000
 },
 {
   id: 5,
   name: "Airpods",
   price: 15000
 }               ];
const cart = [];
let sum = 0;
function addToCart(index) {
  if (cart.indexOf(index) != -1) {
    return;
  } 
  cart.push(index);
  calculateSum();
  drawCart();
}
function calculateSum() {
  sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum = sum + products[cart[i]].price;
  }
  
}
function drawCart() {
  const ul = document.getElementById("cart");
  ul.innerText = "";
  for (let i = 0; i < cart.length; i++) {
    const li = document.createElement("li");
    const description = `${products[cart[i]].name} - $${products[cart[i]].price}`;
    li.innerText = description;
    li.title = "Haga click aquí para borrar";
    li.addEventListener("click", deleteCartProducts.bind(this, i));
    ul.appendChild(li);
  }
  const p = document.getElementById("sum");
  p.innerText = `Total: $${sum}`;
}
const deleteCartProducts = function(index) {
  cart.splice(index , 1);
calculateSum();
  drawCart();
};

