// ----------اسلایدر فروش شگفت انگیز ----------
let slider = document.querySelector(".slider");
let leftBtn = document.querySelector(".leftBtn");
let rightBtn = document.querySelector(".rightBtn");
let slidePosition = 0;
rightBtn.addEventListener("click", function () {
  if (slidePosition == 0) {
  } else {
    slidePosition -= 164;
    slider.style.transform = `translateX(+${slidePosition}px)`;
  }
});
leftBtn.addEventListener("click", function () {
  if (slidePosition == 10 * 164) {
  } else {
    slidePosition += 164;
    slider.style.transform = `translateX(+${slidePosition}px)`;
  }
});
// ----------اسلایدر فروش شگفت انگیز ----------

let products = [
  {
    name: "جوراب ساق بلند مردانه",
    link: "./KalaPages/jurabPage.html",
  },
  {
    name: "هدفون بلوتوثی",
    link: "./KalaPages/headphone.html",
  },
];

let searchBar = document.querySelector(".searchBar");

let magnify = document.querySelector(".magnify");
magnify.addEventListener("click", function () {
  console.log(searchBar.value);

  let searchInput = searchBar.value.toLowerCase();

  let filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(searchInput);
  });

  console.log(filteredProducts);
  searchBar.value = "";
});
