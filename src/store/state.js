export default {
  randomImages: [],
  imageById: {},
  searchResults: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};
