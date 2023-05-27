const menuBtn = document.querySelector(".navigation__btn");
const menu = document.querySelector(".navigation__menu");
const menuItems = document.querySelectorAll(".navigation__item");
const menuLines = document.querySelectorAll(".navigation__btn-line");
const accItems = document.querySelectorAll(".accordion__wrap-item");
const overlay = document.querySelector(".overlay");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuItems.forEach((item) => item.classList.add("show"));
    menuLines.forEach((item) => item.classList.add("close"));
    overlay.classList.add("show");
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuItems.forEach((item) => item.classList.remove("show"));
    menuLines.forEach((item) => item.classList.remove("close"));
    overlay.classList.remove("show");
    showMenu = false;
  }
}

accItems.forEach((item) => {
  const accBtn = item.querySelector(".accordion__wrap-item-header-btn");
  const accLines = item.querySelectorAll(
    ".accordion__wrap-item-header-btn-line"
  );
  const accText = item.querySelector(".accordion__wrap-item-text");

  accBtn.addEventListener("click", toggleAcc);

  function toggleAcc() {
    const isExpanded = item.classList.contains("show");

    closeAllAccordions();
    if (!isExpanded) {
      item.classList.add("show");
      accBtn.classList.add("show");
      accLines.forEach((line) => line.classList.add("show"));
      accText.classList.add("show");
    }
  }
});

const accordionBtn = document.querySelector(".accordion__btn");

accordionBtn.addEventListener("click", function () {
  const isExpanded = accItems[0].classList.contains("show");

  if (!isExpanded) {
    accItems.forEach((item) => {
      const accBtn = item.querySelector(".accordion__wrap-item-header-btn");
      const accLines = item.querySelectorAll(
        ".accordion__wrap-item-header-btn-line"
      );
      const accText = item.querySelector(".accordion__wrap-item-text");

      item.classList.add("show");
      accBtn.classList.add("show");
      accLines.forEach((line) => line.classList.add("show"));
      accText.classList.add("show");
    });
  } else {
    closeAllAccordions();
  }
});

function closeAllAccordions() {
  accItems.forEach((item) => {
    item.classList.remove("show");
    const accBtn = item.querySelector(".accordion__wrap-item-header-btn");
    const accLines = item.querySelectorAll(
      ".accordion__wrap-item-header-btn-line"
    );
    const accText = item.querySelector(".accordion__wrap-item-text");
    accBtn.classList.remove("show");
    accLines.forEach((line) => line.classList.remove("show"));
    accText.classList.remove("show");
  });
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 1) {
    menu.style.top = "0";
  } else {
    menu.style.top = "80px";
  }
});
