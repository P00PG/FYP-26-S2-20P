function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu.style.display === "flex") {
    menu.style.opacity = "0";
    setTimeout(() => menu.style.display = "none", 200);
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.opacity = "1";
  }
}
