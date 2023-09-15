import axiosClient from "../axiosClient";

const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchRandomImages({ commit }) {
  await axiosClient.get(`photos/?client_id=${apiKey}`).then(({ data }) => {
    commit("setRandomImages", data);
  });
}

export async function fetchImageById({ commit }, id) {
  await axiosClient.get(`photos/${id}?client_id=${apiKey}`).then(({ data }) => {
    commit("setImageById", data);
  });
}

export async function fetchSearchResults({ commit }, { page, query }) {
  await axiosClient
    .get(`search/photos?page=${page}&query=${query}&client_id=${apiKey}`)
    .then(({ data }) => {
      commit("setSearchResults", data);
    });
}
