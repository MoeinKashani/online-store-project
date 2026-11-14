let sefareshJurab = localStorage.getItem("sefareshJurab");
let sefareshHeadphone = localStorage.getItem("sefareshHeadphone");
let sefareshat = document.querySelector(".sefareshat");
if (sefareshJurab != 1) {
  let sefaresh = document.createElement("div");
  sefaresh.innerHTML = "جوراب میخواد این";
  sefareshat.appendChild(sefaresh);
}
if (sefareshHeadphone != 1) {
  let sefaresh = document.createElement("div");
  sefaresh.innerHTML = "هدفون میخواد این";
  sefareshat.appendChild(sefaresh);
}
localStorage.removeItem("sefarshHeadphone")