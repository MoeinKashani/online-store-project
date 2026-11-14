let sefareshHeadphone = localStorage.getItem("sefareshHeadphone");
let addToCart = document.querySelector(".addToCart");
let counter = localStorage.getItem("sefareshHeadphone");

addToCart.addEventListener("click", function addToCartFunc() {
  localStorage.setItem("sefareshHeadphone", "1");
  container.classList.remove("hidden");
  tedad.innerHTML = localStorage.getItem("sefareshHeadphone");
  bigContainer.classList.add("grid-cols-[7fr_1fr]");
  addToCart.classList.add("pointer-events-none", "opacity-70");
});
let trashButton = document.querySelector(".trashButton");
trashButton.addEventListener("click", function () {
  localStorage.removeItem("sefareshHeadphone");
  localStorage.setItem("sefareshHeadphone", "0");
  counter = localStorage.getItem("sefareshHeadphone");
  tedad.innerHTML = counter;
  container.classList.add("hidden");
  bigContainer.classList.remove("grid-cols-[7fr_1fr]");
  addToCart.classList.remove("pointer-events-none", "opacity-70");
});
let bigContainer = document.querySelector(".bigContainer");
let afzayesh = document.querySelector(".afzayesh");
let kahesh = document.querySelector(".kahesh");
afzayesh.addEventListener("click", function () {
  counter++;
  localStorage.setItem("sefareshHeadphone", counter);
  tedad.innerHTML = localStorage.getItem("sefareshHeadphone");
});
kahesh.addEventListener("click", function () {
  counter--;
  localStorage.setItem("sefareshHeadphone", counter);
  tedad.innerHTML = localStorage.getItem("sefareshHeadphone");
});
let tedad = document.querySelector(".tedad");
tedad.innerHTML = counter;

let container = document.querySelector(".container");
container.classList.add("hidden");

if (sefareshHeadphone != 0) {
  container.classList.remove("hidden");
  tedad.innerHTML = localStorage.getItem("sefareshHeadphone");
  bigContainer.classList.add("grid-cols-[7fr_1fr]");
  addToCart.classList.add("pointer-events-none", "opacity-70");
}
