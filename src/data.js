export const API_KEY = "AIzaSyDYb6U82xLwUd9UzWFa-j4_gL5bjnJbcyc";

export const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000)+ "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k"
  } else {
    return value;
  }
}