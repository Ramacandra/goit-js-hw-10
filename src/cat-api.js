import axios from "axios";

const apiKey = "live_77gibYE0M9K2SEMYcHgFnIbXSfa3Iu5dibd5nF3uq0gNGG7rHDoymcdv1ko0izaC";
axios.defaults.headers.common["x-api-key"] = apiKey;

export async function fetchBreeds() {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cat breeds");
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch cat info");
  }
}