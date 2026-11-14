let firstOption = document.querySelector(".firstOption");
let secondOption = document.querySelector(".secondOption");
let thirdOption = document.querySelector(".thirdOption");
let optionCountainer = document.querySelector(".optionCountainer");

firstOption.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
  );
optionCountainer.classList.add("grid-cols-4");});


secondOption.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
  );
optionCountainer.classList.add("grid-cols-6");});


thirdOption.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
  );
optionCountainer.classList.add("grid-cols-8");});

