// --- MONITORING BUTTON ---

function setupMonitorButtons() {
  const monitorBtns = document.querySelectorAll(".monitor-btn");
  monitorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("This product will now be monitored for price drops.");
    });
  });
}

export function setupMonitoring() {
  setupMonitorButtons();
}
