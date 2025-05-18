// --- Hamburger Menu Toggle ---

export function setupHamburgerMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const sideMenu = document.getElementById("side-menu");

  if (menuIcon && sideMenu) {
    menuIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      sideMenu.classList.toggle("hidden");
      sideMenu.classList.toggle("show");
    });

    // Optional: click outside to close
    document.addEventListener("click", (e) => {
      if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        sideMenu.classList.remove("show");
      }
    });
  }
}

export function setupMenu() {
  setupHamburgerMenu();
}
