export const paths = Object.freeze({
  landing: "/",
  article: "/article/:id",
  group: "/group/:id",
});

export const getImageUrl = (url) => {
  return "http://localhost:1337" + url;
};

export const CategoryIds = Object.freeze({
  popular: 3,
  news: 1,
  nature: 4,
});
