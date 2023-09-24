let menu = [];
let allAddToCartButtons = [];
let cart = [];
updateCartCounter();
function updateCartCounter() {
  document.getElementById("cartbutton").innerHTML = "&#x1F6D2;" + cart.length;
}

if (import.meta.env.DEV) {
  import("../api/browser").then(({ worker }) =>
    worker
      .start()
      .then(() => fetch("./dishes"))
      .then((res) => res.json())
      .then((res) => (menu = res))
  );
}

let allDishes = document.getElementById("allDishes");

let content = "";
let cartContent = "";
displayAll(menu);
displayCartDishes();

function displayAll(dishes) {
  content = "";
  dishes.forEach((dish) => {
    let individualDish = ` <div
   class="dish">
  <img
    src=${dish.img}/>
  <div class="outer-div">
    <div class="right-div">
      <h2 class="title">${dish.title}</h2>
      <h2 class="price">$ ${dish.price}</h2>
    </div>
    <p class="desc">
    ${dish.desc}
    </p>dishcartbutton
    <button id= ${dish.id}  class="dishcartbutton">Add To Cart</button>
  </div>
  </div>`;
    content += individualDish;
  });

  allDishes.innerHTML = content;
  getCartButtons();
}

let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    filterItems(e.target.innerText);
  })
);

const filterItems = (category) => {
  allDishes.innerHTML += "";

  if (category == "All") {
    displayAll(menu);
  } else {
    let filteredItems = menu.filter(
      (item) => item.category.toLowerCase() == category.toLowerCase()
    );
    displayAll(filteredItems);
  }
};

function displayCartDishes() {
  cartContent = "";
  cart.forEach((dish) => {
    let inidvidualDish = `<div class="cartDish">
  <img
    src=${dish.img}
  />
  <h3>${dish.title}</h3>
  <h3>${dish.price}  id=${dish.id}</h3>
  <button id="minus">-</button>
  <h3>${dish.quantity}</h3>
  <button id="plus" >+</button>
  <p class="delet" id=${dish.id}>X</p>
</div>`;

    cartContent += inidvidualDish;
  });

  document.getElementById("cart").innerHTML = cartContent;
}
function getCartButtons() {
  allAddToCartButtons = document.querySelectorAll(".dishcartbutton");

  allAddToCartButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      addDishToCart(e.target.id);
    })
  );
}

function addDishToCart(DishId) {
  menu.forEach((dishId) => {
    if (dishId.id == DishId) {
      cart.push(dishId);
    }
  });
  updateCartCounter();
  displayCartDishes();
}
