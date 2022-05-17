export default function menuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]');
  const menuExpand = document.querySelector(".menu-flex");
  
  function expandMenu() {
    menuExpand.classList.toggle('active');
    menuMobile.classList.toggle('active');
    menuMobile.classList.toggle('desactive');

  }

  menuMobile.addEventListener("click", expandMenu);
}
