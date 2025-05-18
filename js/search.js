// --- DYNAMIC SEARCH (Mock) ---

// --- DYNAMIC SEARCH (School Categories) ---

const categories = ["Electronics", "Books", "Bags", "Clothes"];

function setupDynamicSearch() {
  const searchInputs = document.querySelectorAll("input[placeholder*='Find new products']");

  searchInputs.forEach((input) => {
    // Create a container for search results
    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("search-results");
    input.insertAdjacentElement("afterend", resultsContainer);

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      resultsContainer.innerHTML = ""; // Clear previous results

      if (query.length === 0) {
        resultsContainer.style.display = "none";
        return;
      }

      const matches = categories.filter((cat) => cat.toLowerCase().includes(query));

      if (matches.length === 0) {
        resultsContainer.textContent = "No results found.";
      } else {
        matches.forEach((match) => {
          const div = document.createElement("div");
          div.textContent = match;
          resultsContainer.appendChild(div);
        });
      }
      resultsContainer.style.display = "block";
    });
  });
}

export function setupSearch() {
  setupDynamicSearch();
}
