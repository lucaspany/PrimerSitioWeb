const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;
const botonArriba = document.querySelector(".arriba");
const campo = document.getElementById("campo");
const info = document.getElementById("info");

//Testimoniales
for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}

//Boton de GO-TOP y efecto desplazamiento
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 0.7
  ) {
    info.classList.add("effect2");
  }
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 2.5
  )
    campo.classList.add("effect2");
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
