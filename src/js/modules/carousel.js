export default function initCarousel() {
  let slideIndex = 0;
  const pagProdutos = document.querySelector(".js-produtos");

  function showSlides() {
    let i;
    const imgCarousel = document.querySelectorAll(".img-carousel");
    const dots = document.querySelectorAll(".dot");
    for (i = 0; i < imgCarousel.length; i++) {
      imgCarousel[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > imgCarousel.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    imgCarousel[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
    setTimeout(showSlides, 2500);
  }

  if (pagProdutos) {
    showSlides();
  }
}
