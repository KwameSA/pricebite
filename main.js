// VARIABLE DECLARATION
const courseList = ["Computer Science", "Electrical Engineering", "Business Analytics", "Marketing", "Architecture", "Design", "Cybersecurity", "Data Science", "Information Systems", "Information Technology", "Mechanical Engineering", "Civil Engineering", "Biotechnology", "Artificial Intelligence", "Robotics", "Cloud Computing", "Software Engineering", "Web Development", "Mobile App Development", "Game Development", "Data Analytics", "Network Security", "Database Management", "Human-Computer Interaction", "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Blockchain Technology", "Internet of Things (IoT)", "Augmented Reality (AR)", "Virtual Reality (VR)", "Quantum Computing"];
const categoryList = ["Laptops", "Monitors", "Headphones", "Smartphones", "Keyboards", "Speakers"];
const edLevelList = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate", "Postgraduate"];

// --- Hamburger Menu Toggle ---
const menuIcon = document.querySelector(".menu-icon");
const sideMenu = document.getElementById("side-menu");

if (menuIcon && sideMenu) {
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    sideMenu.classList.remove("hidden"); // <-- ensure visibility
    sideMenu.classList.toggle("show");
  });

  // Optional: click outside to close
  document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
      sideMenu.classList.remove("show");
    }
  });
}
// --- BUDGET TRACKER BAR ---
const budgetTrackers = document.querySelectorAll(".progress-fill");
budgetTrackers.forEach((bar) => {
  const percentage = bar.dataset.percent || bar.style.width;
  bar.style.width = typeof percentage === "string" ? percentage : `${percentage}%`;
});

// --- TOGGLE ALERTS ---
const toggleInputs = document.querySelectorAll('.toggle input[type="checkbox"]');
toggleInputs.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    console.log(`Alert for ${toggle.closest(".priority-item")?.querySelector(".category")?.textContent} is now ${toggle.checked}`);
  });
});

// --- PRICE SLIDERS ---
const priceSliders = document.querySelectorAll('input[type="range"]');
priceSliders.forEach((slider) => {
  slider.addEventListener("input", () => {
    const minField = slider.closest(".filters-panel, .main-filters")?.querySelector("input[placeholder*='Min']");
    const maxField = slider.closest(".filters-panel, .main-filters")?.querySelector("input[placeholder*='Max']");
    if (maxField) maxField.value = `$${slider.value}`;
  });
});

// --- SEARCH FILTER BUTTON ---
const applyButtons = document.querySelectorAll(".apply-btn");
applyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Filters applied! Results will update.");
  });
});

// --- BUY NOW BUTTON ---
const buyNow = document.querySelector(".buy-btn");
if (buyNow) {
  buyNow.addEventListener("click", () => {
    window.open("https://example-retailer.com/product-page", "_blank");
  });
}

// --- MONITORING BUTTON ---
const monitorBtn = document.querySelector(".monitor-btn");
if (monitorBtn) {
  monitorBtn.addEventListener("click", () => {
    alert("This product will now be monitored for price drops.");
  });
}

// --- REMOVE WISHLIST ITEMS ---
const removeIcons = document.querySelectorAll(".wishlist-item .remove");
removeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.closest(".wishlist-item").remove();
  });
});

// --- IMAGE SWITCHING (Product Detail Page) ---
const mainImage = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumbnail-row img");
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const tempSrc = mainImage.src;
    mainImage.src = thumb.src;
    thumb.src = tempSrc;
  });
});

// --- DYNAMIC SEARCH (Mock) ---
const searchInputs = document.querySelectorAll("input[placeholder*='Find new products']");
searchInputs.forEach((input) => {
  input.addEventListener("input", () => {
    // Fake live search logging
    console.log(`Searching: ${input.value}`);
  });
});

if (window.location.pathname.includes("index.html")) {
  const courseSelect = document.getElementById("course");
  if (courseSelect && courseSelect.options.length <= 1) {
    courseList.forEach((course) => {
      const option = document.createElement("option");
      option.textContent = course;
      courseSelect.appendChild(option);
    });
  }
}

if (window.location.pathname.includes("index.html")) {
  const edLevelSelect = document.getElementById("level");
  if (edLevelSelect && edLevelSelect.options.length <= 1) {
    edLevelList.forEach((level) => {
      const option = document.createElement("option");
      option.textContent = level;
      edLevelSelect.appendChild(option);
    });
  }
}
