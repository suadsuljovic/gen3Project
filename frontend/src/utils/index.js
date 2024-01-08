export const paths = Object.freeze({
  landing: "/",
  article: "/article/:id",
  group: "/group/:id",
});

export const getImageUrl = (url) => {
  return "http://localhost:1337" + url;
};
