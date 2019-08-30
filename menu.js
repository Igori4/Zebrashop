const menuItems = [...document.querySelectorAll(".list__items_item")];
const productItems = [
  "Asics shoes",
  "Nike air free",
  "Sports Jersey",
  "Nike Air Max",
  "Nike Shoex Shoes",
  "Nike AF1 shoes",
  "Asics shoes",
  "Sports Jersey"
];

let menuContainer = `
<div class="additition__menu">
  <div class="tie__box">
    <div class="tie__box_logo">
      <a href="#" class="logo__link">
        <span class="logo__text-white">ZE</span>BRA
      </a>
    </div>
    <div class="tie__box_image">
      <img src="./image/tie-icon.png" alt="tie" />
    </div>
  </div>
  <div class="menu__list">
    <ul class="menu__list_items">
      ${productItems
        .map(item => {
          return `<li class="list__item">
            <a href="#" class="items-link">${item}</a>
          </li>
        `;
        })
        .join("")}
    </ul>
  </div>
  <div class="menu__list">
    <ul class="menu__list_items">
      ${productItems
        .map(item => {
          return `<li class="list__item">
            <a href="#" class="items-link">${item}</a>
          </li>
        `;
        })
        .join("")}
    </ul>
  </div>
</div>
`;

menuItems.forEach(item => {
  if (item.textContent.trim() === "Products") {
    item.insertAdjacentHTML("beforeend", menuContainer);
  }
});

const menuProductItem = document.querySelector('[data-element="products"]');
const additionProductMenu = document.querySelector(".additition__menu");

menuProductItem.addEventListener("mouseover", () => {
  additionProductMenu.classList.add("show");
});

document.addEventListener("mousemove", event => {
  if (!event.target.closest('[data-element="products"]')) {
    additionProductMenu.classList.remove("show");
  }
});

let isShow = false;

const navIcon = document.querySelector("#navIcon");
const navList = document.querySelector(".nav__list");
const navBasket = document.querySelector(".nav__basket");

navIcon.addEventListener("click", () => {
  navList.classList.toggle('hideNavElement');
  navBasket.classList.toggle('hideNavElement');
});
