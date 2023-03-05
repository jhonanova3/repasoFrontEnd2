//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

const nuevoAtributoTarjeta = document.querySelector("#tarjeta");

nuevoAtributoTarjeta.setAttribute("class", "card");

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

const nuevoAtributoImagen = document.querySelector("#logo");
nuevoAtributoImagen.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");
//3- Quitarle al titulo la clase que le está dando un formato feo

const sacandoAtributoH1 = document.querySelector(".titulo-feo");
sacandoAtributoH1.removeAttribute("class");

//4- Chequear si el link a youtube posee o no el atributo href

const chequeandoAtributoYouTube = document.querySelector("#link_youtube");
chequeandoAtributoYouTube.hasAttribute("href");

//5- Obtener el href del link a wikipedia y mostrarlo por consola

const obteniendoAtributoWikipedia = document.querySelector("#link_wikipedia");
obteniendoAtributoWikipedia.getAttribute("href");
console.log(obteniendoAtributoWikipedia);

// Practicando Atributos dinamicos