export function loadResults(products) {
  renderMainTiles(products);
  renderSuggestions(products);
  setupTileClickHandlers();
}
