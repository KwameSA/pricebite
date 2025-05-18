// --- BUY NOW BUTTON ---

function setupBuyNowButton() {
  const buyButtons = document.querySelectorAll(".buy-btn");
  buyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url || "https://example-retailer.com/product-page";
      window.open(url, "_blank");
    });
  });
}

export function setupBuyNow() {
  setupBuyNowButton();
}
