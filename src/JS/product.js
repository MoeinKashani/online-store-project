let firstOption = document.querySelector(".firstOption");
let secondOption = document.querySelector(".secondOption");
let thirdOption = document.querySelector(".thirdOption");
let optionCountainer = document.querySelector(".optionCountainer");

let firstOptionMobile = document.querySelector(".firstOptionMobile");
let secondOptionMobile = document.querySelector(".secondOptionMobile");
let thirdOptionMobile = document.querySelector(".thirdOptionMobile");

// firstOptionMobile.addEventListener("click", function () {
//   optionCountainer.classList.remove(
//     "grid-cols-4",
//     "grid-cols-6",
//     "grid-cols-8",
//   );
//   optionCountainer.classList.add("grid-cols-4");
// });

secondOptionMobile.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
    "grid-cols-3",
    "grid-cols-2",
  );
  optionCountainer.classList.add("grid-cols-3");
});

thirdOptionMobile.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
    "grid-cols-2",
    "grid-cols-3",
  );
  optionCountainer.classList.add("grid-cols-2");
});

firstOption.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
    "grid-cols-3",
    "grid-cols-2",
  );
  optionCountainer.classList.add("grid-cols-3");
});

secondOption.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
    "grid-cols-3",
    "grid-cols-2",
  );
  optionCountainer.classList.add("grid-cols-4");
});

thirdOption.addEventListener("click", function () {
  optionCountainer.classList.remove(
    "grid-cols-4",
    "grid-cols-6",
    "grid-cols-8",
    "grid-cols-2",
    "grid-cols-3",
  );
  optionCountainer.classList.add("grid-cols-6");
});
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

let tedadKala = document.querySelector(".tedadKala");
localStorage.setItem(
  "totalCount",
  Number(localStorage.getItem("sefareshHeadphone")) +
    Number(localStorage.getItem("sefareshJurab")),
);
let totalCount = localStorage.getItem("totalCount");
if (totalCount != 0) {
  tedadKala.innerHTML = totalCount;
  tedadKala.classList.remove("hidden");
}
