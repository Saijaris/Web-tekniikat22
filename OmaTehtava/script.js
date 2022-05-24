fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(
    data => {
    document.getElementById('rest').innerHTML =
    '<h4>' + "Koirakuva piristämään päivääsi" + '</h4>' + '<br>';
    document.getElementById('rest').innerHTML +=
    '<img src="' + data.message + '"/>';
    }
);

let h2 = document.querySelector("h2");
let teksti = document.querySelector("p");
let body = document.querySelector("body");

body.classList.add("kirkas");
teksti.style.fontSize= "20px";

h2.addEventListener("click", huomioVari);
h2.addEventListener("mouseenter", vaihdaTausta);
h2.addEventListener("mouseleave", vaihdaTausta);

function huomioVari() {
    h2.classList.toggle("huomio")
}

function vaihdaTausta() {
    h2.classList.toggle("vihrea");
}
