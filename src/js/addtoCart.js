let openShopping = document.querySelector(".openShop");
let closeShopping = document.querySelector(".closeShop");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 0,
    image: "albums/master_cover.jpg",
    title: "Master of Puppets - Metallica",
    price: 18.99,
  },
  {
    id: 1,
    image: "albums/polyphia.jpg",
    title: "New Levels, New Devils - Polyphia",
    price: 24.99,
  },
  {
    id: 2,
    image: "albums/polyphia1.jpg",
    title: "RTYWD - Polyphia",
    price: 26.99,
  },
  {
    id: 3,
    image: "albums/polyphia2.jpg",
    title: "Renaissance - Polyphia",
    price: 15.99,
  },
  {
    id: 4,
    image: "albums/ridethelightning.jpg",
    title: "Ride The Lightning - Metallica",
    price: 17.99,
  },
  {
    id: 5,
    image: "albums/tyler.webp",
    title: "IGOR - Tyler, the Creator",
    price: 23.99,
  },
  {
    id: 6,
    image: "albums/fkj.jpg",
    title: "VINCENT - Fkj",
    price: 19.64,
  },
  {
    id: 7,
    image: "albums/Pink-Floyd-Dark-Side-Of-The-Moon.webp",
    title: "The Dark Side Of The Moon - Pink Floyd",
    price: 23.99,
  },
  {
    id: 8,
    image: "albums/doom.jpg",
    title: "DOOM (Official Game OST) - Mick Gordon",
    price: 23.99,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.title}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <div class='flex flex-row gap-2'>
            <button class="hover:animate-pulse" onclick="addToCard(${key})">Add To Cart</button>
            <button class="seeMore hover:animate-pulse" onclick="seeProduct('${
              value.title
            }')">See Product</button>
            </div>`;
    list.appendChild(newDiv);
  });
}
initApp();
function seeProduct(value) {
  window.location.href = "/src/productPage.html?name=" + value;
}

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.title}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
