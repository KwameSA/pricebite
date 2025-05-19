import { setupLoginForm } from "./auth.js";
import { setupMenu } from "./menu.js";
import { setupBudgetTrackers } from "./budget.js";
import { setupFilters } from "./filters.js";
import { setupToggleAlerts } from "./alerts.js";
import { setupBuyNow } from "./buyNow.js";
import { setupMonitoring } from "./monitoring.js";
import { setupWishlistItems } from "./wishlist.js";
import { setupImages } from "./productImages.js";
import { setupSearch } from "./search.js";
import { setupOptions } from "./selectOptions.js";

function initializeApp() {
  setupMenu();
  setupBudgetTrackers();
  setupToggleAlerts();
  setupFilters();
  setupBuyNow();
  setupMonitoring();
  setupWishlistItems();
  setupImages();
  setupSearch();
  setupOptions();
  setupLoginForm();
}

document.addEventListener("DOMContentLoaded", initializeApp);
