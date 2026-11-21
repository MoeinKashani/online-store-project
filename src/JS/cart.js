let addToCart = document.querySelector(".addToCart");
let sefareshJurab = localStorage.getItem("sefareshJurab");
let sefareshHeadphone = localStorage.getItem("sefareshHeadphone");
let sefareshat = document.querySelector(".sefareshat");
// if (sefareshJurab != 0) {
//   let sefaresh = document.createElement("div");
//   sefareshat.appendChild(sefaresh);
// }
// if (sefareshHeadphone != 0) {
//   let sefaresh = document.createElement("div");
//   sefareshat.appendChild(sefaresh);
// }

let products = [
  {
    name: "جوراب ساق بلند مردانه",
    link: "./KalaPages/jurabPage.html",
  },
  {
    name: "هدفون بلوتوثی انکر",
    link: "./KalaPages/headphone.html",
  },
];
localStorage.removeItem("sefarshHeadphone");
let searchBar = document.querySelector(".searchBar");

let magnify = document.querySelector(".magnify");
magnify.addEventListener("click", function () {
  let searchInput = searchBar.value.toLowerCase();

  let filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(searchInput);
  });

  searchBar.value = "";

  let searchResultBox = document.querySelector(".searchResultBox");
  // searchZone.appendChild(searchResult);

  searchResultBox.innerHTML = "";
  filteredProducts.forEach((result) => {
    let searchResult = document.createElement("div");
    searchResultBox.appendChild(searchResult);
    searchResult.innerHTML = result.name;
    searchResultBox.classList.remove("-z-2");
    searchResult.classList.add(
      "text-gray-100",
      "bg-blue-900/70",
      "rounded-sm",
      "text-center",
      "m-1",
      "shadow-sm",
      "hover:text-[101%]",
      "border-gray-100",
      "hover:border-blue-700",
      "hover:border",
      "hover:text-blue-100",
      "duration-150",
      "cursor-pointer",
    );
    searchResult.addEventListener("click", function () {
      window.location.href = result.link;
    });
    searchResultBox.classList.add("z-10");
    searchBar.addEventListener("click", function () {
      searchResultBox.innerHTML = "";
    });
  });
});
searchBar.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    magnify.click();
  }
});
let tPrice = document.querySelector(".tPrice");
let profit = document.querySelector(".profit");
let totalPricediscounted = document.querySelector(".totalPricediscounted");
let headphonePrice = localStorage.getItem("Headphone");
let jurabPrice = localStorage.getItem(".Jurab");

tPrice.innerHTML =
  Number(localStorage.getItem("Headphone")) *
    Number(localStorage.getItem("sefareshHeadphone")) +
  Number(localStorage.getItem("Jurab")) *
    Number(localStorage.getItem("sefareshJurab"));
console.log(tPrice);
profit.innerHTML =
  Number(localStorage.getItem("Headphone")) *
    Number(localStorage.getItem("sefareshHeadphone")) *
    Number(localStorage.getItem("headPhoneDiscount")) +
  Number(localStorage.getItem("Jurab")) *
    Number(localStorage.getItem("sefareshJurab")) *
    Number(localStorage.getItem("jurabDiscount"));
totalPricediscounted.innerHTML =
  Number(localStorage.getItem("Headphone")) *
    Number(localStorage.getItem("sefareshHeadphone")) +
  Number(localStorage.getItem("Jurab")) *
    Number(localStorage.getItem("sefareshJurab")) -
  (Number(localStorage.getItem("Headphone")) *
    Number(localStorage.getItem("sefareshHeadphone")) *
    Number(localStorage.getItem("headPhoneDiscount")) +
    Number(localStorage.getItem("Jurab")) *
      Number(localStorage.getItem("sefareshJurab")) *
      Number(localStorage.getItem("jurabDiscount")));

//       addToCart.addEventListener("click", function () {
//   localStorage.setItem("sefareshJurab", "1");
//   container.classList.remove("hidden");
//   tedad.innerHTML = localStorage.getItem("sefareshJurab");
//   bigContainer.classList.add("grid-cols-[9fr_1fr]");
//   addToCart.classList.add("pointer-events-none", "opacity-70");
// });
// let counter = localStorage.getItem("sefareshJurab");
// let trashButton = document.querySelector(".trashButton");
// trashButton.addEventListener("click", function () {
//   localStorage.removeItem("sefareshJurab");
//   localStorage.setItem("sefareshJurab", "0");
//   counter = localStorage.getItem("sefareshJurab");
//   tedad.innerHTML = counter;
//   container.classList.add("hidden");
//   // bigContainer.classList.remove("grid-cols-[9fr_1fr]");
//   addToCart.classList.remove("pointer-events-none", "opacity-70");
// });
// let bigContainer = document.querySelector(".bigContainer");
// let afzayesh = document.querySelector(".afzayesh");
// let kahesh = document.querySelector(".kahesh");


// afzayesh.addEventListener("click", function () {
//   counter++;
//   localStorage.setItem("sefareshJurab", counter);
//   tedad.innerHTML = localStorage.getItem("sefareshJurab");
// });
// kahesh.addEventListener("click", function () {
//   counter--;
//   localStorage.setItem("sefareshJurab", counter);
//   tedad.innerHTML = localStorage.getItem("sefareshJurab");
// });
// let tedad = document.querySelector(".tedad");
// tedad.innerHTML = counter;

// let container = document.querySelector(".container");
// container.classList.add("hidden");

// if (sefareshJurab != 0) {
//   container.classList.remove("hidden");
//   tedad.innerHTML = localStorage.getItem("sefareshJurab");
//   bigContainer.classList.add("grid-cols-[9fr_1fr]");
//   addToCart.classList.add("pointer-events-none", "opacity-70");
// }
// afzayesh.addEventListener("click", function () {
//   console.log("افزایش کلیک شد");
// });

// kahesh.addEventListener("click", function () {
//   console.log("کاهش کلیک شد");
// });

let tedadKala = document.querySelector(".tedadKala");
localStorage.setItem(
  "totalCount",
(Number(localStorage.getItem("sefareshHeadphone")) +
    Number(localStorage.getItem("sefareshJurab"))
));
let totalCount = localStorage.getItem("totalCount");
if (totalCount != 0) {
  tedadKala.innerHTML = totalCount;
  tedadKala.classList.remove("hidden");
}