const screenWidth = window.innerWidth;
let menuIsOpened = false;
const openMenu = () => {
  menuIsOpened = !menuIsOpened;
  if (!menuIsOpened) {
    document.querySelector(".close-icon").style.display = "block";
    document.querySelector(".menu-icon").style.display = "none";
    document.querySelector(".mobile-nav-menu").style.transform =
      "translateY(0)";
    document.querySelector(".mobile-nav-menu__nav-links").style.transform =
      "translateY(0)";
  } else {
    document.querySelector(".close-icon").style.display = "none";
    document.querySelector(".menu-icon").style.display = "block";
    document.querySelector(".mobile-nav-menu__nav-links").style.transform =
      "translateY(-150%)";
    document.querySelector(".mobile-nav-menu").style.transform =
      "translateY(-150%)";
  }
};
