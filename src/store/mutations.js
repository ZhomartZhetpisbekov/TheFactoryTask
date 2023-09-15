export function setRandomImages(state, images) {
  state.randomImages = images || [];
}

export function setImageById(state, image) {
  state.imageById = image || {};
}

export function setSearchResults(state, images) {
  state.searchResults = images || [];
}

export function addToFavorites(state, image) {
  state.favorites.push(image);
  localStorage.setItem("favorites", JSON.stringify(state.favorites));
}

export function removeFromFavorites(state, imageId) {
  const index = state.favorites.findIndex((img) => img.id === imageId);
  if (index !== -1) {
    state.favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }
}
