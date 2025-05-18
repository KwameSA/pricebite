// --- REMOVE WISHLIST ITEMS ---

function setupRemoveWishlistItems() {
  const removeIcons = document.querySelectorAll(".wishlist-item .remove");
  removeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.closest(".wishlist-item").remove();
    });
  });
}

export function setupWishlistItems() {
  setupRemoveWishlistItems();
}
