// Variables
let modal = document.querySelector(".modal");
let images = document.querySelectorAll(".gallery img");
let modalImg = document.querySelector("#myModalImg");
let imgBox = document.querySelectorAll(".lists img");
let caption = document.querySelector(".caption-text");
let close = document.querySelector(".close");

var slides = document.querySelector(".lists").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

images.forEach((images) => {
  images.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = images.src;
    caption.innerHTML = images.alt;
  });
});

imgBox.forEach((img) => img.addEventListener("click", imgLightbox));

function imgLightbox(event) {
  modalImg.src = event.target.src;
}

//ESCUCHADOR DE EVENTOS
window.addEventListener("keyup", (e) => {
  if (e.keyCode == 27) {
    //consulta si se presionó la tecla ESCAPE para cerrar la ventana emergente de galeria de fotos
    modal.style.display = "none";
  }
  if (e.keyCode == 39) {
    //consulta si se presionó la tecla "FLECHA DERECHA" para avanzar en la galería de fotos
    next("next");
  }
  if (e.keyCode == 37) {
    //consulta si se presionó la tecla "FLECHA IZQUIERDA" para retroceder en la galería de fotos
    next("prev");
  }
});

//Para  cerrar la galería de imagenes emergente mediante el click en la "X"
close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Para que al presionar en los arrows de NEXT y PREV cambie de foto

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  modal.style.display = "block";
  modalImg.src = images[index].src;
  caption.innerHTML = images[index].alt;
}
