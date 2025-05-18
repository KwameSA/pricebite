// --- BUDGET TRACKER BAR ---
function budgetTrackers() {
  const budgetTrackers = document.querySelectorAll(".progress-fill");
  budgetTrackers.forEach((bar) => {
    const percentage = bar.dataset.percent || bar.style.width;
    bar.style.width = typeof percentage === "string" ? percentage : `${percentage}%`;
  });
}

export function setupBudgetTrackers() {
  budgetTrackers();
}
