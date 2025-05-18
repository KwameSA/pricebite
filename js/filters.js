// --- SEARCH FILTER BUTTON ---
function setupApplyButtons() {
  const applyButtons = document.querySelectorAll(".apply-btn");
  applyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Filters applied! Results will update.");
    });
  });
}

// --- PRICE SLIDERS ---
function setupPriceSliders() {
  const priceSliders = document.querySelectorAll('input[type="range"]');
  priceSliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      const minField = slider.closest(".filters-panel, .main-filters")?.querySelector("input[placeholder*='Min']");
      const maxField = slider.closest(".filters-panel, .main-filters")?.querySelector("input[placeholder*='Max']");
      if (maxField) maxField.value = `$${slider.value}`;
    });
  });
}

export function setupFilters() {
  setupApplyButtons();
  setupPriceSliders();
}
