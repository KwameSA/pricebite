// --- TOGGLE ALERTS ---

function toggleAlerts() {
  const toggleInputs = document.querySelectorAll('.toggle input[type="checkbox"]');
  toggleInputs.forEach((toggle) => {
    toggle.addEventListener("change", () => {
      console.log(`Alert for ${toggle.closest(".priority-item")?.querySelector(".category")?.textContent} is now ${toggle.checked}`);
    });
  });
}

export function setupToggleAlerts() {
  toggleAlerts();
}
