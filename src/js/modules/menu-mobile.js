export default function menuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const menuExpand = document.querySelector(".menu-flex");

  function expandMenu() {
    menuExpand.classList.toggle("active");
    menuExpand.classList.toggle("inactive");
    menuMobile.classList.toggle("active");
    menuMobile.classList.toggle("inactive");
  }

  function closeMenu(event) {
    if (event.target !== menuExpand && event.target !== menuMobile) {
      menuExpand.classList.remove("active");
      menuMobile.classList.remove("active");
      menuMobile.classList.add("inactive");
    }
  }

  menuMobile.addEventListener("click", expandMenu);
  window.addEventListener("click", closeMenu);
}
