export default function initAcordion() {
  const showClass = "show";
  const acordionTitle = document.querySelectorAll(".acordion-title");

  function acordionToggle() {
    acordionTitle.forEach((item) => {
      item.classList.remove(showClass);
      item.nextElementSibling.classList.remove(showClass);
    });
    this.classList.toggle(showClass);
    this.nextElementSibling.classList.toggle(showClass);
  }

  acordionTitle.forEach((item) => {
    item.addEventListener("click", acordionToggle);
  });
}
