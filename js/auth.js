function authenticateUser() {
  const userName = document.getElementById("user-visible").value.trim();
  const password = document.getElementById("password-visible").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (userName === "student" && password === "student") {
    localStorage.setItem("role", "student");
    window.location.href = "preferences.html";
  } else if (userName === "seller" && password === "seller") {
    localStorage.setItem("role", "seller");
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Invalid username or password";
    errorMessage.style.display = "block";
  }
}

function setupLoginFormListener() {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    authenticateUser();
  });
}

function setupLogoutListener() {
  const userInfo = document.getElementById("user-info");
  const logoutBtn = document.getElementById("logout-btn");

  if (!userInfo || !logoutBtn) return;

  userInfo.addEventListener("click", () => {
    userInfo.classList.toggle("active");
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("role");
    window.location.href = "index.html";
  });
}

function filterMenuByRole() {
  const userRole = localStorage.getItem("role");
  if (!userRole) return;

  const navItems = document.querySelectorAll("#side-menu li");
  const nav = document.getElementById("side-menu");

  if (!nav || navItems.length === 0) return;

  navItems.forEach((li) => {
    const link = li.querySelector("a");
    const role = link?.dataset.role;

    li.style.display = role === userRole ? "block" : "none";
  });

  nav.classList.remove("hidden"); // Show menu after filtering
}

export function setupLoginForm() {
  setupLoginFormListener();
  setupLogoutListener();
  filterMenuByRole();
}
