let sefareshJurab = localStorage.getItem("sefareshJurab");
let addToCart = document.querySelector(".addToCart");
let counter = localStorage.getItem("sefareshJurab");

addToCart.addEventListener("click", function () {
  localStorage.setItem("sefareshJurab", "1");
  container.classList.remove("hidden");
  tedad.innerHTML = localStorage.getItem("sefareshJurab");
  bigContainer.classList.add("grid-cols-[7fr_1fr]");
  addToCart.classList.add("pointer-events-none", "opacity-70");
});
let trashButton = document.querySelector(".trashButton");
trashButton.addEventListener("click", function () {
  localStorage.removeItem("sefareshJurab");
  localStorage.setItem("sefareshJurab", "0");
  counter = localStorage.getItem("sefareshJurab");
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
  localStorage.setItem("sefareshJurab", counter);
  tedad.innerHTML = localStorage.getItem("sefareshJurab");
});
kahesh.addEventListener("click", function () {
  counter--;
  localStorage.setItem("sefareshJurab", counter);
  tedad.innerHTML = localStorage.getItem("sefareshJurab");
});
let tedad = document.querySelector(".tedad");
tedad.innerHTML = counter;

let container = document.querySelector(".container");
container.classList.add("hidden");

if (sefareshJurab != 0) {
  container.classList.remove("hidden");
  tedad.innerHTML = localStorage.getItem("sefareshJurab");
  bigContainer.classList.add("grid-cols-[7fr_1fr]");
  addToCart.classList.add("pointer-events-none", "opacity-70");
}
